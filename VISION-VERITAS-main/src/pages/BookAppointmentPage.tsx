import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BookAppointmentSection } from '../components/BookAppointmentSection';

export const BookAppointmentPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Book Eye Checkup Appointment | Vision Veritas</title>
        <meta name="description" content="Schedule your next eye exam or checkup with our expert doctors at Vision Veritas. Easy online appointment booking for new and returning patients." />
        <meta name="keywords" content="book eye appointment online, schedule eye exam, new patient appointment, eye doctor visit" />
        <html lang="en-IN" />
      </Helmet>
      <div className="pt-8">
        <BookAppointmentSection />
      </div>
    </>
  );
};
