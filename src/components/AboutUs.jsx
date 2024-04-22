import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from React Router

export const AboutUs = () => {
  return (
    <>
      <Link to="/" className="absolute p-5"> {/* Wrap the icon with Link */}
        <FaLongArrowAltLeft />
      </Link>
      <section className="h-screen px-10  flex justify-center items-center flex-wrap">
        <div className="flex flex-col justify-center items-center md:w-1/2">
          <h3 className="text-4xl font-bold mb-4">
            ABOUT <span className="text-[#846B57]">US</span>
          </h3>
          <img
            className="mx-2 p-6 w-[280px] h-[280px] rounded"
            src="hero-react.png"
            alt="eatrightimage"
          />
        </div>
        <div className="w-full md:w-1/2 p-2">
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold pb-2">
            We Provide the Best Health Care Service at an Affordable Price
          </h1>
          <p className="text-md md:text-lg">
            "EatRight is dedicated to providing personalized nutrition solutions
            for ulcer patients. Our AI-driven meal planning tool creates
            customized meal plans tailored to individual dietary needs,
            empowering users to make informed choices and improve their quality
            of life. With expert guidance and a commitment to convenience and
            accessibility, EatRight aims to redefine the way people approach
            nutrition and support them on their journey to wellness."
          </p>
        </div>
      </section>
    </>
  );
};
