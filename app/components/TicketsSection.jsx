'use client';
import { useState, useEffect } from 'react';

const TicketsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('tickets');
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="tickets" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2
          className={`text-4xl font-bold mb-6 text-[#FDF46E] transition-opacity duration-1000 ease-in-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Tickets
        </h2>
        <p
          className={`text-lg text-white mb-6 transition-opacity duration-1000 ease-in-out delay-100 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Coming Soon. Tickets to the event will be available beginning August
          12, 2024.
        </p>
        <button className="bg-[#fcf46e] text-[#60b3c7] font-semibold py-2 px-6 rounded shadow hover:bg-[#f2d74c] transition-colors">
          Register Now
        </button>
      </div>
    </section>
  );
};

export default TicketsSection;
