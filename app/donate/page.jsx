'use client';
import React, { useEffect } from 'react';

const Page = () => {
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

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center fade-in">
        <h1 className="text-3xl font-bold text-green-700">Support Our Cause</h1>
        <p className="mt-4 text-lg text-green-900">
          Your generous donations help us continue our mission to support
          ethical and sustainable fashion. Every contribution makes a
          difference.
        </p>
        <a
          href="https://mynewredshoes.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block px-8 py-3 bg-green-600 text-white text-lg font-semibold rounded-md hover:bg-green-700"
        >
          Donate Now
        </a>
      </div>
    </div>
  );
};

export default Page;
