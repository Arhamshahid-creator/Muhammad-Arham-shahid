import React from 'react';
import { DeveloperProfile } from '../types';
import { Shield, ArrowUp, Github, Mail, Globe } from 'lucide-react';

interface FooterProps {
  profile: DeveloperProfile;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          
          {/* Left Brand Identity */}
          <div className="flex items-center gap-3">
            <img
              src="/ars-group-favicon.svg"
              alt="ARS GROUP"
              className="w-8 h-8 rounded-lg object-contain shadow-sm"
            />
            <div>
              <p className="text-white font-bold text-sm">{profile.brand}</p>
              <p className="text-slate-400 text-[11px]">{profile.name} • Developer Portfolio</p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300">
            <a href="#overview" className="hover:text-emerald-400 transition-colors">Overview</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Key Projects</a>
            <a href="#interactive-demos" className="hover:text-emerald-400 transition-colors">Seatify & Meter-wise</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>

          {/* Back To Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Credits & Ecosystem */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <p>© {new Date().getFullYear()} {profile.brand} ({profile.name}). All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href={profile.contact.github} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">GitHub</a>
            <span>•</span>
            <a href={profile.contact.portfolioUrl} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">Vercel</a>
            <span>•</span>
            <span className="text-slate-300">Google AI Studio • Cloudflare • Search Console</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
