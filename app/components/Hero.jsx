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
      className={`hero-section w-full h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] bg-cover bg-top transition-opacity duration-1000 ease-out ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        backgroundImage: "url('/TTCInvite.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
    ></section>
  );
};

export default HeroSection;
