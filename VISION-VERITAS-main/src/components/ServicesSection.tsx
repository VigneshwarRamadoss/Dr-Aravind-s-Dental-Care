import React from 'react';
import { GoldDivider } from './GoldDivider';
import { Smile, Sparkles, Braces, Baby, AlertCircle, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    { 
        title: 'General Dentistry', 
        icon: Stethoscope,
        description: 'Comprehensive dental exams, cleanings, and preventive care for optimal oral health.',
        link: '/services/general-dentistry'
    },
    { 
        title: 'Cosmetic Dentistry', 
        icon: Sparkles,
        description: 'Transform your smile with veneers, whitening, and aesthetic treatments.',
        link: '/services/cosmetic-dentistry'
    },
    { 
        title: 'Orthodontics', 
        icon: Braces,
        description: 'Straighten teeth with braces, clear aligners, and modern orthodontic solutions.',
        link: '/services'
    },
    { 
        title: 'Pediatric Dentistry', 
        icon: Baby,
        description: 'Gentle, specialized dental care for infants, children, and teens.',
        link: '/services'
    },
    { 
        title: 'Emergency Care', 
        icon: AlertCircle,
        description: 'Same-day emergency dental services for urgent dental needs.',
        link: '/services'
    },
    { 
        title: 'Restorative Care', 
        icon: Smile,
        description: 'Crowns, bridges, implants, and dentures to restore your smile.',
        link: '/services'
    },
];

export const ServicesSection: React.FC = () => {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-white relative">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 text-center relative z-10">
                <div className="flex flex-col items-center mb-8 md:mb-12">
                    <p className="text-[#2D68FF] tracking-[0.15em] text-xs sm:text-sm font-normal uppercase mb-3 md:mb-4 font-['Montserrat']">
                        Comprehensive Care
                    </p>
                    <h3 className="text-2xl sm:text-3xl md:text-[28px] font-medium text-[#000000] mb-3 md:mb-4 font-['Montserrat']">
                        OUR DENTAL SERVICES
                    </h3>
                    <p className="text-sm sm:text-base text-[#333333] max-w-[640px] mx-auto font-serif leading-6 px-4">
                        From routine checkups to advanced treatments, we offer complete dental care for your entire family.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <Link 
                                key={index} 
                                to={service.link}
                                className="flex flex-col items-center border border-gray-200 p-6 sm:p-7 md:p-8 rounded-xl bg-white hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-1 group"
                            >
                                <div className="text-[#2D68FF] mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                                    <Icon size={48} strokeWidth={1.5} className="sm:w-14 sm:h-14 md:w-16 md:h-16" />
                                </div>
                                <h4 className="font-semibold text-xl sm:text-2xl md:text-[26px] text-[#000000] mb-2 md:mb-3 font-['Montserrat']">
                                    {service.title}
                                </h4>
                                <p className="text-[#333333] text-sm sm:text-base font-serif leading-6 mb-3 md:mb-4">
                                    {service.description}
                                </p>
                                <span className="text-[#2D68FF] text-base sm:text-lg font-['Montserrat'] hover:underline">
                                    Learn More →
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
