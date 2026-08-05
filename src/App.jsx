import React, { useState } from 'react';
import { TopBar } from './components/common/TopBar';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { MetricsBar } from './components/sections/MetricsBar';
import { SectionHeader } from './components/common/SectionHeader';
import { AboutCorporate } from './components/sections/AboutCorporate';
import { AboutMissionVision } from './components/sections/AboutMissionVision';
import { CeoMessage } from './components/sections/CeoMessage';
import { ErpOverview } from './components/sections/ErpOverview';
import { MachineryInspectionSimulator } from './components/sections/MachineryInspectionSimulator';
import { ErpVisualMockups } from './components/sections/ErpVisualMockups';
import { AccreditationsList } from './components/sections/AccreditationsList';
import { EcertificateBar } from './components/sections/EcertificateBar';
import { VerificationResult } from './components/sections/VerificationResult';
import { useLocation } from 'react-router-dom';
import { ServicesTabNav } from './components/sections/ServicesTabNav';
import { ServiceCategoryCard } from './components/sections/ServiceCategoryCard';
import { ContactInfoCards } from './components/sections/ContactInfoCards';
import { QuoteForm } from './components/sections/QuoteForm';
import { inspectionCategories } from './data/servicesData';
import { useLanguage } from './context/LanguageContext';

export function App() {
  const { t } = useLanguage();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('inspection');

  if (location.pathname.startsWith('/verify')) {
    return <VerificationResult />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <TopBar />
      <Navbar />

      <main className="flex-grow">
        <HeroSection />
        <MetricsBar />

        {/* About Section */}
        <section id="about" className="py-24 max-w-7xl mx-auto px-6">
          <SectionHeader tag={t('about_tag')} title={t('about_title')} description={t('about_desc')} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-12">
            <div className="space-y-6">
              <AboutCorporate />
              <AboutMissionVision />
            </div>
            <CeoMessage />
          </div>
        </section>

        {/* Proprietary Machinery Inspection ERP Section */}
        <section id="erp-system" className="py-24 bg-stellar-navy-950 text-white border-y border-stellar-navy-800">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader dark tag={t('erp_tag')} title={t('erp_title')} description={t('erp_desc')} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <ErpOverview />
              <MachineryInspectionSimulator />
            </div>
            <ErpVisualMockups />
          </div>
        </section>

        {/* Accreditations Section */}
        <section id="certificates" className="py-24 max-w-7xl mx-auto px-6">
          <SectionHeader tag={t('cert_tag')} title={t('cert_title')} description={t('cert_desc')} />
          <AccreditationsList />
          <EcertificateBar />
        </section>

        {/* Interactive Services Section */}
        <section id="services" className="py-24 bg-slate-100 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader tag={t('services_tag')} title={t('services_title')} description={t('services_desc')} />
            <ServicesTabNav activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {inspectionCategories.map((cat, idx) => (
                <ServiceCategoryCard key={idx} title={cat.title} items={cat.items} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-stellar-navy-950 text-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader dark tag={t('contact_tag')} title={t('contact_title')} description={t('contact_desc')} />
              <ContactInfoCards />
            </div>
            <QuoteForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
export default App;
