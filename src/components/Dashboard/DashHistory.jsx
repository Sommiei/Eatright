import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../Contexts/AuthContext';

export const DashHistory = () => {
  const [searchText, setSearchText] = useState('');
  const { filteredChatHistory, setFilteredChatHistory, chatHistory } = useContext(AuthContext);

  useEffect(() => {
    if (!searchText) return setFilteredChatHistory([]);

    // Filter chat history based on search text
    const filteredHistory = chatHistory
      .filter(chat => chat.message.toLowerCase().includes(searchText.toLowerCase()))
      .map(chat => {
        // Highlight the search text in each chat message
        const highlightedMessage = chat?.message?.replace(
          new RegExp(searchText, 'gi'),
          match => `<span class="text-blue-500">${match}</span>`
        );
        return { ...chat, highlightedMessage };
      });

    // Sort filtered history based on relevance of search text
    const sortedHistory = filteredHistory.sort((a, b) => {
      const indexA = a.message.toLowerCase().indexOf(searchText.toLowerCase());
      const indexB = b.message.toLowerCase().indexOf(searchText.toLowerCase());
      // If search text is not found in one of the messages, bring the other one to the top
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    });

    setFilteredChatHistory(sortedHistory);
  }, [searchText]);

  // Handle input change in the search input
  const handleInputChange = e => {
    setSearchText(e.target.value);
  };

  return (
    <div className=" lg:w-72 sm:block hidden  sm:h-auto bg-white overflow-auto px-5">
      <div className="p-4 scroll-m-10">
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
              <li key={index} dangerouslySetInnerHTML={{ __html: chat.highlightedMessage }} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
