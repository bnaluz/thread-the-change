import React from 'react';
import Image from 'next/image';

const RetailPartners = () => {
  return (
    <section id="retail-partners" className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold font-brush-script text-black mb-6">
          Thank You to Our Retail Fashion Partners
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-center">
          {/* Retail Partner 1 */}
          <div className="flex justify-center items-center">
            <Image
              src="/Aamlogo.png"
              alt="Retail Partner 1"
              width={200}
              height={150}
              className="object-contain h-40 w-auto"
            />
          </div>
          {/* Retail Partner 2 */}
          <div className="flex justify-center items-center">
            <Image
              src="/ag.png"
              alt="Retail Partner 2"
              width={200}
              height={150}
              className="object-contain h-40 w-auto"
            />
          </div>
          {/* Retail Partner 3 */}
          <div className="flex justify-center items-center">
            <Image
              src="/leafp.png"
              alt="Retail Partner 3"
              width={200}
              height={150}
              className="object-contain h-40 w-auto"
            />
          </div>
          {/* Retail Partner 4 */}
          <div className="flex justify-center items-center">
            <Image
              src="/romi.png"
              alt="Retail Partner 4"
              width={200}
              height={150}
              className="object-contain h-40 w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetailPartners;
