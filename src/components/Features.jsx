
export const Features = () => {
  return (
    <section className="bg-gray-200 py-4 rounded px-10 text-black"id='features'>
      <div className="container mx-auto flex flex-col md:flex-row max-w-[1024px] items-center">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-10">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-black">
            Some Of <span className="text-[#846B57]">Our</span> Features
          </h2>
          <div className="text-gray-700">
            <ul className="max-w-md">
              <li className="mb-6">
                <h4 className="text-xl font-bold mb-2">Personalized Meal Planning</h4>
                <p className="text-lg">Our AI chat tool creates personalized meal plans based on dietary preferences, limits, and ulcer-related issues. 🍽️</p>
              </li>
              <li className="mb-6">
                <h4 className="text-xl font-bold mb-2">AI-Powered suggestions</h4>
                <p className="text-lg">Our AI analyzes dietary data, medical guidelines, and user feedback to create personalized meal plans for ulcer patients. 🍽️</p>
              </li>
              <li className="mb-6">
                <h4 className="text-xl font-bold mb-2">Accessibility and Convenience</h4>
                <p className="text-lg">Our web app offers convenient access to meal planning tools and guidance anytime, from any device with internet access. 🌐🍽️</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img src="5th image eatright.png" alt="EatRight" className="w-full" />
        </div>
      </div>
    </section>
  );
};
