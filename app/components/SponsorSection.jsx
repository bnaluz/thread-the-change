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
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="sponsor" className="py-20">
      <div className="container mx-auto px-4 text-left max-w-5xl">
        <h2
          className={`text-5xl font-brush-script mx-auto text-center font-bold mb-12 text-white transition-opacity duration-1000 ease-in-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Many thanks to our event sponsors:
        </h2>

        {/* Gold Level Sponsors */}
        <div
          className={`mb-6 transition-opacity duration-1000 ease-in-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h3 className="text-3xl text-center font-semibold text-black mb-6">
            Gold Level Sponsors
          </h3>
          <div className="flex justify-center items-center flex-wrap gap-16">
            <div className="flex justify-center w-full md:w-1/3 lg:w-1/4">
              <img
                src="/ft.png"
                alt="Franklin Templeton"
                className="h-auto max-h-32 w-auto max-w-full"
              />
            </div>
            <div className="flex justify-center w-full md:w-1/3 lg:w-1/4">
              <img
                src="mmgroup.png"
                alt="Mandy Montoya & Monica Corman"
                className="h-auto w-auto max-w-full"
              />
            </div>
          </div>
          <hr className="mt-6 border-t border-white" />
        </div>

        {/* Silver Level Sponsors */}
        <div
          className={`my-6 transition-opacity duration-1000 ease-in-out delay-100 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h3 className="text-2xl text-center font-semibold text-black mb-6">
            Silver Level Sponsor
          </h3>
          <div className="flex justify-center mx-auto items-center flex-wrap gap-12">
            <div className="flex justify-center w-full md:w-1/4">
              <img
                src="/bb.png"
                alt="Bijoux Bijoux"
                className="h-auto max-h-20 w-auto filter grayscale brightness-0"
              />
            </div>
          </div>
        </div>

        {/* Bronze Level Sponsors */}
        <div
          className={`my-6 transition-opacity duration-1000 ease-in-out delay-200 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h3 className="text-xl text-center font-semibold text-black mb-6">
            Bronze Level Sponsor
          </h3>
          <div className="flex justify-center mx-auto items-center flex-wrap gap-12">
            <div className="w-full md:w-auto flex justify-center">
              <p className="text-lg font-semibold text-black tracking-wide">
                Heritage Bank
              </p>
            </div>
          </div>
        </div>

        {/* In-Kind Donors */}
        <div
          className={`mt-8 transition-opacity duration-1000 ease-in-out delay-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h3 className="text-lg text-center font-semibold text-black mb-4">
            In-kind Donors
          </h3>
          <div className="flex justify-center mx-auto w-full items-center flex-wrap gap-16">
            <div className="flex justify-center w-full md:w-1/4">
              <img
                src="/housebench.png"
                alt="House Winery"
                className="h-auto max-h-16 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
