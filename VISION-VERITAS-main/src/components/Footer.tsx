import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-[#34394D] py-12 md:py-16 relative overflow-hidden">
            
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8 relative z-10">
                {/* Logo & Tagline */}
                <div className="lg:col-span-1 text-center sm:text-left">
                    <div className="mb-6">
                        <div className="flex items-center gap-3 mb-4 justify-center sm:justify-start">
                           <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-[2px] border-[#BCD9DE] flex items-center justify-center shrink-0">
                               <div className="w-4 h-4 md:w-5 md:h-5 bg-[#BCD9DE] rounded-full" />
                           </div>
                           <h2 className="text-lg md:text-xl font-semibold tracking-wide text-white leading-tight font-['Montserrat']">
                               Dr. Aravind's<br/>Dental Care
                           </h2>
                        </div>
                        <p className="text-sm text-white/80 font-serif italic leading-relaxed">
                          Your trusted partner for comprehensive dental care and beautiful smiles.
                        </p>
                    </div>
                </div>
                
                {/* Quick Links */}
                <div className="space-y-4 text-sm text-white text-center sm:text-left">
                    <h4 className="font-semibold tracking-wider text-xs uppercase mb-4 md:mb-6 text-[#BCD9DE] font-['Montserrat']">Quick Links</h4>
                    <ul className="space-y-3">
                        <li><Link to="/" className="hover:text-[#BCD9DE] transition-colors">Home</Link></li>
                        <li><Link to="/about" className="hover:text-[#BCD9DE] transition-colors">About</Link></li>
                        <li><Link to="/services" className="hover:text-[#BCD9DE] transition-colors">Services</Link></li>
                        <li><Link to="/smile-gallery" className="hover:text-[#BCD9DE] transition-colors">Smile Gallery</Link></li>
                        <li><Link to="/contact" className="hover:text-[#BCD9DE] transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div className="space-y-4 text-sm text-white text-center sm:text-left">
                    <h4 className="font-semibold tracking-wider text-xs uppercase mb-4 md:mb-6 text-[#BCD9DE] font-['Montserrat']">Services</h4>
                    <ul className="space-y-3">
                        <li><Link to="/services/general-dentistry" className="hover:text-[#BCD9DE] transition-colors">General Dentistry</Link></li>
                        <li><Link to="/services/cosmetic-dentistry" className="hover:text-[#BCD9DE] transition-colors">Cosmetic Dentistry</Link></li>
                        <li><Link to="/services" className="hover:text-[#BCD9DE] transition-colors">Orthodontics</Link></li>
                        <li><Link to="/services" className="hover:text-[#BCD9DE] transition-colors">Pediatric Dentistry</Link></li>
                        <li><Link to="/services" className="hover:text-[#BCD9DE] transition-colors">Emergency Care</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="space-y-4 text-sm text-white text-center sm:text-left">
                    <h4 className="font-semibold tracking-wider text-xs uppercase mb-4 md:mb-6 text-[#BCD9DE] font-['Montserrat']">Contact Info</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 justify-center sm:justify-start">
                            <Phone className="w-4 h-4 mt-1 text-[#BCD9DE] shrink-0" />
                            <a href="tel:+919841299939" className="hover:text-[#BCD9DE] transition-colors">+91 98412 99939</a>
                        </li>
                        <li className="flex items-start gap-3 justify-center sm:justify-start">
                            <MapPin className="w-4 h-4 mt-1 text-[#BCD9DE] shrink-0" />
                            <span>Chennai, India</span>
                        </li>
                        <li className="flex items-start gap-3 justify-center sm:justify-start">
                            <Clock className="w-4 h-4 mt-1 text-[#BCD9DE] shrink-0" />
                            <div>
                                <div>Mon-Fri: 8am - 6pm</div>
                                <div>Sat: 9am - 2pm</div>
                            </div>
                        </li>
                        <li className="pt-2 flex justify-center sm:justify-start">
                            <a 
                                href="https://wa.me/919841299939?text=Hi%20Dr.%20Aravind%2C%20this%20is%20my%20first%20visit%20and%20I%27m%20here%20for%20a%20general%20check-up." 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-3 md:px-4 py-2 rounded transition-all duration-300 text-xs md:text-sm font-medium"
                            >
                                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                </svg>
                                WhatsApp Us
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            
            {/* Social & Copyright */}
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/15 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
                    {/* Social Icons */}
                    <div className="flex items-center gap-4 order-1 md:order-1">
                        <a href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-[#BCD9DE] hover:border-[#BCD9DE] transition-all" aria-label="Facebook">
                            <Facebook className="w-4 h-4 md:w-5 md:h-5" />
                        </a>
                        <a href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-[#BCD9DE] hover:border-[#BCD9DE] transition-all" aria-label="Instagram">
                            <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                        </a>
                    </div>
                    
                    {/* Copyright */}
                    <div className="text-xs text-white/50 font-['Montserrat'] text-center order-2 md:order-2">
                        &copy; {new Date().getFullYear()} Dr. Aravind's Dental Care. All rights reserved. | <Link to="/" className="hover:text-[#BCD9DE]">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
