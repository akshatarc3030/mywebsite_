import React from 'react';
import { Calendar, Code2, Mail, Network, Share2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onCopyShare?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onCopyShare }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="border-t border-pink-100/90 bg-[#fff7fb] pt-12 pb-8 px-4 sm:px-6">
      <div className="max-w-[1240px] mx-auto space-y-8">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-pink-100/80">
          {/* Brand & Subtitle */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white border border-pink-200 flex items-center justify-center text-[#b7005e] font-display font-extrabold text-xs shadow-2xs">
              {PERSONAL_INFO.avatarInitials}
            </div>
            <div>
              <div className="font-display font-bold text-sm text-[#1e1b1e]">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-xs text-[#8c7283]">
                3rd Sem B.Tech Artificial Intelligence &amp; Data Science • {PERSONAL_INFO.university}
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#5c4a56]">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="hover:text-[#b7005e] transition"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, '#about')}
              className="hover:text-[#b7005e] transition"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={(e) => handleNavClick(e, '#skills')}
              className="hover:text-[#b7005e] transition"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, '#projects')}
              className="hover:text-[#b7005e] transition"
            >
              Projects
            </a>
            <a
              href="#certifications"
              onClick={(e) => handleNavClick(e, '#certifications')}
              className="hover:text-[#b7005e] transition"
            >
              Certifications
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hover:text-[#b7005e] transition"
            >
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="w-8 h-8 rounded-md border border-pink-200 bg-white flex items-center justify-center text-[#5c4a56] hover:text-[#9d174d] hover:border-pink-300 transition shadow-2xs"
            >
              <Code2 className="w-3.5 h-3.5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="w-8 h-8 rounded-md border border-pink-200 bg-white flex items-center justify-center text-[#5c4a56] hover:text-[#9d174d] hover:border-pink-300 transition shadow-2xs"
            >
              <Network className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              title="Email"
              className="w-8 h-8 rounded-md border border-pink-200 bg-white flex items-center justify-center text-[#5c4a56] hover:text-[#9d174d] hover:border-pink-300 transition shadow-2xs"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8c7283]">
          <div>
            © 2026 {PERSONAL_INFO.name}. Designed &amp; built with curiosity.
          </div>
          <div className="font-mono text-[11px] text-[#9d174d]/90 font-medium">
            Neural Systems • Deep Learning • Data Pipelines
          </div>
        </div>
      </div>
    </footer>
  );
};
