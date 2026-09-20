import React, { useState, useEffect } from 'react';
import { Lock, Menu, X, ArrowUpRight } from 'lucide-react';

interface ModernNavbarProps {
  onOpenAdminPortal: () => void;
}

export const ModernNavbar: React.FC<ModernNavbarProps> = ({ onOpenAdminPortal }) => {
  const [navVisible, setNavVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Auto-hide when scrolling down past 150px, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }
      lastScrollY = currentScrollY;

      // Detect active section
      const sections = ['home', 'work', 'services', 'about', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#work', label: 'Work', id: 'work' },
    { href: '#services', label: 'Services', id: 'services' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-4 sm:top-5 left-1/2 z-50 transition-all duration-400 ease-out ${
        navVisible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0 pointer-events-none'
      } -translate-x-1/2 w-[min(1100px,92%)] px-5 py-3 sm:py-3.5 flex items-center justify-between nav-glass rounded-[18px]`}
    >
      {/* Brand Logo */}
      <a
        href="#home"
        className="flex items-center gap-2.5 text-lg sm:text-xl font-extrabold tracking-tight text-white group"
      >
        <div className="relative">
          <img
            src="/ars-group-favicon.svg"
            alt="ARS GROUP"
            referrerPolicy="no-referrer"
            className="w-7 h-7 rounded-md object-contain border border-white/10 group-hover:scale-105 transition-transform"
          />
          <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#E5C158] shadow-[0_0_6px_#E5C158]"></span>
        </div>
        <div className="font-heading font-black tracking-tight">
          ARS<span className="opacity-45 font-normal text-white">GROUP</span>
        </div>
      </a>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex items-center gap-7 list-none">
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <li key={link.id}>
              <a
                href={link.href}
                className={`text-sm transition-colors duration-200 py-1 ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-[#888899] hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>

      {/* Actions: Admin Portal & Mobile Toggle */}
      <div className="flex items-center gap-2.5">
        <button
          onClick={onOpenAdminPortal}
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-xs font-mono text-[#AAA] hover:text-white border border-white/10 transition-all cursor-pointer"
          title="Open Admin Authorization Portal"
        >
          <Lock className="w-3 h-3 text-[#E5C158]" />
          <span>Admin</span>
        </button>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#E5C158] hover:bg-[#F3DE98] text-[#08090C] text-xs font-bold font-heading transition-all shadow-sm"
        >
          <span>Get in Touch</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-white/[0.06] text-white border border-white/10 cursor-pointer"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-[calc(100%+8px)] left-0 right-0 p-4 rounded-2xl nav-glass border border-white/10 flex flex-col gap-2 md:hidden animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm text-[#BBB] hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdminPortal();
              }}
              className="flex items-center gap-2 text-xs font-mono text-[#E5C158] py-1.5 px-2"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Admin Portal</span>
            </button>
            <span className="text-[11px] font-mono text-[#666]">ARSGROUP • 2026</span>
          </div>
        </div>
      )}
    </nav>
  );
};
