import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiXCircle } from 'react-icons/fi'; // Import the stop icon

export const DashChatSide = () => {
  const [chatHistory, setChatHistory] = useState([]); // Initialize chatHistory as an empty array
  const [chatInput, setChatInput] = useState('');

  useEffect(() => {
    const fetchChatHistory = async () => {
      try {
        // For demonstration purposes, since you don't have an actual API
        const dummyChatHistory = [
          { user: false, message: "Hi there! How can I help you today?" },
        ];
        setChatHistory(dummyChatHistory);
      } catch (error) {
        console.error('Error fetching chat history:', error);
      }
    };
    fetchChatHistory();
  }, []);

  const sendMessage = () => {
    if (!chatInput.trim()) return;

    // Save the user's typed message locally in the component state
    const userMessage = {
      user: true, // Indicate that the user sent this message
      message: chatInput,
    };

    // For demonstration purposes, simulate a bot response
    const botResponse = {
      user: false, // Indicate that the bot sent this message
      message: "I'm sorry, I'm just a demo bot. I can't process your message right now.",
    };

    // Update the chat history with both the user's message and the bot's response
    setChatHistory(prevChatHistory => [...prevChatHistory, userMessage, botResponse]);

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
                className={`max-w-[80%] ${chat.user ? 'bg-[#9CAF88] text-white rounded-br-none rounded-lg' : 'bg-[#846B59] text-white rounded-bl-none rounded-lg'} p-2`}
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
