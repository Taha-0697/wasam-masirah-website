import React, { useState } from 'react';
import { Logo } from './Logo';
import { useLanguage } from '../../context/LanguageContext';
import { ClipboardCheck, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '#home', key: 'nav_home' },
    { href: '#about', key: 'nav_about' },
    { href: '#services', key: 'nav_services' },
    { href: '#erp-system', key: 'nav_erp' },
    { href: '#certificates', key: 'nav_accred' },
    { href: '#contact', key: 'nav_contact' },
  ];

  return (
    <header className="relative z-50 bg-white border-b border-slate-200/80 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <a href="#home" className="flex items-center py-1">
          <Logo variant="header" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-7 rtl:space-x-reverse font-semibold text-slate-700 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="hover:text-stellar-blue-600 transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-stellar-blue-500 hover:after:w-full after:transition-all"
            >
              {t(link.key)}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            className="bg-stellar-blue-600 hover:bg-stellar-blue-700 text-white font-bold px-5 py-2.5 rounded-lg text-sm transition shadow-lg shadow-stellar-blue-500/25 flex items-center gap-2"
          >
            <ClipboardCheck className="w-4 h-4" />
            <span>{t('btn_book')}</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-slate-700 p-2 rounded-lg hover:bg-slate-100"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3 font-semibold text-slate-700">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 hover:text-stellar-blue-600 border-b border-slate-100"
            >
              {t(link.key)}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="w-full mt-2 bg-stellar-blue-600 text-white text-center font-bold px-4 py-2.5 rounded-lg block"
          >
            {t('btn_book')}
          </a>
        </div>
      )}
    </header>
  );
};
