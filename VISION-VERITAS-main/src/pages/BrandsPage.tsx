import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrandsSection } from '../components/BrandsSection';

export const BrandsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Premium Eyewear Brands | Glasses & Sunglasses | Vision Veritas</title>
        <meta name="description" content="Explore our curated collection of premium eyewear and designer brands. Find the perfect glasses and sunglasses that suit your style at Vision Veritas." />
        <meta name="keywords" content="eyewear brands, designer glasses, CELINE eyewear, sunglasses, premium frames" />
        <html lang="en-IN" />
      </Helmet>
      <div className="pt-8">
        <BrandsSection />
      </div>
    </>
  );
};
