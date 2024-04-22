import { Link } from "react-router-dom"
import { FaLongArrowAltLeft } from 'react-icons/fa';


export const Termsandcondition = () => {
  return (
    <>
     <Link to="/" className="absolute p-5"> {/* Wrap the icon with Link */}
        <FaLongArrowAltLeft />
      </Link>
      <section className=" h-screen lg:flex sd:flex-wrap justify-center gap-8 items-center">
        <div className="flex flex-col items-center ">
          <h3 className="text-4xl font-semibold pb-5">
          Terms & <span className="text-[#846B59]"> Conditions:</span>
          </h3>
          <div>
            <img className=" rounded w-[250px] h-[250px]" src='Terms&Condition.jpg' alt="eatrightimage" />
          </div>
        </div>
        <div className="pt-20 text-sm">
          <p className=" w-[450px] font-medium text-justify sm:p-4">
            By using the Eat Right web application, you
            agree to abide by our terms and conditions. These terms govern your
            use of our services, including accessing personalized meal plans,
            dietary recommendations, and support tools. You agree to provide
            accurate and complete information, to use the service responsibly,
            and to respect the privacy of other users. Eat Right reserves the
            right to modify or terminate services at any time.{" "}
          </p>

        </div>
      </section>
    </>
  );
};

