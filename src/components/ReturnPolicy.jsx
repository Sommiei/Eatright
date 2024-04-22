import { Link } from "react-router-dom"
import { FaLongArrowAltLeft } from 'react-icons/fa';

export const ReturnPolicy = () => {
  return (
    <>
      <Link to="/" className="absolute p-5"> {/* Wrap the icon with Link */}
        <FaLongArrowAltLeft />
      </Link>
      <section className="h-screen px-10 lg:flex sd:flex-wrap justify-center lg:gap-8 sd:gap-0 items-center py-10 lg:py-20">
        <div className="flex flex-col items-center">
          <h3 className="text-4xl font-bold pb-5">
            Return <span className="text-[#846B57]">Policy:</span>
          </h3>
          <div>
            <img className="rounded lg:w-auto sd:w-[200px] h-auto" src='ReturnPolicy.jpg' alt="eatrightimage" />
          </div>
        </div>
        <div className="pt-10 lg:pt-0 sd:pt-5 text-center lg:text-left">
          <p className="lg:w-[450px] text-md font-medium text-justify">
            For subscription payments made through the Eat Right web application,
            refunds are available within 30 days of purchase. If you are not
            satisfied with our services, you may request a refund by contacting
            our customer support team. Refunds will be issued for the remaining
            balance of the subscription period. Please note that refunds are not
            available for partial subscription periods or after 30 days from the
            date of purchase.
          </p>
        </div>
      </section>
    </>
  );
};
