import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { FiXCircle } from 'react-icons/fi';
import { AuthContext } from '../../Contexts/AuthContext';

// Function to remove asterisks from text
// const removeAsterisks = (text) => {
//   return text.replace(/\*/g, ''); // Using regular expression to replace all occurrences of asterisks
// };
const removeAsterisks = (text) => {
  if (text !== undefined && text !== null) {
    return text.toString().replace(/\*/g, ''); // Using regular expression to replace all occurrences of asterisks
  } else {
    return ''; // Return an empty string if text is undefined or null
  }
};

export const ChatHistory = ({ chatHistory }) => {
  // Function to format string response
  const formatStringResponse = (stringResponse) => {
    const lines = stringResponse.split('\n').map((line, index) => <p key={index}>{line}</p>);
    return lines;
  };

  return (
    <div id="chat-history" className="overflow-auto flex-1">
      {Array.isArray(chatHistory) && chatHistory.length > 0 ? (
        chatHistory.map((chat, index) => (
          <div
            key={index}
            className={`flex ${chat.user ? 'justify-end' : 'justify-start'} mb-2`}
          >
            <div
              className={`max-w-[60%] sm:max-w-[80%] ${chat.user ? 'bg-[#846B59] text-white shadow-lg rounded-br-none rounded-lg' : 'bg-white text-black shadow-lg rounded-bl-none rounded-lg'} p-2`}
              style={{ wordWrap: 'break-word' }}
            >
              {/* Apply removeAsterisks function to chat message */}
              {formatStringResponse(removeAsterisks(chat.message))}
            </div>
          </div>
        ))
      ) : (
        <div className="text-gray-400">No chat history available</div>
      )}
    </div>
  );
};

export const DashChatSide = () => {
  const [chatInput, setChatInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const { chatHistory, setChatHistory } = useContext(AuthContext); // Use context to access chat history
  
  // Counter to track the number of messages sent by the user
  const [chatCount, setChatCount] = useState(0);

  // Function to send message
  const sendMessage = async () => {
    if (!chatInput.trim() || isSending) return;

    setIsSending(true);

    try {
      const token = getTokenFromCookie(); // Retrieve token from cookies
      if (!token) {
        console.error('Token not found');
        setIsSending(false);
        return;
      }

      // Add the user's input to the chat history
      const userMessage = {
        user: true,
        message: chatInput,
      };
      setChatHistory(prevChatHistory => [...prevChatHistory, userMessage]);

      // Increment chat count
      setChatCount(prevCount => prevCount + 1);

      // Check if the chat count has reached 5
      if (chatCount === 4) {
        // Redirect to payment page
        window.location.href = '/payment';
        return;
      }

      // Send the user's input to the server
      const response = await axios.post(
        'https://api.eatright.com.ng/api/v1/users/user_prompt',
        { "text": chatInput },
        {
          "headers": {
            "Authorization": `Bearer ${token}`,
            "Content-Type": 'application/json', // Set content type as JSON
          },
        }
      );

      // Add the bot's response to the chat history
      const botMessage = {
        user: false,
        message: response.data.message,
      };
      setChatHistory(prevChatHistory => [...prevChatHistory, botMessage]);

      setChatInput('');
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSending(false);
    }
  };

  // Function to clear input field
  const handleStopInput = () => {
    setChatInput('');
  };

  // Function to retrieve token from cookies
  const getTokenFromCookie = () => {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith('token=')) {
        return cookie.substring(6);
      }
    }
    console.error('Token not found');
    return null;
  };

  return (
    <div className=" container p-7 pl-7 pr-7 pb-14 h-screen text-md border-l sm:border-r sm:border-l  font-bold sm:w-full  max-w-full flex flex-col ">
      <ChatHistory chatHistory={chatHistory} />
      <div className="flex items-center ">
        <input
          type="text"
          value={chatInput}
          onChange={e => setChatInput(e.target.value)}
          onKeyPress={e => e.key === 'Enter' && sendMessage()}
          className="flex-1 border border-gray-300 rounded-md px-4 py-2 mr-2 text-sm"
          placeholder="Type your message..."
          disabled={isSending}
        />
        {chatInput && (
          <button onClick={handleStopInput} className="text-gray-400 hover:text-gray-600">
            <FiXCircle />
          </button>
        )}
        <button onClick={sendMessage} className={`bg-[#846B59] hover:bg-[#bda493] text-white font-bold py-2 px-2
         rounded ${isSending ? 'opacity-50 cursor-not-allowed sm:py-2 px-4' : ''}`} disabled={isSending}>
          {isSending ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
};
