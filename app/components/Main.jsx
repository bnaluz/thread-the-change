'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

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
