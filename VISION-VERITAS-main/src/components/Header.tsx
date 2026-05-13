import React from 'react';
import { Facebook, Instagram, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-[0px_2px_8px_rgba(0,0,0,0.08)]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:items-end py-4 md:py-5 gap-4 md:gap-6 xl:gap-0">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 md:gap-4 shrink-0 justify-center xl:justify-start" aria-label="Dr. Aravind's Dental Care Home">
             <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full border-[2px] border-[#2D68FF] flex items-center justify-center shrink-0">
                <div className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-[#2D68FF] rounded-full" />
             </div>
             <div className="flex flex-col items-center xl:items-start text-center xl:text-left">
                <span className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide text-[#34394D] leading-tight font-['Montserrat'] block">
                   Dr. Aravind's<br className="hidden sm:block"/>
                   <span className="sm:hidden"> </span>Dental Care
                </span>
                <p className="text-[10px] sm:text-[11px] md:text-sm tracking-[0.15em] text-[#2D68FF] font-serif italic mt-1 whitespace-nowrap">Your Smile, Our Priority</p>
             </div>
          </Link>

          <div className="flex flex-col items-center xl:items-end gap-4 md:gap-6 lg:gap-8 w-full xl:w-auto">
             {/* Info & Social Tier */}
             <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 xl:gap-8 text-sm text-[#333333]">
                <div className="text-center sm:text-right">
                   <div className="text-xs text-[#333333] mb-0.5 tracking-wider font-medium">Chennai, India</div>
                   <div className="text-base sm:text-lg md:text-xl font-medium tracking-wide flex items-center gap-2 justify-center sm:justify-end">
                     <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                     <a href="tel:+919841299939" className="hover:text-[#2D68FF] transition-colors text-sm sm:text-base md:text-lg">+91 98412 99939</a>
                   </div>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                    <a href="#" className="hover:text-[#2D68FF] transition-colors" aria-label="Follow us on Facebook"><Facebook className="w-4 h-4 md:w-5 md:h-5" /></a>
                    <a href="#" className="hover:text-[#2D68FF] transition-colors" aria-label="Follow us on Instagram"><Instagram className="w-4 h-4 md:w-5 md:h-5" /></a>
                    <a href="#" className="hover:text-[#2D68FF] transition-colors border-[2px] border-[#333333] rounded-full px-1 py-0 text-[10px] md:text-[11px] font-bold w-5 h-5 md:w-6 md:h-6 flex items-center justify-center" aria-label="View our Google reviews">G</a>
                    <a 
                      href="https://wa.me/919841299939?text=Hi%20Dr.%20Aravind%2C%20this%20is%20my%20first%20visit%20and%20I%27m%20here%20for%20a%20general%20check-up." 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full px-2 md:px-3 py-1 text-[10px] md:text-[11px] font-bold flex items-center gap-1 transition-colors" 
                      aria-label="Chat with us on WhatsApp"
                    >
                      <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      <span className="hidden sm:inline">WhatsApp</span>
                    </a>
                </div>
             </div>

             {/* Navigation Tier */}
             <nav className="flex items-center gap-2 sm:gap-3 md:gap-5 lg:gap-8 text-[10px] sm:text-[11px] md:text-[13px] font-semibold tracking-[0.08em] md:tracking-[0.12em] text-[#333333] uppercase w-full justify-center xl:justify-end flex-wrap">
                <Link to="/" className="whitespace-nowrap hover:text-[#2D68FF] hover:border-b-2 hover:border-[#2D68FF] pb-1 transition-all">Home</Link>
                <span className="text-gray-300 hidden sm:inline font-light">|</span>
                <Link to="/about" className="whitespace-nowrap hover:text-[#2D68FF] hover:border-b-2 hover:border-[#2D68FF] pb-1 transition-all">About</Link>
                <span className="text-gray-300 hidden sm:inline font-light">|</span>
                <Link to="/services" className="whitespace-nowrap hover:text-[#2D68FF] hover:border-b-2 hover:border-[#2D68FF] pb-1 transition-all">Services</Link>
                <span className="text-gray-300 hidden sm:inline font-light">|</span>
                <Link to="/smile-gallery" className="whitespace-nowrap hover:text-[#2D68FF] hover:border-b-2 hover:border-[#2D68FF] pb-1 transition-all">Gallery</Link>
                <span className="text-gray-300 hidden sm:inline font-light">|</span>
                <Link to="/contact" className="whitespace-nowrap text-[#2D68FF] hover:border-b-2 hover:border-[#2D68FF] pb-1 transition-all font-bold">Contact</Link>
             </nav>
          </div>

        </div>
      </div>
    </header>
  );
};
