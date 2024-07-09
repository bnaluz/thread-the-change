'use client';
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Thread The Change
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="/about" className="text-gray-700 hover:text-gray-900">
              About
            </Link>
            <Link
              href="/register"
              className="text-gray-700 hover:text-gray-900"
            >
              Tickets
            </Link>
            <Link href="/donate" className="text-gray-700 hover:text-gray-900">
              Sponsor
            </Link>
            {/* <Link href="/learn" className="text-gray-700 hover:text-gray-900">
              Learn
            </Link> */}
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-1">
              {/* <Link href="/" className="text-gray-700 hover:text-gray-900 py-2">
                Home
              </Link> */}
              <Link
                href="/about"
                className="text-gray-700 hover:text-gray-900 py-2"
              >
                About
              </Link>
              <Link
                href="/register"
                className="text-gray-700 hover:text-gray-900 py-2"
              >
                Tickets
              </Link>
              <Link
                href="/donate"
                className="text-gray-700 hover:text-gray-900 py-2"
              >
                Sponsor
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
