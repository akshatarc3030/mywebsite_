import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Radio, Terminal, Cpu } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectModals } from './ProjectModals';

export const ProjectsSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const pPreservX = PROJECTS.find((p) => p.id === 'preservx')!;
  const pGraphics = PROJECTS.find((p) => p.id === 'graphics-editor-c')!;
  const pIrrigation = PROJECTS.find((p) => p.id === 'smart-irrigation')!;

  return (
    <section id="projects" className="py-12 sm:py-16 px-4 sm:px-6 border-t border-pink-100/70">
      <div className="max-w-[1240px] mx-auto space-y-8">
        {/* Section Heading */}
        <div className="space-y-1.5 max-w-3xl">
          <div className="font-mono text-xs font-bold text-[#9d174d] tracking-widest uppercase flex items-center gap-2">
            <span>03 // FEATURED PROJECTS</span>
            <span className="h-px w-12 bg-pink-200"></span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1e1b1e] tracking-tight">
            Practical implementations across AI, C Programming, and IoT
          </h2>
          <p className="text-[#5c4a56] text-sm sm:text-base leading-relaxed">
            Real student projects built from first principles — focusing on concrete system
            architecture, clear logic, and functional prototypes.
          </p>
        </div>

        {/* Project 1: Featured PreservX Hero Card */}
        <div
          id="project-card-preservx"
          className="bg-white border border-pink-200/80 rounded-xl p-6 sm:p-8 shadow-[0_2px_12px_-3px_rgba(219,39,119,0.04)] hover:border-pink-300 transition-all duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase bg-[#fce7f3] text-[#9d174d] border border-pink-200">
                  AI + IOT + SMART HOME
                </span>
                <span className="text-xs font-mono text-[#8c7283]">● 2024</span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1e1b1e] tracking-tight">
                {pPreservX.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#5c4a56] leading-relaxed">
                {pPreservX.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {pPreservX.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-[#fdf4f7] border border-pink-200/80 text-[11px] font-mono font-medium text-[#9d174d]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  id="btn-preservx-details"
                  onClick={() => setActiveModalProject(pPreservX)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#9d174d] hover:bg-[#83123e] text-white text-xs sm:text-sm font-semibold shadow-2xs transition cursor-pointer"
                >
                  <span>View Project Details</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right: Inspection Feed UI Visual */}
            <div className="lg:col-span-5 bg-[#fffafb] border border-pink-200/90 rounded-lg p-4 font-mono text-xs space-y-3">
              {/* Camera Header */}
              <div className="flex items-center justify-between border-b border-pink-100 pb-2">
                <div className="flex items-center gap-1.5 text-[#9d174d] font-bold text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-[#f43f5e] animate-pulse"></span>
                  <span>INSPECTION FEED</span>
                </div>
                <span className="text-[10px] text-[#8c7283] bg-white px-2 py-0.5 rounded border border-pink-100">
                  CAM_SLOT_01
                </span>
              </div>

              {/* Camera Visual Bounding Area */}
              <div className="relative h-36 bg-gradient-to-br from-white to-[#fdf4f7] border border-dashed border-pink-300/80 rounded-md p-3 flex flex-col justify-between overflow-hidden">
                {/* Simulated Item Detection Bounding Box 1 */}
                <div className="self-start bg-white/90 border border-[#db2777] rounded px-2.5 py-1.5 shadow-2xs">
                  <div className="flex items-center gap-1 text-[11px] font-bold text-[#1e1b1e]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#db2777]"></span>
                    Dairy: Milk (Organic)
                  </div>
                  <div className="text-[10px] text-[#9d174d] font-semibold">
                    Expiring in: 2 days
                  </div>
                </div>

                {/* Simulated Item Detection Bounding Box 2 */}
                <div className="self-end bg-white/90 border border-emerald-500/70 rounded px-2.5 py-1.5 shadow-2xs">
                  <div className="flex items-center gap-1 text-[11px] font-bold text-[#1e1b1e]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Fresh Greens: Spinach
                  </div>
                  <div className="text-[10px] text-emerald-700 font-semibold">
                    Fresh • 5 days left
                  </div>
                </div>

                {/* Target overlay marks */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-10">
                  <div className="w-24 h-24 border border-[#9d174d] rounded-full"></div>
                </div>
              </div>

              {/* Status Bar */}
              <div className="flex items-center justify-between text-[10px] text-[#5c4a56] pt-1">
                <span>SENSORS: 4/4 ONLINE</span>
                <span className="text-[#9d174d] font-bold">NOTIFICATIONS: ENABLED</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 2 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project 2: 2D Graphics Editor in C */}
          <div
            id="project-card-graphics-c"
            className="bg-white border border-pink-200/80 rounded-xl p-6 sm:p-7 shadow-[0_2px_12px_-3px_rgba(219,39,119,0.04)] flex flex-col justify-between space-y-5 hover:border-pink-300 transition-all duration-300"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase bg-[#fce7f3] text-[#9d174d] border border-pink-200">
                  C PROGRAMMING
                </span>
                <span className="text-xs font-mono text-[#8c7283]">CLI / Software</span>
              </div>

              <h3 className="font-display text-lg sm:text-xl font-bold text-[#1e1b1e]">
                {pGraphics.title}
              </h3>

              <p className="text-xs text-[#5c4a56] leading-relaxed">
                {pGraphics.description}
              </p>

              {/* ASCII Visual Console */}
              <div className="bg-[#fffafb] border border-pink-200/90 rounded-lg p-3 font-mono text-xs space-y-2">
                <div className="flex items-center justify-between text-[10px] text-[#8c7283] border-b border-pink-100 pb-1">
                  <span>CANVAS_BUFFER: 24x10</span>
                  <span className="text-[#9d174d] font-semibold">MODE: DRAW_RECT</span>
                </div>
                <div className="bg-[#1e1b1e] text-pink-300 p-2.5 rounded text-[10px] sm:text-[11px] leading-tight select-none font-mono">
                  <div>+------------------------+</div>
                  <div>|  (O)                   |</div>
                  <div>|         * * * *        |</div>
                  <div>|         *     *        |</div>
                  <div>+------------------------+</div>
                  <div className="text-pink-400 mt-1 font-semibold">
                    &gt; canvas_render(shape_id=2);
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {pGraphics.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-[#fdf4f7] border border-pink-200 text-[10px] font-mono text-[#9d174d]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Link */}
            <div className="pt-2 border-t border-pink-100">
              <button
                id="btn-graphics-explore"
                onClick={() => setActiveModalProject(pGraphics)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9d174d] hover:text-[#b7005e] transition cursor-pointer"
              >
                <span>Explore Architecture &amp; C Logic</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Project 3: Smart Auto Irrigation System */}
          <div
            id="project-card-irrigation"
            className="bg-white border border-pink-200/80 rounded-xl p-6 sm:p-7 shadow-[0_2px_12px_-3px_rgba(219,39,119,0.04)] flex flex-col justify-between space-y-5 hover:border-pink-300 transition-all duration-300"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase bg-[#fce7f3] text-[#9d174d] border border-pink-200">
                  INTERNET OF THINGS
                </span>
                <span className="text-xs font-mono text-[#8c7283]">Embedded Hardware</span>
              </div>

              <h3 className="font-display text-lg sm:text-xl font-bold text-[#1e1b1e]">
                {pIrrigation.title}
              </h3>

              <p className="text-xs text-[#5c4a56] leading-relaxed">
                {pIrrigation.description}
              </p>

              {/* Circuit Pathway Box */}
              <div className="bg-[#fffafb] border border-pink-200/90 rounded-lg p-3 font-mono text-xs space-y-2">
                <div className="text-[10px] text-[#8c7283] uppercase tracking-wider font-semibold border-b border-pink-100 pb-1">
                  CIRCUIT / DATA PATHWAY
                </div>
                <div className="flex items-center justify-between gap-1 py-1.5 text-[10px]">
                  <div className="px-2 py-1 bg-white rounded border border-pink-200 font-bold text-[#1e1b1e]">
                    Soil
                  </div>
                  <span className="text-pink-400">→</span>
                  <div className="px-2 py-1 bg-white rounded border border-pink-200 font-bold text-[#1e1b1e]">
                    Moisture
                  </div>
                  <span className="text-pink-400">→</span>
                  <div className="px-2 py-1 bg-white rounded border border-pink-200 font-bold text-[#1e1b1e]">
                    NodeMCU
                  </div>
                  <span className="text-pink-400">→</span>
                  <div className="px-2 py-1 bg-white rounded border border-pink-200 font-bold text-[#1e1b1e]">
                    Motor Relay
                  </div>
                </div>
                <div className="flex items-center justify-between text-[10px] text-[#5c4a56] pt-0.5">
                  <span className="text-[#db2777] font-semibold">Trigger: &lt; 35%</span>
                  <span>Blynk / App Sync</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {pIrrigation.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-[#fdf4f7] border border-pink-200 text-[10px] font-mono text-[#9d174d]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Link */}
            <div className="pt-2 border-t border-pink-100">
              <button
                id="btn-irrigation-explore"
                onClick={() => setActiveModalProject(pIrrigation)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9d174d] hover:text-[#b7005e] transition cursor-pointer"
              >
                <span>Explore IoT Schematic</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Modal */}
      <ProjectModals
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
