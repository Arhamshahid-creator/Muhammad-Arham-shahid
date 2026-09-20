import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { DeveloperProfile } from '../types';

interface HeroSectionProps {
  profile?: DeveloperProfile;
  onViewWorkClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profile }) => {
  return (
    <header className="relative min-h-screen flex items-center justify-center text-center pt-28 pb-20 px-4 overflow-hidden" id="home">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-[radial-gradient(circle,rgba(229,193,88,0.12)_0%,rgba(120,120,255,0.08)_35%,transparent_70%)] blur-[50px] pointer-events-none"></div>
      
      {/* Background Subtle Luxury Grid */}
      <div className="absolute inset-0 bg-grid-obsidian opacity-25 pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto hero-content reveal up">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/12 bg-white/[0.04] text-[#A1A1AA] text-xs font-mono mb-8 backdrop-blur-md">
          {profile?.avatar ? (
            <img
              src={profile.avatar}
              alt={profile.name || "Muhammad Arham Shahid"}
              referrerPolicy="no-referrer"
              className="w-5 h-5 rounded-full object-cover border border-[#E5C158]/70"
            />
          ) : (
            <span className="w-5 h-5 rounded-full bg-[#E5C158]/20 border border-[#E5C158]/60 flex items-center justify-center text-[10px] font-bold text-[#E5C158]">
              AS
            </span>
          )}
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shadow-[0_0_6px_#10B981]"></span>
          <span>{profile?.name || "Muhammad Arham Shahid"} • PWA Architect</span>
        </div>

        {/* Display Heading */}
        <h1 className="font-heading font-black tracking-tighter text-5xl sm:text-7xl lg:text-[96px] leading-[0.95] mb-8 text-[#F5F5F7]">
          Building <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C158] via-[#F3DE98] to-[#9999AA]">
            Digital
          </span> <br />
          Experiences.
        </h1>

        {/* Lead Paragraph */}
        <p className="max-w-[620px] mx-auto text-[#9999AA] text-base sm:text-lg leading-relaxed mb-10 font-normal">
          I design and develop modern websites, progressive web apps, digital products and interactive experiences focused on performance, usability and clean design.
        </p>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-3.5 flex-wrap">
          <a
            href="#work"
            className="btn-gold flex items-center gap-2 text-sm font-heading font-bold"
          >
            <span>View My Work</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="btn-glass flex items-center gap-2 text-sm font-medium"
          >
            <span>Contact Me</span>
          </a>
        </div>

        {/* Subtle Bottom Trust Badges */}
        <div className="mt-14 flex items-center justify-center gap-6 text-xs font-mono text-[#777788]">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#E5C158]" />
            100/100 Core Web Vitals
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#E5C158]" />
            Muhammad Arham Shahid
          </span>
        </div>

      </div>
    </header>
  );
};
