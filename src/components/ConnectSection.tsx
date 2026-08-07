import React, { useState } from 'react';
import { DeveloperProfile } from '../types';
import { Mail, Github, Globe, Copy, Check, ExternalLink, ShieldCheck, Lock, MessageSquare } from 'lucide-react';

interface ConnectSectionProps {
  profile: DeveloperProfile;
  onOpenAdminPortal: () => void;
}

export const ConnectSection: React.FC<ConnectSectionProps> = ({ profile, onOpenAdminPortal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-mono font-semibold">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Direct Contact & Communication
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Reach out directly for full-stack engineering roles, PWA development, and custom web applications under the <span className="text-emerald-700 font-bold">{profile.brand}</span> entity.
          </p>
        </div>

        {/* Direct Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* Email Contact Card */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md hover:border-emerald-400 transition-all duration-300 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-700">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Direct Email</h4>
                <p className="text-xs text-slate-600 font-mono truncate max-w-[220px]">{profile.contact.email}</p>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="p-3 rounded-xl bg-white hover:bg-emerald-50 text-emerald-700 border border-slate-200 transition-colors cursor-pointer shadow-2xs"
              title="Copy Professional Email"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* GitHub Card */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md hover:border-cyan-400 transition-all duration-300 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-xl bg-cyan-100 border border-cyan-300 text-cyan-700">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">GitHub Profile</h4>
                <p className="text-xs text-slate-600 font-mono truncate max-w-[220px]">{profile.contact.github}</p>
              </div>
            </div>
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-white hover:bg-cyan-50 text-cyan-700 border border-slate-200 transition-colors shadow-2xs"
              title="Open GitHub Profile"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Vercel / Portfolio Card */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md hover:border-blue-400 transition-all duration-300 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-xl bg-blue-100 border border-blue-300 text-blue-700">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Portfolio & Live Apps</h4>
                <p className="text-xs text-slate-600 font-mono truncate max-w-[220px]">{profile.contact.portfolioUrl}</p>
              </div>
            </div>
            <a
              href={profile.contact.portfolioUrl}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-white hover:bg-blue-50 text-blue-700 border border-slate-200 transition-colors shadow-2xs"
              title="Visit Vercel Portfolio"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Brand Card */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-2xs flex items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-emerald-700 uppercase tracking-wider font-bold">Brand Entity</span>
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{profile.brand}</h3>
              <p className="text-xs text-slate-600">PWA & Full-Stack Development Solutions</p>
            </div>
            <button
              onClick={onOpenAdminPortal}
              className="px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-mono font-bold flex items-center gap-2 transition-all shadow-2xs"
            >
              <Lock className="w-3.5 h-3.5 text-emerald-600" /> Admin
            </button>
          </div>

        </div>

        {/* Admin Access Bar */}
        <div className="flex items-center justify-center text-xs font-mono">
          <button
            onClick={onOpenAdminPortal}
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all shadow-md shadow-emerald-600/20 flex items-center gap-2 cursor-pointer"
          >
            <Lock className="w-3 h-3" />
            <span>Protected Admin Portal</span>
          </button>
        </div>

      </div>
    </section>
  );
};
