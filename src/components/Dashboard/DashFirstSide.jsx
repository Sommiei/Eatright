import React, { useState } from 'react'; 
import { BiChat, BiUser, BiDollar, BiLogOut, BiNotification, BiMenuAltLeft, BiMenuAltRight, BiMoney, BiStar, BiArrowFromRight, BiArrowFromLeft, BiHistory } from 'react-icons/bi'; 
import { Profile } from '../UserProfile'; 
import { PricingForm } from '../PricingForm'; 
import { Payment } from '../DashPayment'; 
import { DashChatSide } from './DashChatSide'; 
import { DashHistory } from './DashHistory'; 
import { Logout } from '../Logout'; 
import { ReviewUpdate } from '../ReviewUpdate'; 
 
export const DashFirstSide = ({ setComponent, setShowUserProfile }) => { 
  const [dashboardVisible, setDashboardVisible] = useState(true); 
  const [activeButton, setActiveButton] = useState(null);
  // const [HoverOnIcon, setHoverOnIcon]= useState(null)
  const changeColor = (button) => {
    setActiveButton(button);
  }
  
 
  const firstDivItems = [ 
    { text: 'Chat', icon: <BiChat size={25}/>, },
    { text: 'History', icon: <BiHistory size={25}/>,},
    { text: 'User Profile', icon: <BiUser size={25} />, component: <Profile />,   }, // Changed component path to '/profile' 
    { text: 'Payment', icon: <BiMoney size={25}/>, component: <Payment />, }, 
    { text: 'Review', icon: <BiStar size={25}/>, component: <ReviewUpdate />, }, 
    { text: 'Logout', icon: <BiLogOut size={25}/>, component: <Logout />, }, 

  ]; 
 
  return ( 
    <>    
     <div className=''> 
      {/* Toggle Dashboard Button */} 
 
 
      {/* Item List */} 
      {dashboardVisible && ( 
          <div className="w-full  md:w-72 bg-white justify-between pt-11  text-black flex flex-col pl-1 sm:pl-10"> 
 
 <div className="mt-4 space-y-4 md:space-y-8  ">
      {firstDivItems.map((item, index) => (
        <div
          key={index}
          className={`flex items-center cursor-pointer text-black   transform hover:scale-105 transition-transform focus:bg-[#a88463] focus-outline 
           rounded-full w-[30px] md:w-[150px] h-[50px] ${
            activeButton === item.text ? "bg-[#a88463] text-white" : ""
            
          }`}
          onClick={() => {
            setComponent(item.component);
            setShowUserProfile(true);
            changeColor(item.text); // Set active button text
          }}
          
        >
          <div className="bg-[#846B57] w-[40px] h-[40px] flex text-white rounded-full justify-center items-center">
            {item.icon}
          </div>
          <span className="ml-2 font-bold sm:block  hidden">{item.text}</span>
        </div>
      ))}
    </div>
        </div> 
      )} 
     


    <button onClick={() => setDashboardVisible(!dashboardVisible) } className=" left-2 top-2 sm:mt-4 absolute left-10 top-0 z-50 "> 
    <div className='w-[30px] h-[30px] rounded-full bg-gray-400 flex justify-center items-center'>
    <div className='w-[30px] h-[30px] rounded-full bg-gray-400 flex justify-center items-center transform hover:scale-105 transition-transform'>
        {dashboardVisible ? <BiArrowFromRight size={20} className='text-white'/> : <BiArrowFromLeft size={20} className='text-white'/>} 
        </div> 
        </div>
      </button>
      
    </div> 
    
    </>  
  ); 
};
