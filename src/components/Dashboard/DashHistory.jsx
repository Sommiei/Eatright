import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BiMenuAltLeft, BiMenuAltRight } from 'react-icons/bi';

export const DashHistory = ({ chatHistory }) => {
  const [searchText, setSearchText] = useState('');
  const [filteredChatHistory, setFilteredChatHistory] = useState([]);
  const [isHistoryVisible, setIsHistoryVisible] = useState(true); // State for visibility of chat history

  useEffect(() => {
    // Filter chat history based on search text
    if (Array.isArray(chatHistory)) {
      const filteredHistory = chatHistory.filter(chat =>
        chat.message.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredChatHistory(filteredHistory);
    }
  }, [searchText, chatHistory]);

  // Function to fetch chat history from the API based on search text
  const fetchChatHistory = async () => {
    try {
      const response = await axios.get(`API_ENDPOINT?search=${searchText}`);
      // Update filtered chat history with API response
      setFilteredChatHistory(response.data);
    } catch (error) {
      console.error('Error fetching chat history:', error);
    }
  };

  // Handle input change in the search input
  const handleInputChange = (e) => {
    setSearchText(e.target.value);
    // Call API to fetch chat history based on search text
    fetchChatHistory();
  };

  return (
    <div className="w-full lg:w-9/12 bg-white min-h-screen overflow-auto shadow px-5">
      {/* Toggle Icon */}
      <div className="flex justify-end p-1">
        <button onClick={() => setIsHistoryVisible(!isHistoryVisible)}>
          {isHistoryVisible ? <BiMenuAltLeft /> : <BiMenuAltRight />}
        </button>
      </div>
      
      {/* Chat History Component */}
      {isHistoryVisible && (
        <div className="p-4">
          <input
            type="text"
            value={searchText}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
            placeholder="Search chat history..."
          />
          <div>
            <h3 className="text-lg font-bold mb-2">Past Chat History</h3>
            <ul>
              {filteredChatHistory.map((chat, index) => (
                <li key={index}>{chat.message}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
