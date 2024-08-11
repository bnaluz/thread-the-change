'use client';
import { MdLocalActivity } from 'react-icons/md';

const FloatingButton = () => {
  return (
    <a
      href="https://www.zeffy.com/ticketing/57130972-7260-498c-ad01-dfc0bea6c694"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-6 md:bottom-12 md:right-12 bg-[#fcf46e] text-[#60b3c7] p-4 rounded-full shadow-lg hover:bg-[#60b3c7] hover:text-white transition-colors z-50"
      aria-label="Buy Tickets"
    >
      <MdLocalActivity size={28} />
    </a>
  );
};

export default FloatingButton;
