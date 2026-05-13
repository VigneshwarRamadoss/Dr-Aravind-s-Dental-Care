import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SpecialtyEyeCareSection } from '../components/SpecialtyEyeCareSection';

export const SpecialtyCarePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Speciality Eye Care | Advanced Treatments | Vision Veritas</title>
        <meta name="description" content="Vision Veritas offers specialty eye care services including dry eye therapy, digital eye strain management, and comprehensive disease monitoring." />
        <meta name="keywords" content="speciality eye care, dry eye treatment, digital eye strain, glaucoma care, diabetic retinopathy" />
        <html lang="en-IN" />
      </Helmet>
      <div className="pt-8">
        <SpecialtyEyeCareSection />
      </div>
    </>
  );
};
