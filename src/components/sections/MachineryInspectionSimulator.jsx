import React, { useState } from 'react';
import { machinerySimulatorData } from '../../data/machineryData';
import { ShieldCheck, CheckCircle2, QrCode, Cpu, Wrench } from 'lucide-react';

export const MachineryInspectionSimulator = () => {
  const [selectedMachine, setSelectedMachine] = useState(machinerySimulatorData[0]);

  return (
    <div className="bg-stellar-navy-800 p-6 rounded-2xl border border-stellar-navy-700 shadow-2xl">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-700">
        <span className="flex items-center gap-2 text-xs text-stellar-blue-300 font-bold uppercase tracking-wider">
          <Cpu className="w-4 h-4" /> Live Machinery Inspection System
        </span>
        <span className="bg-emerald-500/20 text-emerald-400 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-500/30">
          ● System Active v4.2
        </span>
      </div>

      {/* Machine Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
        {machinerySimulatorData.map((m) => (
          <button
            key={m.id}
            onClick={() => setSelectedMachine(m)}
            className={`p-2.5 text-left rounded-lg text-xs font-bold transition border ${
              selectedMachine.id === m.id
                ? 'bg-stellar-blue-600 text-white border-stellar-blue-400 shadow-glow-blue'
                : 'bg-stellar-navy-900 text-slate-300 border-slate-700 hover:bg-stellar-navy-700'
            }`}
          >
            <div className="truncate">{m.name}</div>
            <div className="text-[10px] opacity-75 font-normal truncate">{m.category}</div>
          </button>
        ))}
      </div>

      {/* Active Machine Live Panel */}
      <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div>
            <h4 className="text-white font-bold text-base flex items-center gap-2">
              <Wrench className="w-4 h-4 text-stellar-blue-400" />
              <span>{selectedMachine.name}</span>
            </h4>
            <p className="text-xs text-slate-400 font-mono">Asset ID: {selectedMachine.serial}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-md border border-emerald-500/30 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{selectedMachine.status}</span>
            </span>
          </div>
        </div>

        {/* Inspection Checkpoints */}
        <div className="space-y-2">
          <div className="text-[11px] font-bold text-stellar-blue-300 uppercase tracking-wider">
            Real-Time System Checkpoints:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {selectedMachine.checkpoints.map((cp, idx) => (
              <div key={idx} className="bg-slate-900/90 p-2.5 rounded border border-slate-800 flex justify-between items-center">
                <span className="text-slate-300">{cp.item}</span>
                <span className="text-emerald-400 font-mono text-[11px] font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> {cp.result}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400 font-mono">
          <span>Expiry Date: {selectedMachine.nextDue}</span>
          <span className="flex items-center gap-1 text-stellar-blue-400 font-bold">
            <QrCode className="w-3.5 h-3.5" /> QR Sync OK
          </span>
        </div>
      </div>
    </div>
  );
};
