import React from 'react';
import { Award, Gauge, UserCheck, CheckCircle } from 'lucide-react';

export const AccreditationsList = () => {
  const cards = [
    {
      icon: Award,
      sub: 'Inspection Authority',
      title: 'ISO/IEC 17020 Accredited',
      desc: 'Recognized Type-A Inspection Body authorization for third-party examination of cranes, lifting equipment, pressure vessels, and heavy construction machinery.',
      audit: 'ISO-17020'
    },
    {
      icon: Gauge,
      sub: 'Testing & Calibration',
      title: 'ISO/IEC 17025 Accredited',
      desc: 'International accreditation for calibration laboratories covering pressure gauges, electrical meters, mechanical, and torque measurement instruments.',
      audit: 'ISO-17025'
    },
    {
      icon: UserCheck,
      sub: 'Personnel Certification',
      title: 'ISO/IEC 17024 Accredited',
      desc: 'Certified personnel body validating crane operators, riggers, scaffolders, and safety supervisors across industrial and construction sites.',
      audit: 'ISO-17024'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {cards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <div
            key={idx}
            className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:border-stellar-blue-500 hover:shadow-xl transition-all duration-300"
          >
            <div className="w-12 h-12 bg-stellar-blue-100 text-stellar-blue-600 rounded-xl flex items-center justify-center font-bold text-xl mb-4 group-hover:bg-stellar-blue-600 group-hover:text-white transition-colors">
              <Icon className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-bold text-stellar-blue-600 uppercase tracking-wider block mb-1">
              {card.sub}
            </span>
            <h3 className="text-lg font-bold text-stellar-navy-950 mb-2">{card.title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">{card.desc}</p>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
              <span>ERP Audit ID: {card.audit}</span>
              <span className="text-emerald-600 font-bold flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" /> Verified
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
