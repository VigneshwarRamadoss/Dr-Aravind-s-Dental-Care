import React from 'react';
import { motion } from 'motion/react';

export const StateOfTheArtSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      
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
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop" 
              alt="State-of-the-art dental equipment" 
              className="w-full h-[500px] object-cover" 
              referrerPolicy="no-referrer"
              loading="lazy"
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
               Advanced Technology
             </p>
             <h3 className="text-3xl md:text-[28px] font-medium text-[#000000] mb-6 font-['Montserrat']">
               STATE-OF-THE-ART DENTAL CARE
             </h3>
             <p className="text-base text-[#333333] font-serif leading-6 mb-6">
               Our clinic is equipped with the latest dental technology to ensure accurate diagnoses and comfortable treatments. From digital X-rays to advanced sterilization systems, we invest in tools that enhance your care experience.
             </p>
             <p className="text-base text-[#333333] font-serif leading-6 mb-6">
               We use cutting-edge equipment including intraoral cameras, laser dentistry tools, and 3D imaging systems. This technology allows us to detect issues early, plan treatments precisely, and deliver results that exceed expectations.
             </p>
             <p className="text-base text-[#333333] font-serif leading-6 italic">
               "Precision in every detail, comfort in every visit."
             </p>
          </div>
          
          <div className="pt-6">
            <a 
              href="/services" 
              className="inline-block bg-[#333333] hover:bg-[#2D68FF] text-white px-8 py-4 transition-all duration-300 uppercase tracking-wide text-sm font-medium font-['Montserrat'] shadow-lg"
            >
              Explore Our Technology
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
