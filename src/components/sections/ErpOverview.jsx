import React from 'react';
import { ListChecks, Smartphone, GraduationCap, QrCode } from 'lucide-react';

export const ErpOverview = () => {
  const features = [
    {
      icon: ListChecks,
      title: 'Project Management & Job Dispatch',
      desc: 'Automated assignment of qualified inspectors based on standard accreditations (ASME, API, ISO), scheduling equipment testing with live status tracking.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Inspector App',
      desc: 'Field engineers record machinery test measurements, upload photographic proof, log NDT readings, and issue digital site stickers directly from smartphones or tablets.'
    },
    {
      icon: GraduationCap,
      title: 'Training & Operator Certification Hub',
      desc: 'Centralized management of operator assessments, rigger/crane operator card issuance, training renewals, and candidate competency tracking.'
    },
    {
      icon: QrCode,
      title: 'Instant QR Code Verification Portal',
      desc: 'Every machinery certificate and ID card generated features a unique QR code linked to our ERP server, allowing site safety officers to instantly verify authenticity.'
    }
  ];

  return (
    <div className="space-y-4">
      {features.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={idx}
            className="flex items-start gap-4 p-5 rounded-xl bg-stellar-navy-800/80 border border-stellar-navy-700/80 hover:border-stellar-blue-500/50 transition duration-300"
          >
            <div className="w-12 h-12 bg-stellar-blue-500/20 rounded-xl flex items-center justify-center text-stellar-blue-300 font-bold shrink-0 shadow-inner">
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-base text-white">{item.title}</h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
