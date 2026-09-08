import React, { useState } from 'react';
import { ArrowRight, Code2, Menu, Share2, User, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onCopyShare?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCopyShare }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#fff7fb]/90 border-b border-pink-100/90 transition-all"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a
          id="brand-logo-link"
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-3 group select-none"
        >
          <div className="w-8 h-8 rounded-lg bg-white border border-pink-200/90 flex items-center justify-center text-[#b7005e] font-display font-extrabold text-xs shadow-2xs group-hover:border-[#db2777] transition-colors">
            {PERSONAL_INFO.avatarInitials}
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xs sm:text-sm text-[#1e1b1e] tracking-tight group-hover:text-[#b7005e] transition-colors">
              {PERSONAL_INFO.name.toUpperCase()}
            </span>
            <span className="font-mono text-[10px] sm:text-[11px] text-[#9d174d] font-medium tracking-wide">
              {PERSONAL_INFO.subBadge}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              id={`nav-link-${link.name.toLowerCase()}`}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs font-medium text-[#5c4a56] hover:text-[#b7005e] transition-colors tracking-wide py-1 border-b border-transparent hover:border-pink-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* GitHub Code Icon */}
          <a
            id="nav-github-btn"
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Repositories"
            className="w-8 h-8 rounded-md border border-pink-200/80 bg-white text-[#5c4a56] hover:text-[#b7005e] hover:border-pink-300 flex items-center justify-center transition shadow-2xs"
          >
            <Code2 className="w-4 h-4" />
          </a>

          {/* Share Action */}
          <button
            id="nav-share-btn"
            onClick={onCopyShare}
            title="Share Portfolio URL"
            className="w-8 h-8 rounded-md border border-pink-200/80 bg-white text-[#5c4a56] hover:text-[#b7005e] hover:border-pink-300 flex items-center justify-center transition shadow-2xs"
          >
            <Share2 className="w-3.5 h-3.5" />
          </button>

          {/* Primary View Projects Button */}
          <a
            id="nav-view-projects-btn"
            href="#projects"
            onClick={(e) => handleNavClick(e, '#projects')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#9d174d] hover:bg-[#83123e] text-white text-xs font-medium shadow-2xs transition hover:shadow-pink-200"
          >
            <span>View Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Profile User Icon */}
          <a
            id="nav-profile-btn"
            href="#about"
            onClick={(e) => handleNavClick(e, '#about')}
            title="About Akshata"
            className="w-8 h-8 rounded-full border border-pink-200 bg-white text-[#9d174d] hover:border-pink-400 flex items-center justify-center transition shadow-2xs"
          >
            <User className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            id="nav-mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8 h-8 rounded-md border border-pink-200 bg-white flex items-center justify-center text-[#1e1b1e]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-pink-100 bg-white/95 backdrop-blur-md px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block text-sm font-medium text-[#1e1b1e] hover:text-[#b7005e] py-1.5"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-pink-100 flex items-center justify-between">
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, '#projects')}
              className="w-full text-center py-2 rounded-md bg-[#9d174d] text-white text-xs font-medium"
            >
              View Projects
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
