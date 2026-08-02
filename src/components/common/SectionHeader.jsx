import React from 'react';

export const SectionHeader = ({ tag, title, description, dark = false }) => {
  return (
    <div className="text-center mb-16 max-w-3xl mx-auto px-4">
      {tag && (
        <span className={`inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${
          dark
            ? 'bg-stellar-blue-500/20 text-stellar-blue-300 border border-stellar-blue-400/30'
            : 'bg-stellar-blue-100 text-stellar-blue-700 border border-stellar-blue-200'
        }`}>
          {tag}
        </span>
      )}
      {title && (
        <h2 className={`text-3xl md:text-4xl font-extrabold tracking-tight ${dark ? 'text-white' : 'text-stellar-navy-950'}`}>
          {title}
        </h2>
      )}
      {description && (
        <p className={`mt-3 text-sm md:text-base leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
};
