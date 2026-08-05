import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
const ceoImg = '/Images/OzaiBf.png'; // using logo as placeholder image

export const CeoMessage = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white p-8 rounded-2xl border-2 border-slate-200 shadow-lg relative flex flex-col justify-between">
      <div className="absolute -top-3.5 right-6 left-auto rtl:right-auto rtl:left-6 bg-stellar-navy-900 text-stellar-blue-300 text-xs font-bold px-4 py-1 rounded-full shadow border border-stellar-blue-500/30">
        {t('ceo_badge')}
      </div>
      <div>
        <div className="flex items-center gap-5 mb-6">
          <img
            src={ceoImg}
            alt="CEO - Stellar Technical Services"
            className="w-20 h-20 rounded-full object-cover border-2 border-stellar-blue-500 shadow-md"
          />
          <div>
            <h3 className="font-bold text-lg text-stellar-navy-950">
              {t('ceo_name')}
            </h3>
            <p className="text-xs font-semibold text-stellar-blue-600">
              {t('ceo_role')}
            </p>
            <p className="text-[11px] text-slate-500">Stellar Technical Services Oman</p>
          </div>
        </div>
        <blockquote className="text-slate-600 text-sm leading-relaxed italic space-y-3">
          <p>{t('ceo_q1')}</p>
          <p>{t('ceo_q2')}</p>
          <p>{t('ceo_q3')}</p>
        </blockquote>
      </div>
      <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500 font-semibold">
        <span>Quality &bull; Safety &bull; Digital Innovation</span>
        <span className="text-stellar-navy-950 font-bold">Stellar Leadership</span>
      </div>
    </div>
  );
};
