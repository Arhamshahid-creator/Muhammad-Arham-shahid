import React from 'react';
import { DeveloperProfile } from '../types';
import { ArrowUp, ShieldCheck } from 'lucide-react';
import { AppPage } from './Header';

interface FooterProps {
  profile: DeveloperProfile;
  onSelectPage?: (page: AppPage) => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onSelectPage }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page: AppPage) => {
    if (onSelectPage) {
      onSelectPage(page);
    }
    scrollToTop();
  };

  return (
    <footer className="bg-[#08080A] border-t border-[#4A3E1D]/40 py-14 text-[#8E8A7B] font-mono text-xs relative overflow-hidden">
      
      {/* Background Subtle Luxury Grid */}
      <div className="absolute inset-0 bg-grid-obsidian opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        
        {/* Top Row: Brand & Clean Monospace Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#4A3E1D]/40">
          
          {/* Left Brand Identity */}
          <div className="flex items-center gap-3">
            <img
              src="/ars-group-favicon.svg"
              alt="ARS GROUP Emblem"
              referrerPolicy="no-referrer"
              className="w-8 h-8 rounded-lg object-contain shadow-md border border-[#4A3E1D]/60"
            />
            <div>
              <p className="text-[#F5F5F7] font-bold font-heading text-sm tracking-wide">
                {profile.brand}
              </p>
              <p className="text-[#8E8A7B] text-[11px] font-mono">
                {profile.name} • Progressive Web App Architect
              </p>
            </div>
          </div>

          {/* Quick Nav Links simply formatted as 01 Overview, 02 Bento Work, 03 Stack */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <button
              onClick={() => handleNav('overview')}
              className="text-xs font-mono tracking-wider opacity-50 hover:opacity-100 hover:text-[#E5C158] transition-all cursor-pointer"
            >
              01 Overview
            </button>
            <button
              onClick={() => handleNav('projects')}
              className="text-xs font-mono tracking-wider opacity-50 hover:opacity-100 hover:text-[#E5C158] transition-all cursor-pointer"
            >
              02 Bento Work
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="text-xs font-mono tracking-wider opacity-50 hover:opacity-100 hover:text-[#E5C158] transition-all cursor-pointer"
            >
              03 Stack
            </button>
            <button
              onClick={() => handleNav('all')}
              className="text-xs font-mono tracking-wider opacity-50 hover:opacity-100 hover:text-[#E5C158] transition-all cursor-pointer"
            >
              All Work
            </button>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0E0E12] hover:bg-[#18150D] text-[#8E8A7B] hover:text-[#E5C158] border border-[#4A3E1D] transition-all cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#E5C158]" />
          </button>
        </div>

        {/* Bottom Technical Status Capsule Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          
          <div className="text-[11px] text-[#8E8A7B]">
            © 2026 <strong className="text-[#F5F5F7] font-normal">{profile.name}</strong> • ARSGROUP. All rights reserved.
          </div>

          {/* Highly Polished Clean Status Pill Badges with Soft Gold Border & Text Tint */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            
            {/* 100/100 Lighthouse Badge with subtle glowing gold dot */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14120B] border border-[#4A3E1D] shadow-[0_0_12px_rgba(229,193,88,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5C158] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E5C158] shadow-[0_0_6px_#E5C158]"></span>
              </span>
              <span className="text-[#E5C158] font-bold text-xs tracking-wide">100/100 Lighthouse</span>
            </div>

            {/* Service Worker Verified Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14120B] border border-[#4A3E1D]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E5C158]" />
              <span className="text-[#E5C158] font-medium text-xs tracking-wide">Service Worker Verified</span>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
};
