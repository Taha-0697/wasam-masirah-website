import React from 'react';
import { QrCode } from 'lucide-react';

export const EcertificateBar = () => {
  return (
    <div className="bg-slate-900 text-white p-8 rounded-2xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
      <div className="space-y-2">
        <span className="bg-stellar-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-md tracking-wider uppercase">
          E-CERTIFICATE FEATURE
        </span>
        <h4 className="text-xl font-bold text-white">
          Automated Digital Inspection Certificates
        </h4>
        <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
          All issued documents are generated directly through our internal ERP with tamper-evident digital signatures, machinery test parameters, and instant QR code verification.
        </p>
      </div>
      <div className="flex items-center gap-4 shrink-0">
        <div className="bg-white p-4 rounded-xl text-center shadow-lg text-slate-950 flex flex-col items-center">
          <QrCode className="w-12 h-12 text-slate-900" />
          <span className="text-[10px] font-extrabold text-slate-700 block mt-1 uppercase tracking-wider">
            Scan to Verify
          </span>
        </div>
      </div>
    </div>
  );
};
