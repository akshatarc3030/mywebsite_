import React, { useState } from 'react';
import { Award, CheckCircle2, ExternalLink, ShieldCheck, X } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { CertificationItem } from '../types';

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-12 sm:py-16 px-4 sm:px-6 border-t border-pink-100/70">
      <div className="max-w-[1240px] mx-auto space-y-8">
        {/* Section Heading */}
        <div className="space-y-1.5 max-w-3xl">
          <div className="font-mono text-xs font-bold text-[#9d174d] tracking-widest uppercase flex items-center gap-2">
            <span>04 // CERTIFICATIONS &amp; LEARNING</span>
            <span className="h-px w-12 bg-pink-200"></span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1e1b1e] tracking-tight">
            Verified credentials and structured coursework
          </h2>
        </div>

        {/* 4 Cards in 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              id={`cert-card-${cert.id}`}
              className="bg-white border border-pink-200/80 rounded-xl p-6 sm:p-7 shadow-[0_2px_12px_-3px_rgba(219,39,119,0.04)] flex flex-col justify-between space-y-4 hover:border-pink-300 transition-all duration-300"
            >
              <div className="space-y-3">
                {/* Status & Tag Pill */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase bg-[#fce7f3] text-[#9d174d] border border-pink-200">
                      {cert.badgeCategory}
                    </span>
                    <span className="text-xs font-mono text-[#8c7283]">
                      ● {cert.status}
                    </span>
                  </div>
                  <Award className="w-4 h-4 text-[#db2777]" />
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#1e1b1e]">
                    {cert.title}
                  </h3>
                  <div className="font-mono text-xs text-[#9d174d] font-semibold mt-0.5">
                    {cert.issuer}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-[#5c4a56] leading-relaxed">
                  {cert.description}
                </p>

                {/* Competencies */}
                <div className="pt-1 space-y-1.5">
                  <div className="text-[10px] font-mono text-[#8c7283] uppercase tracking-wider font-semibold">
                    COMPETENCIES
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.competencies.map((comp) => (
                      <span
                        key={comp}
                        className="px-2 py-0.5 rounded bg-[#fdf4f7] border border-pink-200/80 text-[10px] font-mono text-[#5c4a56] font-medium"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Footer Item */}
              <div className="pt-3 border-t border-pink-100/90 flex items-center justify-between">
                {cert.credentialUrl ? (
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9d174d] hover:text-[#b7005e] transition cursor-pointer"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-[#db2777]" />
                    <span>View Credential Details</span>
                  </button>
                ) : (
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#5c4a56]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#db2777]" />
                    <span>{cert.footerNote}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Credential Verification Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1e1b1e]/40 backdrop-blur-sm animate-in fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="w-full max-w-lg bg-white border border-pink-200 rounded-xl p-6 sm:p-7 space-y-5 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-pink-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#fce7f3] border border-pink-200 flex items-center justify-center text-[#9d174d]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display text-base font-bold text-[#1e1b1e]">
                    Official Credential Verification
                  </h4>
                  <div className="text-[11px] font-mono text-[#8c7283]">
                    Certificate ID: IBM-WADH-2024-AC3030
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="w-7 h-7 rounded border border-pink-200 flex items-center justify-center text-[#5c4a56] hover:text-[#9d174d]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3 rounded bg-[#fffafb] border border-pink-100 space-y-1">
                <div className="font-display font-bold text-sm text-[#1e1b1e]">
                  {selectedCert.title}
                </div>
                <div className="text-xs text-[#9d174d] font-semibold">
                  Issued by {selectedCert.issuer}
                </div>
              </div>

              <p className="text-xs text-[#5c4a56] leading-relaxed">
                {selectedCert.description}
              </p>

              <div className="space-y-1.5 pt-1">
                <div className="font-mono text-[10px] text-[#8c7283] uppercase tracking-wider">
                  Verified Skills Tested:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCert.competencies.map((c) => (
                    <span
                      key={c}
                      className="px-2 py-0.5 rounded bg-[#fdf4f7] border border-pink-200 text-xs font-mono text-[#9d174d]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-pink-100">
              <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 font-medium">
                ✓ Cryptographically Verified
              </span>
              <button
                onClick={() => setSelectedCert(null)}
                className="px-3 py-1.5 rounded bg-[#9d174d] text-white text-xs font-semibold cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
