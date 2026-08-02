import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ShieldCheck, Boxes, Smartphone, CheckCircle, Award, Settings } from 'lucide-react';

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative bg-stellar-navy-900 text-white py-24 md:py-36 px-6 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(8, 16, 32, 0.94), rgba(8, 16, 32, 0.94)), url('https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1600&q=80')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stellar-navy-950/40 to-stellar-navy-950 pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-stellar-blue-600/30 text-stellar-blue-300 text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-full border border-stellar-blue-400/40 mb-6 shadow-glow-blue">
          <ShieldCheck className="w-4 h-4 text-stellar-blue-300" />
          <span>{t('hero_badge')}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 leading-tight drop-shadow-lg">
          {t('hero_title')}
        </h1>

        <p className="text-base md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto font-normal leading-relaxed">
          {t('hero_sub')}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#services"
            className="bg-stellar-blue-600 hover:bg-stellar-blue-700 text-white px-8 py-4 rounded-xl font-bold transition shadow-lg shadow-stellar-blue-500/30 flex items-center justify-center gap-2 text-base"
          >
            <Boxes className="w-5 h-5" />
            <span>{t('btn_explore')}</span>
          </a>
          <a
            href="#erp-system"
            className="bg-stellar-navy-800/90 hover:bg-stellar-navy-700 text-stellar-blue-300 border border-stellar-blue-400/40 px-8 py-4 rounded-xl font-bold transition flex items-center justify-center gap-2 text-base backdrop-blur-md"
          >
            <Smartphone className="w-5 h-5" />
            <span>{t('btn_erp')}</span>
          </a>
        </div>

        <div className="mt-14 grid grid-cols-3 max-w-2xl mx-auto gap-4 pt-8 border-t border-slate-800/80">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-slate-200">
            <CheckCircle className="w-4 h-4 text-stellar-blue-400" />
            <span>{t('badge_inspect')}</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-slate-200">
            <Award className="w-4 h-4 text-stellar-blue-400" />
            <span>{t('badge_certified')}</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-slate-200">
            <Settings className="w-4 h-4 text-stellar-blue-400" />
            <span>{t('badge_compliance')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
