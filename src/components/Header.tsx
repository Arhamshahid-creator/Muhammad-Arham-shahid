import React, { useState, useEffect } from 'react';
import { DeveloperProfile } from '../types';
import { Lock, Menu, X, Layers, User, Cpu, Sparkles } from 'lucide-react';

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

  const navPages: { id: AppPage; label: string; prefix: string; icon: React.ElementType }[] = [
    { id: 'overview', label: 'Overview', prefix: '01', icon: User },
    { id: 'projects', label: 'Bento Work', prefix: '02', icon: Layers },
    { id: 'contact', label: 'Stack', prefix: '03', icon: Cpu },
  ];

  const handleNavClick = (page: AppPage) => {
    onSelectPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-[#08080A]/95 backdrop-blur-xl border-b border-[#4A3E1D]/50 py-3 shadow-2xl shadow-black/80'
        : 'bg-[#08080A]/85 backdrop-blur-md border-b border-[#4A3E1D]/30 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Identity - Space Grotesk for name */}
        <button
          onClick={() => handleNavClick('overview')}
          className="flex items-center gap-3 group cursor-pointer text-left"
        >
          <div className="relative">
            <img
              src="/ars-group-favicon.svg"
              alt="ARS GROUP Emblem"
              referrerPolicy="no-referrer"
              className="w-8 h-8 rounded-lg object-contain shadow-md border border-[#4A3E1D]/70 transition-transform group-hover:scale-105"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#E5C158] border border-[#08080A] shadow-[0_0_8px_#E5C158]"></span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-[#F5F5F7] text-base tracking-tight group-hover:text-[#E5C158] transition-colors uppercase">
                {profile.brand || "ARSGROUP"}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#1C180E] text-[#E5C158] font-mono font-medium border border-[#4A3E1D]">
                PWA
              </span>
            </div>
            <span className="hidden sm:block text-[11px] font-heading font-medium text-[#8E8A7B] leading-none">
              Muhammad Arham Shahid
            </span>
          </div>
        </button>

        {/* Desktop Header Nav Links with 01 Overview, 02 Bento Work, 03 Stack */}
        <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-[#0E0E12] border border-[#4A3E1D]/50">
          {navPages.map((page) => {
            const isActive = activePage === page.id;
            return (
              <button
                key={page.id}
                onClick={() => handleNavClick(page.id)}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'opacity-100 text-[#F5F5F7] bg-[#1F1A10] border border-[#E5C158]/50 shadow-[0_0_15px_rgba(229,193,88,0.15)] font-semibold'
                    : 'opacity-40 hover:opacity-100 text-[#A1A1AA] hover:text-[#F5F5F7] hover:bg-white/[0.03]'
                }`}
              >
                <span className={isActive ? 'text-[#E5C158] font-bold' : 'text-[#8E8A7B]'}>
                  {page.prefix}
                </span>
                <span>{page.label}</span>
              </button>
            );
          })}

          <div className="w-px h-4 bg-[#4A3E1D]/60 mx-1"></div>

          {/* View All Toggle */}
          <button
            onClick={() => handleNavClick('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer ${
              activePage === 'all'
                ? 'opacity-100 text-[#F5F5F7] bg-[#1F1A10] border border-[#E5C158]/50 font-semibold'
                : 'opacity-40 hover:opacity-100 text-[#A1A1AA] hover:text-[#F5F5F7]'
            }`}
            title="View complete single-page stream"
          >
            All Work
          </button>
        </nav>

        {/* Right Action: Admin Access & Mobile Hamburger */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenAdminPortal}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0E0E12] hover:bg-[#16151B] text-[#A1A1AA] hover:text-[#F5F5F7] border border-[#4A3E1D]/60 text-xs font-mono transition-all cursor-pointer"
            title="Open Admin Settings"
          >
            <Lock className="w-3.5 h-3.5 text-[#E5C158]" />
            <span>Admin</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#0E0E12] text-zinc-300 hover:text-[#F5F5F7] border border-[#4A3E1D]/60 cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#08080A] border-b border-[#4A3E1D]/50 px-4 py-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="text-[10px] font-mono uppercase tracking-widest text-[#8E8A7B] px-3 pb-1 font-bold">
            Navigation
          </div>
          {navPages.map((page) => {
            const Icon = page.icon;
            const isActive = activePage === page.id;
            return (
              <button
                key={page.id}
                onClick={() => handleNavClick(page.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-xs font-mono tracking-wider transition-all text-left ${
                  isActive
                    ? 'opacity-100 text-[#F5F5F7] bg-[#18150D] border border-[#E5C158]/40 font-semibold'
                    : 'opacity-40 hover:opacity-100 text-[#A1A1AA] hover:text-[#F5F5F7] hover:bg-white/[0.03]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-[#E5C158]" />
                  <span>{page.prefix} {page.label}</span>
                </div>
              </button>
            );
          })}

          <button
            onClick={() => handleNavClick('all')}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-xs font-mono tracking-wider transition-all text-left ${
              activePage === 'all'
                ? 'opacity-100 text-[#F5F5F7] bg-[#18150D] border border-[#E5C158]/40 font-semibold'
                : 'opacity-40 hover:opacity-100 text-[#A1A1AA] hover:text-[#F5F5F7] hover:bg-white/[0.03]'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-[#E5C158]" />
              <span>All Work</span>
            </div>
          </button>

          <div className="pt-3 border-t border-[#4A3E1D]/50 flex items-center justify-between px-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdminPortal();
              }}
              className="flex items-center gap-2 text-xs font-mono text-[#E5C158] py-1"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Admin Management</span>
            </button>
            <span className="text-[10px] font-mono text-[#8E8A7B]">ARSGROUP • 2026</span>
          </div>
        </div>
      )}
    </header>
  );
};
