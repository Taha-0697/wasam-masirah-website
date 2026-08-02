import React from 'react';

export const Logo = ({ variant = 'header', className = '' }) => {
  if (variant === 'footer') {
    return (
      <div className={`flex items-center gap-3 bg-white/95 p-3 rounded-xl border border-white/20 shadow-md ${className}`}>
        <img
          src="/Images/Logo.jpg"
          alt="Stellar Technical Services Logo"
          className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center group ${className}`}>
      <img
        src="/Images/Logo.jpg"
        alt="Stellar Technical Inspection Services Logo"
        className="h-16 sm:h-20 md:h-24 max-h-24 w-auto object-contain filter drop-shadow-md group-hover:scale-105 transition-all duration-300"
      />
    </div>
  );
};
