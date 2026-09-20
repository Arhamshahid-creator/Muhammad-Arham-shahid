import React from 'react';
import { DeveloperProfile } from '../types';
import { ShieldCheck, ArrowUp } from 'lucide-react';

interface ModernFooterProps {
  profile: DeveloperProfile;
  onOpenAdminPortal: () => void;
}

export const ModernFooter: React.FC<ModernFooterProps> = ({ profile, onOpenAdminPortal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/8 py-8 px-[5%] text-xs font-mono text-[#666677] bg-[#08090C] relative">
      <div className="max-w-[1150px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-3">
          <span className="text-[#888899]">
            © {new Date().getFullYear()} <strong className="text-white font-medium">{profile.brand}</strong>
          </span>
          <span className="text-[#444]">•</span>
          <span className="text-[#777]">{profile.name}</span>
        </div>

        {/* Center: Status Badges */}
        <div className="flex items-center gap-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.02] border border-[#4A3E1D]/50 text-[#E5C158] text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158] shadow-[0_0_8px_#E5C158]"></span>
            <span className="font-semibold">100/100 Lighthouse</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.02] border border-white/8 text-[#888899] text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E5C158]" />
            <span>Service Worker Verified</span>
          </div>
        </div>

        {/* Right: Scroll to top & Admin Link */}
        <div className="flex items-center gap-4">
          <span className="hidden lg:inline text-[#555]">
            Designed & Developed with purpose.
          </span>

          <button
            onClick={onOpenAdminPortal}
            className="text-[11px] text-[#555] hover:text-[#E5C158] transition-colors cursor-pointer"
          >
            Admin Auth
          </button>

          <button
            onClick={scrollToTop}
            className="p-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-[#888] hover:text-white border border-white/8 transition-colors cursor-pointer"
            title="Scroll to Top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
