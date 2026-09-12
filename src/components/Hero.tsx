import React, { useState } from 'react';
import { DeveloperProfile } from '../types';
import { ArrowRight, Check, Copy, Lock, Sparkles } from 'lucide-react';

interface HeroProps {
  profile: DeveloperProfile;
  onExploreProjects: () => void;
  onOpenAdminPortal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onExploreProjects, onOpenAdminPortal }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyProfile = () => {
    const textToCopy = `Developer Profile: ${profile.name}\nBrand: ${profile.brand}\nRole: ${profile.role}\nEmail: ${profile.contact.email}\nPortfolio: ${profile.contact.portfolioUrl}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-white text-slate-900">
      
      {/* Background Subtle Gradient & Pattern */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-50 via-white to-emerald-50/30"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none z-0"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        {/* Centered ARS GROUP Official SVG Logo Badge (No profile picture / avatar) */}
        <div className="relative mb-8 group">
          <div className="p-2 sm:p-2.5 rounded-3xl bg-slate-900 shadow-xl ring-8 ring-cyan-500/10 border border-slate-800 transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
            <img
              src="/ars-group-favicon.svg"
              alt="ARS GROUP Logo"
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-contain"
            />
          </div>
          
          {/* Active Online Status Dot */}
          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center shadow-md" title="ARSGROUP Active Entity">
            <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping"></span>
          </div>
        </div>

        {/* Hero Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3 font-sans">
          Hi, I'm <span className="text-emerald-600 font-black">{profile.name}</span>
        </h1>

        {/* Subtitle Role */}
        <p className="text-xs sm:text-base font-bold tracking-widest text-cyan-700 uppercase mb-4 font-mono px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200">
          I'M {profile.role || "FULL-STACK & FRONTEND WEB DEVELOPER"}
        </p>

        {/* Brand & Focus Description */}
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
          Founder of <strong className="text-slate-900 font-semibold">{profile.brand}</strong>. Architecting high-performance Progressive Web Apps (<strong className="text-emerald-700">Seatify</strong>, <strong className="text-cyan-700">Meter-wise</strong>), responsive frontend interfaces, and optimized digital web solutions.
        </p>

        {/* Action Buttons (Emerald & Blue Interactive Combination) */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <a
            href="#projects"
            onClick={onExploreProjects}
            className="px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenAdminPortal}
            className="px-6 py-3.5 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-sm transition-all shadow-lg shadow-cyan-600/25 hover:shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
            title="Open Admin Portal"
          >
            <Lock className="w-4 h-4 text-white" />
            <span>Admin Portal</span>
          </button>

          <button
            onClick={handleCopyProfile}
            className="p-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 transition-all cursor-pointer shadow-sm"
            title="Copy Profile Details"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>

        {/* Core Expertise Badges Bar */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-2xl bg-white border border-slate-200 shadow-sm text-xs font-mono text-slate-700">
          <span className="font-semibold text-slate-900 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Expertise:
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-medium">GitHub</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-medium">Vercel</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-medium">Google AI Studio</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-medium">Cloudflare</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-medium">Search Console</span>
        </div>

      </div>
    </section>
  );
};
