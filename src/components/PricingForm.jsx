import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

export const PricingForm = () => {
  return (
    <>
      <div className="" id="pricing">
      <h1 className="text-center font-semibold text-3xl py-6">Pricing <span className="text-[#9DAF89]">Plans</span></h1>
    <div className="flex items-center justify-center gap-6 py-2 flex-wrap">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          Free plan
        </h5>
        <div className="flex items-baseline text-gray-900 dark:text-white">
          <span className="text-2xl font-medium">NGN</span>
          <span className="text-4xl font-semibold tracking-tight">0</span>
          <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
            /Yearly
          </span>
        </div>
        <ul role="list" className="space-y-5 my-7">
          <li className="flex items-center">
            <svg
              className="flex-shrink-0 w-4 h-4 text-gray-500 dark:text-gray-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
            Get meal plans once in a day
            </span>
          </li>
          <li className="flex">
            <svg
              className="flex-shrink-0 w-4 h-4 text-gray-500 dark:text-gray-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
            Limited Interaction with the chatbot
            </span>
          </li>
          <li className="flex">
            <svg
              className="flex-shrink-0 w-4 h-4 text-gray-500 dark:text-gray-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
            Lifetime Updates
            </span>
          </li>
              
          <li className="flex decoration-gray-500">
            <svg
              className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 ms-3">
              24/7 phone & email support
            </span>
          </li>
        </ul>
        <Link
          to="/dashboard"
          type="button"
          className="text-white shadow-xl bg-[#white] hover:bg-bg-color2 focus:ring-4 focus:outline-none hover:text-white focus:ring-gray-300 dark:bg-[#9DAF89]] dark:hover:bg-[#9DAF89] dark:focus:ring-[#9DAF89] font-medium rounded-lg text-sm px-12 py-3 flex justify-center items-center gap-8 text-center"
        >
          Start Free Trial
          <BsArrowRightShort />
        </Link>
      </div>

      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          Premium Plan
        </h5>
        <div className="flex items-baseline text-gray-900 dark:text-white">
          <span className="text-2xl font-medium">NGN</span>
          <span className="text-4xl font-semibold tracking-tight">10, 000</span>
          <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
            /Yearly
          </span>
        </div>
        <ul role="list" className="space-y-5 my-7">
          <li className="flex items-center">
            <svg
              className="flex-shrink-0 w-4 h-4 text-gray-500 dark:text-gray-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
            Unlimited Meal Plan Support
            </span>
          </li>
          <li className="flex">
            <svg
              className="flex-shrink-0 w-4 h-4 text-gray-500 dark:text-gray-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
            Have access to the chatbot all the time
            </span>
          </li>
          <li className="flex">
            <svg
              className="flex-shrink-0 w-4 h-4 text-gray-500 dark:text-gray-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
            Unlimited Meal Plans For All Types Of Ulcer
            </span>
          </li>
          <li className="flex decoration-gray-500">
            <svg
              className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 ms-3">
            Lifetime Updates
            </span>
          </li>
          
          <li className="flex decoration-gray-500">
            <svg
              className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 ms-3">
              24/7 phone & email support
            </span>
          </li>
        </ul>
        <Link
          to="/payment"
          type="button"
          className="flex items-center gap-8 justify-center text-white bg-[#9DAF89] shadow-xl hover:bg-bg-color2 focus:ring-4 focus:outline-none hover:text-white focus:ring-gray-300 dark:bg-[#9DAF89] dark:hover:bg-[#9DAF89] dark:focus:ring-[#9DAF89] font-medium rounded-lg text-sm px-2 py-3"
        >
          Subscribe
          <BsArrowRightShort />
        </Link>
        {/* <h3 className="text-[6px] py-2 "> Click to see Payment Options </h3> */}
      </div>
        </div>
        </div>
      </>
  );
};

