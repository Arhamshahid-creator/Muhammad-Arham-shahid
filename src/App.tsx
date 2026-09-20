import React, { useState, useEffect } from 'react';
import { DeveloperProfile, Project } from './types';
import { ShowcaseProject, initialShowcaseProjects } from './data/portfolioData';
import { initialProfile, projectsData } from './data/profileData';
import { ModernNavbar } from './components/ModernNavbar';
import { HeroSection } from './components/HeroSection';
import { LargeProjectsSection } from './components/LargeProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { ModernFooter } from './components/ModernFooter';
import { AdminPortalModal } from './components/AdminPortalModal';
import { useScrollReveal } from './components/useScrollReveal';

export function App() {
  // Activate scroll reveal animations
  useScrollReveal();

  const [profile, setProfile] = useState<DeveloperProfile>(() => {
    const saved = localStorage.getItem('pwa_portfolio_profile');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const resolvedAvatar = (parsed.avatar && parsed.avatar.trim() !== '') ? parsed.avatar : initialProfile.avatar;
        return { ...initialProfile, ...parsed, avatar: resolvedAvatar };
      } catch (e) {
        console.error('Failed to parse cached profile', e);
      }
    }
    return initialProfile;
  });

  const handleUpdateAvatar = (newAvatarUrl: string) => {
    setProfile((prev) => {
      const updated = { ...prev, avatar: newAvatarUrl };
      localStorage.setItem('pwa_portfolio_profile', JSON.stringify(updated));
      return updated;
    });
  };

  const [showcaseProjects, setShowcaseProjects] = useState<ShowcaseProject[]>(() => {
    const saved = localStorage.getItem('pwa_portfolio_showcase_projects');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse cached showcase projects', e);
      }
    }
    return initialShowcaseProjects;
  });

  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('pwa_portfolio_projects');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse cached projects', e);
      }
    }
    return projectsData;
  });

  const [adminPortalOpen, setAdminPortalOpen] = useState(false);

  // Sync state to localStorage
  useEffect(() => {
    localStorage.setItem('pwa_portfolio_profile', JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem('pwa_portfolio_showcase_projects', JSON.stringify(showcaseProjects));
  }, [showcaseProjects]);

  useEffect(() => {
    localStorage.setItem('pwa_portfolio_projects', JSON.stringify(projects));
  }, [projects]);

  const handleUpdateProfile = (updated: DeveloperProfile) => {
    setProfile(updated);
  };

  const handleUpdateProjects = (updated: Project[]) => {
    setProjects(updated);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#08090C] text-[#F5F5F7] selection:bg-[#E5C158] selection:text-[#08090C] relative">
      
      {/* Modern Glass Floating Navbar with Auto-hide on Scroll */}
      <ModernNavbar onOpenAdminPortal={() => setAdminPortalOpen(true)} />

      {/* Main Single-Page Portfolio Flow with Smooth Section Targets */}
      <main className="flex-grow">
        {/* HERO SECTION */}
        <HeroSection profile={profile} />

        {/* WORK / PROJECTS SHOWCASE */}
        <LargeProjectsSection projects={showcaseProjects} />

        {/* SERVICES SECTION */}
        <ServicesSection />

        {/* ABOUT SECTION */}
        <AboutSection profile={profile} />

        {/* CONTACT SECTION */}
        <ContactSection profile={profile} />
      </main>

      {/* FOOTER */}
      <ModernFooter
        profile={profile}
        onOpenAdminPortal={() => setAdminPortalOpen(true)}
      />

      {/* Passcode Protected Admin Portal - Dedicated to adding/managing projects */}
      <AdminPortalModal
        isOpen={adminPortalOpen}
        onClose={() => setAdminPortalOpen(false)}
        showcaseProjects={showcaseProjects}
        onUpdateShowcaseProjects={setShowcaseProjects}
        currentAvatar={profile.avatar}
        onUpdateAvatar={handleUpdateAvatar}
      />

    </div>
  );
}

export default App;
