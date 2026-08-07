import React, { useState, useEffect } from 'react';
import { DeveloperProfile } from '../types';
import { Lock, Settings, Menu, X } from 'lucide-react';

interface HeaderProps {
  profile: DeveloperProfile;
  onOpenAdminPortal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ profile, onOpenAdminPortal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#overview' },
    { name: 'WORK', href: '#projects' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' : 'bg-gradient-to-b from-white/90 via-white/50 to-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        
        {/* Brand Identity */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <span className="font-bold text-slate-900 text-xl tracking-wider group-hover:text-emerald-600 transition-colors uppercase">
            {profile.brand || "ARSGROUP"}
          </span>
          <span className="text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono font-semibold">
            DEV
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold tracking-widest text-slate-700 hover:text-emerald-600 uppercase transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-emerald-500 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions / Admin Portal Access */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenAdminPortal}
            className="flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-full transition-all cursor-pointer shadow-2xs"
            title="Open Protected Admin Portal"
          >
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            <span>Admin Portal</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenAdminPortal}
            className="p-2 text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg text-xs flex items-center gap-1 font-mono font-semibold"
            title="Admin Portal"
          >
            <Lock className="w-4 h-4" /> Admin
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:text-slate-900 bg-slate-100 border border-slate-200"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 border-b border-slate-200 px-6 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 backdrop-blur-xl shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold tracking-widest text-slate-800 hover:text-emerald-600 uppercase"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAdminPortal(); }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg"
            >
              <Lock className="w-4 h-4 text-emerald-600" /> Protected Admin Portal
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
