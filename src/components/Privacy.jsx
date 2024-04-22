import { Link } from "react-router-dom"
import { FaLongArrowAltLeft } from 'react-icons/fa';


export const Privacy = () => {
  return (
    <>
    <Link to="/" className="absolute p-5"> {/* Wrap the icon with Link */}
        <FaLongArrowAltLeft />
      </Link>
      <section className="h-screen px-10 lg:flex sd:flex-wrap justify-center lg:gap-8 sd:gap-0 items-center">
        <div className="flex flex-col items-center">
          <h3 className="text-4xl font-bold pb-5">
          Privacy <span className="text-[#846B57]">Statement:</span>
          </h3>
          <div>
            <img className="rounded lg:w-auto sd:w-[200px] h-auto" src='PrivacyEatright.jpg' alt="eatrightimage" />
          </div>
        </div>
        <div className="lg:pt-0 sd:pt-5 text-center lg:text-left">
          <p className="lg:w-[450px] text-md font-medium text-justify">
            At Eat Right, we are committed to protecting your
            privacy and ensuring the security of your personal information. We
            collect and store only the information necessary to provide you with
            personalized meal plans and support services. Your data is securely
            stored and never shared with third parties without your consent. We
            adhere to strict privacy standards and comply with all applicable
            data protection laws.
          </p>
         
        </div>
      </section>
    </>
  );
};
