import React, { useState } from 'react';
import { DeveloperProfile, Project } from './types';
import { initialProfile, projectsData, skillCategoriesData } from './data/profileData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OverviewSection } from './components/OverviewSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ConnectSection } from './components/ConnectSection';
import { Footer } from './components/Footer';
import { AdminPortalModal } from './components/AdminPortalModal';

export default function App() {
  const [profile, setProfile] = useState<DeveloperProfile>(() => {
    try {
      const saved = localStorage.getItem('arsgroup_profile_v1');
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...initialProfile,
          ...parsed,
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

  const handleExploreProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Determine theme class
  const getThemeClass = () => {
    switch (profile.theme) {
      case 'dark':
        return 'theme-dark bg-slate-950 text-slate-100';
      default:
        return 'theme-clean-minimal bg-white text-slate-900';
    }
  };

  return (
    <div className={`min-h-screen font-sans flex flex-col transition-colors duration-500 ${getThemeClass()}`}>
      {/* Fixed Sticky Navigation */}
      <Header
        profile={profile}
        onOpenAdminPortal={() => setAdminPortalOpen(true)}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          profile={profile}
          onExploreProjects={handleExploreProjects}
          onOpenAdminPortal={() => setAdminPortalOpen(true)}
        />

        {/* Professional Overview */}
        <OverviewSection profile={profile} />

        {/* Key Projects Showcase */}
        <ProjectsSection projects={projects} />

        {/* Technical Skills Matrix */}
        <SkillsSection categories={skillCategoriesData} />

        {/* Connect & Collaborate */}
        <ConnectSection
          profile={profile}
          onOpenAdminPortal={() => setAdminPortalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer profile={profile} />

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
