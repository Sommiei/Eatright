import React from "react";

export const ThirdSection = () => {
  return (
    <>
      <div className="px-10 bg-white">
        <div className="">
          <h1 className="text-center text-5xl font-bold pt-5 text-black">
            What We <span className="text-[#846B59] ">Offer</span>{" "}
          </h1>
        </div>
        <div className="hero min-h-screen pt-10 flex justify-around  items-center">
          <div className="hero-content flex-col lg:flex-row items-center justify-around gap-">
            <img
              src="3rd image bot.png"
              className="max-w-sm rounded-lg shadow-2xl b-8 lg:mb-0"
            />
            <div className="p-10  text-left ">
              <p className="text-[#9CAF88]">Customized Nutrition For You</p>
              <h1 className="lg:text-5xl font-bold sm:text-3xl text-black">Personalized Meal <span className="text-[#846B59]">Plans</span></h1>
              <p className="py-6">
                Eat Right aims to revolutionize healthy eating by providing personalized AI-driven meal<br />recommendations, promoting wellness and sustainability, and empowering users <br />to make informed choices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
