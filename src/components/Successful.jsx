import React from 'react';
import { RiLoader3Line } from "react-icons/ri";
import { IoIosCheckmark } from "react-icons/io";


export const Successful = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div style={{ position: 'relative' }}>
        <RiLoader3Line size={60} fill='green' />
        <IoIosCheckmark size={30} fill='green' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
      </div>
    </div>
  );
};
