import React from "react";
import { FaStar } from "react-icons/fa";

export const Review = () => {
  const reviews = [
    {
      id: 1,
      review:
        "The AI-driven recommendations cater to individual dietary needs, providing a convenient way to manage ulcer-related issues. ",
      email: "johnnwafor@example.com",
      rating: 5,
    },
    {
      id: 2,
      review: "Healthy and delicious options available. Highly recommend!",
      email: "janekenneth@example.com",
      rating: 4,
    },
    {
      id: 3,
      review:
        "EatRight offers a promising solution for ulcer patients seeking personalized meal plans.",
      email: "mikeokoh@example.com",
      rating: 4,
    },
    {
      id: 4,
      review:
        "Quick food support web app, However, the platform could improve by offering more variety in meal options and enhancing user interaction for a more engaging experience.! ",
      email: "sarahogbu@example.com",
      rating: 3,
    },
  ];

  return (
    <div className="bg-gray-100 py-8 px-10">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-black">
          Reviews
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform"
            >
              <p className="text-gray-800 mb-4 text-[13px] ">{review.review}</p>
              <p className="text-gray-600 mb-2 font-semibold text-[13px]">
                Reviewed by: {review.email}
              </p>
              <div className="flex">
                {[...Array(review.rating)].map((_, index) => (
                  <FaStar key={index} color="#ffc107" className="w-4 h-4 " />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

