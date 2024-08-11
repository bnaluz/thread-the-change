'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const AboutTTCSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about');
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
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div
            className={`md:w-1/2 transition-opacity duration-1000 ease-in-out ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-30 translate-y-8'
            }`}
          >
            <h2 className="text-4xl font-bold mb-6 text-white text-center md:text-left">
              About Thread the Change
            </h2>
            <p className="text-lg text-black mb-4 text-center md:text-left">
              Thread the Change is a fashion show fundraiser for My New Red
              Shoes and an awareness program about the importance of
              sustainability and ethical labor practices in the clothing
              industry. Proceeds from the event will help MNRS to deliver
              programs that assist Bay Area families facing financial hardship.
            </p>
            <p className="text-lg text-black text-center md:text-left">
              The two-hour event will be held on Sunday, October 6, 2024, from
              3pm to 5pm at Peninsula Golf & Country Club and will feature
              educational presentations, speakers, a runway show featuring
              “Quiet Luxury” fashions from local stores, and refreshments.
              Students from local high schools are leading as event organizers
              and runway models.
            </p>
            <h3 className="text-3xl font-bold mt-10 text-white text-center md:text-left">
              Our Student Interns
            </h3>
            <ul className="text-lg text-black space-y-2 mt-4">
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
                  className={`transition-transform duration-1000 ease-in-out ${
                    isVisible
                      ? 'opacity-100 translate-x-0'
                      : index % 2 === 0
                      ? 'opacity-0 translate-x-[-20px]'
                      : 'opacity-0 translate-x-[20px]'
                  }`}
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`mt-8 md:mt-0 md:w-1/2 flex justify-center transition-opacity duration-1000 ease-in-out ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-30 translate-x-8'
            }`}
          >
            <Image
              src="/interns.jpeg"
              alt="Thread the Change Event"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTTCSection;
