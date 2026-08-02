import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Target, Eye } from 'lucide-react';

export const AboutMissionVision = () => {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="bg-stellar-navy-900 text-white p-6 rounded-2xl border border-stellar-navy-800 shadow-md">
        <div className="w-10 h-10 bg-stellar-blue-600 text-white rounded-xl flex items-center justify-center font-bold mb-4 shadow-glow-blue">
          <Target className="w-5 h-5" />
        </div>
        <h4 className="font-bold text-base mb-2 text-stellar-blue-300">
          {t('mission_title')}
        </h4>
        <p className="text-xs text-slate-300 leading-relaxed">
          {t('mission_desc')}
        </p>
      </div>

      <div className="bg-stellar-navy-900 text-white p-6 rounded-2xl border border-stellar-navy-800 shadow-md">
        <div className="w-10 h-10 bg-stellar-blue-600 text-white rounded-xl flex items-center justify-center font-bold mb-4 shadow-glow-blue">
          <Eye className="w-5 h-5" />
        </div>
        <h4 className="font-bold text-base mb-2 text-stellar-blue-300">
          {t('vision_title')}
        </h4>
        <p className="text-xs text-slate-300 leading-relaxed">
          {t('vision_desc')}
        </p>
      </div>
    </div>
  );
};
