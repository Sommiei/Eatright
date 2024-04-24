export const SecondSection = () => {
  return (
    <>
      <div className="hero min-h-screen bg-white px-10">
        <div className="hero-content flex-col lg:flex-row flex gap-8 lg:gap-52 shadow-lg rounded-lg">
          {/* Adjusted image position for md */}
          <div className="relative w-full lg:w-[400px] pt-44 lg:pt-0 sm:pb-48 mt-40 flex justify-center md:justify-start"> 
            <img
              src="image export.png"
              className="max-w-sm rounded-lg shadow-2xl absolute bottom-1"
              alt="Image"
            />
          </div>
          <div className="w-full lg:w-[400px]">
            <h1 className="text-5xl font-bold text-black">Our <span className="text-[#846B59]">Mission</span></h1>
            <p className="py-6 text-sm font-bold capitalize">
              Eat Right aims to revolutionize healthy eating by providing personalized AI-driven meal recommendations, promoting wellness and sustainability, and empowering users to make informed choices.
            </p>
            <div className="flex flex-col items-start gap-2"> {/* Apply items-start class and reduce gap */}
              <FeatureItem text="Meal options tailored to a variety of dietary needs." />
              <FeatureItem text="Consistent with lifestyle goals." />
              <FeatureItem text="Encourages healthy living habits." />
              <FeatureItem text="With each recommendation, we are redefining healthy eating." />
              <FeatureItem text="Offers solutions that are accessible, convenient, and delicious" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const FeatureItem = ({ text }) => {
  return (
    <div className="py-0"> {/* Reduce padding */}
      <div className="flex items-center gap-3">
        <img src="mark-up.png" alt="Mark" />
        <span className="text-sm font-bold">{text}</span>
      </div>
    </div>
  );
};
