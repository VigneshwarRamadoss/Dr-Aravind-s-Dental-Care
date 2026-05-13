import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ServicesSection } from '../components/ServicesSection';

export const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Dr. Aravind's Dental Care</title>
        <meta name="description" content="Comprehensive dental services including general dentistry, cosmetic dentistry, orthodontics, pediatric care, and emergency services in Dallas, TX." />
        <meta name="keywords" content="dental services Dallas, general dentistry, cosmetic dentistry, orthodontics, pediatric dentistry" />
      </Helmet>
      
      {/* Page Hero */}
      <section className="relative h-[400px] flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop" 
          alt="Dental Services" 
          className="absolute inset-0 w-full h-full object-cover" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[rgba(52,57,77,0.6)]" />
        <div className="relative z-10 text-center px-4">
          <p className="text-[#BCD9DE] tracking-[0.2em] text-sm font-normal uppercase mb-4 font-['Montserrat']">
            Comprehensive Care
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white font-['Montserrat']">
            Our Dental Services
          </h1>
        </div>
      </section>

      <ServicesSection />

      {/* CTA Banner */}
      <section className="py-16 bg-[#2D68FF]">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <h3 className="text-3xl md:text-[28px] font-medium text-white mb-4 font-['Montserrat']">
            Ready to Transform Your Smile?
          </h3>
          <p className="text-white/85 text-base font-serif mb-8 max-w-[640px] mx-auto">
            Schedule your appointment today and experience the difference of personalized dental care.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-transparent hover:bg-white text-white hover:text-[#2D68FF] px-8 py-4 border-2 border-white transition-all duration-300 uppercase tracking-wide text-sm font-medium font-['Montserrat']"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </>
  );
};
