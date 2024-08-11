'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { AiOutlineClose } from 'react-icons/ai';

const AboutMNRSSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <section id="about-mnrs" className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div
          className={`md:w-1/2 transition-opacity duration-1000 ease-in-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl font-bold mb-6 text-[red]">
            About My New Red Shoes
          </h2>
          <p className="text-lg text-black mb-4">
            My New Red Shoes (MNRS) works to create a just and equitable society
            where every child thrives. We do this by meeting the basic needs of
            children and their families, fostering financial stability in their
            homes, and investing in opportunities that empower their future.
          </p>
          <p className="text-lg text-black mb-4">
            Since our founding in 2006, MNRS has delivered essential items to
            over 260,000 children and their family members and distributed more
            than $2.6 million in direct cash support to households with
            low-income.
          </p>
          {/* Contact Us Button */}
          {isVisible && (
            <div className="mt-6">
              <button
                onClick={openModal}
                className="bg-red-600 text-white font-bold py-2 px-4 rounded shadow-lg hover:bg-red-700 transition"
              >
                Contact Us
              </button>
            </div>
          )}
        </div>
        <div
          className={`mt-8 md:mt-0 md:w-1/2 flex justify-center transition-opacity duration-1000 ease-in-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}
        >
          <Image
            src="/aboutMNRS.png"
            alt="My New Red Shoes Event"
            width={600}
            height={400}
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed bottom-16 right-16 z-50 bg-white p-4 rounded-lg shadow-lg max-w-sm w-full">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <button onClick={closeModal}>
              <AiOutlineClose className="text-2xl text-black hover:text-red-600" />
            </button>
          </div>
          <p className="text-lg text-black">
            My New Red Shoes <br /> 3790 El Camino Real #1098, Palo Alto, CA
            94306 <br /> (650) 241-3911 <br />
            <a
              href="mailto:info@mynewredshoes.org"
              className="underline hover:text-blue-500"
            >
              info@mynewredshoes.org
            </a>
          </p>
        </div>
      )}
    </section>
  );
};

export default AboutMNRSSection;
