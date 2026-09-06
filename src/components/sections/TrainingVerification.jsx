// src/components/sections/TrainingVerification.jsx
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { Logo } from '../common/Logo';

function DetailRow({ label, value }) {
  return (
    <div className="group rounded-xl border border-slate-200 bg-white p-4 transition-all hover:border-stellar-blue-300 hover:shadow-md">
      <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</dt>
      <dd className="mt-1 text-lg font-medium text-slate-800 break-all">{value || '—'}</dd>
    </div>
  );
}

export function TrainingVerification() {
  // Directly use the local backend as requested
  const endpointApi = import.meta.env.VITE_API_URL;
  const { t } = useLanguage();
  const query = new URLSearchParams(useLocation().search);
  const trainingCertNumber = query.get('TrainingCertificateNumber') || '';

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!trainingCertNumber) {
      setLoading(false);
      setError('No training certificate number was provided.');
      return;
    }
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${endpointApi}Training/Certificate/${encodeURIComponent(trainingCertNumber)}`);
        if (!response.ok) {
          throw new Error(response.status === 404 ? 'Training certificate not found.' : `Request failed (${response.status})`);
        }
        const json = await response.json();
        const { name, identityNo, position, company } = json.data || {};
        setData({ name, identityNo, position, company });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [trainingCertNumber, endpointApi]);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-stellar-navy-950 via-stellar-navy-900 to-stellar-blue-700 px-6">
      {/* Decorative accents */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-stellar-blue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-stellar-gold-500/10 blur-3xl" />

      <div className="relative w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl">
        <button onClick={() => navigate('/')} className="focus:outline-none">
          <Logo variant="header" className="mx-auto mb-6" />
        </button>

        {loading && (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="h-12 w-12 border-4 border-stellar-blue-200 border-t-stellar-blue-600 rounded-full animate-spin mb-4" />
            <p className="text-sm text-slate-600">Loading training certificate…</p>
          </div>
        )}

        {error && (
          <div className="text-center py-8">
            <p className="text-red-600 font-semibold mb-4">{error}</p>
            <button
              onClick={() => navigate('/')}
              className="px-4 py-2 bg-stellar-blue-600 text-white rounded-md hover:bg-stellar-blue-500"
            >
              Return Home
            </button>
          </div>
        )}

        {data && (
          <dl className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <DetailRow label="Name" value={data.name} />
            <DetailRow label="Identity No" value={data.identityNo} />
            <DetailRow label="Position" value={data.position} />
            <DetailRow label="Company" value={data.company} />
          </dl>
        )}
      </div>
    </section>
  );
}
