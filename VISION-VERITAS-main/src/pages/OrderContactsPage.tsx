import React from 'react';
import { Helmet } from 'react-helmet-async';
import { OrderContactsSection } from '../components/OrderContactsSection';

export const OrderContactsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Order Contacts Online | Direct Shipping | Vision Veritas</title>
        <meta name="description" content="Order your replacement contact lenses securely online with Vision Veritas. We offer convenient and direct door-to-door shipping for all our patients." />
        <meta name="keywords" content="order contacts online, buy contact lenses, contact lens refill, fast shipping contacts" />
        <html lang="en-IN" />
      </Helmet>
      <div className="pt-8">
        <OrderContactsSection />
      </div>
    </>
  );
};
