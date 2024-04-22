import React, { useState } from 'react';
import { FiSettings } from 'react-icons/fi';
import axios from 'axios'; // Import axios for making HTTP requests

const SettingsMenu = ({ isOpen, toggleTheme, theme }) => {
  const archiveChats = () => {
    // Logic to archive all chats
  };

  const deleteChats = () => {
    // Logic to delete all chats
  };

  const deleteAccount = async () => {
    try {
      // Send a DELETE request to the server's API endpoint for account deletion
      const response = await axios.delete('https://eac2-105-120-132-174.ngrok-free.app/api/v1/users/delete-user');

      // Check the response status
      if (response.status === 200) {
        // Account deleted successfully
        console.log('Account deleted successfully');
        // Perform any additional actions after account deletion (e.g., redirecting to a different page)
      } else {
        // Handle unexpected response status
        console.error('Unexpected response status:', response.status);
        // Optionally, display an error message to the user
      }
    } catch (error) {
      // Handle error
      console.error('Error deleting account:', error);
      // Optionally, display an error message to the user
    }
  };

  return (
    <div className={`${isOpen ? 'block' : 'hidden'} md:block fixed md:relative right-0 md:right-auto bottom-0 md:bottom-auto z-50 md:z-auto`}>
      <aside className={`settings-menu font-poppins flex items-center rounded-lg font-semibold text-black text-sm bg-white shadow-lg cursor-pointer md:static w-64 md:w-auto`}>
        {isOpen && (
          <ul className="menu-list p-4 md:p-10 flex flex-col justify-around gap-3 ">
            <li onClick={toggleTheme} className="cursor-pointer ">
              {/* {theme === 'light' ? (
                <>
                  <FiToggleRight className='text-[25px]'/> Toggle Theme (Dark)
                </>
              ) : (
                <>
                  <FiToggleLeft className='text-[25px]' /> Toggle Theme (Light)
                </>
              )} */}
            </li>
            <a href='#' onClick={archiveChats} className="cursor-pointer">Archive All Chats</a>
            <a href='#' onClick={deleteChats} className="cursor-pointer">Delete All Chats</a>
            <a href='#' onClick={deleteAccount} className="cursor-pointer text-red-500">Delete Account</a>
          </ul>
        )}
      </aside>
    </div>
  );
};

export const Profile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    avatar: 'https://via.placeholder.com/150', // Placeholder image URL
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUser({ ...user, avatar: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className='max-w-screen-md mx-auto w-full h-full flex flex-col md:flex-row items-center justify-center gap-10 px-4 md:px-0'>
      <div className="bg-white rounded-lg shadow-lg flex flex-col justify-between w-full md:w-auto">
        <div className="p-4 md:p-8 flex justify-center">
          <div className="flex items-center justify-center">
            <img
              className="h-20 w-20 rounded-full mr-4 md:mr-10 ml-4 object-fit" // Added ml-4 for left margin
              src={user.avatar} // Use user's avatar URL
              alt="User Avatar"
            />
            <div>
              <h2 className="text-xl font-bold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
        </div>
        <div className="p-4 md:p-8 flex justify-between items-center">
          <label htmlFor="avatar" className="cursor-pointer">
            <input
              type="file"
              id="avatar"
              className="hidden"
              accept="image/*"
              onChange={handleAvatarChange}
            />
            <span className="text-blue-600">Change Avatar</span>
          </label>
          <FiSettings className="text-gray-600 cursor-pointer" size={24} onClick={toggleMenu} />
        </div>
      </div>
      <SettingsMenu isOpen={isMenuOpen} toggleTheme={toggleTheme} theme={theme} />
    </div>
  );
};
