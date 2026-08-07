import React, { useState } from 'react';
import { DeveloperProfile, Project, ThemeOption } from '../types';
import { Lock, ShieldCheck, User, Image, FolderPlus, Palette, Trash2, Edit3, Plus, X, Check, Save, Upload, ExternalLink, LogOut } from 'lucide-react';

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: DeveloperProfile;
  onUpdateProfile: (updated: DeveloperProfile) => void;
  projects: Project[];
  onUpdateProjects: (updated: Project[]) => void;
}

export const AdminPortalModal: React.FC<AdminPortalModalProps> = ({
  isOpen,
  onClose,
  profile,
  onUpdateProfile,
  projects,
  onUpdateProjects,
}) => {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcodeError, setPasscodeError] = useState('');

  const [activeTab, setActiveTab] = useState<'profile' | 'projects' | 'theme'>('profile');

  // Form states for profile
  const [profileForm, setProfileForm] = useState<DeveloperProfile>(profile);

  // Projects state
  const [projectList, setProjectList] = useState<Project[]>(projects);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isAddingProject, setIsAddingProject] = useState(false);

  // New Project Form
  const [newProject, setNewProject] = useState<Partial<Project>>({
    name: '',
    tagline: '',
    description: '',
    badge: 'NEW',
    architecture: 'High-performance web architecture',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    keyFeatures: ['Fast load speeds', 'Responsive layout'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://arsgroup.dev',
    githubUrl: 'https://github.com',
  });

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === 'admin173') {
      setIsAuthenticated(true);
      setPasscodeError('');
    } else {
      setPasscodeError('Invalid Admin Passcode! Access Denied.');
    }
  };

  const handleProfileImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setProfileForm((prev) => ({ ...prev, avatar: result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProjectImageUpload = (e: React.ChangeEvent<HTMLInputElement>, isEdit: boolean) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        if (isEdit && editingProject) {
          setEditingProject((prev) => (prev ? { ...prev, image: result } : null));
        } else {
          setNewProject((prev) => ({ ...prev, image: result }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfile = () => {
    onUpdateProfile(profileForm);
    alert('Profile & Branding updated successfully!');
  };

  const handleAddProject = () => {
    if (!newProject.name) return;
    const created: Project = {
      id: `proj_${Date.now()}`,
      name: newProject.name || 'Untitled Project',
      tagline: newProject.tagline || 'Modern Web Application',
      description: newProject.description || 'Custom developed application by ARSGROUP.',
      badge: newProject.badge || 'PRO',
      architecture: newProject.architecture || 'PWA / Web App',
      techStack: newProject.techStack || ['React', 'TypeScript'],
      keyFeatures: newProject.keyFeatures || ['Responsive UI'],
      image: newProject.image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      liveUrl: newProject.liveUrl,
      githubUrl: newProject.githubUrl,
    };

    const updated = [created, ...projectList];
    setProjectList(updated);
    onUpdateProjects(updated);
    setIsAddingProject(false);
    setNewProject({
      name: '',
      tagline: '',
      description: '',
      badge: 'NEW',
      architecture: 'High-performance web architecture',
      techStack: ['React', 'TypeScript', 'Tailwind CSS'],
      keyFeatures: ['Fast load speeds', 'Responsive layout'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    });
  };

  const handleSaveEditedProject = () => {
    if (!editingProject) return;
    const updated = projectList.map((p) => (p.id === editingProject.id ? editingProject : p));
    setProjectList(updated);
    onUpdateProjects(updated);
    setEditingProject(null);
  };

  const handleDeleteProject = (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      const updated = projectList.filter((p) => p.id !== id);
      setProjectList(updated);
      onUpdateProjects(updated);
    }
  };

  const handleThemeSelect = (theme: ThemeOption) => {
    const updated = { ...profileForm, theme };
    setProfileForm(updated);
    onUpdateProfile(updated);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header Bar */}
        <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-950 border border-emerald-800 text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span>ARSGROUP Admin Portal</span>
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 font-mono">
                  {isAuthenticated ? 'AUTHENTICATED' : 'PROTECTED'}
                </span>
              </h2>
              <p className="text-xs text-slate-400 font-mono">Protected Admin Authorization Control Center</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                onClick={() => setIsAuthenticated(false)}
                className="p-2 text-xs text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center gap-1 font-mono"
                title="Lock Admin Session"
              >
                <LogOut className="w-3.5 h-3.5" /> Lock
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        {!isAuthenticated ? (
          /* LOGIN PASSCODE SCREEN */
          <div className="p-8 sm:p-12 text-center max-w-md mx-auto my-auto space-y-6">
            <div className="w-16 h-16 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center mx-auto text-emerald-400 shadow-xl">
              <Lock className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Enter Admin Passcode</h3>
              <p className="text-xs text-slate-400 mt-1">Please enter your authorization key to edit profile photo, projects, and UI themes.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Enter admin passcode"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white font-mono text-center text-lg tracking-widest focus:outline-none focus:border-emerald-500"
                  autoFocus
                />
                {passcodeError && (
                  <p className="text-rose-400 text-xs font-mono mt-2">{passcodeError}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Unlock Admin Portal</span>
              </button>
            </form>
          </div>
        ) : (
          /* AUTHENTICATED DASHBOARD */
          <div className="flex-1 flex flex-col overflow-hidden">
            
            {/* Tabs */}
            <div className="bg-slate-950/60 px-6 py-3 border-b border-slate-800 flex items-center gap-3 overflow-x-auto">
              <button
                onClick={() => setActiveTab('profile')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'profile' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-400 hover:text-white bg-slate-900'
                }`}
              >
                <User className="w-4 h-4" /> Profile & Picture
              </button>

              <button
                onClick={() => setActiveTab('projects')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'projects' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-400 hover:text-white bg-slate-900'
                }`}
              >
                <FolderPlus className="w-4 h-4" /> Manage Projects ({projectList.length})
              </button>

              <button
                onClick={() => setActiveTab('theme')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'theme' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-400 hover:text-white bg-slate-900'
                }`}
              >
                <Palette className="w-4 h-4" /> Theme & Logo Palette
              </button>
            </div>

            {/* Tab Panels */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              
              {/* TAB 1: PROFILE & PICTURE */}
              {activeTab === 'profile' && (
                <div className="space-y-6">
                  
                  {/* Avatar Upload */}
                  <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center gap-6">
                    <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-white/80 ring-4 ring-emerald-500/20 bg-slate-900 shrink-0">
                      <img
                        src={profileForm.avatar}
                        alt="Profile Avatar"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-3 flex-1 text-center sm:text-left">
                      <h4 className="text-sm font-bold text-white">Change Profile Picture</h4>
                      <p className="text-xs text-slate-400">Upload a custom image file or paste an image URL to update your headshot.</p>
                      
                      <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                        <label className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-semibold flex items-center gap-2 cursor-pointer transition-all">
                          <Upload className="w-3.5 h-3.5" /> Upload File
                          <input type="file" accept="image/*" onChange={handleProfileImageUpload} className="hidden" />
                        </label>

                        <input
                          type="text"
                          value={profileForm.avatar || ''}
                          onChange={(e) => setProfileForm({ ...profileForm, avatar: e.target.value })}
                          placeholder="Or paste image URL"
                          className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 font-mono focus:outline-none focus:border-emerald-500 flex-1 min-w-[200px]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Profile Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                    <div className="space-y-1.5">
                      <label className="text-slate-300">Developer Full Name:</label>
                      <input
                        type="text"
                        value={profileForm.name}
                        onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-slate-300">Brand / Company Entity:</label>
                      <input
                        type="text"
                        value={profileForm.brand}
                        onChange={(e) => setProfileForm({ ...profileForm, brand: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-slate-300">Title / Role:</label>
                      <input
                        type="text"
                        value={profileForm.role}
                        onChange={(e) => setProfileForm({ ...profileForm, role: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-slate-300">Email Address:</label>
                      <input
                        type="email"
                        value={profileForm.contact.email}
                        onChange={(e) => setProfileForm({ ...profileForm, contact: { ...profileForm.contact, email: e.target.value } })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-slate-300">GitHub Profile URL:</label>
                      <input
                        type="text"
                        value={profileForm.contact.github}
                        onChange={(e) => setProfileForm({ ...profileForm, contact: { ...profileForm.contact, github: e.target.value } })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-slate-300">Portfolio / Vercel Live Link:</label>
                      <input
                        type="text"
                        value={profileForm.contact.portfolioUrl}
                        onChange={(e) => setProfileForm({ ...profileForm, contact: { ...profileForm.contact, portfolioUrl: e.target.value } })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs font-mono">
                    <label className="text-slate-300">Overview / Philosophy:</label>
                    <textarea
                      rows={3}
                      value={profileForm.overview.corePhilosophy}
                      onChange={(e) => setProfileForm({ ...profileForm, overview: { ...profileForm.overview, corePhilosophy: e.target.value } })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <button
                    onClick={handleSaveProfile}
                    className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs font-mono flex items-center justify-center gap-2 cursor-pointer transition-all shadow-lg shadow-emerald-600/20"
                  >
                    <Save className="w-4 h-4" /> Save Profile Details
                  </button>

                </div>
              )}

              {/* TAB 2: MANAGE PROJECTS */}
              {activeTab === 'projects' && (
                <div className="space-y-6">
                  
                  {/* Top Bar Action */}
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white">Your Showcase Projects</h4>
                    {!isAddingProject && !editingProject && (
                      <button
                        onClick={() => setIsAddingProject(true)}
                        className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-semibold flex items-center gap-2 cursor-pointer transition-all"
                      >
                        <Plus className="w-4 h-4" /> Add New Project
                      </button>
                    )}
                  </div>

                  {/* ADD NEW PROJECT FORM */}
                  {isAddingProject && (
                    <div className="p-6 rounded-2xl bg-slate-950 border border-emerald-500/50 space-y-4 animate-in fade-in">
                      <div className="flex items-center justify-between">
                        <h5 className="text-sm font-bold text-emerald-400">Add New Project</h5>
                        <button onClick={() => setIsAddingProject(false)} className="text-slate-400 hover:text-white">
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                        <div>
                          <label className="text-slate-300 block mb-1">Project Name:</label>
                          <input
                            type="text"
                            value={newProject.name}
                            onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                            placeholder="e.g. Seatify"
                            className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white"
                          />
                        </div>
                        <div>
                          <label className="text-slate-300 block mb-1">Tagline:</label>
                          <input
                            type="text"
                            value={newProject.tagline}
                            onChange={(e) => setNewProject({ ...newProject, tagline: e.target.value })}
                            placeholder="e.g. Seating Arrangement PWA"
                            className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white"
                          />
                        </div>
                        <div>
                          <label className="text-slate-300 block mb-1">Badge Tag:</label>
                          <input
                            type="text"
                            value={newProject.badge}
                            onChange={(e) => setNewProject({ ...newProject, badge: e.target.value })}
                            placeholder="e.g. PWA / Vercel"
                            className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white"
                          />
                        </div>
                        <div>
                          <label className="text-slate-300 block mb-1">Live URL:</label>
                          <input
                            type="text"
                            value={newProject.liveUrl}
                            onChange={(e) => setNewProject({ ...newProject, liveUrl: e.target.value })}
                            placeholder="https://..."
                            className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white"
                          />
                        </div>
                      </div>

                      <div className="space-y-1 text-xs font-mono">
                        <label className="text-slate-300 block">Description:</label>
                        <textarea
                          rows={2}
                          value={newProject.description}
                          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white"
                        />
                      </div>

                      <div className="space-y-1 text-xs font-mono">
                        <label className="text-slate-300 block">Project Cover Image:</label>
                        <div className="flex items-center gap-3">
                          <label className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono cursor-pointer flex items-center gap-1">
                            <Upload className="w-3.5 h-3.5" /> Upload File
                            <input type="file" accept="image/*" onChange={(e) => handleProjectImageUpload(e, false)} className="hidden" />
                          </label>
                          <input
                            type="text"
                            value={newProject.image}
                            onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
                            placeholder="Image URL"
                            className="flex-1 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs"
                          />
                        </div>
                      </div>

                      <div className="flex justify-end gap-2 pt-2">
                        <button
                          onClick={() => setIsAddingProject(false)}
                          className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleAddProject}
                          className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-semibold"
                        >
                          Save New Project
                        </button>
                      </div>
                    </div>
                  )}

                  {/* EDIT EXISTING PROJECT FORM */}
                  {editingProject && (
                    <div className="p-6 rounded-2xl bg-slate-950 border border-emerald-500/50 space-y-4 animate-in fade-in">
                      <div className="flex items-center justify-between">
                        <h5 className="text-sm font-bold text-emerald-400">Edit Project: {editingProject.name}</h5>
                        <button onClick={() => setEditingProject(null)} className="text-slate-400 hover:text-white">
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                        <div>
                          <label className="text-slate-300 block mb-1">Project Name:</label>
                          <input
                            type="text"
                            value={editingProject.name}
                            onChange={(e) => setEditingProject({ ...editingProject, name: e.target.value })}
                            className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white"
                          />
                        </div>
                        <div>
                          <label className="text-slate-300 block mb-1">Tagline:</label>
                          <input
                            type="text"
                            value={editingProject.tagline}
                            onChange={(e) => setEditingProject({ ...editingProject, tagline: e.target.value })}
                            className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white"
                          />
                        </div>
                      </div>

                      <div className="space-y-1 text-xs font-mono">
                        <label className="text-slate-300 block">Description:</label>
                        <textarea
                          rows={2}
                          value={editingProject.description}
                          onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white"
                        />
                      </div>

                      <div className="space-y-1 text-xs font-mono">
                        <label className="text-slate-300 block">Cover Image:</label>
                        <div className="flex items-center gap-3">
                          <label className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono cursor-pointer flex items-center gap-1">
                            <Upload className="w-3.5 h-3.5" /> Change File
                            <input type="file" accept="image/*" onChange={(e) => handleProjectImageUpload(e, true)} className="hidden" />
                          </label>
                          <input
                            type="text"
                            value={editingProject.image}
                            onChange={(e) => setEditingProject({ ...editingProject, image: e.target.value })}
                            className="flex-1 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs"
                          />
                        </div>
                      </div>

                      <div className="flex justify-end gap-2 pt-2">
                        <button
                          onClick={() => setEditingProject(null)}
                          className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleSaveEditedProject}
                          className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-semibold"
                        >
                          Update Project
                        </button>
                      </div>
                    </div>
                  )}

                  {/* PROJECT LIST */}
                  <div className="space-y-3">
                    {projectList.map((project) => (
                      <div
                        key={project.id}
                        className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-4">
                          {project.image ? (
                            <img
                              src={project.image}
                              alt={project.name}
                              referrerPolicy="no-referrer"
                              className="w-14 h-14 rounded-lg object-cover bg-slate-900 border border-slate-800"
                            />
                          ) : (
                            <div className="w-14 h-14 rounded-lg bg-emerald-950 border border-emerald-800 text-emerald-400 font-mono font-bold text-xs flex items-center justify-center">
                              {project.name.substring(0, 2).toUpperCase()}
                            </div>
                          )}
                          <div>
                            <h5 className="text-sm font-bold text-white flex items-center gap-2">
                              {project.name}
                              <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-indigo-300 font-mono">
                                {project.badge}
                              </span>
                            </h5>
                            <p className="text-xs text-slate-400 font-mono line-clamp-1">{project.tagline}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setEditingProject(project)}
                            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs flex items-center gap-1 font-mono"
                          >
                            <Edit3 className="w-3.5 h-3.5" /> Edit
                          </button>
                          <button
                            onClick={() => handleDeleteProject(project.id)}
                            className="p-2 rounded-lg bg-rose-950/60 hover:bg-rose-900/80 text-rose-300 border border-rose-900/60 text-xs flex items-center gap-1 font-mono"
                          >
                            <Trash2 className="w-3.5 h-3.5" /> Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              )}

              {/* TAB 3: THEME & COLOR PALETTE */}
              {activeTab === 'theme' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-white">Select Application Interface Palette</h4>
                    <p className="text-xs text-slate-400">Choose a color scheme to immediately update the visual design of your portfolio.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Theme 1: Dark Minimalist */}
                    <div
                      onClick={() => handleThemeSelect('dark')}
                      className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                        profileForm.theme === 'dark' || !profileForm.theme
                          ? 'border-emerald-500 bg-slate-950 shadow-xl'
                          : 'border-slate-800 bg-slate-950/50 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-bold text-white">🌙 Dark Luxury (Imozar)</span>
                        {(profileForm.theme === 'dark' || !profileForm.theme) && (
                          <Check className="w-4 h-4 text-emerald-400" />
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mb-3">Monochrome dark canvas, circular profile ring, moody mountain backdrop, and high-contrast typography.</p>
                      <div className="flex gap-2">
                        <span className="w-6 h-6 rounded-full bg-black border border-white/20"></span>
                        <span className="w-6 h-6 rounded-full bg-slate-900"></span>
                        <span className="w-6 h-6 rounded-full bg-white"></span>
                      </div>
                    </div>

                    {/* Theme 2: White & Green Minimalist */}
                    <div
                      onClick={() => handleThemeSelect('white-green')}
                      className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                        profileForm.theme === 'white-green'
                          ? 'border-emerald-500 bg-slate-950 shadow-xl'
                          : 'border-slate-800 bg-slate-950/50 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-bold text-emerald-400">🌿 White & Emerald Green</span>
                        {profileForm.theme === 'white-green' && (
                          <Check className="w-4 h-4 text-emerald-400" />
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mb-3">Fresh clean white/light theme with vibrant emerald green buttons, accents, and high-readability text.</p>
                      <div className="flex gap-2">
                        <span className="w-6 h-6 rounded-full bg-emerald-600"></span>
                        <span className="w-6 h-6 rounded-full bg-emerald-950"></span>
                        <span className="w-6 h-6 rounded-full bg-white border border-slate-300"></span>
                      </div>
                    </div>

                    {/* Theme 3: Emerald Dark */}
                    <div
                      onClick={() => handleThemeSelect('emerald-dark')}
                      className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                        profileForm.theme === 'emerald-dark'
                          ? 'border-emerald-500 bg-slate-950 shadow-xl'
                          : 'border-slate-800 bg-slate-950/50 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-bold text-emerald-300">🌲 Emerald Dark</span>
                        {profileForm.theme === 'emerald-dark' && (
                          <Check className="w-4 h-4 text-emerald-400" />
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mb-3">Deep dark charcoal canvas with rich emerald green glowing highlights and subtle green borders.</p>
                      <div className="flex gap-2">
                        <span className="w-6 h-6 rounded-full bg-emerald-950"></span>
                        <span className="w-6 h-6 rounded-full bg-emerald-500"></span>
                        <span className="w-6 h-6 rounded-full bg-black"></span>
                      </div>
                    </div>

                    {/* Theme 4: Indigo Slate */}
                    <div
                      onClick={() => handleThemeSelect('indigo-slate')}
                      className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                        profileForm.theme === 'indigo-slate'
                          ? 'border-indigo-500 bg-slate-950 shadow-xl'
                          : 'border-slate-800 bg-slate-950/50 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-bold text-indigo-400">🔮 Indigo Slate</span>
                        {profileForm.theme === 'indigo-slate' && (
                          <Check className="w-4 h-4 text-indigo-400" />
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mb-3">Deep slate blue background with indigo and violet modern developer accents.</p>
                      <div className="flex gap-2">
                        <span className="w-6 h-6 rounded-full bg-indigo-600"></span>
                        <span className="w-6 h-6 rounded-full bg-violet-600"></span>
                        <span className="w-6 h-6 rounded-full bg-slate-950"></span>
                      </div>
                    </div>

                  </div>
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
