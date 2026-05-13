import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const ReviewCard = ({ name, source, text, delay }: { name: string, source: string, text: string, delay: number }) => (
    <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay }}
        className="bg-[#34394D] p-8 md:p-10 text-left flex flex-col h-full hover:shadow-[0_8px_24px_rgba(0,0,0,0.16)] transition-shadow duration-500 rounded-lg"
    >
        <div className="flex gap-1 text-[#FFF300] mb-6">
            {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} fill="currentColor" size={16} />
            ))}
        </div>
        <p className="text-white font-serif italic text-base leading-6 flex-grow mb-8 relative">
            <Quote size={24} className="text-white/20 absolute -top-4 -left-3 -z-10 rotate-180" />
            "{text}"
        </p>
        <div>
            <p className="font-semibold text-sm text-[#BCD9DE] mb-1 font-['Montserrat']">{name}</p>
            <p className="font-normal text-xs text-white/60 font-['Montserrat']">{source}</p>
        </div>
    </motion.div>
);

export const ReviewsSection: React.FC = () => {
    return (
        <section className="py-16 md:py-20 bg-[#34394D] text-center relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-8 md:px-10 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center mb-12"
                >
                    <p className="text-[#BCD9DE] tracking-[0.15em] text-sm font-normal uppercase mb-4 font-['Montserrat']">
                        Patient Stories
                    </p>
                    <h2 className="text-3xl md:text-[28px] font-medium text-white mb-4 font-['Montserrat']">
                        WHAT OUR PATIENTS SAY
                    </h2>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
                    <ReviewCard 
                        name="Sarah Martinez"
                        source="Google Review"
                        text="Dr. Aravind and his team are amazing! They made me feel comfortable during my entire treatment. My smile has never looked better!"
                        delay={0.1}
                    />
                    <ReviewCard 
                        name="Michael Chen"
                        source="Patient Review"
                        text="Best dental experience I've ever had. The clinic is modern, the staff is friendly, and Dr. Aravind is incredibly skilled. Highly recommend!"
                        delay={0.2}
                    />
                    <ReviewCard 
                        name="Emily Rodriguez"
                        source="Google Review"
                        text="I was terrified of dentists, but Dr. Aravind's gentle approach changed everything. The team is compassionate and professional. Five stars!"
                        delay={0.3}
                    />
                </div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row justify-center items-center gap-4"
                >
                    <a 
                        href="#" 
                        className="bg-transparent text-white px-8 py-4 border-2 border-white hover:bg-white hover:text-[#34394D] transition-all duration-300 uppercase tracking-wide text-sm font-medium font-['Montserrat']"
                    >
                        View All Reviews
                    </a>
                    <a 
                        href="#" 
                        className="bg-[#BCD9DE] text-[#34394D] px-8 py-4 hover:bg-white transition-all duration-300 uppercase tracking-wide text-sm font-medium font-['Montserrat'] shadow-lg"
                    >
                        Leave a Review
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
