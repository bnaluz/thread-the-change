'use client';

import HeroSection from './Hero';
import Header from './Head';
import SponsorsSection from './SponsorSection';
import AboutMNRSSection from './AboutMNRSSection';
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
      <div className="section">
        <AboutMNRSSection />
      </div>
      <div className="section">
        <SponsorInfoSection />
      </div>
      <div className="section">
        <SponsorsSection />
      </div>
      <FloatingButton />
      <Footer />
    </>
  );
};

export default Main;
