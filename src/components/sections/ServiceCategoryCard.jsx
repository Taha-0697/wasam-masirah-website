import React from 'react';

export const ServiceCategoryCard = ({ title, items, icon: IconComponent }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <h4 className="font-bold text-stellar-navy-950 border-b border-slate-100 pb-3 mb-4 text-sm text-stellar-blue-600 flex justify-between items-center">
        <span>{title}</span>
        {IconComponent && <IconComponent className="w-5 h-5 text-stellar-blue-500" />}
      </h4>
      <ul className="text-xs text-slate-600 space-y-2 grid grid-cols-2 gap-x-3">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-1.5 truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-stellar-blue-500 shrink-0" />
            <span className="truncate">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
