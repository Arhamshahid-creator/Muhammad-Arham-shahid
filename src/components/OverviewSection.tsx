import React from 'react';
import { DeveloperProfile } from '../types';
import { Shield, Target, Lightbulb, Zap, Globe, Layout, Smartphone, Sparkles } from 'lucide-react';

interface OverviewSectionProps {
  profile: DeveloperProfile;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({ profile }) => {
  return (
    <section id="overview" className="py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-mono font-semibold">
            <Shield className="w-3.5 h-3.5 text-emerald-600" />
            <span>Professional Overview & Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineering Identity & Ecosystem
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            A strategic approach to full-stack web development and progressive web architectures under the <span className="text-emerald-700 font-bold">{profile.brand}</span> brand entity.
          </p>
        </div>

        {/* 2x2 Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Brand Entity */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-400 transition-all duration-300 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
              <span>Muhammad Arham Shahid</span>
              <span className="text-xs px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono font-bold border border-emerald-300">{profile.brand}</span>
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              {profile.overview.bio}
            </p>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Brand Entity: <strong className="text-slate-900">{profile.brand}</strong></span>
              <span>Status: <strong className="text-emerald-600 font-bold">Active & Deployment-Ready</strong></span>
            </div>
          </div>

          {/* Card 2: Primary Technical Focus & Key Tools */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-cyan-400 transition-all duration-300 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-cyan-100 border border-cyan-300 text-cyan-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Core Technical Focus & Cloud Tools
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              {profile.overview.primaryFocus}
            </p>
            <ul className="space-y-2 text-xs text-slate-700 font-mono">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <strong>Platforms:</strong> GitHub, Vercel, Google AI Studio, Cloudflare, Search Console
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                <strong>PWAs:</strong> Offline-first caching (Seatify, Meter-wise)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <strong>Frontend:</strong> React, TypeScript, Tailwind CSS, Vite
              </li>
            </ul>
          </div>

          {/* Card 3: Core Philosophy */}
          <div className="bg-gradient-to-r from-emerald-50 via-cyan-50 to-white p-8 rounded-2xl border border-emerald-200 shadow-sm hover:shadow-md md:col-span-2 group">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                <Lightbulb className="w-7 h-7" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase font-mono tracking-wider font-bold text-emerald-800">Core Engineering Philosophy</span>
                  <span className="w-12 h-px bg-emerald-300"></span>
                </div>
                <blockquote className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                  "{profile.overview.corePhilosophy}"
                </blockquote>
                <p className="text-slate-600 text-sm">
                  Every line of code and layout decision at <strong className="text-slate-900">{profile.brand}</strong> is engineered with precision, reliability, and long-term maintainability.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
