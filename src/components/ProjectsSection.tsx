import React from 'react';
import { Project } from '../types';
import {
  ExternalLink,
  Github,
  Zap,
  CheckCircle2,
  Smartphone,
  Gauge,
  ShieldCheck,
  ArrowUpRight
} from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  // Circular Luxury SVG Gauge for Lighthouse Scores in Champagne Gold
  const renderLighthouseGauge = (score: number, label: string) => {
    const radius = 17;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (score / 100) * circumference;

    return (
      <div className="flex flex-col items-center gap-1">
        <div className="relative w-12 h-12 flex items-center justify-center">
          <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 42 42">
            <circle
              cx="21"
              cy="21"
              r={radius}
              stroke="rgba(74, 62, 29, 0.4)"
              strokeWidth="2.5"
              fill="transparent"
            />
            <circle
              cx="21"
              cy="21"
              r={radius}
              stroke="#E5C158"
              strokeWidth="2.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="transparent"
            />
          </svg>
          <span className="absolute font-mono text-xs font-bold text-[#E5C158]">
            {score}
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#8E8A7B] uppercase tracking-tight">
          {label}
        </span>
      </div>
    );
  };

  const seatifyProject = projects.find((p) => p.id === 'seatify') || projects[0];
  const meterwiseProject = projects.find((p) => p.id === 'meter-wise') || projects[1];

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#08080A] relative text-[#F5F5F7] border-t border-[#4A3E1D]/40 overflow-hidden">
      
      {/* Background Subtle Luxury Grid */}
      <div className="absolute inset-0 bg-grid-obsidian opacity-25 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0E0E12] border border-[#4A3E1D] text-[#E5C158] text-xs font-mono">
              <span className="font-bold">02</span>
              <span className="text-[#8E8A7B] uppercase tracking-wider">Bento Work</span>
              <span className="text-[#4A3E1D]">•</span>
              <span className="text-[#F5F5F7] font-medium">Production PWAs</span>
            </div>
            
            <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F5F7] leading-tight">
              Production Architectures & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C158] via-[#F3DE98] to-[#D4AF37]">
                100% Lighthouse Deployments
              </span>
            </h2>
            
            <p className="text-[#A1A1AA] text-base leading-relaxed font-normal">
              Engineered with strict zero-latency service worker caching, instant standalone execution, and verified 60fps viewports.
            </p>
          </div>

          {/* Quick Technical Metrics Bar */}
          <div className="flex items-center gap-2 p-2 rounded-xl bg-[#0E0E12] border border-[#4A3E1D] shrink-0 text-xs font-mono">
            <div className="px-4 py-2.5 rounded-lg bg-[#08080A] border border-[#4A3E1D]/50">
              <span className="text-[#8E8A7B] text-[10px] block uppercase">Average Score</span>
              <span className="text-[#E5C158] font-bold text-sm">100 / 100</span>
            </div>
            <div className="px-4 py-2.5 rounded-lg bg-[#08080A] border border-[#4A3E1D]/50">
              <span className="text-[#8E8A7B] text-[10px] block uppercase">Latency</span>
              <span className="text-[#F5F5F7] font-bold text-sm">&lt; 0.4s FCP</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BENTO GRID: Premium Luxury Dashboard Widgets with Minimal Text & High Craft */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* BENTO ITEM 1: Seatify Hero Widget (Span 7) */}
          <div className="lg:col-span-7 bg-[#0E0E12] rounded-2xl border border-[#4A3E1D] luxury-card-hover overflow-hidden flex flex-col justify-between p-8 sm:p-10 relative">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E5C158] shadow-[0_0_8px_#E5C158]"></span>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#E5C158] font-semibold">
                    FLAGSHIP PWA // SEATIFY
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#1C180E] border border-[#4A3E1D] text-[11px] font-mono text-[#E5C158]">
                  100/100 Lighthouse
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#F5F5F7] mb-2 tracking-tight">
                {seatifyProject.name}
              </h3>
              <p className="text-sm sm:text-base text-[#A1A1AA] mb-6 leading-relaxed">
                {seatifyProject.tagline}
              </p>

              {/* Minimal App Preview Frame */}
              <div className="relative rounded-xl overflow-hidden border border-[#4A3E1D]/70 aspect-[16/9] bg-[#08080A] mb-6 group">
                <img
                  src={seatifyProject.image}
                  alt="Seatify PWA Interface"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E12] via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-[#F5F5F7] px-3 py-2 rounded-lg bg-[#0E0E12]/90 border border-[#4A3E1D] backdrop-blur-md">
                  <span className="text-[#E5C158]">https://seatify-steel.vercel.app/</span>
                  <span className="text-[#8E8A7B]">Edge Cached</span>
                </div>
              </div>

              {/* Minimalist Telemetry Gauges */}
              <div className="flex items-center justify-around py-4 px-3 rounded-xl bg-[#08080A] border border-[#4A3E1D]/60 mb-6">
                {renderLighthouseGauge(100, 'Performance')}
                {renderLighthouseGauge(100, 'Accessibility')}
                {renderLighthouseGauge(100, 'Best Practices')}
                {renderLighthouseGauge(100, 'SEO')}
                {renderLighthouseGauge(100, 'PWA')}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#4A3E1D]/50">
              <div className="flex items-center gap-2 text-xs font-mono text-[#8E8A7B]">
                <span>Cache: Stale-While-Revalidate</span>
                <span>•</span>
                <span>FCP: 0.3s</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={seatifyProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#E5C158] hover:bg-[#F3DE98] text-[#08080A] font-heading font-bold text-xs transition-all shadow-md shadow-[#E5C158]/10"
                >
                  <span>Launch Live PWA</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                {seatifyProject.githubUrl && (
                  <a
                    href={seatifyProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-[#08080A] hover:bg-[#18150D] text-[#A1A1AA] hover:text-[#F5F5F7] border border-[#4A3E1D] transition-all"
                    title="View Source on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* BENTO ITEM 2: Meter-wise Hero Widget (Span 5) */}
          <div className="lg:col-span-5 bg-[#0E0E12] rounded-2xl border border-[#4A3E1D] luxury-card-hover overflow-hidden flex flex-col justify-between p-8 sm:p-10 relative">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E5C158] shadow-[0_0_8px_#E5C158]"></span>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#E5C158] font-semibold">
                    UTILITY PWA // METER-WISE
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#1C180E] border border-[#4A3E1D] text-[11px] font-mono text-[#E5C158]">
                  99+ Lighthouse
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#F5F5F7] mb-2 tracking-tight">
                {meterwiseProject.name}
              </h3>
              <p className="text-sm sm:text-base text-[#A1A1AA] mb-6 leading-relaxed">
                {meterwiseProject.tagline}
              </p>

              {/* Minimal App Preview Frame */}
              <div className="relative rounded-xl overflow-hidden border border-[#4A3E1D]/70 aspect-[16/9] bg-[#08080A] mb-6 group">
                <img
                  src={meterwiseProject.image}
                  alt="Meter-wise PWA Interface"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E12] via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-[#F5F5F7] px-3 py-2 rounded-lg bg-[#0E0E12]/90 border border-[#4A3E1D] backdrop-blur-md">
                  <span className="text-[#E5C158]">https://meter-wise-app.vercel.app/</span>
                  <span className="text-[#8E8A7B]">IndexedDB</span>
                </div>
              </div>

              {/* Minimal Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-[#08080A] border border-[#4A3E1D]/60 text-left">
                  <span className="text-[10px] font-mono text-[#8E8A7B] uppercase block">Performance</span>
                  <span className="text-xl font-heading font-bold text-[#E5C158]">99 / 100</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#08080A] border border-[#4A3E1D]/60 text-left">
                  <span className="text-[10px] font-mono text-[#8E8A7B] uppercase block">Core Vitals</span>
                  <span className="text-xl font-heading font-bold text-[#F5F5F7]">0.00 CLS</span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#4A3E1D]/50">
              <div className="text-xs font-mono text-[#8E8A7B]">
                Zero-latency Client Charts
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={meterwiseProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#E5C158] hover:bg-[#F3DE98] text-[#08080A] font-heading font-bold text-xs transition-all shadow-md shadow-[#E5C158]/10"
                >
                  <span>Launch Live PWA</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                {meterwiseProject.githubUrl && (
                  <a
                    href={meterwiseProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-[#08080A] hover:bg-[#18150D] text-[#A1A1AA] hover:text-[#F5F5F7] border border-[#4A3E1D] transition-all"
                    title="View Source on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* SECONDARY BENTO ROW: 3 Minimal Architecture Widgets */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-8 rounded-2xl bg-[#0E0E12] border border-[#4A3E1D] luxury-card-hover space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#18150D] border border-[#4A3E1D] text-[#E5C158] flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-xl font-heading font-bold text-[#F5F5F7]">Service Worker Cache</h4>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              Asset pre-caching with versioned cache invalidation ensures zero-latency page transitions even under 0% network connectivity.
            </p>
            <div className="text-xs font-mono text-[#E5C158] pt-2">
              Cache API • Background Sync
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#0E0E12] border border-[#4A3E1D] luxury-card-hover space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#18150D] border border-[#4A3E1D] text-[#E5C158] flex items-center justify-center">
              <Smartphone className="w-5 h-5" />
            </div>
            <h4 className="text-xl font-heading font-bold text-[#F5F5F7]">Web App Manifest</h4>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              Native-grade launcher integration across iOS Safari, Android Chrome, and Desktop with custom splash screens and display standalones.
            </p>
            <div className="text-xs font-mono text-[#E5C158] pt-2">
              Display: Standalone • iOS Touch
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#0E0E12] border border-[#4A3E1D] luxury-card-hover space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#18150D] border border-[#4A3E1D] text-[#E5C158] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-xl font-heading font-bold text-[#F5F5F7]">100% Core Web Vitals</h4>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              Rigorous optimization targeting &lt; 0.4s First Contentful Paint, 0.00 CLS, and instant bundle tree-shaking with Vite Edge.
            </p>
            <div className="text-xs font-mono text-[#E5C158] pt-2">
              Lighthouse 100/100 Audited
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
