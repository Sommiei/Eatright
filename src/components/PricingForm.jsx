import React from 'react';
import { BsToggleOff } from "react-icons/bs";
import { Payment } from './DashPayment';
import { Link } from 'react-router-dom';

export const PricingForm = () => {
  
  // 1. Define handleChange function
  const handleChange = (e) => {
    // Do something with the event
    console.log("Handling change:", e.target.value);
  };

  // 2. Define payment function
  const payment = () => {
    // Do something when payment button is clicked
    console.log("Payment button clicked");
  };

  return (
    <section className="bg-gray-100 py-12" id="Pricing">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Pricing <span className='text-[#846B59]'>Plans</span></h2>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mb-6">
            <h5 className="text-center font-bold md:text-left mb-2 md:mb-0 mr-4"><span><BsToggleOff /></span>Monthly</h5>
            <span className="text-gray-500 mr-4"><i className="fas fa-toggle-on"></i></span>
            <span className="mr-4 font-bold">Yearly</span>
            <button className="bg-[#b6aba0] text-white px-4 py-2 rounded-full">Save 25%</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-md shadow-md">
              <h2 className="text-sm md:text-sm font-bold mb-2">Free</h2>
              <h4 className="text-3xl md:text-4xl font-bold text-black mb-2">$ 0 / month</h4>
              <h5 className="text-black mb-4">free monthly</h5>
              <ul className="list-disc list-inside mb-6">
                <li>Get meal plans once in a day</li>
                <li>Interact with the chatbot</li>
                <li>Lifetime Updates</li>
              </ul>
              <Link to ='/DashBoard'>
              <button className="bg-[#846B57] hover:bg-gray-500 text-white px-6 py-3 rounded-md w-full">Start Free Trial</button></Link>
              <p className="text-center text-gray-500 mt-2">No credit card required</p>
            </div>
            
            <div className="bg-white p-6 rounded-md shadow-md">
              <h2 className="text-sm md:text-sm font-bold mb-2">Premium</h2>
              <h4 className="text-3xl md:text-4xl font-bold text-black mb-2">$ 19 / month</h4>
              <h5 className="text-black mb-4">Billed monthly</h5>
              <ul className="list-disc list-inside mb-6">
                <li>Unlimited Meal Plan Support</li>
                <li>Have access to the chatbot all the time</li>
                <li>Unlimited Meal Plans For All Types Of Ulcer</li>
                <li>Lifetime Updates</li>
              </ul>
              <Link to = '/Payment'>
              <button className="bg-[#9DAF89] hover:bg-[#99a190] text-white px-6 py-3 rounded-md w-full" onClick={payment}>Start Free Trial</button></Link>
              <p className="text-center text-gray-500 mt-2">No credit card required</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
