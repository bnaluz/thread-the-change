'use client';
import { useState, useRef, useEffect } from 'react';

const AccordionItem = ({ title, children, isOpen, onClick }) => {
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="mb-4 border-b border-gray-200">
      <button
        onClick={onClick}
        className="w-full text-left py-4 px-2 font-semibold text-black hover:bg-[#60b3c7] transition-colors"
      >
        {title}
        <span className="float-right">{isOpen ? '-' : '+'}</span>
      </button>
      <div
        ref={contentRef}
        style={{ height: `${height}px`, transition: 'height 0.3s ease' }}
        className="overflow-hidden"
      >
        <div
          className={`px-4 pb-4 text-black transition-opacity duration-300 ease-in-out ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

const SponsorInfoSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('sponsor-info');
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

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="sponsor-info" className="py-20">
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl font-bold mb-6 text-[#FDF46E] text-center transition-opacity duration-1000 ease-in-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Sponsorship Information
        </h2>
        <p
          className={`text-lg text-black mb-12 text-center transition-opacity duration-1000 ease-in-out delay-100 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Supporting Thread the Change provides businesses with exposure to new
          audiences and ensures that a larger percentage of funds raised can be
          used to support the work of My New Red Shoes.
        </p>
        <div>
          <AccordionItem
            title="$10,000+ - Presenting Sponsor"
            isOpen={openIndex === 0}
            onClick={() => handleAccordionClick(0)}
          >
            <ul className="list-disc ml-4">
              <li>
                Exclusive Presenting Sponsorship event title rights with
                name/logo on all materials
              </li>
              <li>
                Onstage opportunity to speak for up to 10 minutes at the event
              </li>
              <li>Maximum exposure in all event-related press/media</li>
              <li>Full page color ad on the back of the Event Program</li>
              <li>
                Premier placement of logo on My New Red Shoes’ website and the
                event website (logo links to their website), sponsor signage and
                the invitation
              </li>
              <li>Opportunity to provide a collateral piece to each guest</li>
              <li>Five complimentary runway seat tickets to the event</li>
            </ul>
          </AccordionItem>
          <AccordionItem
            title="$7,500 to $9,999 - Platinum Sponsor"
            isOpen={openIndex === 1}
            onClick={() => handleAccordionClick(1)}
          >
            <ul className="list-disc ml-4">
              <li>Exposure in all event-related press/media</li>
              <li>Full page color ad in the Event Program</li>
              <li>
                Premier logo placement on My New Red Shoes’ website and the
                event website (logo links to their website), sponsor signage and
                the Invitation
              </li>
              <li>Opportunity to provide a collateral piece to each guest</li>
              <li>Three complimentary general tickets to the event</li>
            </ul>
          </AccordionItem>
          <AccordionItem
            title="$5,000 - $7,499 Gold Sponsor"
            isOpen={openIndex === 2}
            onClick={() => handleAccordionClick(2)}
          >
            <ul className="list-disc ml-4">
              <li>1/2 page color ad in the Event Program</li>
              <li>Logo on the event website</li>
              <li>Opportunity to provide a collateral piece to each guest</li>
              <li>
                Listing on event materials including the Invitation and the
                Event Program
              </li>
              <li>Two complimentary general tickets to the event</li>
            </ul>
          </AccordionItem>
          <AccordionItem
            title="$2,500 to $4,999 - Silver Sponsor"
            isOpen={openIndex === 3}
            onClick={() => handleAccordionClick(3)}
          >
            <ul className="list-disc ml-4">
              <li>1/4 page color ad in the Event Program</li>
              <li>Logo on event website</li>
              <li>Listing on event materials including the Event Program</li>
              <li>Two complimentary general tickets to the event</li>
            </ul>
          </AccordionItem>
          <AccordionItem
            title="$1,000 to $2,499 - Bronze Sponsor"
            isOpen={openIndex === 4}
            onClick={() => handleAccordionClick(4)}
          >
            <ul className="list-disc ml-4">
              <li>Listing on event materials including the Event Program</li>
              <li>One complimentary general ticket to the event</li>
            </ul>
          </AccordionItem>
          <AccordionItem
            title="$500 to $999 – Friend"
            isOpen={openIndex === 5}
            onClick={() => handleAccordionClick(5)}
          >
            <ul className="list-disc ml-4">
              <li>Listing on event materials including the Event Program</li>
            </ul>
          </AccordionItem>
          <AccordionItem
            title="Underwriting"
            isOpen={openIndex === 6}
            onClick={() => handleAccordionClick(6)}
          >
            <p>
              Event underwriting directs financial support to a specific event
              expense line such as catering, printing, and other overhead
              expenses. For more information on underwriting, please contact Sue
              Sutherland, MNRS Advancement Director at sue@mynewredshoes.org.
            </p>
          </AccordionItem>
          <AccordionItem
            title="In-Kind Support"
            isOpen={openIndex === 7}
            onClick={() => handleAccordionClick(7)}
          >
            <p>
              In-kind support includes donating an auction item or package. For
              more information on In-Kind Donations, please contact Sue
              Sutherland, MNRS Advancement Director at sue@mynewredshoes.org.
            </p>
          </AccordionItem>
        </div>
      </div>
    </section>
  );
};

export default SponsorInfoSection;
