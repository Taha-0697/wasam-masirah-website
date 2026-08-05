import React from 'react';

export const Logo = ({ variant = 'header', className = '' }) => {
  if (variant === 'footer') {
    return (
      <div className={`flex items-center gap-3 bg-white/95 p-3 rounded-xl border border-white/20 shadow-md ${className}`}>
        <img
          src="/Images/Logo.jpg"
          alt="Stellar Technical Services Logo"
          className="h-16 md:h-20 w-auto object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center h-20 sm:h-24 md:h-28 w-28 sm:w-36 md:w-44 overflow-hidden group ${className}`}>
      <img
        src="/Images/Logo.jpg"
        alt="Stellar Technical Inspection Services Logo"
        className="h-full w-full object-cover filter drop-shadow-md group-hover:scale-105 transition-all duration-300"
      />
    </div>
  );
};