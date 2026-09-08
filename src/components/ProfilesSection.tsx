import React, { useState } from 'react';
import { Code2, ExternalLink, GitBranch, Linkedin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ProfilesSection: React.FC = () => {
  const [hoveredCommit, setHoveredCommit] = useState<{ day: string; count: number } | null>(null);

  // Generate representative commit matrix
  // 12 columns (weeks) x 4 rows (days)
  const commitMatrix = [
    [1, 2, 4, 3, 5, 2, 6, 4, 7, 3, 5, 4],
    [2, 0, 3, 4, 2, 5, 3, 6, 2, 5, 4, 6],
    [3, 4, 2, 5, 4, 3, 5, 2, 4, 6, 3, 5],
    [0, 2, 3, 1, 4, 2, 4, 5, 3, 4, 6, 7],
  ];

  const getCellColor = (val: number) => {
    if (val === 0) return 'bg-[#fdf4f7] border-pink-100';
    if (val <= 2) return 'bg-[#fce7f3] border-pink-200';
    if (val <= 4) return 'bg-[#f472b6] border-pink-300';
    if (val <= 6) return 'bg-[#db2777] border-pink-400';
    return 'bg-[#9d174d] border-pink-500';
  };

  return (
    <section id="profiles" className="py-12 sm:py-16 px-4 sm:px-6 border-t border-pink-100/70">
      <div className="max-w-[1240px] mx-auto space-y-8">
        {/* Section Heading */}
        <div className="space-y-1.5 max-w-3xl">
          <div className="font-mono text-xs font-bold text-[#9d174d] tracking-widest uppercase flex items-center gap-2">
            <span>05 // PROFILES &amp; CODE</span>
            <span className="h-px w-12 bg-pink-200"></span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1e1b1e] tracking-tight">
            Explore open-source repositories and professional updates
          </h2>
          <p className="text-[#5c4a56] text-sm sm:text-base leading-relaxed">
            Direct portals to my ongoing academic work, source repositories, algorithmic
            exercises, and community engagement.
          </p>
        </div>

        {/* 2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: GitHub Profile */}
          <div
            id="profile-card-github"
            className="bg-white border border-pink-200/80 rounded-xl p-6 sm:p-7 shadow-[0_2px_12px_-3px_rgba(219,39,119,0.04)] flex flex-col justify-between space-y-5 hover:border-pink-300 transition-all duration-300"
          >
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between pb-2 border-b border-pink-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#fce7f3] border border-pink-200 flex items-center justify-center text-[#9d174d]">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-[#1e1b1e]">
                      GitHub Profile
                    </h3>
                    <div className="font-mono text-xs text-[#9d174d] font-semibold">
                      @{PERSONAL_INFO.githubUser}
                    </div>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase bg-[#fce7f3] text-[#9d174d] border border-pink-200">
                  PUBLIC CODE
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#5c4a56] leading-relaxed">
                Explore my code repositories, university project archives, and continuous
                technical exploration in Python and C.
              </p>

              {/* Repository Activity Matrix Box */}
              <div className="p-4 bg-[#fffafb] border border-pink-200/90 rounded-lg space-y-2.5">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#8c7283] font-bold uppercase tracking-wider">
                    REPOSITORY ACTIVITY MATRIX
                  </span>
                  <span className="text-[#9d174d] font-medium flex items-center gap-1">
                    <GitBranch className="w-3 h-3" />
                    main branch
                  </span>
                </div>

                {/* Contribution Squares Grid */}
                <div className="grid grid-cols-12 gap-1.5 py-1">
                  {commitMatrix.flatMap((row, rIdx) =>
                    row.map((val, cIdx) => (
                      <div
                        key={`${rIdx}-${cIdx}`}
                        onMouseEnter={() =>
                          setHoveredCommit({ day: `Week ${cIdx + 1}`, count: val })
                        }
                        onMouseLeave={() => setHoveredCommit(null)}
                        className={`w-full aspect-square rounded-[3px] border ${getCellColor(
                          val,
                        )} transition-transform hover:scale-115 cursor-pointer`}
                      />
                    )),
                  )}
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-[#5c4a56] pt-1">
                  <span>
                    {hoveredCommit
                      ? `${hoveredCommit.count} commits on ${hoveredCommit.day}`
                      : 'Consistent learning & iterative code versioning'}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-[9px] text-[#8c7283]">Less</span>
                    <span className="w-2 h-2 rounded-[2px] bg-[#fce7f3]"></span>
                    <span className="w-2 h-2 rounded-[2px] bg-[#f472b6]"></span>
                    <span className="w-2 h-2 rounded-[2px] bg-[#db2777]"></span>
                    <span className="w-2 h-2 rounded-[2px] bg-[#9d174d]"></span>
                    <span className="text-[9px] text-[#8c7283]">More</span>
                  </div>
                </div>
              </div>
            </div>

            {/* GitHub Action */}
            <div className="pt-2">
              <a
                id="btn-github-external"
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-md border border-pink-200/90 bg-[#fffafb] hover:bg-[#fdf4f7] text-xs font-semibold text-[#1e1b1e] hover:text-[#9d174d] transition shadow-2xs"
              >
                <span>View GitHub Repositories</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#9d174d]" />
              </a>
            </div>
          </div>

          {/* Card 2: LinkedIn Profile */}
          <div
            id="profile-card-linkedin"
            className="bg-white border border-pink-200/80 rounded-xl p-6 sm:p-7 shadow-[0_2px_12px_-3px_rgba(219,39,119,0.04)] flex flex-col justify-between space-y-5 hover:border-pink-300 transition-all duration-300"
          >
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between pb-2 border-b border-pink-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#fce7f3] border border-pink-200 flex items-center justify-center text-[#9d174d]">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-[#1e1b1e]">
                      LinkedIn Profile
                    </h3>
                    <div className="font-mono text-xs text-[#9d174d] font-semibold">
                      {PERSONAL_INFO.linkedinUser}
                    </div>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase bg-[#fce7f3] text-[#9d174d] border border-pink-200">
                  NETWORK
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#5c4a56] leading-relaxed">
                Connect with me to follow my academic milestones, workshops attended,
                technical articles, and future project releases.
              </p>

              {/* Campus Affiliation Box */}
              <div className="p-4 bg-[#fffafb] border border-pink-200/90 rounded-lg space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#8c7283] font-bold uppercase tracking-wider">
                    CAMPUS AFFILIATION
                  </span>
                  <span className="text-[#9d174d] font-bold bg-white px-2 py-0.5 rounded border border-pink-100">
                    REVA Univ
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="font-display text-sm font-bold text-[#1e1b1e]">
                    {PERSONAL_INFO.campusAffiliation}
                  </div>
                  <div className="text-xs text-[#9d174d] font-mono font-semibold">
                    AI &amp; Data Science Undergraduate
                  </div>
                  <div className="text-xs text-[#5c4a56] pt-1">
                    Open to student internships &amp; collaborative AI hackathons
                  </div>
                </div>
              </div>
            </div>

            {/* LinkedIn Action */}
            <div className="pt-2">
              <a
                id="btn-linkedin-external"
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-md border border-pink-200/90 bg-[#fffafb] hover:bg-[#fdf4f7] text-xs font-semibold text-[#1e1b1e] hover:text-[#9d174d] transition shadow-2xs"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#9d174d]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
