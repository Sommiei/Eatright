import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';


export const Navbar = () => {
  // State to track the user's authentication status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // State to track the visibility of the menu
  const [showMenu, setShowMenu] = useState(false);

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout actions such as clearing user data from local storage
    // You can customize this part based on your authentication implementation
    setIsLoggedIn(false);
  };

  // Function to toggle the menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      {/* Navbar for small and medium screens */}
      <header className="bg-white p-4 flex justify-between items-center px-10 shadow-md sticky top-0 z-10 md:hidden">
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <a href="/">
            <img src="Eatright-logo.png" alt="Logo" className="h-[50px]" />
          </a>
        </div>
        <div className="flex items-center space-x-8">
          {/* Toggle button for the menu */}
          <button className="block md:hidden" onClick={toggleMenu}>
            {showMenu ? 'X' : ''}
            {/* Three lines icon for the toggle button */}
            {!showMenu && <span className="block w-6 h-px bg-gray-800 my-1"></span>}
            {!showMenu && <span className="block w-6 h-px bg-gray-800 my-1"></span>}
            {!showMenu && <span className="block w-6 h-px bg-gray-800 my-1"></span>}
          </button>
          {/* Conditionally render Logout button if user is logged in */}
          {isLoggedIn && (
            <div className='flex items-center justify-center text-[#9DAF89] font-bold text-center' onClick={handleLogout}>
              <span>Logout</span>
            </div>
          )}
        </div>
      </header>

      {/* Navbar for large screens */}
      <header className="bg-white p-4 flex justify-between items-center px-10 shadow-md sticky top-0 z-10 hidden md:flex">
        <nav className="flex justify-center items-center space-x-8 font-bold sticky top-0 z-10">
          <a href="/">
            <img src="Eatright-logo.png" alt="Logo" className="h-[50px]" />
          </a>
          <Link to="/AboutUs" className="text-gray-800 hover:text-gray-600">About Us</Link>
          <Link smooth to="/#pricing" className="text-gray-800 hover:text-gray-600">Pricing</Link>
          <Link smooth to="/#contact" className="text-gray-800 hover:text-gray-600">Contact</Link>
        </nav>
        <div className="flex space-x-4 text-center items-center">
          {/* Conditionally render Logout button if user is logged in */}
          {isLoggedIn ? (
            <div className='flex items-center justify-center text-[#9DAF89] font-bold text-center' onClick={handleLogout}>
              <span>Logout</span>
            </div>
          ) : (
            <>
              {/* Render login and sign up buttons if user is not logged in */}
              <a href="/SignIn" className="items-center hover:text-gray-600 text-[#846B59] font-bold hidden md:block">Log In</a>
              <div className='flex items-center justify-center bg-[#9DAF89] w-[100px] text-white rounded h-[50px] font-bold text-center'>
                <a href='/SignUp'>Sign Up</a>
              </div>
            </>
          )}
        </div>
      </header>

      {/* Menu items for small and medium screens */}
      {showMenu && (
        <div className="bg-white shadow-md p-4 mt-2 md:hidden">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-gray-800 hover:text-gray-600 text-lg px-4 py-2 rounded-full shadow-md">About Us</a>
            <a href="#" className="text-gray-800 hover:text-gray-600 text-lg px-4 py-2 rounded-full shadow-md">Pricing</a>
            <a href="/ContactForm" className="text-gray-800 hover:text-gray-600 text-lg px-4 py-2 rounded-full shadow-md">Contact</a>
            {/* Render login and sign up buttons */}
            {!isLoggedIn && (
              <div className='flex items-center text-[#9DAF89] font-bold'>
                <a href='/SignIn' className="text-lg px-4 py-2 rounded-full shadow-md w-[100]">Log In</a>
              </div>
            )}
            {!isLoggedIn && (
              <a href='/SignUp' className="items-center hover:text-gray-600 text-[#846B59] font-bold text-lg px-4 py-2 rounded-full shadow-md">Sign Up</a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
