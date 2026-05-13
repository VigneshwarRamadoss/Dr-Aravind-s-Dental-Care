import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SmileGalleryPage: React.FC = () => {
  const galleryItems = [
    {
      before: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop',
      after: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop',
      treatment: 'Veneers'
    },
    {
      before: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=600&auto=format&fit=crop',
      after: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600&auto=format&fit=crop',
      treatment: 'Whitening'
    },
    {
      before: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=600&auto=format&fit=crop',
      after: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop',
      treatment: 'Braces'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Smile Gallery | Dr. Aravind's Dental Care</title>
        <meta name="description" content="View before and after photos of our dental transformations. See real results from our cosmetic and restorative dentistry treatments." />
      </Helmet>
      
      {/* Page Hero */}
      <section className="relative h-[400px] flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop" 
          alt="Smile Gallery" 
          className="absolute inset-0 w-full h-full object-cover" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[rgba(52,57,77,0.6)]" />
        <div className="relative z-10 text-center px-4">
          <p className="text-[#BCD9DE] tracking-[0.2em] text-sm font-normal uppercase mb-4 font-['Montserrat']">
            Real Results
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white font-['Montserrat']">
            Smile Gallery
          </h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-20 bg-[#F2F2F2]">
        <div className="max-w-[1200px] mx-auto px-8 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-[28px] font-medium text-[#000000] mb-4 font-['Montserrat']">
              Transformations That Speak for Themselves
            </h2>
            <p className="text-base text-[#333333] font-serif leading-6 max-w-[640px] mx-auto">
              Browse our collection of before and after photos showcasing the life-changing results we've achieved for our patients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img 
                      src={item.before} 
                      alt="Before treatment" 
                      className="w-full h-48 object-cover" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 left-2 bg-[#34394D] text-white px-3 py-1 rounded text-xs font-['Montserrat']">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src={item.after} 
                      alt="After treatment" 
                      className="w-full h-48 object-cover" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 right-2 bg-[#BCD9DE] text-[#34394D] px-3 py-1 rounded text-xs font-['Montserrat']">
                      After
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <p className="text-sm font-semibold text-[#2D68FF] font-['Montserrat']">
                    {item.treatment}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[#2D68FF]">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <h3 className="text-3xl md:text-[28px] font-medium text-white mb-4 font-['Montserrat']">
            Your Transformation Awaits
          </h3>
          <p className="text-white/85 text-base font-serif mb-8">
            Schedule a consultation to discuss how we can transform your smile.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-transparent hover:bg-white text-white hover:text-[#2D68FF] px-8 py-4 border-2 border-white transition-all duration-300 uppercase tracking-wide text-sm font-medium font-['Montserrat']"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </>
  );
};
