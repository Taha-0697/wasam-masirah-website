import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ShieldCheck } from 'lucide-react';

export const AboutCorporate = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-stellar-navy-950 mb-4 flex items-center gap-3">
        <div className="w-10 h-10 bg-stellar-blue-100 text-stellar-blue-600 rounded-xl flex items-center justify-center font-bold">
          <ShieldCheck className="w-5 h-5 text-stellar-blue-600" />
        </div>
        <span>{t('about_h1')}</span>
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-4">
        {t('about_p1')}
      </p>
      <p className="text-slate-600 text-sm leading-relaxed">
        {t('about_p2')}
      </p>
    </div>
  );
};
