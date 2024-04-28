import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";

export const ReviewUpdate = () => {
  const [newReview, setNewReview] = useState({
    content: "",
    rating: 0,
  });
  const [successMessage, setSuccessMessage] = useState(null); // State to manage success message

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };

  const handleRatingClick = (value) => {
    setNewReview((prevReview) => ({
      ...prevReview,
      rating: value,
    }));
  };
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1");

  
    
      // Make a POST request to the backend endpoint for resetting password
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1");
          console.log(token);
      
          const response = await axios.post(
            "https://api.eatright.com.ng/api/v1/users/reviews",
            newReview,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );
          console.log("Review submitted successfully:", response.data);
          setSuccessMessage("Review successfully sent"); // Update success message state
          setNewReview({ // Reset the input fields after successful submission
            content: "",
            rating: 0,
          });
          setTimeout(() => {
            setSuccessMessage(null); // Clear success message after 3 seconds
          }, 3000);
        } catch (error) {
          console.error("Error submitting review:", error);
        }
      };
    

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <h2 className="text-2xl font-bold mb-8 text-center text-black">
          You can drop your Review here!
        </h2>
        <div className="flex flex-cols-1 sm:flex-cols-2 lg:flex-cols-4 gap-4 justify-center items-center pt-10">
          <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform">
            <textarea
              name="content"
              value={newReview.content}
              onChange={handleInputChange}
              className="w-full h-24 px-4 py-2 border rounded-md resize-none mb-4 text-sm"
              placeholder="Write your review..."
            ></textarea>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((value) => (
                <FaStar
                  key={value}
                  color={value <= newReview.rating ? "#ffc107" : "#e4e5e9"}
                  className="w-4 h-4 cursor-pointer"
                  onClick={() => handleRatingClick(value)}
                />
              ))}
            </div>
            <button
              onClick={handleSubmit}
              className="bg-[#846b57] hover:bg-[#b6987f] hover:text-black hover:font-semi-bold text-white font-semibold py-2 px-4 rounded mt-4"
            >
              Submit Review
            </button>
            {successMessage && (
              <p className="text-green-500 mt-2">{successMessage}</p> // Display success message if available
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
