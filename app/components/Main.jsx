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

const Main = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutTTCSection />
      <InternsSection />
      <SponsorsSection />
      <AboutMNRSSection />
      <TicketsSection />
      <SponsorInfoSection />
      <Footer />
    </>
  );
};

export default Main;
