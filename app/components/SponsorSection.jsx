'use client';
import { useState, useEffect } from 'react';

const SponsorsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('sponsor');
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
    <section id="sponsor" className="py-20 bg-[#fcf46e]">
      <div className="container mx-auto px-4 text-center">
        <h2
          className={`text-4xl font-bold mb-12 text-[#60b3c7] transition-opacity duration-1000 ease-in-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Thank You to Our Sponsors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* In-Kind Donors */}
          <div
            className={`transition-opacity duration-1000 ease-in-out ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h3 className="text-2xl font-semibold text-[#60b3c7] mb-4">
              In-kind Donors
            </h3>
            {/* Uncomment and replace the src when the logo is available */}
            {/* <img
              src="/path/to/house-winery-logo.png"
              alt="House Winery"
              className="mt-4 mx-auto h-16"
            /> */}
            <p className="text-lg text-[#60b3c7] mt-4">House Winery</p>
          </div>

          {/* Gold Level Sponsors */}
          <div
            className={`transition-opacity duration-1000 ease-in-out delay-100 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h3 className="text-2xl font-semibold text-[#60b3c7] mb-4">
              Gold Level Sponsor
            </h3>
            {/* Uncomment and replace the src when the logos are available */}
            {/* <img
              src="/path/to/franklin-templeton-logo.png"
              alt="Franklin Templeton"
              className="mt-4 mx-auto h-16"
            /> */}
            <p className="text-lg text-[#60b3c7] mt-4">Franklin Templeton</p>
            {/* <img
              src="/path/to/mandy-montoya-logo.png"
              alt="Mandy Montoya & Monica Corman"
              className="mt-4 mx-auto h-16"
            /> */}
            <p className="text-lg text-[#60b3c7] mt-4">
              Mandy Montoya & Monica Corman
            </p>
          </div>

          {/* Silver Level Sponsors */}
          <div
            className={`transition-opacity duration-1000 ease-in-out delay-200 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h3 className="text-2xl font-semibold text-[#60b3c7] mb-4">
              Silver Level Sponsor
            </h3>
            {/* Uncomment and replace the src when the logo is available */}
            {/* <img
              src="/path/to/bijoux-bijoux-logo.png"
              alt="Bijoux Bijoux"
              className="mt-4 mx-auto h-16"
            /> */}
            <p className="text-lg text-[#60b3c7] mt-4">Bijoux Bijoux</p>
          </div>

          {/* Bronze Level Sponsors */}
          <div
            className={`transition-opacity duration-1000 ease-in-out delay-300 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h3 className="text-2xl font-semibold text-[#60b3c7] mb-4">
              Bronze Level Sponsor
            </h3>
            <p className="text-lg text-[#60b3c7] mt-4">Heritage Bank</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
