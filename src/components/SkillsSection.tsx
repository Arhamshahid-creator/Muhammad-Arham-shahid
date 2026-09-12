import React from 'react';
import { ExternalLink, Cpu, CheckCircle2 } from 'lucide-react';

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
      name: "GitHub",
      role: "Version Control & CI/CD",
      description: "Automated GitHub Actions workflows, branching models, pull request reviews, and repository management.",
      logo: "/github-logo.svg",
      tags: ["CI/CD Actions", "Git Architecture", "Open Source"],
      linkUrl: "https://github.com/MuhammadArhamShahid"
    },
    {
      name: "Vercel",
      role: "Edge Deployments & Hosting",
      description: "Continuous deployments, zero-config build pipelines, global edge network distribution, and DNS domain routing.",
      logo: "/vercel-logo.svg",
      tags: ["Global Edge CDN", "Instant Deploys", "Serverless"],
      linkUrl: "https://vercel.com"
    },
    {
      name: "Google AI Studio",
      role: "Generative AI & Gemini Models",
      description: "Direct integration of Google Gemini API models, structured prompt engineering, and multimodal AI features.",
      logo: "/google-ai-studio-logo.svg",
      tags: ["Gemini 2.5 LLM", "Multimodal APIs", "AI Prototyping"],
      linkUrl: "https://aistudio.google.com"
    },
    {
      name: "Cloudflare",
      role: "Edge Security & DNS",
      description: "Fast DNS propagation, DDoS mitigation, SSL/TLS certificates, and Cloudflare Workers edge caching.",
      logo: "/cloudflare-logo.svg",
      tags: ["DNS Management", "Edge Security", "Workers Cache"],
      linkUrl: "https://cloudflare.com"
    },
    {
      name: "Google Search Console",
      role: "SEO & Core Web Vitals",
      description: "Sitemap submission, Google search crawling verification, schema structured data, and performance indexing.",
      logo: "/google-search-console-logo.svg",
      tags: ["Search Indexing", "Core Web Vitals", "Structured Data"],
      linkUrl: "https://search.google.com/search-console"
    },
    {
      name: "React (v18+)",
      role: "Component Architecture",
      description: "Modular component hierarchies, custom hooks, context state management, and optimized render cycles.",
      customSvg: (
        <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center shadow-xs">
          <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-7 h-7">
            <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
            <g stroke="#61dafb" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
        </div>
      ),
      tags: ["Hooks & State", "Virtual DOM", "SPA Architecture"]
    },
    {
      name: "Progressive Web Apps",
      role: "Offline & Installable Apps",
      description: "Service worker caching strategies, web app manifests, background sync, and native-like installable web apps.",
      customSvg: (
        <div className="w-10 h-10 rounded-xl bg-purple-900/90 text-purple-200 flex items-center justify-center font-bold shadow-xs">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="5" y="2" width="14" height="20" rx="3" stroke="#e9d5ff" />
            <path d="M12 18h.01" stroke="#e9d5ff" strokeWidth="2" strokeLinecap="round" />
            <path d="M13 7l-3 5h4l-2 5" fill="#fde047" stroke="#fde047" strokeWidth="1" strokeLinejoin="round" />
          </svg>
        </div>
      ),
      tags: ["Service Workers", "Offline Manifests", "Seatify & Meter-wise"]
    },
    {
      name: "Tailwind CSS",
      role: "Utility UI Design Tokens",
      description: "Custom design systems, responsive grid and flexbox math, dark/light theme switching, and zero-runtime CSS.",
      customSvg: (
        <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center shadow-xs">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#38bdf8">
            <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
          </svg>
        </div>
      ),
      tags: ["Utility Tokens", "Fluid Breakpoints", "Zero Runtime"]
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-mono font-semibold">
            <Cpu className="w-3.5 h-3.5 text-emerald-700" />
            <span>Tech Stack & Platforms</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Platforms & Technical Competencies
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Core technologies and cloud infrastructure mastered by <strong className="text-slate-900">Muhammad Arham Shahid</strong> to build, deploy, and maintain high-performance web products.
          </p>
        </div>

        {/* 4x2 Clean Grid of Platforms and Tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {featuredPlatforms.map((platform) => (
            <div
              key={platform.name}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md hover:border-emerald-400 transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                {/* Logo / Custom SVG Header */}
                <div className="flex items-center justify-between">
                  {platform.logo ? (
                    <div className="h-10 px-2 py-1 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center max-w-[140px]">
                      <img
                        src={platform.logo}
                        alt={`${platform.name} logo`}
                        className="h-6 w-auto max-w-full object-contain"
                        loading="lazy"
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
                      className="text-slate-400 hover:text-emerald-600 transition-colors p-1"
                      title={`Visit ${platform.name}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  )}
                </div>

                {/* Name & Role */}
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {platform.name}
                  </h3>
                  <p className="text-xs font-mono font-medium text-emerald-700">
                    {platform.role}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed">
                  {platform.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 pt-3 mt-3 border-t border-slate-100">
                {platform.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200/70 font-medium"
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
