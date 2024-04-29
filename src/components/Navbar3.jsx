import React from 'react';

export const Navbar3 = () => {
  return (
    <header className="bg-white pl-2 pb-4 pt-2 flex items-center px-10 shadow-md sticky top-0 z-50">
      <nav className="flex items-center justify-between w-full ">
        <div className='flex items-center'> {/* Container for logo */}
          <a href="/">
            <img src="Eatright-logo.png" alt="Logo" className="h-[50px]" />
          </a>
        </div>
        <div className='flex justify-center items-center flex-grow'> {/* Container for Sign Up */}
          <h2 className="text-3xl font-bold text-center">Login</h2>
        </div>
      </nav>
    </header>
  );
};
