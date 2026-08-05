import React, { useState } from 'react';
import { Award, Gauge, UserCheck, CheckCircle } from 'lucide-react';


export const AccreditationsList = () => {
  const cards = [
    {
      icon: Award,
      sub: 'Inspection Authority',
      title: 'ISO 14001:2015 Environment Management System',
      desc: 'Third Party Inspection, Industrial and Construction Equpments Inspection, Assessment of Operators, HSE Trainings and Technical Trainings, Calibrations, NDT Testing and Materials Testing',
      audit: 'ISO 14001'
    },
    {
      icon: Gauge,
      sub: 'Testing & Calibration',
      title: 'ISO 45001:2018 Occupational Health & Safety Management System',
      desc: 'Third Party Inspection, Industrial and Construction Equpments Inspection, Assessment of Operators, HSE Trainings and Technical Trainings, Calibrations, NDT Testing and Materials Testing',
      audit: 'ISO 45001'
    },
    {
      icon: UserCheck,
      sub: 'Personnel Certification',
      title: 'ISO 9001:2015 Quality Management System',
      desc: 'Third Party Inspection, Industrial and Construction Equpments Inspection, Assessment of Operators, HSE Trainings and Technical Trainings, Calibrations, NDT Testing and Materials Testing',
      audit: 'ISO 9001'
    }
  ];

  const pdfMap = {
    'ISO 14001': '/ISO/STELLAR TECHNICAL SERVICES LLC -  ISO 14001 - F- Sid Sir.pdf',
    'ISO 45001': '/ISO/STELLAR TECHNICAL SERVICES LLC -  ISO 45001  - F- Sid Sir.pdf',
    'ISO 9001': '/ISO/Stellar_Official_Letterhead-v2.pdf',
  };


  return (
    <>
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
              <button onClick={() => window.open(pdfMap[card.audit], "_blank")} className="mt-2 bg-stellar-blue-600 hover:bg-stellar-blue-700 text-white text-sm font-medium px-3 py-1 rounded">
                View ISO Certificate
              </button>
            </div>
          );
        })}
      </div>
    </>

  );
};
