import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { HashLink as Link } from 'react-router-hash-link';


export const Hero = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleTryForFreeClick = () => {
    // Navigate to the dashboard page when "Try for free" button is clicked
    navigate ('/SignUp');
  };

  return (
    <section className="eat-right_hero container mx-auto flex flex-col md:flex-row items-center px-10">
      {/* Text area */}
      <div className="eat-right_hero-text max-w-md md:max-w-lg md:pr-10 pt-5 md:pt-0 text-black"> {/* Adjust padding */}
        <h1 className="text-5xl md:text-4xl font-bold leading-tight mb-4 font-poppins ">
          Discover a <span className="text-[#846B57]">World</span> of Fresh, Nutritious Delights!
        </h1>
        <p className="text-md md:text-xl mb-6 font-poppins text-black">
          Let our AI Chatbot guide you through a personalized journey to healthier choices.
        </p>
        <div className="cta flex gap-4">
          <button className="btn bg-[#9DAF88] text-white hover:text-[#9DAF88] px-6 py-2 rounded-md" onClick={handleTryForFreeClick}>
            Try for free
          </button>
          <Link smooth to="" className="btn btn-outline border-[#9DAF88] text-[#9DAF88] px-6 py-2 rounded-md">Show a Demo</Link>
        </div>
      </div>

      {/* Image area */}
      <div className="eat-right_hero-image  md:ml-auto mb-8 md:mb-0 ">
        <img src="hero-react.png" alt="" className="w-300px md: h-auto rounded-full pt-5" />
      </div>
    </section>
  );
};
