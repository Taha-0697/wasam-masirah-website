import React from 'react';
import { serviceTabs } from '../../data/servicesData';
import { useLanguage } from '../../context/LanguageContext';

export const ServicesTabNav = ({ activeTab, setActiveTab }) => {
  const { lang } = useLanguage();

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-10">
      {serviceTabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 border ${
              isActive
                ? 'bg-stellar-navy-900 text-stellar-blue-300 border-stellar-blue-500/50 shadow-lg shadow-stellar-navy-950/20'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
            }`}
          >
            {lang === 'ar' ? tab.nameAr : tab.nameEn}
          </button>
        );
      })}
    </div>
  );
};
