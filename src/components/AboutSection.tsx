import React from 'react';
import { GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, WORKFLOW_STAGES } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 px-4 sm:px-6 border-t border-pink-100/70">
      <div className="max-w-[1240px] mx-auto space-y-8">
        {/* Section Heading */}
        <div className="space-y-1.5">
          <div className="font-mono text-xs font-bold text-[#9d174d] tracking-widest uppercase flex items-center gap-2">
            <span>01 // ABOUT ME</span>
            <span className="h-px w-12 bg-pink-200"></span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1e1b1e] tracking-tight">
            Foundations in Code, Curiosity in AI
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Card: Bio and Engineering Workflow Focus */}
          <div
            id="about-bio-card"
            className="lg:col-span-7 bg-white border border-pink-200/80 rounded-xl p-6 sm:p-7 shadow-[0_2px_12px_-3px_rgba(219,39,119,0.04)] flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4 text-[#5c4a56] text-sm sm:text-base leading-relaxed">
              <p>
                I'm an Artificial Intelligence & Data Science student currently pursuing my B.Tech at{' '}
                <strong className="text-[#1e1b1e] font-semibold">{PERSONAL_INFO.university}</strong>.
                I genuinely enjoy tackling programming challenges, exploring data patterns, and
                transforming conceptual ideas into functioning prototypes.
              </p>
              <p>
                Currently, I am strengthening my engineering foundations in{' '}
                <span className="inline-block px-2 py-0.5 rounded font-mono text-xs bg-[#fce7f3] text-[#9d174d] font-semibold border border-pink-200">
                  C
                </span>{' '}
                and{' '}
                <span className="inline-block px-2 py-0.5 rounded font-mono text-xs bg-[#fce7f3] text-[#9d174d] font-semibold border border-pink-200">
                  Python
                </span>{' '}
                while actively exploring exploratory data analysis, machine learning algorithms,
                and real-world system designs like automated smart sensors and graphics tooling.
              </p>
            </div>

            {/* Workflow Pipeline */}
            <div className="pt-2 border-t border-pink-100/90 space-y-3">
              <div className="font-mono text-[11px] font-bold text-[#8c7283] tracking-wider uppercase">
                ENGINEERING WORKFLOW FOCUS
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {WORKFLOW_STAGES.map((stage) => (
                  <div
                    key={stage.step}
                    className="p-3 rounded-lg bg-[#fdf4f7] border border-pink-200/70 hover:border-pink-300 transition-colors"
                  >
                    <div className="font-mono text-[10px] font-bold text-[#b7005e] tracking-wider">
                      {stage.step}
                    </div>
                    <div className="font-display text-xs font-bold text-[#1e1b1e] mt-1">
                      {stage.title}
                    </div>
                    <div className="text-[11px] text-[#5c4a56] mt-0.5 leading-snug">
                      {stage.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Card: Academic Profile */}
          <div
            id="academic-profile-card"
            className="lg:col-span-5 bg-white border border-pink-200/80 rounded-xl p-6 sm:p-7 shadow-[0_2px_12px_-3px_rgba(219,39,119,0.04)] flex flex-col justify-between space-y-6"
          >
            {/* Header with Timeline */}
            <div className="flex items-center justify-between border-b border-pink-100/90 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#fce7f3] border border-pink-200 flex items-center justify-center text-[#9d174d]">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h3 className="font-display text-base font-bold text-[#1e1b1e]">
                  Academic Profile
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#fce7f3] text-[#9d174d] text-xs font-mono font-bold border border-pink-200">
                {PERSONAL_INFO.timeline}
              </span>
            </div>

            {/* Academic Specs */}
            <div className="space-y-4 text-xs sm:text-sm divide-y divide-pink-100/80">
              <div className="flex justify-between items-start pt-1">
                <span className="text-[#8c7283] font-mono text-xs">Degree Program</span>
                <span className="font-semibold text-[#1e1b1e] text-right">
                  {PERSONAL_INFO.degree}
                </span>
              </div>

              <div className="flex justify-between items-start pt-3">
                <span className="text-[#8c7283] font-mono text-xs">Institution</span>
                <span className="font-bold text-[#9d174d] text-right">
                  {PERSONAL_INFO.university}
                </span>
              </div>

              <div className="flex justify-between items-start pt-3">
                <span className="text-[#8c7283] font-mono text-xs">Academic Standing</span>
                <span className="text-[#1e1b1e] font-medium text-right">
                  {PERSONAL_INFO.standing}
                </span>
              </div>

              <div className="flex justify-between items-start pt-3">
                <span className="text-[#8c7283] font-mono text-xs">Location</span>
                <span className="text-[#5c4a56] text-right flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#db2777]" />
                  {PERSONAL_INFO.location}
                </span>
              </div>

              <div className="pt-3 space-y-1.5">
                <div className="text-[#8c7283] font-mono text-[11px] uppercase tracking-wider">
                  Core Disciplines
                </div>
                <p className="text-xs text-[#5c4a56] font-medium leading-relaxed">
                  {PERSONAL_INFO.disciplines.join(' • ')}
                </p>
              </div>
            </div>

            {/* Tech Chips at Bottom */}
            <div className="pt-4 border-t border-pink-100/90 flex flex-wrap gap-2">
              {PERSONAL_INFO.academicChips.map((chip) => (
                <span
                  key={chip}
                  className="px-2.5 py-1 rounded bg-[#fdf4f7] border border-pink-200/80 text-[11px] font-mono font-medium text-[#9d174d]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
