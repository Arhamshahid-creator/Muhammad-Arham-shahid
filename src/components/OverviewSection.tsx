import React from 'react';
import { DeveloperProfile } from '../types';
import { Shield, Target, Lightbulb, Globe, CheckCircle2 } from 'lucide-react';

interface OverviewSectionProps {
  profile: DeveloperProfile;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({ profile }) => {
  return (
    <section id="overview-details" className="py-24 sm:py-32 bg-[#08080A] relative text-[#F5F5F7] border-t border-[#4A3E1D]/40 overflow-hidden">
      
      {/* Background Subtle Luxury Grid */}
      <div className="absolute inset-0 bg-grid-obsidian opacity-25 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0E0E12] border border-[#4A3E1D] text-[#E5C158] text-xs font-mono">
            <span className="font-bold">01</span>
            <span className="text-[#8E8A7B] uppercase tracking-wider">Overview</span>
            <span className="text-[#4A3E1D]">•</span>
            <span className="text-[#F5F5F7] font-medium">Architectural Philosophy</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F5F7] leading-tight">
            Engineering Principles & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C158] via-[#F3DE98] to-[#D4AF37]">
              PWA Standards
            </span>
          </h2>

          <p className="text-[#A1A1AA] text-base leading-relaxed font-normal">
            A content-first engineering methodology for Progressive Web Apps and zero-latency client execution under the <span className="text-[#E5C158] font-semibold">{profile.brand}</span> standard.
          </p>
        </div>

        {/* 2x2 Overview Grid - Luxury Obsidian Cards with 1px Bronze Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Brand Entity */}
          <div className="bg-[#0E0E12] p-8 sm:p-10 rounded-2xl border border-[#4A3E1D] luxury-card-hover relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#18150D] border border-[#4A3E1D] text-[#E5C158] flex items-center justify-center mb-6">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-[#F5F5F7] mb-3 flex items-center gap-3">
                <span>{profile.name}</span>
                <span className="text-xs px-2.5 py-0.5 rounded bg-[#1C180E] text-[#E5C158] font-mono font-semibold border border-[#4A3E1D]">
                  {profile.brand}
                </span>
              </h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed mb-6 font-normal">
                {profile.overview.bio}
              </p>
            </div>
            <div className="pt-5 border-t border-[#4A3E1D]/50 flex items-center justify-between text-xs font-mono text-[#8E8A7B]">
              <span>Brand Entity: <strong className="text-[#F5F5F7]">{profile.brand}</strong></span>
              <span className="text-[#E5C158] font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158] shadow-[0_0_6px_#E5C158]"></span>
                Verified Architect
              </span>
            </div>
          </div>

          {/* Card 2: Primary Technical Focus & Key Tools */}
          <div className="bg-[#0E0E12] p-8 sm:p-10 rounded-2xl border border-[#4A3E1D] luxury-card-hover relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#18150D] border border-[#4A3E1D] text-[#E5C158] flex items-center justify-center mb-6">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-[#F5F5F7] mb-3">
                Core PWA Architecture
              </h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed mb-6 font-normal">
                {profile.overview.primaryFocus}
              </p>
              <ul className="space-y-3 text-xs text-[#A1A1AA] font-mono">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E5C158] shrink-0" />
                  <span><strong>Ecosystem:</strong> Service Worker Cache API, Offline First, Web App Manifest</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E5C158] shrink-0" />
                  <span><strong>Infrastructure:</strong> GitHub CI/CD, Vercel Edge, Zero-Config PWA Build</span>
                </li>
              </ul>
            </div>
            <div className="pt-5 border-t border-[#4A3E1D]/50 flex items-center justify-between text-xs font-mono text-[#8E8A7B]">
              <span>Deployment: <strong className="text-[#F5F5F7]">Global Edge CDN</strong></span>
              <span className="text-[#E5C158] font-semibold">100/100 Vitals</span>
            </div>
          </div>

          {/* Card 3: Engineering Philosophy */}
          <div className="bg-[#0E0E12] p-8 sm:p-10 rounded-2xl border border-[#4A3E1D] luxury-card-hover relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#18150D] border border-[#4A3E1D] text-[#E5C158] flex items-center justify-center mb-6">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-[#F5F5F7] mb-3">
                Execution Philosophy
              </h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed mb-6 font-normal">
                {profile.overview.corePhilosophy}
              </p>
              <div className="p-4 rounded-xl bg-[#08080A] border border-[#4A3E1D]/60 text-xs font-mono text-[#A1A1AA]">
                <div className="text-[#E5C158] font-semibold mb-1">Standard SLA:</div>
                Sub-second First Contentful Paint, 0.00 Cumulative Layout Shift, and instant standalone desktop/mobile launcher.
              </div>
            </div>
            <div className="pt-5 border-t border-[#4A3E1D]/50 flex items-center justify-between text-xs font-mono text-[#8E8A7B]">
              <span>Design System: <strong className="text-[#F5F5F7]">Tailwind CSS</strong></span>
              <span className="text-[#E5C158] font-semibold">Native Fluidity</span>
            </div>
          </div>

          {/* Card 4: Verified Benchmarks */}
          <div className="bg-[#0E0E12] p-8 sm:p-10 rounded-2xl border border-[#4A3E1D] luxury-card-hover relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#18150D] border border-[#4A3E1D] text-[#E5C158] flex items-center justify-center mb-6">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-[#F5F5F7] mb-3">
                Verified Benchmarks
              </h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed mb-4 font-normal">
                Every application released under ARSGROUP passes Google Lighthouse audits with 99+ to 100% scores across Performance, Accessibility, Best Practices, and SEO.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-[#08080A] border border-[#4A3E1D]/50">
                  <div className="text-[10px] font-mono text-[#8E8A7B] uppercase">Seatify PWA</div>
                  <div className="text-xl font-heading font-bold text-[#E5C158]">100 / 100</div>
                </div>
                <div className="p-3 rounded-lg bg-[#08080A] border border-[#4A3E1D]/50">
                  <div className="text-[10px] font-mono text-[#8E8A7B] uppercase">Meter-wise PWA</div>
                  <div className="text-xl font-heading font-bold text-[#E5C158]">99+ / 100</div>
                </div>
              </div>
            </div>
            <div className="pt-5 border-t border-[#4A3E1D]/50 flex items-center justify-between text-xs font-mono text-[#8E8A7B]">
              <span>Audit Tool: <strong className="text-[#F5F5F7]">Google Lighthouse</strong></span>
              <span className="text-[#E5C158] font-semibold">100% Verified</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
