import React from 'react';
import { motion } from 'motion/react';
import { GoldDivider } from './GoldDivider';

export const AboutUsSection: React.FC = () => {
    return (
        <section id="about-us" className="py-32 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FAFAFA] -z-10 transform skew-x-12 translate-x-32 hidden lg:block"></div>
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-20 items-center">
                
                <motion.div 
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 w-full flex justify-center lg:justify-start relative order-2 lg:order-1"
                >
                    <div className="w-full max-w-[600px] relative">
                         {/* High-end decorative borders */}
                         <div className="absolute -top-6 -left-6 w-full h-full border border-[#8e7b54]/30 z-0"></div>
                         <div className="absolute -bottom-6 -right-6 w-full h-full border border-primary/20 z-0"></div>
                         
                         <div className="relative z-10 shadow-2xl group border-[8px] border-white">
                           <div className="overflow-hidden bg-white">
                             <img 
                               src="/assets/team.png" 
                               alt="Vision Veritas Team" 
                               className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                               style={{ aspectRatio: '2752 / 1536' }}
                               referrerPolicy="no-referrer"
                               loading="lazy"
                             />
                           </div>
                           <div className="absolute -right-8 top-1/2 -translate-y-1/2 bg-primary text-white p-8 shadow-2xl hidden md:flex flex-col items-center justify-center z-20 border border-white/10">
                             <p className="text-4xl font-light tracking-wide font-serif mb-2 text-[#8e7b54]">10+</p>
                             <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-center leading-relaxed">Years of<br/>Clinical<br/>Excellence</p>
                           </div>
                         </div>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="flex-1 space-y-10 text-center lg:text-left order-1 lg:order-2"
                >
                    <div className="flex flex-col items-center lg:items-start">
                        <span className="text-[#8e7b54] tracking-[0.25em] text-xs font-bold uppercase mb-4 block flex items-center gap-4">
                            <span className="w-8 h-[1px] bg-[#8e7b54] hidden lg:block"></span>
                            The Vision Veritas Difference
                        </span>
                        <h2 className="text-4xl lg:text-6xl font-light tracking-wider mb-6 text-text-primary leading-tight">ABOUT<br/>OUR CLINIC</h2>
                        <div className="h-[2px] w-16 bg-[#8e7b54] mb-2" />
                    </div>
                    
                    <div className="space-y-6 text-base lg:text-lg text-text-dark font-normal leading-loose max-w-xl mx-auto lg:mx-0">
                        <p>
                            At Vision Veritas, we are dedicated to providing comprehensive and compassionate eye care for your entire family. Our experienced doctors utilize the latest advancements in optometry to ensure your vision is protected and preserved.
                        </p>
                        <p className="border-l-4 border-[#8e7b54] pl-6 py-2 italic text-primary font-serif text-xl lg:text-2xl font-light leading-snug">
                            "We believe in taking the time to understand each patient's unique visual requirements and lifestyle to recommend the best possible solutions."
                        </p>
                    </div>
                    
                    <div className="pt-4 flex justify-center lg:justify-start">
                        <button className="bg-transparent text-text-primary px-[24px] min-w-[200px] h-[55px] font-bold text-[13px] border-[2px] border-text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 uppercase tracking-[0.15em] flex items-center justify-center gap-3 group">
                            Meet Our Experts
                            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
