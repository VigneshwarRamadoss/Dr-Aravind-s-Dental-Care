import React from 'react';
import { Helmet } from 'react-helmet-async';
import { EyeExamsSection } from '../components/EyeExamsSection';

export const EyeExamsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Complete Eye Exams | Check Your Vision | Vision Veritas</title>
        <meta name="description" content="Get comprehensive eye exams for adults and children at Vision Veritas. We use top-notch medical equipment to check your eye health and vision accurately." />
        <meta name="keywords" content="eye exams Dallas, vision test, pediatric eye exam, complete eye checkup" />
        <html lang="en-IN" />
      </Helmet>
      <div className="pt-8">
        <EyeExamsSection />
      </div>
    </>
  );
};
