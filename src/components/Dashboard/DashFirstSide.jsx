import React, { useState } from 'react';
import { BiChat, BiUser, BiDollar, BiLogOut, BiNotification, BiMenuAltLeft, BiMenuAltRight, BiMoney } from 'react-icons/bi';
import { Profile } from '../UserProfile';
import { PricingForm } from '../PricingForm';
import { Payment } from '../DashPayment';
import { DashChatSide } from './DashChatSide';
import { DashHistory } from './DashHistory';
import { Logout } from '../Logout';

export const DashFirstSide = ({ setComponent, setShowUserProfile }) => {
  const [dashboardVisible, setDashboardVisible] = useState(true);

  const firstDivItems = [
    { text: 'Chat', icon: <BiChat />, },
    { text: 'User Profile', icon: <BiUser />, component: <Profile />,   }, // Changed component path to '/profile'
    { text: 'Payment', icon: <BiMoney />, component: <Payment />, },
    { text: 'Logout', icon: <BiLogOut />, component: <Logout />, },
  ];

  return (
    <div className="w-full md:w-72 bg-white text-black shadow shadow-black h-screen flex flex-col px-5">
      {/* Toggle Dashboard Button */}
      <button onClick={() => setDashboardVisible(!dashboardVisible)} className="mt-4 ml-4">
        {dashboardVisible ? <BiMenuAltLeft /> : <BiMenuAltRight />}
      </button>

      {/* Item List */}
      {dashboardVisible && (
        <div className="mt-4 space-y-4 md:space-y-10 h-screen">
          {firstDivItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center cursor-pointer  hover:bg-[#a88463]  rounded-full w-full md:w-[150px] h-[50px] `}
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
