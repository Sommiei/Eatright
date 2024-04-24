import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const Logout = () => {
  const navigate = useNavigate();
  const [isLoggedOut, setIsLoggedOut] = useState(true);

  const handleYesClick = async () => {
    try {
      // Get token from cookies
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1");
      
      // Add Authorization header
      const headers = {
        Authorization: `Bearer ${token}`
      };

      // Make API request to logout endpoint with the Authorization header
      await axios.post('http://37.27.42.7:5000/api/v1/users/logout', {}, { headers });
      
      // Remove token from cookies
      document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

      // Redirect to the home page
      setIsLoggedOut(false);
      navigate("/");
    } catch (error) {
      console.error('Error logging out:', error);
      // Handle error here
    }
  };

  const handleNoClick = () => {
    setIsLoggedOut(false);
    console.log("User chose not to log out");
  };

  return (
    <>
      {isLoggedOut && (
        <div className="flex flex-col justify-center items-center h-screen transform hover:scale-105 transition-transform">
          <div className="shadow-xl w-full max-w-md p-6 bg-white rounded-lg">
            <h1 className="text-red-500 font-semibold text-center mb-4">
              Logout Alert
            </h1>
            <h2 className="text-black text-center mb-6">
              Are you sure you want to log out?
            </h2>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleNoClick}
                className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
              >
                No
              </button>
              <button
                onClick={handleYesClick}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
