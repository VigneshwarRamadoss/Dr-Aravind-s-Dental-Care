import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface HeroProps {
  backgroundImage: string;
}

export const Hero: React.FC<HeroProps> = ({ backgroundImage }) => {
  return (
    <section className="relative min-h-[100vh] md:min-h-[100vh] flex flex-col items-center justify-center py-12 md:py-20 text-center px-4">
      <img src={backgroundImage} alt="Dr. Aravind's Dental Clinic" className="absolute inset-0 w-full h-full object-cover object-center" referrerPolicy="no-referrer" fetchPriority="high" />
      <div className="absolute inset-0 bg-[rgba(52,57,77,0.55)]" />
      
      <div className="relative z-10 w-full max-w-[800px] px-4 md:px-8 flex flex-col items-center">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 md:mb-12"
        >
           <p className="text-[#BCD9DE] tracking-[0.15em] md:tracking-[0.2em] text-xs md:text-sm font-normal uppercase mb-4 md:mb-6 font-['Montserrat']">
             Welcome to Excellence
           </p>
           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[34px] font-semibold tracking-normal text-white mb-4 md:mb-6 leading-tight md:leading-[38.76px] font-['Montserrat']">
             YOUR TRUSTED DENTAL CARE<br className="hidden sm:block" />
             <span className="sm:hidden"> </span>IN THE HEART OF CHENNAI
           </h1>
           <p className="text-white text-sm sm:text-base md:text-lg leading-6 max-w-[560px] mx-auto font-serif px-4">
             Experience comprehensive dental care with state-of-the-art technology and a compassionate team dedicated to your smile.
           </p>
        </motion.div>
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-6 w-full max-w-md sm:max-w-none justify-center px-4"
        >
          <Link to="/services" className="bg-[#333333] hover:bg-[#2D68FF] text-white py-3 md:py-4 px-6 md:px-8 transition-all duration-300 tracking-wide text-xs sm:text-sm font-medium uppercase shadow-lg font-['Montserrat'] text-center">
             Explore Our Services
          </Link>
          <Link to="/about" className="bg-transparent hover:bg-white/10 text-white py-3 md:py-4 px-6 md:px-8 border-0 transition-all duration-300 tracking-wide text-xs sm:text-sm font-normal font-['Montserrat'] text-center">
             Our Story →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
