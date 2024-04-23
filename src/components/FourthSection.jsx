
export const FourthSection = () => {
  return (
    <>
      <div className="px-10 bg-white">
        <div className="hero pb-10 flex justify-around items-center">
          <div className="hero-content flex-col lg:flex-row-reverse lg:items-center gap-20">
            <img
              src="4th eatright image.png"
              className="w-full max-w-sm rounded-lg shadow-2xl mb-8 lg:mb-0"
              alt="EatRight"
            />
            <div className="w-full lg: text-left ">
              <p className="text-[#9CAF88]">Explore Seasonal Eating</p>
              <h1 className="lg:text-5xl font-bold sm:text-3xl text-black">Accessibility To Seasonal <span className='text-[#846B59]'><br />Foods</span> </h1>
              <p className="py-6">
                Eat Right aims to revolutionize healthy eating by providing personalized AI-driven <br />meal recommendations, promoting wellness and sustainability, and empowering <br /> users to make informed choices.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
