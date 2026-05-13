import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle } from 'lucide-react';

export const GeneralDentistryPage: React.FC = () => {
  const services = [
    'Comprehensive Dental Exams',
    'Professional Teeth Cleaning',
    'Cavity Fillings',
    'Root Canal Therapy',
    'Tooth Extractions',
    'Periodontal Care',
    'Oral Cancer Screenings',
    'Fluoride Treatments'
  ];

  return (
    <>
      <Helmet>
        <title>General Dentistry | Dr. Aravind's Dental Care</title>
        <meta name="description" content="Comprehensive general dentistry services including exams, cleanings, fillings, and preventive care in Dallas, TX." />
      </Helmet>
      
      {/* Page Hero */}
      <section className="relative h-[400px] flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1200&auto=format&fit=crop" 
          alt="General Dentistry" 
          className="absolute inset-0 w-full h-full object-cover" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[rgba(52,57,77,0.6)]" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-white font-['Montserrat']">
            General Dentistry
          </h1>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-8 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#2D68FF] tracking-[0.15em] text-sm font-normal uppercase mb-4 font-['Montserrat']">
                Foundation of Oral Health
              </p>
              <h2 className="text-3xl md:text-[28px] font-medium text-[#000000] mb-6 font-['Montserrat']">
                Comprehensive General Dentistry
              </h2>
              <p className="text-base text-[#333333] font-serif leading-6 mb-6">
                General dentistry forms the foundation of good oral health. Our comprehensive approach focuses on prevention, early detection, and treatment of dental issues before they become serious problems.
              </p>
              <p className="text-base text-[#333333] font-serif leading-6">
                Regular checkups and cleanings are essential for maintaining healthy teeth and gums. We recommend visiting us every six months for optimal oral health.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop" 
                alt="Dental examination" 
                className="w-full h-[400px] object-cover" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-[#F2F2F2]">
        <div className="max-w-[1200px] mx-auto px-8 md:px-10">
          <h3 className="text-2xl md:text-[26px] font-semibold text-[#000000] mb-8 text-center font-['Montserrat']">
            Our General Dentistry Services
          </h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-[800px] mx-auto">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="w-5 h-5 text-[#2D68FF] shrink-0" />
                <span className="text-base text-[#333333] font-['Montserrat']">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[#2D68FF]">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <h3 className="text-3xl md:text-[28px] font-medium text-white mb-4 font-['Montserrat']">
            Schedule Your Dental Checkup
          </h3>
          <p className="text-white/85 text-base font-serif mb-8">
            Don't wait for dental problems to develop. Book your appointment today.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-transparent hover:bg-white text-white hover:text-[#2D68FF] px-8 py-4 border-2 border-white transition-all duration-300 uppercase tracking-wide text-sm font-medium font-['Montserrat']"
          >
            Book Appointment
          </a>
        </div>
      </section>
    </>
  );
};
