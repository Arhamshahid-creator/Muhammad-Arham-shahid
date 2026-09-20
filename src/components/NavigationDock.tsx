import React from 'react';
import { AppPage } from './Header';
import { User, Layers, Cpu, Sparkles } from 'lucide-react';

interface NavigationDockProps {
  activePage: AppPage;
  onSelectPage: (page: AppPage) => void;
}

export const NavigationDock: React.FC<NavigationDockProps> = ({
  activePage,
  onSelectPage
}) => {
  const navItems: { id: AppPage; label: string; prefix: string; icon: React.ElementType }[] = [
    { id: 'overview', label: 'Overview', prefix: '01', icon: User },
    { id: 'projects', label: 'Bento Work', prefix: '02', icon: Layers },
    { id: 'contact', label: 'Stack', prefix: '03', icon: Cpu },
    { id: 'all', label: 'All', prefix: 'ALL', icon: Sparkles },
  ];

  return (
    <>
      {/* Desktop Vertical Side Rail (xl screens: fixed to left viewport edge) */}
      <aside
        aria-label="Side Rail Navigation"
        className="hidden xl:flex fixed left-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-2 p-3 rounded-2xl bg-[#0E0E12]/90 backdrop-blur-xl border border-[#4A3E1D]/50 shadow-2xl shadow-black/80"
      >
        <div className="px-2 py-1 text-[9px] font-mono uppercase tracking-widest text-[#8E8A7B] border-b border-[#4A3E1D]/40 mb-1">
          NAVIGATION
        </div>
        {navItems.map((item) => {
          const isActive = activePage === item.id;
          return (
            <button
              key={`rail-${item.id}`}
              onClick={() => onSelectPage(item.id)}
              className={`group flex items-center justify-between gap-3 px-3 py-2 rounded-xl text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer text-left ${
                isActive
                  ? 'opacity-100 text-[#F5F5F7] bg-[#1C180E] border border-[#E5C158]/40 shadow-sm shadow-[#E5C158]/10'
                  : 'opacity-40 hover:opacity-100 text-[#A1A1AA] hover:text-[#F5F5F7] hover:bg-white/[0.03]'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className={isActive ? 'text-[#E5C158] font-bold' : 'text-[#8E8A7B] group-hover:text-[#E5C158]'}>
                  {item.prefix}
                </span>
                <span className="whitespace-nowrap font-medium">{item.label}</span>
              </div>
              <span
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  isActive ? 'bg-[#E5C158] scale-100 shadow-[0_0_8px_#E5C158]' : 'bg-transparent group-hover:bg-[#4A3E1D] scale-75'
                }`}
              />
            </button>
          );
        })}
      </aside>

      {/* Floating Dock (centered bottom on md & lg screens, floating with smooth blur) */}
      <nav
        aria-label="Floating Dock Navigation"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5 p-1.5 sm:p-2 rounded-full bg-[#0E0E12]/90 backdrop-blur-xl border border-[#4A3E1D]/60 shadow-2xl shadow-black/90 max-w-[95vw] overflow-x-auto"
      >
        {navItems.map((item) => {
          const isActive = activePage === item.id;
          const Icon = item.icon;
          return (
            <button
              key={`dock-${item.id}`}
              onClick={() => onSelectPage(item.id)}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs font-mono tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'opacity-100 text-[#F5F5F7] bg-[#1C180E] border border-[#E5C158]/50 shadow-[0_0_15px_rgba(229,193,88,0.2)] font-semibold'
                  : 'opacity-40 hover:opacity-100 text-[#A1A1AA] hover:text-[#F5F5F7] hover:bg-white/[0.04]'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#E5C158]' : 'text-[#8E8A7B]'}`} />
              <span className={isActive ? 'text-[#E5C158] font-bold' : 'text-[#8E8A7B]'}>
                {item.prefix}
              </span>
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
};
