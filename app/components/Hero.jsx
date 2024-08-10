'use client';

import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="landing"
      className={`relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] bg-cover bg-center transition-opacity duration-1000 ease-out mt-14 ${
        isLoaded ? 'opacity-100' : 'opacity-40'
      }`}
      style={{
        backgroundImage: "url('/runway.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        paddingTop: 'calc(4rem + 10vh)',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/runway.jpg')",
            filter: 'blur(5px)',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
          }}
        ></div>
        <div className="relative text-center text-white">
          <img
            src="/ttcLogo.png"
            alt="Thread the Change"
            className="mx-auto max-w-full h-auto"
            style={{ maxHeight: '15rem' }}
          />
          <p className="mt-4 text-xl md:text-2xl lg:text-4xl font-brush-script leading-tight">
            A fashion fundraiser supporting the work of My New Red Shoes
          </p>
          <p className="mt-8 text-base md:text-lg lg:text-xl leading-relaxed">
            Sunday, October 6th, 2024 3pm-5pm <br />
            Peninsula Golf & Country Club <br />
            701 Madera Drive, San Mateo, CA 94403
          </p>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-[#fcf46e] leading-relaxed">
            Light Bites | Educational Displays | Speakers <br />
            Runway Fashion Show
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
