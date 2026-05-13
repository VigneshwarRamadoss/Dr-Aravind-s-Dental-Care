import React from 'react';
import { motion } from 'motion/react';
import { GoldDivider } from './GoldDivider';
import { Stethoscope, Contact } from 'lucide-react';

export const EyeExamsSection: React.FC = () => {
    return (
        <section id="eye-exams" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FAFAFA] z-0 hidden lg:block rounded-bl-[120px]"></div>
            
            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center mb-16 text-center"
                >
                    <span className="text-[#8e7b54] tracking-[0.2em] text-xs font-bold uppercase mb-4 block">Clear Vision Ahead</span>
                    <h2 className="text-4xl lg:text-5xl font-light tracking-wider mb-6 text-text-primary uppercase leading-tight">Comprehensive<br/>Eye Exams</h2>
                    <GoldDivider />
                </motion.div>
                
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-16">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="space-y-6 text-base lg:text-lg text-text-dark font-medium leading-relaxed max-w-xl"
                    >
                        <p>
                            Through comprehensive eye exams, we ensure that your vision is clear and your eyes are healthy. We utilize the latest technology to evaluate not just what you see, but the overall health of your ocular structures.
                        </p>
                        <p>
                            A routine eye exam is essential for detecting early signs of conditions such as glaucoma, cataracts, and macular degeneration, long before you notice any symptoms.
                        </p>
                        <div className="pt-6">
                            <button className="bg-transparent text-text-primary px-[20px] w-full sm:w-auto min-w-[280px] h-[55px] font-bold text-[14px] border-[2px] border-text-primary hover:bg-[#1F4A5E] hover:text-white hover:border-[#1F4A5E] transition-all duration-300 uppercase tracking-[0.15em]">
                                Learn More
                            </button>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid sm:grid-cols-2 gap-6 w-full"
                    >
                         <div className="bg-white p-10 border border-muted-lavender/30 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                             <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] z-0 transition-all duration-500 group-hover:bg-primary/10 group-hover:scale-110"></div>
                             <div className="relative z-10">
                                 <div className="w-16 h-16 bg-[#FAFAFA] rounded-full flex items-center justify-center mb-8 border border-muted-lavender/40 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                                     <Stethoscope size={28} strokeWidth={1.5} />
                                 </div>
                                 <h3 className="text-xl font-semibold mb-4 text-text-primary uppercase tracking-wide">Adult Eye Exams</h3>
                                 <p className="text-text-dark text-sm leading-relaxed">Annual exams strictly tailored to your changing lifestyle, visual demands, and age-related health risk factors.</p>
                             </div>
                         </div>
                         
                         <div className="bg-white p-10 border border-muted-lavender/30 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden lg:mt-12">
                             <div className="absolute top-0 right-0 w-24 h-24 bg-[#8e7b54]/5 rounded-bl-[100px] z-0 transition-all duration-500 group-hover:bg-[#8e7b54]/10 group-hover:scale-110"></div>
                             <div className="relative z-10">
                                 <div className="w-16 h-16 bg-[#FAFAFA] rounded-full flex items-center justify-center mb-8 border border-muted-lavender/40 text-[#8e7b54] group-hover:bg-[#8e7b54] group-hover:text-white transition-colors duration-500">
                                     <Contact size={28} strokeWidth={1.5} />
                                 </div>
                                 <h3 className="text-xl font-semibold mb-4 text-text-primary uppercase tracking-wide">Pediatric Exams</h3>
                                 <p className="text-text-dark text-sm leading-relaxed">Early detection of critical vision issues to support your child's learning, development, and academic success.</p>
                             </div>
                         </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
