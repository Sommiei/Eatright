import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate();
  const [isloggedout, setLoggedout] = useState(true);

  const handleYesClick = () => {
    // Calculate the expiration date
    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() - 1);
    
    // Delete the token cookie
    document.cookie = `token=; expires=${expirationDate.toUTCString()}; path=/;`;

    // Redirect to the home page
    setLoggedout(false);
    navigate("/");
  };

  const handleNoClick = () => {
    setLoggedout(false);
    console.log("User chose not to log out");
  };

  return (
    <>
      {isloggedout && (
        <div className="flex flex-col justify-center items-center h-screen">
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