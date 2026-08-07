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
        
        {/* Centered ARS GROUP SVG Logo Badge (No profile picture / avatar) */}
        <div className="relative mb-8 group">
          <div className="p-3 sm:p-4 rounded-3xl bg-white shadow-xl ring-8 ring-emerald-500/10 border border-emerald-100 transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-28 h-28 sm:w-32 sm:h-32"
            >
              <defs>
                <linearGradient id="arsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#059669" />
                  <stop offset="50%" stopColor="#0d9488" />
                  <stop offset="100%" stopColor="#0284c7" />
                </linearGradient>
                <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#059669" floodOpacity="0.25" />
                </filter>
              </defs>
              <rect x="10" y="10" width="100" height="100" rx="26" fill="url(#arsGrad)" filter="url(#shadow)" />
              <rect x="14" y="14" width="92" height="92" rx="22" fill="none" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="2" />
              <text
                x="60"
                y="54"
                textAnchor="middle"
                dominantBaseline="central"
                fill="#ffffff"
                fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
                fontWeight="900"
                fontSize="26"
                letterSpacing="1.5"
              >
                ARS
              </text>
              <text
                x="60"
                y="78"
                textAnchor="middle"
                dominantBaseline="central"
                fill="#e0f2fe"
                fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
                fontWeight="800"
                fontSize="11"
                letterSpacing="3"
              >
                GROUP
              </text>
            </svg>
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
