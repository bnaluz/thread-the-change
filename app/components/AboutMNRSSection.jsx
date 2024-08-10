'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

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
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about-mnrs" className="py-4">
      <div className="container mx-auto px-4 text-center">
        <h2
          className={`text-4xl font-bold mb-6 text-[#FDF46E] transition-opacity duration-1000 ease-in-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          About My New Red Shoes
        </h2>
        <p
          className={`text-lg text-black transition-opacity duration-1000 ease-in-out delay-100 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          My New Red Shoes (MNRS) works to create a just and equitable society
          where every child thrives. We do this by meeting the basic needs of
          children and their families, fostering financial stability in their
          homes, and investing in opportunities that empower their future.
        </p>
        <p
          className={`mt-6 text-lg text-black transition-opacity duration-1000 ease-in-out delay-200 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Since our founding in 2006, MNRS has delivered essential items to over
          260,000 children and their family members and distributed more than
          $2.6 million in direct cash support to households with low-income.
        </p>
        <div
          className={`mt-8 transition-opacity duration-1000 ease-in-out delay-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src="/path-to-mnrs-photo.jpg"
            alt="My New Red Shoes Event"
            width={600}
            height={400}
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>
        <p
          className={`mt-8 text-lg text-white font-semibold italic transition-opacity duration-1000 ease-in-out delay-400 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          “Mom tearfully shared that the support meant that they had wiggle room
          to do things as a family outside of just paying for rent and basic
          needs. She could buy things off their school needs list and even do
          something as a family. It had been awhile since they had been able to
          do this.” – Hamilton Families, MNRS Agency Partner
        </p>
        <p
          className={`mt-6 text-black transition-opacity duration-1000 ease-in-out delay-500 ${
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
