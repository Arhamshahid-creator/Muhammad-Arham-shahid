import React, { useState } from 'react';
import { SkillCategory } from '../types';
import { Code2, Layers, Palette, Wrench, Search, CheckCircle2, Sparkles, Terminal } from 'lucide-react';

interface SkillsSectionProps {
  categories: SkillCategory[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryIconMap: Record<string, React.ElementType> = {
    'Cloud Services & Platforms': Wrench,
    'Languages & Core Web': Code2,
    'Frameworks & Applications': Layers,
    'Styling & UI Systems': Palette
  };

  const filteredCategories = categories.map(cat => ({
    ...cat,
    skills: cat.skills.filter(s =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(cat => activeCategory === 'All' || cat.title === activeCategory);

  return (
    <section id="skills" className="py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 text-xs font-mono font-semibold">
            <Wrench className="w-3.5 h-3.5 text-cyan-700" />
            <span>Developer Stack & Core Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Technology Stack & Platform Mastery
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Specialized competencies mastered by Muhammad Arham Shahid in GitHub, Vercel, Google AI Studio, Cloudflare, Google Search Console, and Progressive Web Apps.
          </p>
        </div>

        {/* Category Filters & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
          
          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-colors cursor-pointer ${
                activeCategory === 'All' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              All Competencies
            </button>
            {categories.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(cat.title)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-colors cursor-pointer ${
                  activeCategory === cat.title ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Vercel, PWA)..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-emerald-500 font-mono"
            />
          </div>

        </div>

        {/* Skills Cards Matrix */}
        <div className="space-y-10">
          {filteredCategories.map((category) => {
            const CatIcon = categoryIconMap[category.title] || Terminal;
            if (category.skills.length === 0) return null;

            return (
              <div key={category.title} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-700">
                    <CatIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">{category.title}</h3>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-white text-slate-600 border border-slate-200">
                    {category.skills.length} skills
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs hover:shadow-md hover:border-emerald-400 transition-all duration-300 space-y-2 group"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="text-base font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                          {skill.name}
                        </h4>
                        <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded font-bold border ${
                          skill.level === 'Expert'
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                            : 'bg-cyan-50 text-cyan-800 border-cyan-200'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
