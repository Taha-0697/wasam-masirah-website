import React from 'react';
import { Logo } from './Logo';
import { useLanguage } from '../../context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-stellar-navy-950 text-slate-400 py-12 text-xs border-t border-stellar-navy-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left rtl:sm:text-right">
          <Logo variant="footer" />
          <div>
            <span className="text-white font-bold text-base block">Stellar Technical Services</span>
            <p className="text-slate-400 text-xs mt-1">
              Sultanate of Oman &bull; ISO/IEC 17020 | 17024 | 17025 Accredited Authority
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-slate-300 font-semibold">
          <a href="#home" className="hover:text-stellar-blue-300 transition">{t('nav_home')}</a>
          <a href="#about" className="hover:text-stellar-blue-300 transition">{t('nav_about')}</a>
          <a href="#erp-system" className="hover:text-stellar-blue-300 transition">{t('nav_erp')}</a>
          <a href="#services" className="hover:text-stellar-blue-300 transition">{t('nav_services')}</a>
          <a href="#certificates" className="hover:text-stellar-blue-300 transition">{t('nav_accred')}</a>
          <a href="#contact" className="hover:text-stellar-blue-300 transition">{t('nav_contact')}</a>
        </div>

        <div className="text-center md:text-right rtl:md:text-left text-slate-500">
          <p>&copy; {new Date().getFullYear()} Stellar Technical Services. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
