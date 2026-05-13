import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Sparkles, Smile, Star } from 'lucide-react';

export const CosmeticDentistryPage: React.FC = () => {
  const services = [
    {
      title: 'Teeth Whitening',
      description: 'Professional whitening treatments for a brighter, more confident smile.',
      icon: Sparkles
    },
    {
      title: 'Porcelain Veneers',
      description: 'Custom-crafted veneers to transform the appearance of your teeth.',
      icon: Star
    },
    {
      title: 'Smile Makeovers',
      description: 'Comprehensive cosmetic treatments tailored to your aesthetic goals.',
      icon: Smile
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cosmetic Dentistry | Dr. Aravind's Dental Care</title>
        <meta name="description" content="Transform your smile with cosmetic dentistry services including teeth whitening, veneers, and smile makeovers in Dallas, TX." />
      </Helmet>
      
      {/* Page Hero */}
      <section className="relative h-[400px] flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop" 
          alt="Cosmetic Dentistry" 
          className="absolute inset-0 w-full h-full object-cover" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[rgba(52,57,77,0.6)]" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-white font-['Montserrat']">
            Cosmetic Dentistry
          </h1>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-8 md:px-10">
          <div className="text-center mb-12">
            <p className="text-[#2D68FF] tracking-[0.15em] text-sm font-normal uppercase mb-4 font-['Montserrat']">
              Transform Your Smile
            </p>
            <h2 className="text-3xl md:text-[28px] font-medium text-[#000000] mb-6 font-['Montserrat']">
              Aesthetic Dental Excellence
            </h2>
            <p className="text-base text-[#333333] font-serif leading-6 max-w-[640px] mx-auto">
              Cosmetic dentistry combines artistry with advanced dental techniques to create beautiful, natural-looking smiles. Whether you want to brighten, straighten, or completely transform your smile, we have the expertise to help you achieve your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-[#F2F2F2] p-8 rounded-xl text-center">
                  <div className="flex justify-center mb-6">
                    <Icon className="w-16 h-16 text-[#2D68FF]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#000000] mb-4 font-['Montserrat']">
                    {service.title}
                  </h3>
                  <p className="text-base text-[#333333] font-serif leading-6">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="max-w-[1200px] mx-auto px-8 md:px-10 text-center">
          <h3 className="text-2xl md:text-[26px] font-semibold text-[#000000] mb-6 font-['Montserrat']">
            See the Transformation
          </h3>
          <p className="text-base text-[#333333] font-serif leading-6 mb-8 max-w-[640px] mx-auto">
            Browse our smile gallery to see real results from our cosmetic dentistry treatments.
          </p>
          <a 
            href="/smile-gallery" 
            className="inline-block bg-[#333333] hover:bg-[#2D68FF] text-white px-8 py-4 transition-all duration-300 uppercase tracking-wide text-sm font-medium font-['Montserrat'] shadow-lg"
          >
            View Smile Gallery →
          </a>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[#2D68FF]">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <h3 className="text-3xl md:text-[28px] font-medium text-white mb-4 font-['Montserrat']">
            Ready for Your Dream Smile?
          </h3>
          <p className="text-white/85 text-base font-serif mb-8">
            Schedule a cosmetic consultation to discuss your smile goals.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-transparent hover:bg-white text-white hover:text-[#2D68FF] px-8 py-4 border-2 border-white transition-all duration-300 uppercase tracking-wide text-sm font-medium font-['Montserrat']"
          >
            Book Consultation
          </a>
        </div>
      </section>
    </>
  );
};
