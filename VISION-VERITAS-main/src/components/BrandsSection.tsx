import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const BrandsSection: React.FC = () => {
    return (
        <section id="brands" className="py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col"
                    >
                        <span className="text-[#8e7b54] tracking-[0.25em] text-xs font-bold uppercase mb-4 flex items-center gap-4">
                            Curated Eyewear
                            <span className="w-12 h-[1px] bg-[#8e7b54]"></span>
                        </span>
                        <h2 className="text-4xl lg:text-6xl font-light tracking-widest text-primary uppercase leading-none">OUR BRANDS</h2>
                    </motion.div>
                    
                    <motion.div
                         initial={{ opacity: 0, x: 30 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <button className="bg-transparent text-primary pb-2 border-b-2 border-primary hover:border-[#8e7b54] hover:text-[#8e7b54] transition-all duration-300 font-bold text-sm tracking-[0.15em] uppercase flex items-center gap-2 group">
                            Explore Frame Gallery
                            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                        </button>
                    </motion.div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 h-auto md:h-[700px]">
                    {/* Main Featured Brand */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="md:col-span-8 relative group overflow-hidden h-[400px] md:h-full bg-gray-100"
                    >
                        <img 
                          src="/assets/celine.png" 
                          alt="Luxury CELINE eyeglass frames collection" 
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                          referrerPolicy="no-referrer"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8 md:p-12 z-20">
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <p className="text-[#8e7b54] text-xs font-bold tracking-[0.3em] uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Featured Collection</p>
                                <span className="text-white text-5xl md:text-7xl font-bold tracking-[0.2em] font-sans uppercase">CELINE</span>
                            </div>
                        </div>
                    </motion.div>
                    
                    {/* Right column stacked brands */}
                    <div className="md:col-span-4 flex flex-col gap-4 lg:gap-6 h-full">
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative group overflow-hidden flex-1 h-[300px] md:h-auto bg-gray-100"
                        >
                            <img 
                              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1000&auto=format&fit=crop" 
                              alt="Ray-Ban Sunglasses" 
                              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale hover:grayscale-0" 
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center p-8 z-20">
                                <span className="text-white text-3xl font-bold tracking-[0.25em] font-sans uppercase">RAY-BAN</span>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative group overflow-hidden flex-1 h-[300px] md:h-auto bg-gray-100"
                        >
                             <img 
                               src="/assets/tomford.png" 
                               alt="Elegant Tom Ford eyewear frames" 
                               className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                               referrerPolicy="no-referrer"
                               loading="lazy"
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8 z-20">
                                <span className="text-white text-2xl font-bold tracking-[0.2em] font-sans uppercase">TOM FORD</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
