import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const MetricsBar = () => {
  const { t } = useLanguage();

  const metrics = [
    { value: '5,000+', key: 'stat_tests' },
    { value: '6,000+', key: 'stat_inspections' },
    { value: '2,000+', key: 'stat_certified' },
    { value: '3,000+', key: 'stat_calibrated' }
  ];

  return (
    <section className="py-10 bg-stellar-navy-950 text-white border-b border-stellar-navy-800 relative z-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {metrics.map((metric) => (
          <div
            key={metric.key}
            className="p-6 rounded-2xl bg-stellar-navy-900/80 border border-stellar-navy-800/80 hover:border-stellar-blue-500/50 transition-all duration-300 shadow-lg"
          >
            <div className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-stellar-blue-300 via-stellar-blue-400 to-white mb-2">
              {metric.value}
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400 font-bold">
              {t(metric.key)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
