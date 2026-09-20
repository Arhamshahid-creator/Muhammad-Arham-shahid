import React from 'react';
import { aboutStats } from '../data/portfolioData';
import { DeveloperProfile } from '../types';
import { Sparkles, CheckCircle2, Award, Terminal, User } from 'lucide-react';

interface AboutSectionProps {
  profile: DeveloperProfile;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
  return (
    <section id="about" className="w-[min(1150px,92%)] mx-auto py-24 sm:py-32 relative">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
        
        {/* Left Column: Narrative */}
        <div className="lg:col-span-6 space-y-6 reveal">
          <small className="text-[#888899] font-mono text-xs tracking-[2px] uppercase block font-medium">
            ABOUT ME
          </small>

          <h2 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tighter text-[#F5F5F7] leading-tight">
            Turning ideas into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C158] via-[#F3DE98] to-[#AAA]">
              digital products.
            </span>
          </h2>

          <p className="text-[#9999AA] text-base sm:text-lg leading-relaxed font-normal">
            I enjoy creating digital products that combine technology, design, and practical problem solving. My focus is on building experiences that are simple to understand but powerful underneath.
          </p>

          <p className="text-[#888899] text-sm sm:text-base leading-relaxed font-normal">
            As the founder and developer behind <strong className="text-white font-medium">{profile.brand}</strong>, I architect applications like <strong className="text-[#E5C158] font-medium">MeterWise</strong> and <strong className="text-[#E5C158] font-medium">Seatify</strong>—prioritizing sub-second loading speeds, offline caching, and responsive cross-device precision.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-[#AAA]">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/8">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#E5C158]" />
              PWA Architecture
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/8">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#E5C158]" />
              Edge Network Deployments
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/8">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#E5C158]" />
              Lighthouse 100 Standards
            </span>
          </div>
        </div>

        {/* Right Column: Profile Portrait Card & Verified Benchmarks */}
        <div className="lg:col-span-6 reveal right">
          <div className="p-7 sm:p-9 rounded-[32px] bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-white/[0.015] border border-white/10 shadow-2xl backdrop-blur-xl relative overflow-hidden group">
            
            {/* Ambient Corner Flare */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#E5C158]/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* Profile Photo & Info Header */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 pb-7 border-b border-white/8">
              
              {/* Photo Box (Protected: Viewing Only) */}
              <div className="relative shrink-0 flex flex-col items-center">
                <div
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-[#E5C158]/60 relative bg-[#111] shadow-[0_0_30px_rgba(229,193,88,0.2)]"
                >
                  {profile.avatar ? (
                    <img
                      src={profile.avatar}
                      alt={profile.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-[#151518] text-[#E5C158] p-2 text-center">
                      <div className="w-12 h-12 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center mb-1">
                        <User className="w-6 h-6 text-[#E5C158]" />
                      </div>
                      <span className="text-[11px] font-mono text-[#AAA]">Arham Shahid</span>
                    </div>
                  )}
                </div>

                <span
                  className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#10B981] border-2 border-[#08090C] shadow-[0_0_8px_#10B981]"
                  title="Available for projects"
                ></span>
              </div>

              <div className="text-center sm:text-left space-y-2 flex-1">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#18150D] border border-[#4A3E1D] text-[#E5C158] text-[11px] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158]"></span>
                  <span>{profile.brand} • Lead Developer</span>
                </div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">
                  {profile.name}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-[#AAA]">
                  Progressive Web App Architect & Creator
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-2 pt-1 text-xs font-mono text-[#888899]">
                  <Terminal className="w-3.5 h-3.5 text-[#E5C158]" />
                  <span>TypeScript • React • Service Workers</span>
                </div>
              </div>
            </div>

            {/* Verified Benchmarks 2x2 Stats Grid */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-[#AAA] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158]"></span>
                  Verified Engineering Benchmarks
                </span>
                <Sparkles className="w-3.5 h-3.5 text-[#E5C158]" />
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 p-4 rounded-2xl bg-white/[0.02] border border-white/6">
                {aboutStats.map((stat) => (
                  <div key={stat.label} className="space-y-1">
                    <div className="font-heading font-black text-3xl sm:text-4xl text-[#F5F5F7] tracking-tight group-hover:text-[#E5C158] transition-colors">
                      {stat.value}
                    </div>
                    <p className="text-xs font-mono text-[#777788]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/8 flex items-center justify-between text-xs font-mono text-[#888899]">
              <span>Entity: <strong className="text-white">{profile.brand}</strong></span>
              <span className="text-[#E5C158] flex items-center gap-1">
                <Award className="w-3.5 h-3.5" /> 100/100 Lighthouse
              </span>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
