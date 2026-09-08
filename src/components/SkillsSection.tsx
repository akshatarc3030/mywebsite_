import React from 'react';
import { Brain, Code, Terminal, Wrench, Zap } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code className="w-4 h-4" />;
      case 'brain':
        return <Brain className="w-4 h-4" />;
      case 'tool':
        return <Wrench className="w-4 h-4" />;
      case 'zap':
        return <Zap className="w-4 h-4" />;
      default:
        return <Terminal className="w-4 h-4" />;
    }
  };

  return (
    <section id="skills" className="py-12 sm:py-16 px-4 sm:px-6 border-t border-pink-100/70">
      <div className="max-w-[1240px] mx-auto space-y-8">
        {/* Section Heading */}
        <div className="space-y-1.5 max-w-3xl">
          <div className="font-mono text-xs font-bold text-[#9d174d] tracking-widest uppercase flex items-center gap-2">
            <span>02 // TECHNICAL SKILLS</span>
            <span className="h-px w-12 bg-pink-200"></span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1e1b1e] tracking-tight">
            Structured foundations and hands-on toolsets
          </h2>
          <p className="text-[#5c4a56] text-sm sm:text-base leading-relaxed">
            A breakdown of core competencies, software toolchains, and computational
            problem-solving principles practiced in academic and self-directed engineering.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.id}
              id={`skill-card-${category.id}`}
              className="bg-white border border-pink-200/80 rounded-xl p-6 sm:p-7 shadow-[0_2px_12px_-3px_rgba(219,39,119,0.04)] flex flex-col justify-between hover:border-pink-300 transition-all duration-300"
            >
              {/* Header */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-pink-100/90">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-md bg-[#fce7f3] border border-pink-200 flex items-center justify-center text-[#9d174d]">
                      {getIcon(category.iconName)}
                    </div>
                    <h3 className="font-display text-base font-bold text-[#1e1b1e]">
                      {category.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[11px] font-bold text-[#8c7283] tracking-wider uppercase">
                    {category.code}
                  </span>
                </div>

                {/* Subitems */}
                <div className="divide-y divide-pink-100/80 mt-2">
                  {category.skills.map((item, idx) => (
                    <div key={idx} className="py-3.5 first:pt-2 last:pb-0 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-display text-xs sm:text-sm font-bold text-[#1e1b1e]">
                          {item.name}
                        </span>
                        {item.tag && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#fdf4f7] text-[#9d174d] border border-pink-200 font-medium">
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#5c4a56] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
