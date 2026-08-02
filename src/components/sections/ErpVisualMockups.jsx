import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Monitor, Tablet, FileText } from 'lucide-react';

export const ErpVisualMockups = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-4">
      <div className="bg-stellar-navy-800 p-4 rounded-2xl border border-stellar-navy-700 shadow-2xl">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-700 text-xs text-slate-400">
          <span className="flex items-center gap-2 font-bold text-slate-200">
            <Monitor className="w-4 h-4 text-stellar-blue-300" /> Stellar Central ERP Portal
          </span>
          <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded">
            Live Server v4.2
          </span>
        </div>
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
          alt="Stellar ERP Machinery Management Dashboard"
          className="rounded-xl w-full h-48 object-cover shadow-inner"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-stellar-navy-800 p-3 rounded-2xl border border-stellar-navy-700">
          <div className="text-[11px] font-bold text-stellar-blue-300 mb-2 flex items-center gap-1.5">
            <Tablet className="w-3.5 h-3.5" /> <span>Mobile Field App</span>
          </div>
          <img
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80"
            alt="Inspector Mobile App Interface"
            className="rounded-lg w-full h-28 object-cover"
          />
        </div>

        <div className="bg-stellar-navy-800 p-3 rounded-2xl border border-stellar-navy-700">
          <div className="text-[11px] font-bold text-stellar-blue-300 mb-2 flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5" /> <span>E-Certificate Sync</span>
          </div>
          <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-[10px] font-mono text-slate-300 space-y-1">
            <div className="text-emerald-400 font-bold">[ERP VERIFIED]</div>
            <div>Cert ID: ST-2026-8891</div>
            <div>Equip: Mobile Crane 50T</div>
            <div>QR Sync: Complete</div>
          </div>
        </div>
      </div>
    </div>
  );
};
