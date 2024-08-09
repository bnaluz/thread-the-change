'use client';
import { useState, useEffect } from 'react';

const AboutMNRSSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about-mnrs');
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger scroll event on mount to check visibility

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about-mnrs" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2
          className={`text-4xl font-bold mb-6 text-[#60b3c7] transition-opacity duration-1000 ease-in-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          About My New Red Shoes
        </h2>
        <p
          className={`text-lg text-[#60b3c7] transition-opacity duration-1000 ease-in-out delay-100 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          My New Red Shoes (MNRS) works to create a just and equitable society
          where every child thrives...
        </p>
        <p
          className={`mt-6 text-lg text-[#60b3c7] font-semibold italic transition-opacity duration-1000 ease-in-out delay-200 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          “Mom tearfully shared that the support meant that they had wiggle room
          to do things as a family outside of just paying for rent and basic
          needs...”
        </p>
        <p
          className={`mt-6 text-[#60b3c7] transition-opacity duration-1000 ease-in-out delay-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Contact Us: <br /> My New Red Shoes <br /> 3790 El Camino Real #1098,
          Palo Alto, CA 94306 <br /> (650) 241-3911 <br />{' '}
          <a
            href="mailto:info@mynewredshoes.org"
            className="underline hover:text-[#e1c800]"
          >
            info@mynewredshoes.org
          </a>
        </p>
      </div>
    </section>
  );
};

export default AboutMNRSSection;
