import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Laptop, Droplet, ArrowRight } from 'lucide-react';

export const SpecialtyEyeCareSection: React.FC = () => {
    return (
        <section id="specialty-eye-care" className="py-32 bg-[#F3F4F6] relative overflow-hidden">
            {/* Delicate background pattern */}
            <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center mb-20 text-center"
                >
                    <span className="flex items-center gap-3 text-[#8e7b54] tracking-[0.2em] text-xs font-bold uppercase mb-6">
                        <span className="w-12 h-[1px] bg-[#8e7b54]"></span>
                        Advanced Treatments
                        <span className="w-12 h-[1px] bg-[#8e7b54]"></span>
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-light tracking-widest mb-6 text-primary uppercase leading-tight">Specialty<br/>Eye Care</h2>
                    <p className="max-w-2xl text-base lg:text-lg text-text-dark/80 font-medium leading-relaxed mt-4">
                        Beyond standard vision correction, our practice offers specialty care to treat complex ocular conditions and improve your quality of life.
                    </p>
                </motion.div>
                
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 w-full">
                     <motion.div 
                         initial={{ opacity: 0, y: 30 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true, margin: "-50px" }}
                         transition={{ duration: 0.6, delay: 0.1 }}
                         className="flex flex-col bg-white p-12 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-500 group relative z-10 hover:-translate-y-2 cursor-pointer"
                     >
                         <div className="w-16 h-16 bg-[#F8F9FA] rounded-full flex items-center justify-center mb-10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                             <Droplet size={28} strokeWidth={1.5} />
                         </div>
                         <h3 className="text-xl font-semibold mb-4 text-text-primary uppercase tracking-wider group-hover:text-[#8e7b54] transition-colors">Dry Eye Therapy</h3>
                         <p className="text-text-dark/70 text-sm leading-loose mb-10 flex-grow">Advanced treatments to alleviate discomfort and restore the natural balance of your tears.</p>
                         <div className="flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-primary mt-auto">
                             Explore Therapy <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
                         </div>
                     </motion.div>
                     
                     <motion.div 
                         initial={{ opacity: 0, y: 30 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true, margin: "-50px" }}
                         transition={{ duration: 0.6, delay: 0.2 }}
                         className="flex flex-col bg-primary text-white p-12 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(31,74,94,0.3)] transition-all duration-500 group relative z-20 md:-mt-8 md:mb-8 cursor-pointer"
                     >
                         <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-10 text-white group-hover:bg-[#8e7b54] transition-colors duration-500 border border-white/20">
                             <Laptop size={28} strokeWidth={1.5} />
                         </div>
                         <h3 className="text-xl font-semibold mb-4 text-white uppercase tracking-wider">Digital Eye Strain</h3>
                         <p className="text-white/80 text-sm leading-loose mb-10 flex-grow">Customized lens solutions and advanced lifestyle advice to reduce ocular fatigue from blue light and screens.</p>
                         <div className="flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-white mt-auto">
                             Find Relief <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
                         </div>
                     </motion.div>
                     
                     <motion.div 
                         initial={{ opacity: 0, y: 30 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true, margin: "-50px" }}
                         transition={{ duration: 0.6, delay: 0.3 }}
                         className="flex flex-col bg-white p-12 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-500 group relative z-10 hover:-translate-y-2 cursor-pointer"
                     >
                         <div className="w-16 h-16 bg-[#F8F9FA] rounded-full flex items-center justify-center mb-10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                             <ShieldCheck size={28} strokeWidth={1.5} />
                         </div>
                         <h3 className="text-xl font-semibold mb-4 text-text-primary uppercase tracking-wider group-hover:text-[#8e7b54] transition-colors">Disease Mgt</h3>
                         <p className="text-text-dark/70 text-sm leading-loose mb-10 flex-grow">Ongoing care and strict monitoring for glaucoma, macular degeneration, and diabetic retinopathy.</p>
                         <div className="flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-primary mt-auto">
                             View Services <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
                         </div>
                     </motion.div>
                </div>
            </div>
        </section>
    );
};
