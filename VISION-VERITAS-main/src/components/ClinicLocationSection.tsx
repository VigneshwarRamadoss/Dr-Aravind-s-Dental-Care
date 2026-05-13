import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock } from 'lucide-react';

export const ClinicLocationSection: React.FC = () => {
    return (
        <section className="py-16 md:py-20 bg-white relative">
            <div className="max-w-[1200px] mx-auto px-8 md:px-10 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center mb-12 text-center"
                >
                   <p className="text-[#2D68FF] tracking-[0.15em] text-sm font-normal uppercase mb-4 font-['Montserrat']">
                     Visit Us
                   </p>
                   <h2 className="text-3xl md:text-[28px] font-medium text-[#000000] mb-4 font-['Montserrat']">
                     FIND OUR DENTAL CLINIC IN DALLAS
                   </h2>
                   <p className="text-base text-[#333333] font-serif leading-6 max-w-[640px]">
                     Conveniently located in the heart of Dallas, we're here to serve you and your family.
                   </p>
                </motion.div>
                
                <div className="grid lg:grid-cols-5 gap-8 items-start">
                    {/* Contact Details */}
                    <div className="lg:col-span-2 space-y-8">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-[#F2F2F2] p-8 rounded-xl"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <MapPin className="w-6 h-6 text-[#2D68FF]" />
                                <h3 className="font-semibold text-lg text-[#000000] font-['Montserrat']">Address</h3>
                            </div>
                            <p className="text-base text-[#333333] font-serif leading-6 mb-4">
                                Chennai, India
                            </p>
                            <a 
                                href="https://www.google.com/maps/place/Dr.+Aravind%E2%80%99s+Dental+Care/@13.092408,80.213652,15z/data=!4m6!3m5!1s0x3a52643cc42af423:0x6c3b1a5a3104d5f6!8m2!3d13.0924077!4d80.2136523!16s%2Fg%2F11c5q5y5y5" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-[#2D68FF] text-sm hover:underline font-['Montserrat']"
                            >
                                Get Directions →
                            </a>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-[#F2F2F2] p-8 rounded-xl"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Phone className="w-6 h-6 text-[#2D68FF]" />
                                <h3 className="font-semibold text-lg text-[#000000] font-['Montserrat']">Contact</h3>
                            </div>
                            <div className="space-y-3 text-base text-[#333333] font-serif">
                                <p>
                                    <span className="text-[#333333]/70">Phone:</span>{' '}
                                    <a href="tel:+919841299939" className="hover:text-[#2D68FF]">+91 98412 99939</a>
                                </p>
                                <p>
                                    <span className="text-[#333333]/70">WhatsApp:</span>{' '}
                                    <a 
                                        href="https://wa.me/919841299939?text=Hi%20Dr.%20Aravind%2C%20this%20is%20my%20first%20visit%20and%20I%27m%20here%20for%20a%20general%20check-up." 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-[#2D68FF]"
                                    >
                                        +91 98412 99939
                                    </a>
                                </p>
                                <p>
                                    <span className="text-[#333333]/70">Email:</span>{' '}
                                    <a href="mailto:info@draravindsdental.com" className="hover:text-[#2D68FF] break-all">
                                        info@draravindsdental.com
                                    </a>
                                </p>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-[#F2F2F2] p-8 rounded-xl"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Clock className="w-6 h-6 text-[#2D68FF]" />
                                <h3 className="font-semibold text-lg text-[#000000] font-['Montserrat']">Hours</h3>
                            </div>
                            <div className="space-y-3 text-sm text-[#333333] font-serif">
                                <div className="flex justify-between pb-2 border-b border-gray-300">
                                    <span className="font-semibold">Monday - Friday</span>
                                    <span>8:00 AM – 6:00 PM</span>
                                </div>
                                <div className="flex justify-between pb-2 border-b border-gray-300">
                                    <span className="font-semibold">Saturday</span>
                                    <span>9:00 AM – 2:00 PM</span>
                                </div>
                                <div className="flex justify-between opacity-60">
                                    <span className="font-semibold">Sunday</span>
                                    <span>Closed</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    
                    {/* Map */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-3"
                    >
                        <div className="rounded-xl overflow-hidden shadow-lg h-[600px]">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7772.21390549098!2d80.21365229999999!3d13.092407699999999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52643cc42af423%3A0x6c3b1a5a3104d5f6!2sDr.%20Aravind%E2%80%99s%20Dental%20Care!5e0!3m2!1sen!2sin!4v1778665341448!5m2!1sen!2sin" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Dr. Aravind's Dental Care Location"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
