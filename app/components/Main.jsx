'use client';

import HeroSection from './Hero';
import Header from './Head';
import InternsSection from './InternsSection';
import SponsorsSection from './SponsorSection';
import AboutMNRSSection from './AboutMNRSSection';
import TicketsSection from './TicketsSection';
import SponsorInfoSection from './SponsorInfoSection';
import Footer from './Footer';
import AboutTTCSection from './AboutTTCSection';
import FloatingButton from './FloatingButton';

const Main = () => {
  return (
    <>
      <Header />
      <HeroSection />

      <div className="section">
        <AboutTTCSection />
      </div>
      {/* <div className="section">
        <InternsSection />
      </div> */}
      <div className="section">
        <SponsorsSection />
      </div>
      <div className="section">
        <SponsorInfoSection />
      </div>
      <div className="section">
        <AboutMNRSSection />
      </div>
      {/* <div className="section">
        <TicketsSection />
      </div> */}
      <FloatingButton />

      <Footer />
    </>
  );
};

export default Main;
