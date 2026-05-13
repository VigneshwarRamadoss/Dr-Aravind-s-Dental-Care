import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Award, Heart, Users, Star } from 'lucide-react';

export const AboutUsPage: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We treat every patient with kindness, respect, and understanding.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in dental care and patient service.'
    },
    {
      icon: Users,
      title: 'Family Focus',
      description: 'We provide comprehensive care for patients of all ages.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Dr. Aravind's Dental Care</title>
        <meta name="description" content="Learn more about Dr. Aravind's Dental Care. We are a family-friendly dental clinic dedicated to providing the best dental care in a comfortable environment." />
        <meta name="keywords" content="about Dr. Aravind, dental team, family dentistry, trusted dental care Dallas" />
      </Helmet>
      
      {/* Page Hero */}
      <section className="relative h-[400px] flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop" 
          alt="About Us" 
          className="absolute inset-0 w-full h-full object-cover" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[rgba(52,57,77,0.6)]" />
        <div className="relative z-10 text-center px-4">
          <p className="text-[#BCD9DE] tracking-[0.2em] text-sm font-normal uppercase mb-4 font-['Montserrat']">
            Our Story
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white font-['Montserrat']">
            About Our Practice
          </h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-8 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://i.postimg.cc/BQbmNJn4/Chat-GPT-Image-May-13-2026-03-11-10-PM.png" 
                alt="Dr. Aravind" 
                className="w-full h-[500px] object-cover" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <p className="text-[#2D68FF] tracking-[0.15em] text-sm font-normal uppercase mb-4 font-['Montserrat']">
                Our Journey
              </p>
              <h2 className="text-3xl md:text-[28px] font-medium text-[#000000] mb-6 font-['Montserrat']">
                Meet Dr. Aravind
              </h2>
              <p className="text-base text-[#333333] font-serif leading-6 mb-6">
                Dr. Aravind has been serving the Dallas community for over 20 years, bringing expertise, compassion, and a commitment to excellence in every patient interaction. With advanced training in both general and cosmetic dentistry, Dr. Aravind combines technical skill with an artistic eye to create beautiful, healthy smiles.
              </p>
              <p className="text-base text-[#333333] font-serif leading-6 mb-6">
                Our practice was founded on the belief that dental care should be accessible, comfortable, and personalized. We take the time to understand each patient's unique needs and concerns, creating treatment plans that align with their goals and lifestyle.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#FFF300] fill-current" />
                  <Star className="w-5 h-5 text-[#FFF300] fill-current" />
                  <Star className="w-5 h-5 text-[#FFF300] fill-current" />
                  <Star className="w-5 h-5 text-[#FFF300] fill-current" />
                  <Star className="w-5 h-5 text-[#FFF300] fill-current" />
                </div>
                <span className="text-sm text-[#333333] font-['Montserrat']">5-Star Rated Practice</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="max-w-[1200px] mx-auto px-8 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-[28px] font-medium text-[#000000] mb-4 font-['Montserrat']">
              Our Mission & Values
            </h2>
            <p className="text-base text-[#333333] font-serif leading-6 max-w-[640px] mx-auto">
              We are guided by core values that shape every aspect of our practice and patient care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm text-center">
                  <div className="flex justify-center mb-6">
                    <Icon className="w-16 h-16 text-[#2D68FF]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#000000] mb-4 font-['Montserrat']">
                    {value.title}
                  </h3>
                  <p className="text-base text-[#333333] font-serif leading-6">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[#2D68FF]">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <h3 className="text-3xl md:text-[28px] font-medium text-white mb-4 font-['Montserrat']">
            Experience the Difference
          </h3>
          <p className="text-white/85 text-base font-serif mb-8">
            Join our dental family and discover personalized care that puts your smile first.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-transparent hover:bg-white text-white hover:text-[#2D68FF] px-8 py-4 border-2 border-white transition-all duration-300 uppercase tracking-wide text-sm font-medium font-['Montserrat']"
          >
            Schedule Your Visit
          </a>
        </div>
      </section>
    </>
  );
};
