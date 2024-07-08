'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';

const Page = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.slide-in');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-green-100">
      {/* Event Overview */}
      <section className="bg-green-700 text-white py-20 slide-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold">THREAD THE CHANGE</h1>
          <p className="mt-4 text-lg">
            With the help of students from local high schools, the event aims to
            raise awareness about the importance of sustainability in the
            clothing industry, the pitfalls of fast fashion, and the importance
            of ethical labor practices. This will be done through engaging
            informational displays, and a runway show that features students
            modeling &quot;Quiet Luxury&quot; looks from sustainable brands.
            Funds raised will help My New Red Shoes to deliver programs that
            assist Bay Area families facing financial hardship.
          </p>
        </div>
      </section>

      {/* Event Format */}
      <section className="py-20 slide-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-green-700">EVENT FORMAT:</h2>
            <ul className="mt-4 list-disc list-inside text-lg text-green-900">
              <li>Weekend Afternoon Reception</li>
              <li>Light Bites</li>
              <li>Speakers</li>
              <li>Runway Fashion Show</li>
              <li>Educational Displays</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Audience and Details */}
      <section className="bg-green-700 text-white py-20 slide-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">AUDIENCE:</h2>
          <p className="mt-4 text-lg">
            100+ Bay Area High-Wealth Families, Friends &amp; Donors
          </p>
          <p className="mt-4 text-lg">DATE: October 6, 2024</p>
          <p className="mt-4 text-lg">
            LOCATION: Peninsula Golf &amp; Country Club
          </p>
        </div>
      </section>

      {/* Event Goals */}
      <section className="py-20 slide-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-green-700">EVENT GOALS</h2>
            <p className="mt-4 text-lg text-green-900">
              Fundraise for MNRS in support of children and families by:
            </p>
            <ul className="mt-4 list-disc list-inside text-lg text-green-900">
              <li>
                <strong>ENLIGHTENING:</strong> Raise awareness about the
                importance of supporting ethical and sustainable fashion brands
                and the benefits of making environmentally conscious choices in
                clothing consumption
              </li>
              <li>
                <strong>ENGAGING:</strong> Involving high school youth and
                others in the community in the event
              </li>
              <li>
                <strong>SUPPORTING ETHICAL AND SUSTAINABLE BUSINESSES:</strong>{' '}
                Showcasing the work of designers and brands that prioritize
                ethics and sustainability
              </li>
              <li>
                <strong>INSPIRING ACTION:</strong> Inspire attendees to make
                informed purchasing decisions
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sustainability Goals */}
      <section className="bg-green-700 text-white py-20 slide-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">SUSTAINABILITY GOALS</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg text-green-700">
              <h3 className="text-2xl font-bold">PROMOTE ETHICAL FASHION</h3>
              <p className="mt-4">
                Emphasize the importance of ethical fashion by showcasing
                clothing brands that prioritize fair labor practices, use
                eco-friendly materials, and prioritize sustainable production
                methods.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg text-green-700">
              <h3 className="text-2xl font-bold">REDUCE WASTE</h3>
              <p className="mt-4">
                Implement measures to minimize waste generation during the
                event, such as using recycled or biodegradable materials for
                decorations, serving food and beverages in compostable or
                reusable containers.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg text-green-700">
              <h3 className="text-2xl font-bold">
                SUPPORT LOCAL AND SUSTAINABLE BUSINESSES
              </h3>
              <p className="mt-4">
                Partner with local and sustainable businesses for the clothing
                that will be worn in the show, catering, and other services to
                reduce the carbon footprint associated with transportation and
                support local business owners.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg text-green-700">
              <h3 className="text-2xl font-bold">
                EDUCATE AND RAISE AWARENESS
              </h3>
              <p className="mt-4">
                Use the fashion show as an opportunity to educate attendees
                about sustainable fashion practices, the environmental and
                social impact of the fashion industry, and ways to make more
                sustainable clothing choices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supporting the Event */}
      <section className="py-20 slide-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-green-700">
              SUPPORTING THE EVENT
            </h2>
            <p className="mt-4 text-lg text-green-900">
              Your financial support demonstrates your commitment to the
              community while promoting your brand across an influential
              audience of potential customers and clients. By partnering with My
              New Red Shoes, you help to advance the common good and build a
              more equal society for all children and families.
            </p>
            <h3 className="mt-8 text-2xl font-bold text-green-700">
              BENEFITS:
            </h3>
            <ul className="mt-4 list-disc list-inside text-lg text-green-900">
              <li>
                Enhanced Visibility: Exposure to a new audience, increasing
                brand recognition and reach.
              </li>
              <li>
                Visibility in Marketing Materials: Inclusion in event marketing
                materials—brochures, tagging on @mynewredshoes organic social
                channels, and more
              </li>
              <li>
                Positive Brand Association: Promote your brand&apos;s reputation
                and perception
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Additional Support Information */}
      <section className="py-20 slide-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-green-700">SPONSORSHIPS:</h3>
            <p className="mt-4 text-lg text-green-900">
              Sponsorships at various financial levels are available with a
              range of associated benefits. Sponsorships help to cover all or
              part of the expenses associated with holding the event such as
              venue rental and other expenses. They ensure that a larger
              percentage of funds raised can be used to support the work of the
              organization.
            </p>
            <h3 className="mt-8 text-2xl font-bold text-green-700">
              UNDERWRITING:
            </h3>
            <p className="mt-4 text-lg text-green-900">
              Event Underwriting directs financial support to a specific event
              expense line such as wine, catering and non-alcoholic beverages,
              printing, etc.
            </p>
            <h3 className="mt-8 text-2xl font-bold text-green-700">
              CLOTHING FOR THE RUNWAY SHOW:
            </h3>
            <p className="mt-4 text-lg text-green-900">
              My New Red Shoes is currently seeking sustainable and ethical
              clothing elements to use as foundational pieces from which to
              build &quot;Quiet Luxury&quot; runway looks. Items would be on
              loan to MNRS for the event. We hope to show 50 runway looks.
              Featured looks will &quot;make a presence without making
              noise&quot; during a narrated runway show that will include
              information about and promotion of the featured brands and/or
              designers.
            </p>
            <h3 className="mt-8 text-2xl font-bold text-green-700">
              OTHER WAYS TO SUPPORT THE EVENT:
            </h3>
            <ul className="mt-4 list-disc list-inside text-lg text-green-900">
              <li>
                Donate a brand Gift Certificate to the event&apos;s Silent
                Auction or Raffle for a set dollar amount and/or for a specific
                service (styling session, closet re-fresh, etc.)
              </li>
              <li>
                Donate an in-kind item for the event&apos;s Silent Auction or
                Raffle
              </li>
            </ul>
            <div className="mt-8 text-center">
              <Link href="https://mynewredshoes.org/" target="_blank">
                <div className="inline-block px-8 py-3 bg-green-600 text-white text-lg font-semibold rounded-md hover:bg-green-700">
                  Support Financially
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
