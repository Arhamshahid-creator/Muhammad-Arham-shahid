import React, { useState } from 'react';
import { DeveloperProfile } from '../types';
import { Mail, Copy, Check, Send, Sparkles, ArrowRight } from 'lucide-react';

interface ContactSectionProps {
  profile: DeveloperProfile;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setShowInquiryForm(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="w-[min(1150px,92%)] mx-auto py-24 sm:py-36 text-center relative">
      
      {/* Background Ambient Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-[radial-gradient(circle,rgba(229,193,88,0.08)_0%,transparent_70%)] blur-[50px] pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl mx-auto reveal up">
        
        <small className="text-[#888899] font-mono text-xs tracking-[2px] uppercase block mb-3 font-medium">
          LET'S WORK TOGETHER
        </small>

        <h2 className="font-heading font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tighter text-[#F5F5F7] mb-6 leading-[0.95]">
          Have an idea?
        </h2>

        <p className="text-[#9999AA] text-base sm:text-xl max-w-[550px] mx-auto leading-relaxed mb-10 font-normal">
          Let's turn it into a clean, modern and useful digital experience.
        </p>

        {/* Primary Action Button */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
          <a
            href={`mailto:${profile.contact.email}?subject=Project%20Inquiry%20-%20ARSGROUP`}
            className="btn-gold flex items-center gap-2 text-sm font-heading font-bold"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={handleCopyEmail}
            className="btn-glass flex items-center gap-2 text-sm cursor-pointer"
            title="Copy email address"
          >
            <Mail className="w-4 h-4 text-[#E5C158]" />
            <span>{copiedEmail ? 'Email Copied!' : profile.contact.email}</span>
            {copiedEmail ? <Check className="w-4 h-4 text-[#E5C158]" /> : <Copy className="w-4 h-4 text-[#888]" />}
          </button>
        </div>

        {/* Quick Instant Message Form Toggle */}
        <div className="pt-4">
          {!showInquiryForm ? (
            <button
              onClick={() => setShowInquiryForm(true)}
              className="text-xs font-mono text-[#888899] hover:text-[#E5C158] transition-colors border-b border-transparent hover:border-[#E5C158] pb-0.5 cursor-pointer"
            >
              Or transmit a quick message directly on this page ↓
            </button>
          ) : (
            <div className="mt-8 p-6 sm:p-8 rounded-[28px] bg-white/[0.03] border border-white/10 text-left max-w-xl mx-auto shadow-2xl backdrop-blur-xl animate-in fade-in">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#E5C158]" />
                  <span className="font-heading font-bold text-sm text-white">Direct Project Transmission</span>
                </div>
                <button
                  onClick={() => setShowInquiryForm(false)}
                  className="text-xs font-mono text-[#888] hover:text-white cursor-pointer"
                >
                  ✕ Close
                </button>
              </div>

              {formSent ? (
                <div className="py-8 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#18150D] border border-[#E5C158] text-[#E5C158] flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-bold text-white text-base">Inquiry Transmitted!</h4>
                  <p className="text-xs font-mono text-[#888]">Thank you. Muhammad Arham Shahid will follow up within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-mono text-[#888] block mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Henderson"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#E5C158]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-[#888] block mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#E5C158]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-[#888] block mb-1">Project Brief</label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your web app, timeline or requirements..."
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#E5C158] resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full btn-gold text-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

      </div>

    </section>
  );
};
