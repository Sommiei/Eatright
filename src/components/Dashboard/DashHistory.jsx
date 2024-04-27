import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const DashHistory = () => {
  const [searchText, setSearchText] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [filteredChatHistory, setFilteredChatHistory] = useState([]);

  useEffect(() => {
    // Fetch chat history from the API initially
    fetchChatHistory();
  }, []);

  useEffect(() => {
    // Filter chat history based on search text
    const filteredHistory = chatHistory.filter(chat =>
      chat.message.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredChatHistory(filteredHistory);
  }, [searchText, chatHistory]);

  // Function to fetch chat history from the API
  const fetchChatHistory = async () => {
    try {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTQ3Nzc3ODgsInN1YiI6IjcifQ.NR2FqVqPC_8nSMBax96OOwGMZ6IfdxIDsp_GvM_dpLo'; // Define your token here
      const response = await axios.post('http://37.27.42.7:5000/api/v1/users/user_prompt', {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setChatHistory(response.data);
    } catch (error) {
      console.error('Error fetching chat history:', error);
    }
  };

  // Handle input change in the search input
  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="w-full lg:w-72 h-screen bg-white overflow-auto shadow px-5">
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
    </div>
  );
};
