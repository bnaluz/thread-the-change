'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image';

const Main = () => {
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.fade-in');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const facts = [
    'Fast fashion is responsible for 10% of global carbon emissions.',
    'Producing one pair of jeans uses nearly 1,800 gallons of water.',
    'Recycling clothes can save resources and reduce waste.',
    'Choosing sustainable brands helps reduce your carbon footprint.',
    'Buying fewer, better-quality items is more eco-friendly.',
  ];

  return (
    <div className="min-h-screen bg-green-100">
      <section className="bg-green-700 text-white py-20 fade-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold">
            Welcome to the Environmentally Conscious Fashion Show
          </h1>
          <p className="mt-4 text-lg">
            Join us for a spectacular event showcasing sustainable and
            eco-friendly fashion.
          </p>
          <div
            onClick={() => router.push('/about')}
            className="mt-8 inline-block px-8 py-3 bg-green-600 text-white text-lg font-semibold rounded-md hover:bg-green-700 cursor-pointer transition-transform transform hover:scale-105"
          >
            Learn More
          </div>
        </div>
      </section>

      {/* Added image gallery */}
      <section className="py-20 bg-gradient-to-r from-green-100 via-green-200 to-green-300 text-black fade-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-green-700 font-bold mb-12">
            Eco-Conscious Looks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {facts.map((fact, index) => (
              <div key={index} className="relative w-full h-96 card-container">
                <div className="card w-full h-full">
                  <div className="card-front w-full h-full">
                    <Image
                      src={`/eco${index + 1}.png`}
                      alt={`Eco-Conscious Look ${index + 1}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg shadow-lg w-full h-full"
                    />
                  </div>
                  <div className="card-back rounded-lg shadow-lg flex items-center justify-center text-center p-4 w-full h-full">
                    <p>{fact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 fade-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-bold text-green-700">
              Event Highlights
            </h2>
            <p className="mt-4 text-lg text-green-900">
              Experience the latest trends in sustainable fashion, learn about
              eco-friendly materials, and support local businesses.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
