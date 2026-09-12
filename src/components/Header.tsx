import React, { useState, useEffect } from 'react';
import { DeveloperProfile } from '../types';
import { Lock, Menu, X, ArrowRight, Layers, User, Cpu, Sparkles } from 'lucide-react';

export type AppPage = 'overview' | 'projects' | 'contact' | 'all';

interface HeaderProps {
  profile: DeveloperProfile;
  activePage: AppPage;
  onSelectPage: (page: AppPage) => void;
  onOpenAdminPortal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  profile,
  activePage,
  onSelectPage,
  onOpenAdminPortal
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navPages: { id: AppPage; label: string; number: string; icon: React.ElementType }[] = [
    { id: 'overview', label: 'About & Identity', number: '01', icon: User },
    { id: 'projects', label: 'Work & Projects', number: '02', icon: Layers },
    { id: 'contact', label: 'Stack & Contact', number: '03', icon: Cpu },
  ];

  const handleNavClick = (page: AppPage) => {
    onSelectPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-2.5 shadow-sm' : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Identity */}
        <button
          onClick={() => handleNavClick('overview')}
          className="flex items-center gap-2.5 group cursor-pointer text-left"
        >
          <img
            src="/ars-group-favicon.svg"
            alt="ARS GROUP"
            className="w-8 h-8 rounded-lg object-contain shadow-xs transition-transform group-hover:scale-105"
          />
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-slate-900 text-lg tracking-wider group-hover:text-emerald-600 transition-colors uppercase">
                {profile.brand || "ARSGROUP"}
              </span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 font-mono font-bold">
                DEV
              </span>
            </div>
            <span className="hidden sm:block text-[11px] font-mono text-slate-500 leading-none">
              Muhammad Arham Shahid
            </span>
          </div>
        </button>

        {/* 3-Page Navigation Tabs */}
        <nav className="hidden md:flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200/80">
          {navPages.map((page) => {
            const Icon = page.icon;
            const isActive = activePage === page.id;
            return (
              <button
                key={page.id}
                onClick={() => handleNavClick(page.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <span className={`text-[10px] ${isActive ? 'text-emerald-400' : 'text-slate-400'}`}>
                  {page.number}
                </span>
                <span>{page.label}</span>
              </button>
            );
          })}

          <button
            onClick={() => handleNavClick('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
              activePage === 'all'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-500 hover:text-slate-900'
            }`}
            title="Continuous scroll view"
          >
            All Pages
          </button>
        </nav>

        {/* Actions / Admin Portal */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenAdminPortal}
            className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-mono font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-all cursor-pointer shadow-2xs"
            title="Admin Management Portal"
          >
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            <span className="hidden sm:inline">Admin Portal</span>
            <span className="sm:hidden">Admin</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 bg-slate-100 border border-slate-200"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 space-y-2 animate-in fade-in slide-in-from-top-2 shadow-lg">
          <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider px-2">
            Switch Page View:
          </p>
          {navPages.map((page) => {
            const Icon = page.icon;
            const isActive = activePage === page.id;
            return (
              <button
                key={page.id}
                onClick={() => handleNavClick(page.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-mono font-bold transition-all text-left ${
                  isActive ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  <span>{page.label}</span>
                </div>
                <span className={`text-[10px] ${isActive ? 'text-emerald-400' : 'text-slate-400'}`}>
                  Page {page.number}
                </span>
              </button>
            );
          })}

          <button
            onClick={() => handleNavClick('all')}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-mono font-bold transition-all text-left ${
              activePage === 'all' ? 'bg-emerald-600 text-white' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <span>View All (Single Scroll)</span>
            <span className="text-[10px] text-slate-400">Full</span>
          </button>
        </div>
      )}
    </header>
  );
};
