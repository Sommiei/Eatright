import React from 'react';

export const NavBarTwo = () => {
  return (
    <>
      <header className="bg-white p-4 flex justify-between items-center px-10 shadow-md sticky top-0 z-50">
        <nav className="flex justify-center items-center space-x-8 font-bold">
          <a href="/">
            <div>
              <img src="Eatright-logo.png" alt="Logo" className="h-[50px]" />
            </div>
          </a>
        </nav>
      </header>
    </>
  );
};
