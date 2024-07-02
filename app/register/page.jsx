'use client';
import React from 'react';

const page = () => {
  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-green-700">
          Register for the Event
        </h1>
        <p className="mt-4 text-lg text-green-900">
          Join us for an inspiring event focused on sustainable and eco-friendly
          fashion. Register now to secure your spot!
        </p>
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block px-8 py-3 bg-green-600 text-white text-lg font-semibold rounded-md hover:bg-green-700"
        >
          Register Now
        </a>
      </div>
    </div>
  );
};

export default page;
