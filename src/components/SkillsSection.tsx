import React from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';

interface SkillPlatform {
  name: string;
  role: string;
  description: string;
  logo?: string;
  customSvg?: React.ReactNode;
  tags: string[];
  linkUrl?: string;
}

export const SkillsSection: React.FC = () => {
  const featuredPlatforms: SkillPlatform[] = [
    {
      name: "Progressive Web Apps",
      role: "Offline First & Native Shells",
      description: "Service worker lifecycle caching, custom web app manifests, background sync, and installable 60fps app shells.",
      customSvg: (
        <div className="w-10 h-10 rounded-xl bg-[#18150D] border border-[#4A3E1D] text-[#E5C158] flex items-center justify-center font-bold">
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="5" y="2" width="14" height="20" rx="2" stroke="#E5C158" />
            <path d="M12 18h.01" stroke="#E5C158" strokeWidth="2" strokeLinecap="round" />
            <path d="M13 7l-3 5h4l-2 5" fill="#E5C158" stroke="#E5C158" strokeWidth="1" strokeLinejoin="round" />
          </svg>
        </div>
      ),
      tags: ["Service Workers", "Cache Storage API", "Web App Manifest", "Background Sync"]
    },
    {
      name: "GitHub",
      role: "Version Control & CI/CD",
      description: "Automated GitHub Actions CI/CD workflows, semantic versioning, branch management, and repository automation.",
      logo: "/github-logo.svg",
      tags: ["GitHub Actions", "CI/CD Deployment", "Git Automation"],
      linkUrl: "https://github.com/MuhammadArhamShahid"
    },
    {
      name: "Vercel",
      role: "Global Edge Network & CDN",
      description: "Zero-latency edge network deployments, serverless functions, instantaneous preview environments, and custom domains.",
      logo: "/vercel-logo.svg",
      tags: ["Edge CDN", "Instant Preview", "Serverless Functions"],
      linkUrl: "https://vercel.com"
    },
    {
      name: "Google AI Studio",
      role: "Gemini API & Generative Models",
      description: "Server-side integration of Google Gemini 2.5 Flash models, prompt engineering, multimodal APIs, and structured JSON parsing.",
      logo: "/google-ai-studio-logo.svg",
      tags: ["Gemini 2.5 LLM", "Multimodal Vision", "Structured Prompts"],
      linkUrl: "https://aistudio.google.com"
    },
    {
      name: "Cloudflare",
      role: "Edge Security & Fast DNS",
      description: "Fast global DNS propagation, SSL/TLS encryption, DDoS defense mitigation, and Cloudflare Workers edge caching.",
      logo: "/cloudflare-logo.svg",
      tags: ["Global Anycast DNS", "DDoS Mitigation", "Workers Edge"],
      linkUrl: "https://cloudflare.com"
    },
    {
      name: "Google Search Console",
      role: "SEO & Core Web Vitals",
      description: "Sitemap indexing, structured JSON-LD schema audits, Google crawler validation, and Core Web Vitals monitoring.",
      logo: "/google-search-console-logo.svg",
      tags: ["Search Indexing", "JSON-LD Schema", "Core Web Vitals"],
      linkUrl: "https://search.google.com/search-console"
    },
    {
      name: "React (v18+)",
      role: "Component Architecture & Hooks",
      description: "Declarative UI engineering, custom hooks, performant state flows, and modular reusable component systems.",
      customSvg: (
        <div className="w-10 h-10 rounded-xl bg-[#18150D] border border-[#4A3E1D] text-[#E5C158] flex items-center justify-center font-bold">
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#E5C158" strokeWidth="1.5">
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
            <circle cx="12" cy="12" r="2" fill="#E5C158" />
          </svg>
        </div>
      ),
      tags: ["React 18", "TypeScript", "Tailwind CSS", "Vite PWA"]
    },
    {
      name: "Lighthouse Performance",
      role: "100/100 Benchmark Optimization",
      description: "Optimizing critical rendering paths, sub-400ms First Contentful Paint, zero cumulative layout shift, and instant asset streaming.",
      customSvg: (
        <div className="w-10 h-10 rounded-xl bg-[#18150D] border border-[#4A3E1D] text-[#E5C158] flex items-center justify-center font-mono font-bold text-xs">
          100
        </div>
      ),
      tags: ["FCP < 0.4s", "CLS 0.00", "Asset Compression", "HTTP/2 & HTTP/3"]
    }
  ];

  return (
    <section id="skills" className="py-24 sm:py-32 bg-[#08080A] relative text-[#F5F5F7] border-t border-[#4A3E1D]/40 overflow-hidden">
      
      {/* Background Subtle Luxury Grid */}
      <div className="absolute inset-0 bg-grid-obsidian opacity-25 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0E0E12] border border-[#4A3E1D] text-[#E5C158] text-xs font-mono">
            <span className="font-bold">03</span>
            <span className="text-[#8E8A7B] uppercase tracking-wider">Stack</span>
            <span className="text-[#4A3E1D]">•</span>
            <span className="text-[#F5F5F7] font-medium">Production Ecosystem</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F5F7] leading-tight">
            Platform Mastery & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C158] via-[#F3DE98] to-[#D4AF37]">
              Edge Infrastructure
            </span>
          </h2>

          <p className="text-[#A1A1AA] text-base leading-relaxed font-normal">
            Technologies, edge hosting environments, and browser APIs utilized by <strong className="text-[#F5F5F7] font-medium font-heading">Muhammad Arham Shahid</strong> to build high-performance Progressive Web Apps.
          </p>
        </div>

        {/* 4x2 Clean Grid of Platforms and Tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPlatforms.map((platform) => (
            <div
              key={platform.name}
              className="bg-[#0E0E12] p-7 rounded-2xl border border-[#4A3E1D] luxury-card-hover flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-4 relative z-10">
                {/* Logo / Custom SVG Header */}
                <div className="flex items-center justify-between">
                  {platform.logo ? (
                    <div className="h-10 px-3 py-1.5 rounded-xl bg-[#08080A] border border-[#4A3E1D] flex items-center justify-center max-w-[140px]">
                      <img
                        src={platform.logo}
                        alt={`${platform.name} logo`}
                        className="h-5 w-auto max-w-full object-contain"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ) : (
                    platform.customSvg
                  )}

                  {platform.linkUrl ? (
                    <a
                      href={platform.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8E8A7B] hover:text-[#E5C158] transition-colors p-2 rounded-lg bg-[#08080A] hover:bg-[#18150D] border border-[#4A3E1D]/60"
                      title={`Visit ${platform.name}`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-[#E5C158] shadow-[0_0_6px_#E5C158]"></span>
                  )}
                </div>

                <div>
                  <h3 className="font-heading font-bold text-lg text-[#F5F5F7] group-hover:text-[#E5C158] transition-colors">
                    {platform.name}
                  </h3>
                  <p className="text-xs font-mono text-[#E5C158] mt-0.5 font-medium">
                    {platform.role}
                  </p>
                </div>

                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  {platform.description}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-4 mt-4 border-t border-[#4A3E1D]/50 flex flex-wrap gap-1.5 relative z-10">
                {platform.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded bg-[#08080A] text-[#8E8A7B] border border-[#4A3E1D]/50 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
