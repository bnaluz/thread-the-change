// 'use client';
// import { useState, useEffect } from 'react';
// import Image from 'next/image';

// const AboutTTCSection = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const section = document.getElementById('about');
//       const rect = section.getBoundingClientRect();
//       if (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll();

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <section id="about" className="py-20 bg-[#fcf46e]">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
//         <div
//           className={`md:w-1/2 transition-opacity duration-1000 ease-in-out ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//           }`}
//         >
//           <h2 className="text-4xl font-bold mb-6 text-[#60b3c7] text-center md:text-left">
//             About Thread the Change
//           </h2>
//           <p className="text-lg text-[#60b3c7] mb-4 text-center md:text-left">
//             Thread the Change is a fashion show fundraiser for My New Red Shoes
//             and an awareness program about the importance of sustainability and
//             ethical labor practices in the clothing industry. Proceeds from the
//             event will help MNRS to deliver programs that assist Bay Area
//             families facing financial hardship.
//           </p>
//           <p className="text-lg text-[#60b3c7] text-center md:text-left">
//             The two-hour event will be held on Sunday, October 6, 2024, from 3pm
//             to 5pm at Peninsula Golf & Country Club and will feature educational
//             presentations, speakers, a runway show featuring “Quiet Luxury”
//             fashions from local stores, and refreshments. Students from local
//             high schools are leading as event organizers and runway models.
//           </p>
//         </div>
//         <div
//           className={`mt-8 md:mt-0 md:w-1/2 flex justify-center transition-opacity duration-1000 ease-in-out ${
//             isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
//           }`}
//         >
//           <Image
//             src="/interns.jpeg"
//             alt="Thread the Change Event"
//             width={500}
//             height={500}
//             className="rounded-lg shadow-lg"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutTTCSection;
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div
          className={`md:w-1/2 transition-opacity duration-1000 ease-in-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-8'
          }`}
        >
          <h2 className="text-4xl font-bold mb-6 text-[#FDF46E] text-center md:text-left">
            About Thread the Change
          </h2>
          <p className="text-lg text-white mb-4 text-center md:text-left">
            Thread the Change is a fashion show fundraiser for My New Red Shoes
            and an awareness program about the importance of sustainability and
            ethical labor practices in the clothing industry. Proceeds from the
            event will help MNRS to deliver programs that assist Bay Area
            families facing financial hardship.
          </p>
          <p className="text-lg text-white text-center md:text-left">
            The two-hour event will be held on Sunday, October 6, 2024, from 3pm
            to 5pm at Peninsula Golf & Country Club and will feature educational
            presentations, speakers, a runway show featuring “Quiet Luxury”
            fashions from local stores, and refreshments. Students from local
            high schools are leading as event organizers and runway models.
          </p>
        </div>
        <div
          className={`mt-8 md:mt-0 md:w-1/2 flex justify-center transition-opacity duration-1000 ease-in-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-30 translate-x-8'
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
    </section>
  );
};

export default AboutTTCSection;
