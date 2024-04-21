import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiXCircle } from 'react-icons/fi'; // Import the stop icon

export const DashChatSide = () => {
  const [chatHistory, setChatHistory] = useState([]); // Initialize chatHistory as an empty array
  const [chatInput, setChatInput] = useState('');

  useEffect(() => {
    // Fetching chat history is removed as we don't have dummyChatHistory anymore
  }, []);

  const sendMessage = async () => {
    if (!chatInput.trim()) return;

    // Save the user's typed message locally in the component state
    const userMessage = {
      user: true, // Indicate that the user sent this message
      message: chatInput,
    };

    // Update the chat history with the user's message
    setChatHistory(prevChatHistory => [...prevChatHistory, userMessage]);

    try {
      // Make an API call to generate bot response
      const response = await axios.post('https://20be-105-113-33-128.ngrok-free.app/api/v1/users/user_prompt', {
        text: chatInput,
      });

      // Extract the bot's response from the API response
      const botMessage = {
        user: false, // Indicate that the bot sent this message
        message: response.data.message,
      };

      // Update the chat history with the bot's response
      setChatHistory(prevChatHistory => [...prevChatHistory, botMessage]);
    } catch (error) {
      console.error('Error fetching bot response:', error);
    }

    // Reset input after sending message
    setChatInput('');
  };

  const handleStopInput = () => {
    // Clear the input field when the stop button is clicked
    setChatInput('');
  };

  return (
    <div className="p-7 text-md font-bold w-full flex flex-col h-screen">
      <div id="chat-history" className="overflow-auto flex-1">
        {Array.isArray(chatHistory) && chatHistory.length > 0 ? (
          chatHistory.map((chat, index) => (
            <div
              key={index}
              className={`flex ${chat.user ? 'justify-end' : 'justify-start'} mb-2`}
            >
              <div
                className={`max-w-[80%] ${chat.user ? 'bg-[#846B59] text-white shadow-lg rounded-br-none rounded-lg' : 'bg-white text-black shadow-lg rounded-bl-none rounded-lg'} p-2`}
                style={{ wordWrap: 'break-word' }} // Apply word-wrap style
              >
                {chat.message}
              </div>
            </div>
          ))
        ) : (
          <div className="text-gray-400">No chat history available</div>
        )}
      </div>
      <div className="flex items-center mt-4">
        <input
          type="text"
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          className="flex-1 border border-gray-300 rounded-md px-4 py-2 mr-2 text-sm"
          placeholder="Type your message..."
        />
        {/* Include the stop icon button */}
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
