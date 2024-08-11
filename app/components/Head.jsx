'use client';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
    setTimeout(() => {
      const target = document.querySelector(window.location.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  };

  return (
    <div className="fixed top-0 w-full bg-[#60b3c7] shadow-md z-50">
      <div className="container w-full mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <a href="#landing" className="flex items-center">
          <img
            src="/ttcLogo3.png"
            alt="Thread the Change"
            className="h-14 w-auto"
          />
        </a>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute top-full left-0 w-full bg-[#60b3c7] md:flex md:items-center md:relative md:top-0 md:bg-transparent md:w-auto md:mt-0 md:space-x-4 space-y-2 md:space-y-0`}
        >
          <a
            href="#about-mnrs"
            className="block md:inline-block text-lg text-white hover:text-[#fcf46e] px-4 py-2"
            onClick={handleLinkClick}
          >
            About Us
          </a>
          <a
            href="#sponsor"
            className="block md:inline-block text-lg text-white hover:text-[#fcf46e] px-4 py-2"
            onClick={handleLinkClick}
          >
            Sponsor
          </a>
          <a
            href="https://www.zeffy.com/ticketing/57130972-7260-498c-ad01-dfc0bea6c694"
            className="block md:inline-block text-lg text-white hover:text-[#fcf46e] px-4 py-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tickets
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
