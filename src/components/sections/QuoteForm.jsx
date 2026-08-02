import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export const QuoteForm = () => {
  const { lang } = useLanguage();
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    const formData = new FormData(e.target);
    formData.append('_subject', 'New Inspection Quote Request - Stellar Technical');

    try {
      const res = await fetch('https://formsubmit.co/ajax/info@stellartech-services.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData
      });
      if (res.ok) {
        setStatus({ type: 'success', msg: lang === 'ar' ? 'تم إرسال طلبك بنجاح!' : 'Your inspection request has been sent successfully!' });
        e.target.reset();
      } else {
        throw new Error('Form error');
      }
    } catch {
      setStatus({ type: 'error', msg: lang === 'ar' ? 'فشل الإرسال. اتصل بنا مباشرة.' : 'Failed to send request. Please try calling us directly.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-stellar-navy-900 p-8 rounded-2xl border border-stellar-navy-800 shadow-2xl">
      <h3 className="text-xl font-bold text-white mb-6">
        {lang === 'ar' ? 'حجز فحص آلي أو طلب عرض' : 'Schedule Inspection Service'}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4 text-slate-800">
        <div>
          <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Company Name</label>
          <input type="text" name="Company_Name" required placeholder="e.g. Oman Construction Corp" className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-stellar-blue-500" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Contact Person</label>
            <input type="text" name="Contact_Person" required placeholder="Full Name" className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-stellar-blue-500" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Phone</label>
            <input type="tel" name="Phone_Number" required placeholder="+968 ..." className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-stellar-blue-500" />
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Service Required</label>
          <select name="Service_Required" className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-stellar-blue-500">
            <option value="Machinery & Crane Inspection">Machinery & Crane Inspection</option>
            <option value="NDT & Load Testing">NDT & Load Testing</option>
            <option value="Calibration (ISO 17025)">Calibration (ISO 17025)</option>
            <option value="Training (ISO 17024)">Training & Personnel (ISO 17024)</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Scope / Machinery Details</label>
          <textarea name="Inspection_Details" rows={3} placeholder="Specify machine quantities, locations..." className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-stellar-blue-500" />
        </div>
        <button type="submit" disabled={submitting} className="w-full bg-stellar-blue-600 hover:bg-stellar-blue-700 text-white font-extrabold py-3.5 rounded-xl text-sm transition shadow-lg flex items-center justify-center gap-2">
          <Send className="w-4 h-4" />
          <span>{submitting ? 'Sending Request...' : 'Submit Request Direct'}</span>
        </button>
      </form>
      {status && (
        <div className={`mt-4 p-4 rounded-xl text-xs font-bold flex items-center gap-2 ${status.type === 'success' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'}`}>
          {status.type === 'success' ? <CheckCircle className="w-4 h-4 shrink-0" /> : <AlertCircle className="w-4 h-4 shrink-0" />}
          <span>{status.msg}</span>
        </div>
      )}
    </div>
  );
};
