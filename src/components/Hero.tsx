import React from 'react';
import { ArrowRight, MessageSquare, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { NeuralNetworkVisualizer } from './NeuralNetworkVisualizer';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-8 sm:pt-14 pb-12 sm:pb-16 px-4 sm:px-6">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Introduction & Call to Actions */}
        <div className="lg:col-span-7 space-y-6">
          {/* Top Pill Tag */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fce7f3] border border-pink-200 text-[#9d174d] text-[11px] font-mono font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#db2777] inline-block animate-pulse"></span>
              <span>AI & DATA SCIENCE STUDENT</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#1e1b1e] leading-[1.12] tracking-tight">
            Building intelligent <br className="hidden sm:inline" />
            solutions with{' '}
            <span className="text-[#b7005e] font-extrabold tracking-tight">
              code, data <br className="hidden sm:inline" />
              & AI.
            </span>
          </h1>

          {/* Subtitle / Bio */}
          <p className="text-[#5c4a56] text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
            Hi, I'm <strong className="text-[#1e1b1e] font-semibold">Akshata Chavan</strong> — a
            3rd-semester B.Tech Artificial Intelligence & Data Science student at REVA University,
            passionate about Python, AI, Data Science, and building practical technology
            solutions that solve real-world problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
            <button
              id="hero-view-projects-btn"
              onClick={() => handleScrollTo('projects')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#9d174d] hover:bg-[#83123e] text-white text-xs sm:text-sm font-semibold shadow-sm transition hover:shadow-pink-200 cursor-pointer"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="hero-connect-btn"
              onClick={() => handleScrollTo('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-pink-200/90 bg-white hover:bg-[#fdf4f7] text-[#1e1b1e] hover:text-[#9d174d] text-xs sm:text-sm font-medium transition cursor-pointer shadow-2xs"
            >
              <MessageSquare className="w-4 h-4 text-[#9d174d]" />
              <span>Connect With Me</span>
            </button>
          </div>

          {/* Location & Status Footnote */}
          <div className="flex items-center gap-2 pt-2 text-xs text-[#8c7283] font-sans">
            <MapPin className="w-3.5 h-3.5 text-[#db2777] shrink-0" />
            <span>{PERSONAL_INFO.heroFootnote}</span>
          </div>
        </div>

        {/* Right Column: Interactive Neural Visualizer */}
        <div className="lg:col-span-5 flex justify-center">
          <NeuralNetworkVisualizer />
        </div>
      </div>
    </section>
  );
};
