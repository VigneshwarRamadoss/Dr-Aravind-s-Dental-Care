import React from 'react';

export const GoldDivider: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-2 my-4">
      <div className="w-16 h-[1px] bg-luxury-gold"></div>
      <div className="w-2 h-2 rounded-full border border-luxury-gold flex items-center justify-center">
         <div className="w-1 h-1 bg-luxury-gold rounded-full"></div>
      </div>
      <div className="w-2 h-2 rounded-full border border-luxury-gold flex items-center justify-center">
         <div className="w-1 h-1 bg-luxury-gold rounded-full"></div>
      </div>
      <div className="w-16 h-[1px] bg-luxury-gold"></div>
    </div>
  );
};
