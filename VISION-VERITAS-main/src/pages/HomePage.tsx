import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/Hero';
import { WhySection } from '../components/WhySection';
import { StateOfTheArtSection } from '../components/StateOfTheArtSection';
import { ServicesSection } from '../components/ServicesSection';
import { ReviewsSection } from '../components/ReviewsSection';
import { ClinicLocationSection } from '../components/ClinicLocationSection';

export const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Best Dental Clinic in Dallas | Dr. Aravind's Dental Care</title>
        <meta name="description" content="Welcome to Dr. Aravind's Dental Care, your trusted dental practice in Dallas. We provide state-of-the-art dental care and comprehensive services for everyone in your family. Book your appointment today!" />
        <meta name="keywords" content="dental clinic Dallas, best dentist, Dr. Aravind, state of the art dental care, family dentistry" />
        <html lang="en-US" />
      </Helmet>
      <Hero backgroundImage="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1920&auto=format&fit=crop" />
      <ServicesSection />
      <WhySection />
      <StateOfTheArtSection />
      <ReviewsSection />
      <ClinicLocationSection />
    </>
  );
};
