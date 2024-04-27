import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";

export const ReviewUpdate = () => {
  const [newReview, setNewReview] = useState({
    content: '', // Changed from 'string' to empty string
    rating: 0,
  });

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

  const handleSubmit = async () => {
    try {
      // Send review data to the server
      const response = await axios.post("http://37.27.42.7:5000/api/v1/users/reviews", newReview); // Send newReview as request body
      console.log("Review submitted successfully:", response.data);
      // Optionally, you can redirect the user or show a success message
    } 
    finally{
      // Handle error, show error message to the user
    }
  };

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center text-black">
          You can drop your Review here!
        </h2>
        <div className="flex flex-cols-1 sm:flex-cols-2 lg:flex-cols-4 gap-4 justify-center items-center pt-10">
          <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform">
            <textarea
              name="content" // Changed from 'review' to 'content'
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
          </div>
        </div>
      </div>
    </div>
  );
};
