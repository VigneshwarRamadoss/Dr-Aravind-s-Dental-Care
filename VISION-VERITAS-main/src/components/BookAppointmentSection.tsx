import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowUpRight } from 'lucide-react';

export const BookAppointmentSection: React.FC = () => {
    return (
        <section id="book-appointment" className="py-24 bg-[#FAFAFA] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row relative z-10 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
                    
                    {/* Left side: content */}
                    <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="w-16 h-16 bg-[#F8F9FA] flex items-center justify-center mb-8 border border-gray-100 rounded-sm">
                                <Calendar size={28} className="text-[#8e7b54]" strokeWidth={1.5} />
                            </div>
                            <span className="text-[#8e7b54] tracking-[0.25em] text-xs font-bold uppercase mb-4 block flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-[#8e7b54]"></span>
                                Schedule Today
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-light tracking-widest mb-6 text-primary uppercase leading-tight">Book Your<br/>Appointment</h2>
                            
                            <p className="text-sm lg:text-base text-text-dark/80 font-medium leading-loose mb-10">
                                Take the first step towards clearer vision and healthier eyes. Schedule a comprehensive consultation with our expert optometry team today.
                            </p>
                            
                            <div className="flex flex-col gap-4">
                                <button className="w-full relative overflow-hidden bg-primary text-white p-5 font-bold text-[13px] transition-all duration-300 uppercase tracking-[0.15em] border border-primary group flex items-center justify-between hover:bg-[#153444]">
                                    <span className="relative z-10">New Patient Consultation</span>
                                    <ArrowUpRight size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                                <button className="w-full relative overflow-hidden bg-transparent text-primary p-5 font-bold text-[13px] transition-all duration-300 uppercase tracking-[0.15em] border border-gray-300 hover:border-primary group flex items-center justify-between">
                                    <span className="relative z-10">Returning Patient</span>
                                    <ArrowUpRight size={18} className="relative z-10 text-gray-400 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right side: Image */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="lg:w-1/2 min-h-[400px] lg:min-h-full relative overflow-hidden"
                    >
                        <img 
                            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop" 
                            alt="Clinic Interior" 
                            className="absolute inset-0 w-full h-full object-cover scale-105 duration-1000 transition-transform hover:scale-100"
                            referrerPolicy="no-referrer"
                        />
                        {/* Overlay gradient for depth */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent pointer-events-none"></div>
                    </motion.div>
                    
                </div>
            </div>
        </section>
    );
};
