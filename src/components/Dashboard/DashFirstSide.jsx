import React, { useState } from 'react';
import { BiChat, BiUser, BiDollar, BiLogOut, BiNotification, BiMenuAltLeft, BiMenuAltRight, BiMoney, BiStar, BiArrowFromRight, BiArrowFromLeft } from 'react-icons/bi';
import { Profile } from '../UserProfile';
import { PricingForm } from '../PricingForm';
import { Payment } from '../DashPayment';
import { DashChatSide } from './DashChatSide';
import { DashHistory } from './DashHistory';
import { Logout } from '../Logout';
import { ReviewUpdate } from '../ReviewUpdate';

export const DashFirstSide = ({ setComponent, setShowUserProfile }) => {
  const [dashboardVisible, setDashboardVisible] = useState(true);

  const firstDivItems = [
    { text: 'Chat', icon: <BiChat size={25}/>, },
    { text: 'User Profile', icon: <BiUser size={25} />, component: <Profile />,   }, // Changed component path to '/profile'
    { text: 'Payment', icon: <BiMoney size={25}/>, component: <Payment />, },
    { text: 'Review', icon: <BiStar size={25}/>, component: <ReviewUpdate />, },
    { text: 'Logout', icon: <BiLogOut size={25}/>, component: <Logout />, },
  ];

  return (
    <div className="w-full md:w-72 bg-white text-black shadow shadow-black h-screen flex flex-col px-5">
      {/* Toggle Dashboard Button */}
      <button onClick={() => setDashboardVisible(!dashboardVisible)} className="mt-4 ml-4">
        {dashboardVisible ? <BiArrowFromRight/> : <BiArrowFromLeft />}
        
      </button>


      {/* Item List */}
      {dashboardVisible && (
        <div className="mt-4 space-y-4 md:space-y-8 h-screen ">
          {firstDivItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center cursor-pointer text-black  hover:bg-[#a88463] hover:text-white transform hover:scale-105 transition-transform rounded-full w-full md:w-[150px] h-[50px] `}
              onClick={() => {
                setComponent(item.component)
                setShowUserProfile(true)
              }}
              // onClick={()=> document?.getElementById('user_profile_modal')?.showModal()}
            >
              <div className='bg-[#846B57] w-[40px] h-[40px] flex text-white rounded-full justify-center items-center'>{item.icon}</div>
              <span className="ml-2 font-bold">{item.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
