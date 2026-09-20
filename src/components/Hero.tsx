import React, { useState } from 'react';
import { DeveloperProfile } from '../types';
import {
  ArrowRight,
  Zap,
  ExternalLink,
  ShieldCheck,
  Smartphone,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import luxuryMockupImg from '../assets/images/luxury_pwa_mockup_1789889822450.jpg';

interface HeroProps {
  profile: DeveloperProfile;
  onExploreProjects: () => void;
  onOpenAdminPortal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onExploreProjects }) => {
  const [activeTab, setActiveTab] = useState<'seatify' | 'meterwise'>('seatify');

  return (
    <section id="overview" className="relative min-h-[92vh] flex items-center justify-center pt-28 sm:pt-32 pb-20 overflow-hidden bg-[#08080A] text-[#F5F5F7]">
      {/* Background Matte Obsidian Grids with Gold Dust */}
      <div className="absolute inset-0 bg-grid-obsidian opacity-30 pointer-events-none"></div>
      
      {/* Subtle Studio Gold Lighting */}
      <div className="absolute top-1/4 -left-48 w-[32rem] h-[32rem] rounded-full bg-[#E5C158]/5 blur-[160px] pointer-events-none"></div>
      <div className="absolute top-1/3 -right-48 w-[32rem] h-[32rem] rounded-full bg-[#E5C158]/5 blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Top Header & Identity */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6 mb-16">
          
          {/* Section Index & Status Badge in Clean Monospace */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#0E0E12] border border-[#4A3E1D] text-xs font-mono">
            <span className="text-[#E5C158] font-bold">01</span>
            <span className="text-[#8E8A7B] uppercase tracking-wider">Overview</span>
            <span className="text-[#4A3E1D]">•</span>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158] shadow-[0_0_8px_#E5C158]"></span>
              <span className="text-[#F5F5F7] font-medium">{profile.brand}</span>
            </div>
            <span className="text-[#4A3E1D] hidden sm:inline">•</span>
            <span className="text-[#E5C158] font-medium hidden sm:inline">PWA Architect</span>
          </div>

          {/* Main Display Headline with Brushed Liquid Gold */}
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-[#F5F5F7]">
            Architecting Fluid <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C158] via-[#F3DE98] to-[#D4AF37]">
              Progressive Web Apps
            </span>
          </h1>

          {/* Soft Cream Body Typography with Generous Spacing */}
          <p className="text-[#A1A1AA] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Engineered by <strong className="text-[#F5F5F7] font-medium font-heading">{profile.name}</strong>. Delivering native-grade 60fps application experiences directly in the browser—featuring offline-first service workers, instant installability, and verified 100% Lighthouse benchmarks.
          </p>

          {/* Action CTAs: Brushed Gold Primary & Dark Luxury Secondary */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onExploreProjects}
              className="px-8 py-3.5 rounded-lg bg-[#E5C158] hover:bg-[#F3DE98] text-[#08080A] font-bold font-heading text-sm transition-all shadow-lg shadow-[#E5C158]/20 active:scale-95 flex items-center gap-2.5 cursor-pointer"
            >
              <span>Explore 02 Bento Work</span>
              <ArrowRight className="w-4 h-4 text-[#08080A]" />
            </button>

            <a
              href="https://seatify-steel.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-lg bg-[#0E0E12] hover:bg-[#16151B] text-[#F5F5F7] border border-[#4A3E1D] font-medium text-sm transition-all hover:border-[#E5C158]/60 flex items-center gap-2"
            >
              <span>Live Seatify PWA</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#E5C158]" />
            </a>

            <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0E0E12] border border-[#4A3E1D] text-xs font-mono text-[#8E8A7B]">
              <span className="w-2 h-2 rounded-full bg-[#E5C158] shadow-[0_0_6px_#E5C158]"></span>
              <span className="text-[#F5F5F7]">100/100 Lighthouse</span>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* HERO VISUAL: Dedicated 1080p-Sharp Container with Mobile App Frame Breaking Out */}
        {/* ========================================================================= */}
        <div className="relative max-w-5xl mx-auto mt-6">
          
          {/* Subtle Outer Glow Frame */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-[#E5C158]/20 via-[#4A3E1D]/20 to-transparent blur-xl pointer-events-none opacity-60"></div>

          {/* Main 1080p-Sharp Luxury Container */}
          <div className="relative rounded-2xl bg-[#0E0E12] border border-[#4A3E1D] overflow-hidden shadow-2xl shadow-black">
            
            {/* Top Minimalist Luxury Bar */}
            <div className="px-6 py-3.5 bg-[#0A0A0D] border-b border-[#4A3E1D]/60 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#4A3E1D]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#4A3E1D]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E5C158]"></div>
                </div>
                <span className="text-[#8E8A7B] text-[11px] hidden sm:inline">PWA Architecture // Mobile First</span>
              </div>

              {/* Minimal App Toggle Tabs */}
              <div className="flex items-center gap-1.5 p-1 rounded-lg bg-[#08080A] border border-[#4A3E1D]/50">
                <button
                  onClick={() => setActiveTab('seatify')}
                  className={`px-3 py-1 rounded text-xs transition-all cursor-pointer ${
                    activeTab === 'seatify'
                      ? 'bg-[#1C180E] text-[#E5C158] border border-[#E5C158]/40 font-bold'
                      : 'text-[#8E8A7B] hover:text-[#F5F5F7]'
                  }`}
                >
                  Seatify PWA
                </button>
                <button
                  onClick={() => setActiveTab('meterwise')}
                  className={`px-3 py-1 rounded text-xs transition-all cursor-pointer ${
                    activeTab === 'meterwise'
                      ? 'bg-[#1C180E] text-[#E5C158] border border-[#E5C158]/40 font-bold'
                      : 'text-[#8E8A7B] hover:text-[#F5F5F7]'
                  }`}
                >
                  Meter-wise PWA
                </button>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-[#E5C158]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span className="hidden md:inline">100% Offline-Ready</span>
              </div>
            </div>

            {/* Container Body with Mobile Break-out Presentation */}
            <div className="p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative">
              
              {/* Left Architectural Column: Minimal Luxury Specs */}
              <div className="lg:col-span-6 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1C180E] border border-[#4A3E1D] text-xs font-mono text-[#E5C158]">
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Ultra-Sharp Mobile PWA Engine</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#F5F5F7] tracking-tight">
                  {activeTab === 'seatify'
                    ? 'Seatify: High-Performance Seating Arrangement'
                    : 'Meter-wise: Real-Time Resource Analytics'}
                </h3>

                <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                  {activeTab === 'seatify'
                    ? 'Engineered with a Stale-While-Revalidate service worker caching strategy, instant desktop/mobile installation, and drag-and-drop desk planning executing with zero frame drops.'
                    : 'A utility telemetry Progressive Web App delivering real-time energy metric analysis with IndexedDB local cache fallback and instantaneous edge hydration.'}
                </p>

                {/* Minimal Luxury Dashboard Metrics */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-[#08080A] border border-[#4A3E1D]/50 text-left">
                    <span className="text-[10px] font-mono uppercase text-[#8E8A7B] block">Lighthouse</span>
                    <span className="text-lg font-heading font-bold text-[#E5C158]">100%</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#08080A] border border-[#4A3E1D]/50 text-left">
                    <span className="text-[10px] font-mono uppercase text-[#8E8A7B] block">First Paint</span>
                    <span className="text-lg font-heading font-bold text-[#F5F5F7]">0.3s</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#08080A] border border-[#4A3E1D]/50 text-left">
                    <span className="text-[10px] font-mono uppercase text-[#8E8A7B] block">Offline Cache</span>
                    <span className="text-lg font-heading font-bold text-[#E5C158]">Sync</span>
                  </div>
                </div>

                {/* Direct Launch Link */}
                <div className="pt-2">
                  <a
                    href={activeTab === 'seatify' ? 'https://seatify-steel.vercel.app/' : 'https://meter-wise-app.vercel.app/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#18150D] hover:bg-[#221D12] text-[#E5C158] border border-[#4A3E1D] hover:border-[#E5C158]/60 text-xs font-mono font-medium transition-all"
                  >
                    <span>Launch {activeTab === 'seatify' ? 'Seatify' : 'Meter-wise'} Live PWA</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Mobile App Frame Breaking Out with 1080p-Sharp Graphic */}
              <div className="lg:col-span-6 flex justify-center relative">
                
                {/* Floating Gold Glow Behind Device */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 rounded-full bg-[#E5C158]/10 blur-3xl pointer-events-none"></div>

                {/* Luxury Smartphone Mockup Frame */}
                <div className="relative w-64 sm:w-72 rounded-[2.5rem] p-2.5 bg-gradient-to-b from-[#2A2312] via-[#121115] to-[#0E0E12] border border-[#4A3E1D] shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(229,193,88,0.15)] transition-transform duration-500 hover:scale-[1.02]">
                  
                  {/* Speaker & Dynamic Island Camera Notch */}
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#08080A] rounded-full z-30 border border-[#4A3E1D]/50 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#18150D] border border-[#4A3E1D]/80"></div>
                  </div>

                  {/* Clean 1080p-Sharp Screen Display */}
                  <div className="relative rounded-[2rem] overflow-hidden bg-[#08080A] border border-[#4A3E1D]/40 aspect-[9/18]">
                    <img
                      src={luxuryMockupImg}
                      alt="Ultra-sharp Luxury PWA Interface Mockup"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />

                    {/* Subtle Liquid Gold Accent Line Over Screen */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#08080A] via-[#08080A]/80 to-transparent">
                      <div className="flex items-center justify-between text-[10px] font-mono text-[#E5C158]">
                        <span className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158] animate-pulse"></span>
                          {activeTab === 'seatify' ? 'Seatify Core v2.4' : 'Meter-wise v1.9'}
                        </span>
                        <span className="text-[#8E8A7B]">60 FPS</span>
                      </div>
                      <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#E5C158] to-transparent mt-1"></div>
                    </div>
                  </div>

                  {/* Breaking Out Floating Luxury Pill Badge */}
                  <div className="absolute -bottom-4 -left-6 sm:-left-8 px-3.5 py-1.5 rounded-full bg-[#0E0E12]/95 border border-[#4A3E1D] shadow-xl backdrop-blur-md flex items-center gap-2 text-[11px] font-mono text-[#F5F5F7] z-30">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E5C158]" />
                    <span>Lighthouse 100/100</span>
                  </div>

                  <div className="absolute -top-3 -right-4 sm:-right-6 px-3.5 py-1.5 rounded-full bg-[#0E0E12]/95 border border-[#4A3E1D] shadow-xl backdrop-blur-md flex items-center gap-2 text-[11px] font-mono text-[#E5C158] z-30">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158] shadow-[0_0_6px_#E5C158]"></span>
                    <span>Service Worker Sync</span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
