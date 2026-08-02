import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

export const TopBar = () => {
  const { lang, toggleLanguage, t } = useLanguage();

  return (
    <div className="bg-stellar-navy-950 text-slate-300 text-xs py-2.5 px-4 md:px-8 border-b border-stellar-navy-800/80">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 md:gap-6 text-slate-300">
          <span className="flex items-center gap-1.5 hover:text-stellar-blue-300 transition">
            <MapPin className="w-3.5 h-3.5 text-stellar-blue-400" />
            <span>{t('location')}</span>
          </span>
          <a href="tel:+96876886350" className="flex items-center gap-1.5 hover:text-stellar-blue-300 transition">
            <Phone className="w-3.5 h-3.5 text-stellar-blue-400" />
            <span>+968 7688 6350</span>
          </a>
          <a href="mailto:info@stellartech-services.com" className="flex items-center gap-1.5 hover:text-stellar-blue-300 transition hidden md:flex">
            <Mail className="w-3.5 h-3.5 text-stellar-blue-400" />
            <span>info@stellartech-services.com</span>
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 bg-stellar-navy-800 hover:bg-stellar-navy-700 text-stellar-blue-300 font-bold px-3 py-1 rounded border border-stellar-blue-500/30 transition shadow-sm"
            aria-label="Toggle Language"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'العربية' : 'English'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
