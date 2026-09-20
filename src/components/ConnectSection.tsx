import React, { useState } from 'react';
import { DeveloperProfile } from '../types';
import {
  Mail,
  Github,
  Globe,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  Lock,
  Send,
  Sparkles
} from 'lucide-react';

interface ConnectSectionProps {
  profile: DeveloperProfile;
  onOpenAdminPortal: () => void;
}

export const ConnectSection: React.FC<ConnectSectionProps> = ({ profile, onOpenAdminPortal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectScope: 'PWA Architecture',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', projectScope: 'PWA Architecture', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#08080A] relative text-[#F5F5F7] border-t border-[#4A3E1D]/40 overflow-hidden">
      
      {/* Background Subtle Luxury Grid */}
      <div className="absolute inset-0 bg-grid-obsidian opacity-25 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0E0E12] border border-[#4A3E1D] text-[#E5C158] text-xs font-mono">
            <span className="font-bold">03</span>
            <span className="text-[#8E8A7B] uppercase tracking-wider">Stack</span>
            <span className="text-[#4A3E1D]">•</span>
            <span className="text-[#F5F5F7] font-medium">Direct Inquiries</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F5F7] leading-tight">
            Initiate a PWA Project or <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C158] via-[#F3DE98] to-[#D4AF37]">
              Collaborate with ARSGROUP
            </span>
          </h2>

          <p className="text-[#A1A1AA] text-base leading-relaxed font-normal">
            Reach out directly to <strong className="text-[#F5F5F7] font-medium font-heading">Muhammad Arham Shahid</strong> for Progressive Web App architecture, Lighthouse performance audits, or frontend contracts.
          </p>
        </div>

        {/* 2-Column Layout: Direct Contact Info & Quick Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Left Column: Direct Links & Brand Identity (Span 5) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Email Contact Card */}
            <div className="bg-[#0E0E12] p-7 rounded-2xl border border-[#4A3E1D] luxury-card-hover flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#18150D] border border-[#4A3E1D] text-[#E5C158] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#8E8A7B] uppercase tracking-wider">Direct Email</div>
                  <div className="text-sm font-mono font-medium text-[#F5F5F7] break-all">{profile.contact.email}</div>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-lg bg-[#08080A] hover:bg-[#18150D] border border-[#4A3E1D] text-[#E5C158] transition-all cursor-pointer shrink-0"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-[#E5C158]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* GitHub Card */}
            <div className="bg-[#0E0E12] p-7 rounded-2xl border border-[#4A3E1D] luxury-card-hover flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#18150D] border border-[#4A3E1D] text-[#E5C158] flex items-center justify-center shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#8E8A7B] uppercase tracking-wider">GitHub Profile</div>
                  <div className="text-sm font-mono font-medium text-[#F5F5F7]">@MuhammadArhamShahid</div>
                </div>
              </div>
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#08080A] hover:bg-[#18150D] border border-[#4A3E1D] text-[#E5C158] transition-all shrink-0"
                title="Open GitHub"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Global Remote Badge Card */}
            <div className="bg-[#0E0E12] p-7 rounded-2xl border border-[#4A3E1D] luxury-card-hover space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#18150D] border border-[#4A3E1D] text-[#E5C158] flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-heading font-bold text-[#F5F5F7]">Global Availability</div>
                  <div className="text-xs font-mono text-[#8E8A7B]">Remote Contracts & PWA Consulting</div>
                </div>
              </div>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                Available for Progressive Web App architecture, service worker caching audits, offline storage design, and performance optimizations.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#E5C158]">
                <ShieldCheck className="w-4 h-4" />
                <span>NDA & Enterprise Contracts Accepted</span>
              </div>
            </div>

            {/* Quick Admin Portal Trigger */}
            <button
              onClick={onOpenAdminPortal}
              className="w-full py-3.5 px-4 rounded-xl bg-[#08080A] hover:bg-[#18150D] text-[#8E8A7B] hover:text-[#E5C158] border border-[#4A3E1D]/50 text-xs font-mono flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5 text-[#E5C158]" />
              <span>Admin Management Portal</span>
            </button>

          </div>

          {/* Right Column: Direct Message Form (Span 7) */}
          <div className="lg:col-span-7 bg-[#0E0E12] p-8 sm:p-10 rounded-2xl border border-[#4A3E1D] relative">
            <h3 className="text-xl font-heading font-bold text-[#F5F5F7] mb-2 flex items-center gap-2">
              <span>Send an Inquiry</span>
              <Sparkles className="w-4 h-4 text-[#E5C158]" />
            </h3>
            <p className="text-xs text-[#A1A1AA] mb-6 font-normal">
              Direct communication to discuss project specifications, timelines, or architectural reviews.
            </p>

            {submitted ? (
              <div className="p-8 text-center rounded-xl bg-[#1C180E] border border-[#E5C158]/50 space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#2A2312] text-[#E5C158] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-heading font-bold text-[#F5F5F7]">Inquiry Transmitted Successfully</h4>
                <p className="text-xs font-mono text-[#A1A1AA]">
                  Thank you. Muhammad Arham Shahid will respond within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#8E8A7B] block">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Henderson"
                      className="w-full px-4 py-3 rounded-xl bg-[#08080A] border border-[#4A3E1D] text-[#F5F5F7] text-sm focus:outline-none focus:border-[#E5C158] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#8E8A7B] block">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#08080A] border border-[#4A3E1D] text-[#F5F5F7] text-sm focus:outline-none focus:border-[#E5C158] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#8E8A7B] block">Project Scope</label>
                  <select
                    value={formData.projectScope}
                    onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#08080A] border border-[#4A3E1D] text-[#F5F5F7] text-sm focus:outline-none focus:border-[#E5C158] transition-colors"
                  >
                    <option value="PWA Architecture">Progressive Web App Architecture</option>
                    <option value="Service Worker Optimization">Service Worker & Offline Cache Setup</option>
                    <option value="Lighthouse 100 Audit">Lighthouse 100/100 Core Web Vitals Audit</option>
                    <option value="Full-Stack Engineering">Full-Stack Frontend Contract</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#8E8A7B] block">Project Description</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your objectives, scope, or platform requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-[#08080A] border border-[#4A3E1D] text-[#F5F5F7] text-sm focus:outline-none focus:border-[#E5C158] transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#E5C158] hover:bg-[#F3DE98] text-[#08080A] font-heading font-bold text-sm transition-all shadow-lg shadow-[#E5C158]/20 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
