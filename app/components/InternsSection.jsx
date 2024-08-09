'use client';
import { useState, useEffect } from 'react';

const InternsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('interns');
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
    <section id="interns" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2
          className={`text-4xl font-bold mb-6 text-[#60b3c7] transition-opacity duration-1000 ease-in-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Our Student Interns
        </h2>
        <ul className="text-lg text-[#60b3c7] space-y-2">
          {[
            'Malia Chen, Head Student Intern',
            'Annika Gurnani, Graphic Design',
            'Diya Karthik, Design',
            'Maren Mulloy, Promotion',
            'Juliet Schmeltzer, Promotion',
            'Savannah Smith, Promotion',
            'Eloise Taylor, Logistics',
          ].map((name, index) => (
            <li
              key={index}
              className={` transition-transform duration-1000 ease-in-out ${
                isVisible
                  ? `opacity-100 translate-x-0`
                  : index % 2 === 0
                  ? `opacity-0 translate-x-[-20px]`
                  : `opacity-0 translate-x-[20px]`
              }`}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default InternsSection;
