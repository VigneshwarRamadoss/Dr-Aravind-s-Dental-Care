import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Dr. Aravind's Dental Care</title>
        <meta name="description" content="Contact Dr. Aravind's Dental Care in Dallas, TX. Find our location, hours, and get in touch with our friendly team." />
      </Helmet>
      
      {/* Page Hero */}
      <section className="relative h-[400px] flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop" 
          alt="Contact Us" 
          className="absolute inset-0 w-full h-full object-cover" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[rgba(52,57,77,0.6)]" />
        <div className="relative z-10 text-center px-4">
          <p className="text-[#BCD9DE] tracking-[0.2em] text-sm font-normal uppercase mb-4 font-['Montserrat']">
            Get In Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white font-['Montserrat']">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Details & Map */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-8 md:px-10">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Contact Details - 40% */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl md:text-[28px] font-medium text-[#000000] mb-6 font-['Montserrat']">
                  Visit Our Clinic
                </h2>
                <p className="text-base text-[#333333] font-serif leading-6 mb-8">
                  We're conveniently located in the heart of Dallas. Our friendly team is ready to welcome you and provide exceptional dental care.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#2D68FF] shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#000000] mb-1 font-['Montserrat']">Address</h3>
                    <p className="text-[#333333] font-serif">
                      Chennai, India
                    </p>
                    <a 
                      href="https://www.google.com/maps/place/Dr.+Aravind%E2%80%99s+Dental+Care/@13.092408,80.213652,15z/data=!4m6!3m5!1s0x3a52643cc42af423:0x6c3b1a5a3104d5f6!8m2!3d13.0924077!4d80.2136523!16s%2Fg%2F11c5q5y5y5" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#2D68FF] text-sm hover:underline mt-2 inline-block"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#2D68FF] shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#000000] mb-1 font-['Montserrat']">Phone</h3>
                    <a href="tel:+919841299939" className="text-[#333333] font-serif hover:text-[#2D68FF]">
                      +91 98412 99939
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[#2D68FF] shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#000000] mb-1 font-['Montserrat']">WhatsApp</h3>
                    <a 
                      href="https://wa.me/919841299939?text=Hi%20Dr.%20Aravind%2C%20this%20is%20my%20first%20visit%20and%20I%27m%20here%20for%20a%20general%20check-up." 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#333333] font-serif hover:text-[#2D68FF]"
                    >
                      +91 98412 99939
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[#2D68FF] shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#000000] mb-1 font-['Montserrat']">Email</h3>
                    <a href="mailto:info@draravindsdental.com" className="text-[#333333] font-serif hover:text-[#2D68FF]">
                      info@draravindsdental.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-[#2D68FF] shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#000000] mb-2 font-['Montserrat']">Office Hours</h3>
                    <div className="text-[#333333] font-serif space-y-1">
                      <div className="flex justify-between gap-8">
                        <span>Monday - Friday:</span>
                        <span>8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span>Saturday:</span>
                        <span>9:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span>Sunday:</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map - 60% */}
            <div className="md:col-span-3">
              <div className="rounded-xl overflow-hidden shadow-lg h-[500px]">
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
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Care Strip */}
      <section className="py-12 bg-[#F2F2F2]">
        <div className="max-w-[1200px] mx-auto px-8 md:px-10 text-center">
          <h3 className="text-xl font-semibold text-[#000000] mb-3 font-['Montserrat']">
            Dental Emergency?
          </h3>
          <p className="text-base text-[#333333] font-serif mb-4">
            We offer same-day emergency appointments. Call us immediately if you're experiencing dental pain or trauma.
          </p>
          <a 
            href="tel:+919841299939" 
            className="inline-block bg-[#2D68FF] hover:bg-[#333333] text-white px-8 py-3 transition-all duration-300 uppercase tracking-wide text-sm font-medium font-['Montserrat'] shadow-lg"
          >
            Call Now: +91 98412 99939
          </a>
          <a 
            href="https://wa.me/919841299939?text=Hi%20Dr.%20Aravind%2C%20this%20is%20my%20first%20visit%20and%20I%27m%20here%20for%20a%20general%20check-up." 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-3 transition-all duration-300 uppercase tracking-wide text-sm font-medium font-['Montserrat'] shadow-lg ml-4"
          >
            WhatsApp Us
          </a>
        </div>
      </section>
    </>
  );
};
