import React from 'react';
import { DeveloperProfile } from '../types';
import { ArrowUp } from 'lucide-react';
import { AppPage } from './Header';

interface FooterProps {
  profile: DeveloperProfile;
  onSelectPage?: (page: AppPage) => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onSelectPage }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page: AppPage) => {
    if (onSelectPage) {
      onSelectPage(page);
    }
    scrollToTop();
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-10 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-800">
          
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

          {/* Quick Nav Links (3 Pages) */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-slate-300">
            <button
              onClick={() => handleNav('overview')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              01 // About & Identity
            </button>
            <button
              onClick={() => handleNav('projects')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              02 // Work & Projects
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              03 // Stack & Contact
            </button>
            <button
              onClick={() => handleNav('all')}
              className="hover:text-emerald-400 transition-colors text-slate-400 cursor-pointer"
            >
              All Pages
            </button>
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
