import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ProfilesSection } from './components/ProfilesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

export default function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 4000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'Akshata Chavan — Technical Portfolio',
          text: 'Explore the AI, Data Science & IoT portfolio of Akshata Chavan (REVA University).',
          url: window.location.href,
        })
        .catch(() => {
          navigator.clipboard.writeText(window.location.href);
          showToast('Portfolio link copied to clipboard!');
        });
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('Portfolio link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-[#fff7fb] text-[#1e1b1e] selection:bg-[#fce7f3] selection:text-[#9d174d] relative">
      {/* Navigation Header */}
      <Navbar onCopyShare={handleShare} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <ProfilesSection />
        <ContactSection onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer onCopyShare={handleShare} />

      {/* Notifications Toast */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
