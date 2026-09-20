import React, { useState } from 'react';
import { ShowcaseProject } from '../data/portfolioData';
import {
  X,
  Plus,
  Trash2,
  ExternalLink,
  Github,
  Check,
  ShieldCheck,
  Lock,
  Layers,
  Sparkles,
  Upload,
  User,
  Image as ImageIcon
} from 'lucide-react';

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  showcaseProjects: ShowcaseProject[];
  onUpdateShowcaseProjects: (projects: ShowcaseProject[]) => void;
  currentAvatar?: string;
  onUpdateAvatar?: (url: string, passcode?: string) => Promise<boolean | void> | void;
}

const PRESET_IMAGES = [
  {
    name: 'SaaS Dashboard',
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Code Editor',
    url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Mobile App / PWA',
    url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Clean Minimalist UI',
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  },
];

export const AdminPortalModal: React.FC<AdminPortalModalProps> = ({
  isOpen,
  onClose,
  showcaseProjects,
  onUpdateShowcaseProjects,
  currentAvatar,
  onUpdateAvatar,
}) => {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcodeError, setPasscodeError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [avatarDragging, setAvatarDragging] = useState(false);
  const [isSavingAvatar, setIsSavingAvatar] = useState(false);

  const handleAvatarFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file (PNG, JPG, WebP, etc.).');
      return;
    }
    setIsSavingAvatar(true);
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        if (onUpdateAvatar) {
          await onUpdateAvatar(reader.result as string, passcode || 'admin173');
          setSuccessMessage('Author profile photo saved to database & deployed permanently!');
          setTimeout(() => setSuccessMessage(''), 6000);
        }
      } catch (err: any) {
        setPasscodeError('Error saving photo to database: ' + (err.message || 'Unknown error'));
      } finally {
        setIsSavingAvatar(false);
      }
    };
    reader.onerror = () => {
      setIsSavingAvatar(false);
      alert('Failed to read image file.');
    };
    reader.readAsDataURL(file);
  };

  // Form state for creating a new project
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('03 / PWA & WEB APP');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState(PRESET_IMAGES[0].url);
  const [liveUrl, setLiveUrl] = useState('');
  const [githubUrl, setGithubUrl] = useState('https://github.com/MuhammadArhamShahid');
  const [tagsInput, setTagsInput] = useState('React, TypeScript, Tailwind CSS, PWA');
  const [metricValue, setMetricValue] = useState('100 / 100 Lighthouse');

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

  const handleImageFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImageUrl(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('Please enter a project title.');
      return;
    }

    const tags = tagsInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const projectNumber =
      category.trim() ||
      `0${showcaseProjects.length + 1} / WEB APP`;

    const newProject: ShowcaseProject = {
      id: `project_${Date.now()}`,
      number: projectNumber,
      title: title.trim(),
      tagline: tagline.trim() || 'High-Performance Web Application',
      description:
        description.trim() ||
        'Custom digital web application built with modern performance standards and clean architecture.',
      image: imageUrl.trim() || PRESET_IMAGES[0].url,
      liveUrl: liveUrl.trim() || '#',
      githubUrl: githubUrl.trim() || undefined,
      tags: tags.length > 0 ? tags : ['React', 'TypeScript', 'PWA'],
      metrics: metricValue.trim()
        ? {
            label: 'Benchmark',
            value: metricValue.trim(),
          }
        : undefined,
    };

    const updated = [newProject, ...showcaseProjects];
    onUpdateShowcaseProjects(updated);

    // Reset form
    setTitle('');
    setTagline('');
    setDescription('');
    setLiveUrl('');
    setSuccessMessage(`"${newProject.title}" was successfully published to your portfolio!`);
    setTimeout(() => setSuccessMessage(''), 4000);
  };

  const handleDeleteProject = (id: string, projectName: string) => {
    if (window.confirm(`Are you sure you want to remove "${projectName}" from your portfolio?`)) {
      const updated = showcaseProjects.filter((p) => p.id !== id);
      onUpdateShowcaseProjects(updated);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="bg-[#0D0E12] border border-white/10 w-full max-w-3xl rounded-[28px] sm:rounded-[32px] shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-white/8 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#18150D] border border-[#4A3E1D] flex items-center justify-center text-[#E5C158]">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base sm:text-lg text-[#F5F5F7]">
                Admin Studio // Add Project
              </h3>
              <p className="text-[11px] font-mono text-[#888899]">
                ARSGROUP • Muhammad Arham Shahid Portfolio
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-[#888899] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        {!isAuthenticated ? (
          /* LOGIN VIEW */
          <div className="p-8 sm:p-12 flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-[#18150D] border border-[#4A3E1D] flex items-center justify-center text-[#E5C158] shadow-[0_0_20px_rgba(229,193,88,0.15)]">
              <Lock className="w-7 h-7" />
            </div>

            <div className="space-y-1.5 max-w-sm">
              <h4 className="font-heading font-bold text-xl text-white">
                Enter Admin Passcode
              </h4>
              <p className="text-xs font-mono text-[#888899]">
                Authenticate to add new projects to the portfolio showcase.
              </p>
            </div>

            <form onSubmit={handleLogin} className="w-full max-w-xs space-y-3">
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter passcode..."
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-center text-sm font-mono tracking-widest text-white focus:outline-none focus:border-[#E5C158] transition-colors"
                autoFocus
              />

              {passcodeError && (
                <p className="text-xs font-mono text-red-400">{passcodeError}</p>
              )}

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#E5C158] hover:bg-[#F3DE98] text-[#08090C] font-heading font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#E5C158]/10"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Unlock Project Manager</span>
              </button>
            </form>
          </div>
        ) : (
          /* AUTHENTICATED ADD PROJECT FORM */
          <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-7">
            
            {/* Success Alert */}
            {successMessage && (
              <div className="p-4 rounded-2xl bg-[#18150D] border border-[#4A3E1D] flex items-center gap-3 text-xs font-mono text-[#E5C158] animate-in fade-in">
                <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>{successMessage}</span>
              </div>
            )}

            {/* AUTHOR PROFILE PHOTO MANAGEMENT (PROTECTED ADMIN ACTION) */}
            {onUpdateAvatar && (
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.015] border border-white/10 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/8">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#E5C158]"></span>
                      <h4 className="font-heading font-bold text-base text-white">
                        Author Profile Photo
                      </h4>
                      <span className="px-2 py-0.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[10px] font-mono text-[#E5C158] flex items-center gap-1">
                        <Lock className="w-2.5 h-2.5" />
                        Admin Only
                      </span>
                    </div>
                    <p className="text-xs font-mono text-[#888899] mt-1">
                      Protected setting: public visitors cannot change or upload photos on your portfolio.
                    </p>
                  </div>

                  {currentAvatar && (
                    <button
                      type="button"
                      onClick={() => {
                        onUpdateAvatar('', passcode || 'admin173');
                        setSuccessMessage('Author profile photo cleared from database.');
                        setTimeout(() => setSuccessMessage(''), 4000);
                      }}
                      className="text-xs font-mono text-[#EF4444] hover:text-[#F87171] flex items-center gap-1.5 transition-colors self-start sm:self-auto cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Remove Photo</span>
                    </button>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-5">
                  {/* Photo Preview Box */}
                  <div className="relative shrink-0">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#E5C158]/70 bg-[#111] shadow-lg shadow-[#E5C158]/10 flex items-center justify-center">
                      {currentAvatar ? (
                        <img
                          src={currentAvatar}
                          alt="Author Current Headshot"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-top"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center text-center p-2 text-[#888899]">
                          <User className="w-8 h-8 text-[#E5C158] mb-1" />
                          <span className="text-[10px] font-mono">No Photo</span>
                        </div>
                      )}
                    </div>
                    <span
                      className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#10B981] border-2 border-[#08090C]"
                      title="Available / Online"
                    ></span>
                  </div>

                  {/* Drag & Drop / File Selector Box */}
                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      setAvatarDragging(true);
                    }}
                    onDragLeave={() => setAvatarDragging(false)}
                    onDrop={(e) => {
                      e.preventDefault();
                      setAvatarDragging(false);
                      const file = e.dataTransfer.files?.[0];
                      if (file) handleAvatarFile(file);
                    }}
                    className={`flex-1 w-full border-2 border-dashed rounded-2xl p-5 text-center transition-all ${
                      avatarDragging
                        ? 'border-[#E5C158] bg-[#E5C158]/10'
                        : 'border-white/12 hover:border-[#E5C158]/50 bg-white/[0.015]'
                    }`}
                  >
                    <input
                      type="file"
                      id="admin-profile-avatar-upload"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleAvatarFile(file);
                      }}
                      className="hidden"
                    />
                    <label
                      htmlFor="admin-profile-avatar-upload"
                      className="cursor-pointer flex flex-col items-center justify-center gap-2"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
                        {isSavingAvatar ? (
                          <div className="w-5 h-5 border-2 border-[#E5C158] border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                          <Upload className="w-5 h-5" />
                        )}
                      </div>
                      <div>
                        <span className="text-xs font-heading font-bold text-white hover:text-[#E5C158] transition-colors">
                          {isSavingAvatar ? 'Storing photo in database...' : 'Upload Photo File'}
                        </span>
                        {!isSavingAvatar && (
                          <span className="text-xs font-mono text-[#888899]"> or drag & drop here</span>
                        )}
                      </div>
                      <p className="text-[10px] font-mono text-[#777788]">
                        {isSavingAvatar
                          ? 'Writing directly to server storage and database for live website deployment...'
                          : 'Upload your photo file to store in the database & display across all live visitors'}
                      </p>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* ADD PROJECT FORM SECTION */}
            <form onSubmit={handleAddProject} className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-white/8">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E5C158]"></span>
                  <h4 className="font-heading font-bold text-base text-white">
                    Add New Project to Portfolio
                  </h4>
                </div>
                <span className="text-[11px] font-mono text-[#888899]">
                  Appears instantly in Selected Work
                </span>
              </div>

              {/* Title & Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="space-y-1.5">
                  <label className="text-[#AAA] font-medium">Project Name / Title *</label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. EcoSphere or Seatify"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#E5C158] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[#AAA] font-medium">Category / Number Label</label>
                  <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="e.g. 03 / PWA & WEB APP"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#E5C158] transition-colors"
                  />
                </div>
              </div>

              {/* Tagline */}
              <div className="space-y-1.5 text-xs font-mono">
                <label className="text-[#AAA] font-medium">Short Tagline</label>
                <input
                  type="text"
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  placeholder="e.g. High-Performance Seating Arrangement PWA"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#E5C158] transition-colors"
                />
              </div>

              {/* Description */}
              <div className="space-y-1.5 text-xs font-mono">
                <label className="text-[#AAA] font-medium">Project Description</label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Explain what the project solves, performance features, offline capabilities..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#E5C158] transition-colors resize-none"
                />
              </div>

              {/* Cover Image URL and Presets */}
              <div className="space-y-2.5 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <label className="text-[#AAA] font-medium">Project Image (URL or Upload)</label>
                  <label className="text-[11px] text-[#E5C158] hover:underline cursor-pointer flex items-center gap-1">
                    <Upload className="w-3 h-3" />
                    <span>Upload Local File</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageFileUpload}
                      className="hidden"
                    />
                  </label>
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="Paste image URL..."
                    className="flex-1 px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#E5C158] transition-colors"
                  />
                  {imageUrl && (
                    <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/15 bg-black shrink-0">
                      <img
                        src={imageUrl}
                        alt="Preview"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>

                {/* Quick presets */}
                <div className="flex items-center gap-2 flex-wrap pt-1">
                  <span className="text-[10px] text-[#777788]">Presets:</span>
                  {PRESET_IMAGES.map((preset) => (
                    <button
                      key={preset.name}
                      type="button"
                      onClick={() => setImageUrl(preset.url)}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/10 border border-white/8 text-[10px] text-[#AAA] transition-colors cursor-pointer"
                    >
                      {preset.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* URLs: Live Link & GitHub */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="space-y-1.5">
                  <label className="text-[#AAA] font-medium">Live Demo URL</label>
                  <input
                    type="url"
                    value={liveUrl}
                    onChange={(e) => setLiveUrl(e.target.value)}
                    placeholder="https://myproject.vercel.app"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#E5C158] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[#AAA] font-medium">GitHub Repository URL</label>
                  <input
                    type="url"
                    value={githubUrl}
                    onChange={(e) => setGithubUrl(e.target.value)}
                    placeholder="https://github.com/..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#E5C158] transition-colors"
                  />
                </div>
              </div>

              {/* Tags & Metric */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="space-y-1.5">
                  <label className="text-[#AAA] font-medium">Tech Tags (comma separated)</label>
                  <input
                    type="text"
                    value={tagsInput}
                    onChange={(e) => setTagsInput(e.target.value)}
                    placeholder="React, TypeScript, PWA, Tailwind"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#E5C158] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[#AAA] font-medium">Benchmark Metric Pill</label>
                  <input
                    type="text"
                    value={metricValue}
                    onChange={(e) => setMetricValue(e.target.value)}
                    placeholder="e.g. 100 / 100 Lighthouse"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#E5C158] transition-colors"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#E5C158] hover:bg-[#F3DE98] text-[#08090C] font-heading font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#E5C158]/15"
              >
                <Plus className="w-4 h-4" />
                <span>Publish Project to Portfolio</span>
              </button>
            </form>

            {/* EXISTING SHOWCASE PROJECTS LIST */}
            <div className="pt-6 border-t border-white/8 space-y-4">
              <div className="flex items-center justify-between">
                <h5 className="font-heading font-bold text-sm text-white flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#E5C158]" />
                  <span>Current Portfolio Projects ({showcaseProjects.length})</span>
                </h5>
                <span className="text-[11px] font-mono text-[#888899]">
                  Live on website
                </span>
              </div>

              <div className="space-y-2.5">
                {showcaseProjects.map((p) => (
                  <div
                    key={p.id}
                    className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/6 flex items-center justify-between gap-4 hover:border-white/12 transition-all"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-12 h-12 rounded-xl overflow-hidden bg-black/50 shrink-0 border border-white/10">
                        <img
                          src={p.image}
                          alt={p.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono text-[#888899]">
                            {p.number}
                          </span>
                          <h6 className="text-sm font-heading font-bold text-white truncate">
                            {p.title}
                          </h6>
                        </div>
                        <p className="text-xs text-[#888899] truncate font-normal">
                          {p.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {p.liveUrl && p.liveUrl !== '#' && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#AAA] hover:text-white transition-colors"
                          title="Open Live App"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <button
                        onClick={() => handleDeleteProject(p.id, p.title)}
                        className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-colors cursor-pointer"
                        title="Delete project"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* Modal Footer */}
        <div className="p-4 border-t border-white/8 bg-white/[0.01] flex items-center justify-between text-[11px] font-mono text-[#777788]">
          <span>Passcode: <code className="text-[#E5C158]">admin173</code></span>
          <span>Status: {isAuthenticated ? 'Authenticated' : 'Locked'}</span>
        </div>

      </div>
    </div>
  );
};
