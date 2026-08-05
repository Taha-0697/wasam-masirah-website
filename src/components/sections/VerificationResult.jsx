// src/components/sections/VerificationResult.jsx
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { Logo } from '../common/Logo';

function StatusIcon({ status }) {
  if (status === 'Approve') {
    return (
      <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="10" className="opacity-15" fill="currentColor" stroke="none" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 12.5l2.5 2.5 5-5" />
      </svg>
    );
  }
  return (
    <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="10" className="opacity-15" fill="currentColor" stroke="none" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l6 6M15 9l-6 6" />
    </svg>
  );
}

function DetailRow({ label, value, copyable }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    if (!value) return;
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className="group rounded-xl border border-slate-200 bg-white p-4 transition-all hover:border-stellar-blue-300 hover:shadow-md">
      <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</dt>
      <dd className="mt-1 flex items-center justify-between gap-2">
        <span className="font-medium text-slate-800 break-all">{value || '—'}</span>
        {copyable && value && (
          <button
            onClick={handleCopy}
            className="shrink-0 rounded-md p-1.5 text-slate-400 opacity-0 transition-all hover:bg-stellar-blue-50 hover:text-stellar-blue-600 group-hover:opacity-100"
            title="Copy"
          >
            {copied ? (
              <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </button>
        )}
      </dd>
    </div>
  );
}

export function VerificationResult() {
  const endpointApi = import.meta.env.VITE_API_URL;
  const { t } = useLanguage();
  const query = new URLSearchParams(useLocation().search);
  const certNumber = query.get('CertificateNumber') || '';

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!certNumber) {
      setLoading(false);
      setError('No certificate number was provided.');
      return;
    }
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${endpointApi}Certificates/${encodeURIComponent(certNumber)}`);
        if (!response.ok) {
          throw new Error(response.status === 404 ? 'Certificate not found.' : `Request failed (${response.status})`);
        }
        const json = await response.json();
        const { status, certificateNumber, projectName, equipmentName, issuedDate, expiryDate } = json.data || {};
        setData({ status: status || 'Approve', certificateNumber, projectName, equipmentName, issuedDate, expiryDate });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [certNumber, endpointApi]);

  const isValid = data?.status === 'Approve';

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-stellar-navy-950 via-stellar-navy-900 to-stellar-blue-700 px-6">
      {/* Decorative background accents */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-stellar-blue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-stellar-gold-500/10 blur-3xl" />

      <div className="relative w-full max-w-4xl bg-white">
        <Logo variant="header" className="mx-auto " />

        {/* Loading state */}
        {loading && (
          <div className="rounded-2xl bg-white/95 p-12 text-center shadow-2xl backdrop-blur-lg">
            <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-stellar-blue-200 border-t-stellar-blue-600" />
            <p className="text-sm font-medium text-slate-500">Verifying certificate…</p>
          </div>
        )}

        {/* Error state */}
        {!loading && error && (
          <div className="rounded-2xl bg-white/95 p-10 text-center shadow-2xl backdrop-blur-lg animate-fade-in">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-500">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <h2 className="mb-1 text-xl font-bold text-slate-800">Verification Failed</h2>
            <p className="mb-6 text-slate-500">{error}</p>
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 rounded-lg bg-stellar-blue-600 px-6 py-2.5 font-medium text-white shadow-md transition-colors hover:bg-stellar-blue-700"
            >
              Return Home
            </button>
          </div>
        )}

        {/* Result state */}
        {!loading && !error && data && (
          <div className="overflow-hidden rounded-2xl bg-white/95 shadow-2xl backdrop-blur-lg animate-fade-in">
            {/* Status header */}
            <div
              className={`flex items-center gap-4 px-8 py-6 ${isValid ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                }`}
            >
              <StatusIcon status={data.status} />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider opacity-70">
                  Equipment Certificate Verification
                </p>
                <h2 className="text-2xl font-bold">
                  {isValid ? 'Certificate Verified' : 'Certificate Invalid'}
                </h2>
              </div>
            </div>

            {/* Details */}
            <div className="p-8">
              <dl className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <DetailRow label="Certificate Number" value={data.certificateNumber} copyable />
                <DetailRow label="Project Name" value={data.projectName} />
                <DetailRow label="Equipment Name" value={data.equipmentName} />
                <DetailRow
                  label="Issue Date"
                  value={data.issuedDate ? new Date(data.issuedDate).toLocaleDateString() : 'N/A'}
                />
                <DetailRow
                  label="Expiry Date"
                  value={data.expiryDate ? new Date(data.expiryDate).toLocaleDateString() : 'N/A'}
                />
              </dl>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <button
                  onClick={() => navigate('/')}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-stellar-blue-600 px-6 py-2.5 font-medium text-white shadow-md transition-all hover:bg-stellar-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-stellar-gold-500"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                  Verify Another Certificate
                </button>
              </div>
            </div>

            {/* Footer strip */}
            <div className="border-t border-slate-100 bg-slate-50 px-8 py-3 text-center text-xs text-slate-400">
              This result was generated automatically and reflects the certificate status at time of verification.
            </div>
          </div>
        )}
      </div>
    </section>
  );
}