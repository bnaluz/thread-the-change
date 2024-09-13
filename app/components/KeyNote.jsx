import React from 'react';
import Image from 'next/image';

const KeyNote = () => {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        {/* Headshot */}
        <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
          <Image
            src="/Neha2.jpg"
            alt="Neha Samdaria"
            width={300}
            height={300}
            className="rounded-full shadow-lg"
          />
        </div>

        {/* Bio Section */}
        <div className="md:w-2/3 md:pl-8">
          <h2 className="text-4xl font-bold text-black mb-4">
            Meet Our Keynote Speaker: Neha Samdaria
          </h2>
          <p className="text-lg text-black mb-4">
            Neha Samdaria is the founder of Aam The Label, a sustainable fashion
            brand for the ~25% of women with fuller hips and thighs than the
            standard size chart. The Label's pants have a cult following and
            have been featured in Forbes and Cosmopolitan for their
            revolutionary fit. While building her supply chain in India during
            the height of the COVID-19 pandemic, Neha witnessed the challenges
            faced by garment workers firsthand. Now, she is committed to
            advocating for fair labor practices and supply chain transparency.
            Neha holds an MBA from Stanford and a Bachelor's in Science (Honors)
            from Caltech.
          </p>
          <p className="text-lg font-semibold text-black mb-4">
            Check out her brand:
            <br />
            Website:{' '}
            <a
              href="https://aamthelabel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700"
            >
              aamthelabel.com
            </a>
            <br />
            Instagram:{' '}
            <a
              href="https://instagram.com/aamthelabel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700"
            >
              @aamthelabel
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default KeyNote;
