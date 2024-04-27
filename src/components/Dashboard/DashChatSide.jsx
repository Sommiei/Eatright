import { useState, useEffect } from 'react';
import axios from 'axios';
import { FiXCircle } from 'react-icons/fi';



function formatStringResponse(stringResponse) {
  // Split the string by newlines and map each line to a <p> element
  const lines = stringResponse.split('\n').map((line, index) => <p key={index}>{line}</p>);
  
  // Return the array of <p> elements
  return lines;
}



// ChatHistory component to display chat messages
export const ChatHistory = ({ chatHistory }) => (
  <div id="chat-history" className="overflow-auto flex-1">
    {Array.isArray(chatHistory) && chatHistory.length > 0 ? (
      chatHistory.map((chat, index) => (
        <div
          key={index}
          className={`flex ${chat.user ? 'justify-end' : 'justify-start'} mb-2`}
        >
          <div
            className={`max-w-[80%] ${chat.user ? 'bg-[#846B59] text-white shadow-lg rounded-br-none rounded-lg' : 'bg-white text-black shadow-lg rounded-bl-none rounded-lg'} p-2`}
            style={{ wordWrap: 'break-word' }}
          >
            {/* {chat.message} */}
            {formatStringResponse(chat.message)}
          </div>
        </div>
      ))
    ) : (
      <div className="text-gray-400">No chat history available</div>
    )}
  </div>
);

// DashChatSide component to handle chat functionality
export const DashChatSide = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [chatCount, setChatCount] = useState(0);

  useEffect(() => {
    if (chatCount === 5) {
      window.location.href = '/payment'; // Redirect when chatCount reaches 5
    }
  }, [chatCount]); // Trigger effect whenever chatCount changes

  
  const sendMessage = async () => {
    if (!chatInput.trim()) return;
  
    const userMessage = {
      user: true,
      message: chatInput,
    };
    setChatHistory(prevChatHistory => [...prevChatHistory, userMessage]);
  
    try {
      const token = getTokenFromCookie(); // Retrieve token from cookies
      if (!token) {
        console.error('Token not found');
        return;
      }
  
      const response = await axios.post(
        'http://37.27.42.7:5000/api/v1/users/user_prompt',
        {"text": chatInput },
        {
          "headers": {
            "Authorization": `Bearer ${token}`,
            "Content-Type": 'application/json', // Set content type as JSON
          },
        }
      );
  
      const botMessage = {
        user: false,
        message: response.data.message,
      };
      setChatHistory(prevChatHistory => [...prevChatHistory, botMessage]);
      setChatInput('');
      setChatCount(prevCount => prevCount + 1); // Increment chat count
    } catch (error) {
      console.error('Error fetching bot response:', error);
      if (error.response && error.response.status === 401) {
        console.error('Authentication error: Token invalid or expired');
        // Handle authentication error, e.g., redirect user to login page
      }
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
        console.log(cookie.substring(6))
        return cookie.substring(6);

      }
    }
    console.error('Token not found');
    return null;
  };

  return (
    <div className="p-7 pl-7 pr-7 pb-7 pt-10 text-md font-bold w-full flex flex-col h-screen">
      <ChatHistory chatHistory={chatHistory} />
      <div className="flex items-center mt-4">
        <input
          type="text"
          value={chatInput}
          onChange={e => setChatInput(e.target.value)}
          onKeyPress={e => e.key === 'Enter' && sendMessage()}
          className="flex-1 border border-gray-300 rounded-md px-4 py-2 mr-2 text-sm"
          placeholder="Type your message..."
        />
        {chatInput && (
          <button onClick={handleStopInput} className="text-gray-400 hover:text-gray-600">
            <FiXCircle />
          </button>
        )}
        <button onClick={sendMessage} className="bg-[#846B59] hover:bg-[#bda493] text-white font-bold py-2 px-4 rounded">
          Send
        </button>
      </div>
    </div>
  );
};
