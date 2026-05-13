import React from 'react';
import { motion } from 'motion/react';
import { Package, ArrowRight } from 'lucide-react';

export const OrderContactsSection: React.FC = () => {
    return (
        <section id="order-contacts" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-sm overflow-hidden flex flex-col md:flex-row min-h-[450px]"
                >
                    {/* Background image on the left half */}
                    <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                        <img 
                            src="/assets/contacts.png" 
                            alt="Contact Lenses" 
                            className="absolute inset-0 w-full h-full object-cover scale-105"
                            referrerPolicy="no-referrer"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-primary/20 mixed-blend-overlay"></div>
                    </div>

                    {/* Dark, sophisticated right half */}
                    <div className="md:w-1/2 bg-primary text-white p-10 md:p-16 flex flex-col justify-center items-start relative z-10">
                        <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none"></div>
                        
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-8 backdrop-blur-sm border border-white/20">
                                <Package size={24} className="text-[#8e7b54]" strokeWidth={1.5} />
                            </div>
                            <span className="text-[#8e7b54] tracking-[0.25em] text-xs font-bold uppercase mb-4 block">Convenient Refills</span>
                            <h2 className="text-3xl lg:text-5xl font-light tracking-widest mb-6 text-white uppercase leading-tight">Order<br/>Contacts</h2>
                            
                            <p className="text-sm lg:text-base text-white/80 font-medium leading-loose mb-10 max-w-md">
                                Running low on contact lenses? Order your replacement contacts quickly and securely online. We offer direct priority shipping right to your door.
                            </p>
                            
                            <button className="bg-[#8e7b54] hover:bg-white text-white hover:text-primary px-8 h-[55px] font-bold text-[13px] transition-all duration-500 uppercase tracking-[0.15em] hover:shadow-[0_10px_30px_rgba(142,123,84,0.3)] hover:-translate-y-1 border border-[#8e7b54] hover:border-white inline-flex items-center gap-3 group">
                                Order Now
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
