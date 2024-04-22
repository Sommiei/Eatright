import  { useState } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";

export const ReviewUpdate = () => {
  const [newReview, setNewReview] = useState({
    review: "",
    email: "", // You can add logic to get the user's email if needed
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
      const response = await axios.post("/api/reviews", newReview);
      console.log("Review submitted successfully:", response.data);
      // Optionally, you can redirect the user or show a success message
    } catch (error) {
      console.error("Error submitting review:", error);
      // Handle error, show error message to the user
    }
  };

  return (
    <div className=" py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center text-black">
          You can drop your Review here!
        </h2>
        <div className="flex flex-cols-1 sm:flex-cols-2 lg:flex-cols-4 gap-4  justify-center items-center pt-10">
          <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform">
            <textarea
              name="review"
              value={newReview.review}
              onChange={handleInputChange}
              className="w-full h-24 px-4 py-2 border rounded-md resize-none mb-4 text-sm"
              placeholder="Write your review..."
            ></textarea>
            <input
              type="email"
              name="email"
              value={newReview.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md mb-4 text-sm"
              placeholder="Your email"
            />
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
