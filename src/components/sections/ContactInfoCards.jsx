import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Phone, Mail, MapPin } from 'lucide-react';

export const ContactInfoCards = () => {
  const { t } = useLanguage();

  const contacts = [
    { icon: Phone, title: 'Phone Support', val: '+968 76886350', link: 'tel:+96876886350' },
    { icon: Mail, title: 'Direct Email', val: 'info@stellartech-services.com', link: 'mailto:info@stellartech-services.com' },
    { icon: MapPin, title: 'Head Office', val: t('location'), link: '#' }
  ];

  return (
    <div className="space-y-6">
      {contacts.map((c, i) => {
        const Icon = c.icon;
        return (
          <div key={i} className="flex items-center gap-4">
            <div className="w-12 h-12 bg-stellar-navy-900 border border-stellar-blue-500/30 text-stellar-blue-300 rounded-xl flex items-center justify-center font-bold shrink-0 shadow-md">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">{c.title}</h4>
              <a href={c.link} className="text-slate-300 text-sm hover:text-stellar-blue-300 transition">
                {c.val}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
