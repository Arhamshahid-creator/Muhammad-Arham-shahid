import React, { useState } from 'react';
import { DeveloperProfile, Project } from './types';
import { initialProfile, projectsData } from './data/profileData';
import { Header, AppPage } from './components/Header';
import { Hero } from './components/Hero';
import { OverviewSection } from './components/OverviewSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ConnectSection } from './components/ConnectSection';
import { Footer } from './components/Footer';
import { AdminPortalModal } from './components/AdminPortalModal';
import { ArrowRight, ArrowLeft, Layers, User, Cpu, Sparkles } from 'lucide-react';

export default function App() {
  const [profile, setProfile] = useState<DeveloperProfile>(() => {
    try {
      const saved = localStorage.getItem('arsgroup_profile_v1');
      if (saved) {
        const parsed = JSON.parse(saved);
        const contactEmail = (!parsed.contact?.email || parsed.contact?.email === 'arhamsahab62@gmail.com')
          ? initialProfile.contact.email
          : parsed.contact.email;
        return {
          ...initialProfile,
          ...parsed,
          contact: {
            ...initialProfile.contact,
            ...parsed.contact,
            email: contactEmail,
          },
          avatar: (parsed.avatar && !parsed.avatar.includes('profile_avatar_')) ? parsed.avatar : initialProfile.avatar,
          heroBg: parsed.heroBg || initialProfile.heroBg,
          theme: parsed.theme || 'clean-minimal',
        };
      }
    } catch (err) {
      console.warn('Failed to parse saved profile:', err);
    }
    return initialProfile;
  });

  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem('arsgroup_projects_v1');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (err) {
      console.warn('Failed to parse saved projects:', err);
    }
    return projectsData;
  });

  const [activePage, setActivePage] = useState<AppPage>('overview');
  const [adminPortalOpen, setAdminPortalOpen] = useState(false);

  const handleUpdateProfile = (updated: DeveloperProfile) => {
    setProfile(updated);
    try {
      localStorage.setItem('arsgroup_profile_v1', JSON.stringify(updated));
    } catch (err) {
      console.warn('Failed to save profile to localStorage:', err);
    }
  };

  const handleUpdateProjects = (updatedProjects: Project[]) => {
    setProjects(updatedProjects);
    try {
      localStorage.setItem('arsgroup_projects_v1', JSON.stringify(updatedProjects));
    } catch (err) {
      console.warn('Failed to save projects to localStorage:', err);
    }
  };

  const handleSelectPage = (page: AppPage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans flex flex-col bg-white text-slate-900 selection:bg-emerald-500 selection:text-white">
      {/* Top Header Navigation */}
      <Header
        profile={profile}
        activePage={activePage}
        onSelectPage={handleSelectPage}
        onOpenAdminPortal={() => setAdminPortalOpen(true)}
      />

      {/* Page Navigation Indicator Bar */}
      <div className="pt-20 pb-2 px-4 sm:px-6 bg-slate-50/80 border-b border-slate-200">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-semibold text-slate-900">
              {activePage === 'overview' && 'PAGE 01 // ABOUT & IDENTITY'}
              {activePage === 'projects' && 'PAGE 02 // WORK & PROGRESSIVE WEB APPS'}
              {activePage === 'contact' && 'PAGE 03 // TECH STACK & CONTACT'}
              {activePage === 'all' && 'ALL PAGES // FULL CONTINUOUS VIEW'}
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-500 hidden md:inline">
              {profile.name} • {profile.brand}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => handleSelectPage('overview')}
              className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                activePage === 'overview'
                  ? 'bg-slate-900 text-white font-bold'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              01 About
            </button>
            <button
              onClick={() => handleSelectPage('projects')}
              className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                activePage === 'projects'
                  ? 'bg-slate-900 text-white font-bold'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              02 Projects
            </button>
            <button
              onClick={() => handleSelectPage('contact')}
              className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                activePage === 'contact'
                  ? 'bg-slate-900 text-white font-bold'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              03 Stack & Contact
            </button>
          </div>
        </div>
      </div>

      <main className="flex-grow">
        {/* PAGE 1: Overview & Identity */}
        {(activePage === 'overview' || activePage === 'all') && (
          <div>
            <Hero
              profile={profile}
              onExploreProjects={() => handleSelectPage('projects')}
              onOpenAdminPortal={() => setAdminPortalOpen(true)}
            />
            <OverviewSection profile={profile} />

            {activePage === 'overview' && (
              <div className="py-12 bg-white text-center border-t border-slate-200">
                <div className="max-w-xl mx-auto px-4 space-y-4">
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                    Next Section
                  </p>
                  <button
                    onClick={() => handleSelectPage('projects')}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-md shadow-emerald-600/20 hover:scale-105 cursor-pointer"
                  >
                    <span>Proceed to Page 02: Work & Projects</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* PAGE 2: Projects Showcase */}
        {(activePage === 'projects' || activePage === 'all') && (
          <div>
            <ProjectsSection projects={projects} />

            {activePage === 'projects' && (
              <div className="py-12 bg-slate-50 text-center border-t border-slate-200">
                <div className="max-w-xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => handleSelectPage('overview')}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm border border-slate-200 transition-all shadow-2xs cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Page 01: About & Identity</span>
                  </button>

                  <button
                    onClick={() => handleSelectPage('contact')}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-md shadow-emerald-600/20 hover:scale-105 cursor-pointer"
                  >
                    <span>Page 03: Stack & Contact</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* PAGE 3: Tech Stack & Contact */}
        {(activePage === 'contact' || activePage === 'all') && (
          <div>
            <SkillsSection />
            <ConnectSection
              profile={profile}
              onOpenAdminPortal={() => setAdminPortalOpen(true)}
            />

            {activePage === 'contact' && (
              <div className="py-12 bg-slate-50 text-center border-t border-slate-200">
                <div className="max-w-xl mx-auto px-4">
                  <button
                    onClick={() => handleSelectPage('projects')}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm border border-slate-200 transition-all shadow-2xs cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Return to Page 02: Projects</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer profile={profile} onSelectPage={handleSelectPage} />

      {/* Admin Portal Modal (Passcode Protected) */}
      <AdminPortalModal
        isOpen={adminPortalOpen}
        onClose={() => setAdminPortalOpen(false)}
        profile={profile}
        projects={projects}
        onUpdateProfile={handleUpdateProfile}
        onUpdateProjects={handleUpdateProjects}
      />
    </div>
  );
}
