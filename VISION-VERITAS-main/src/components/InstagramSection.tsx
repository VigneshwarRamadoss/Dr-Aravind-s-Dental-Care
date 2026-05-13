import React from 'react';
import { GoldDivider } from './GoldDivider';

export const InstagramSection: React.FC = () => {
    return (
        <section className="py-spacing-20 bg-white text-center">
            <div className="flex flex-col items-center mb-16">
                <h2 className="text-4xl font-normal tracking-wider mb-2">CHECK US OUT ON INSTAGRAM</h2>
                <GoldDivider />
            </div>
            
            {/* Mock Instagram Grid */}
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                <img src="/assets/insta1.png" alt="Optometrist examining a patient's eye with specialized equipment" className="w-full aspect-square object-cover" loading="lazy" />
                <img src="/assets/insta2.png" alt="A wide selection of designer eyewear frames on display" className="w-full aspect-square object-cover" loading="lazy" />
                <img src="/assets/insta3.png" alt="Close-up of high-quality prescription lenses" className="w-full aspect-square object-cover" loading="lazy" />
                <img src="/assets/insta4.png" alt="Modern clinic waiting area at Vision Veritas Dallas" className="w-full aspect-square object-cover" loading="lazy" />
            </div>

            <button className="bg-transparent text-text-primary px-[12px] py-[4px] border border-text-primary hover:bg-background-off-white hover:text-primary hover:border-primary transition-colors text-[20px] font-[400] leading-[20px] rounded-[4px]">
                Follow on Instagram
            </button>
        </section>
    );
};
