import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

export const WhySection: React.FC = () => {
  const benefits = [
    '20+ Years of Experience',
    '2,400+ Happy Patients',
    'Same-Day Emergency Care',
    'Advanced Technology'
  ];

  return (
    <section className="py-16 md:py-20 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-8 md:px-10 flex flex-col md:flex-row gap-12 lg:gap-16 items-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 w-full"
        >
          <div className="relative rounded-xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.12)]">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop" 
              alt="Modern dental clinic interior" 
              className="w-full h-[500px] object-cover" 
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex-1 space-y-6"
        >
          <div>
             <p className="text-[#2D68FF] tracking-[0.15em] text-sm font-normal uppercase mb-4 font-['Montserrat']">
               Excellence in Care
             </p>
             <h3 className="text-3xl md:text-[28px] font-medium text-[#000000] mb-6 font-['Montserrat']">
               WHY CHOOSE DR. ARAVIND'S DENTAL CARE?
             </h3>
             <p className="text-base text-[#333333] font-serif leading-6 mb-6">
               At Dr. Aravind's Dental Care, we combine years of expertise with cutting-edge technology to deliver exceptional dental care. Our compassionate team is dedicated to making every visit comfortable and stress-free.
             </p>
             <p className="text-base text-[#333333] font-serif leading-6">
               We believe in building lasting relationships with our patients, providing personalized treatment plans that address your unique needs and goals. Your smile is our priority.
             </p>
          </div>
          
          <div className="space-y-4 pt-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#2D68FF] shrink-0" />
                <span className="text-base text-[#333333] font-['Montserrat']">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="pt-6">
            <a 
              href="/contact" 
              className="inline-block bg-[#333333] hover:bg-[#2D68FF] text-white px-8 py-4 transition-all duration-300 uppercase tracking-wide text-sm font-medium font-['Montserrat'] shadow-lg"
            >
              Meet Our Team
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

