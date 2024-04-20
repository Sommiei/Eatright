import React, { useState, useEffect } from 'react';
import { RiLoader3Line } from "react-icons/ri";
import { IoIosCheckmark } from "react-icons/io";

export const Successful = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  
  


  return (
    <div className='h-screen shadow-lg'>
      <div className='h-screen flex justify-center items-center '>
        {loading ? (
          <div className="animate-spin">
            <RiLoader3Line size={60} fill='green' />
          </div>
        ) : (
          <div className='flex justify-around items-center flex-col'>
            <div className="relative">
              <IoIosCheckmark size={30} fill='green' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
              <div className="animate-pulse" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <IoIosCheckmark size={50} fill='green' />
              </div>
            </div>
            <h2 className='loader font-bold text-3xl text-green-500'>Password Reset Successful</h2>
          </div>
        )}
      </div>
    </div>
  );
};
