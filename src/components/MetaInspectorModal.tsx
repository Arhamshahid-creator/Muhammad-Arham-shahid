import React, { useState } from 'react';
import { DeveloperProfile } from '../types';
import { X, Copy, Check, Eye, Code, Share2, ShieldCheck, Globe } from 'lucide-react';

interface MetaInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: DeveloperProfile;
}

export const MetaInspectorModal: React.FC<MetaInspectorModalProps> = ({ isOpen, onClose, profile }) => {
  const [copiedTag, setCopiedTag] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, tagId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTag(tagId);
    setTimeout(() => setCopiedTag(null), 2000);
  };

  const metaTagsList = [
    {
      id: 'title',
      label: '<title>',
      code: `<title>${profile.name} | Full-Stack Developer & PWA Specialist | ${profile.brand}</title>`
    },
    {
      id: 'desc',
      label: 'meta description',
      code: `<meta name="description" content="Official developer portfolio of ${profile.name} (${profile.brand}). Specializing in Full-Stack & Frontend Web Development, Progressive Web Apps (PWAs), Seatify, Meter-wise, and performance optimization." />`
    },
    {
      id: 'og_title',
      label: 'og:title',
      code: `<meta property="og:title" content="${profile.name} | Full-Stack Web Developer & PWA Specialist" />`
    },
    {
      id: 'og_desc',
      label: 'og:description',
      code: `<meta property="og:description" content="Building fast, responsive, and user-centric web applications with seamless digital experiences. Key projects include Seatify and Meter-wise." />`
    },
    {
      id: 'og_image',
      label: 'og:image (Google & Social Image Crawl)',
      code: `<meta property="og:image" content="${profile.avatar || '/src/assets/images/profile_avatar.jpg'}" />`
    },
    {
      id: 'twitter_card',
      label: 'twitter:card & image',
      code: `<meta name="twitter:card" content="summary_large_image" />\n<meta name="twitter:image" content="${profile.avatar || '/src/assets/images/profile_avatar.jpg'}" />`
    },
    {
      id: 'schema',
      label: 'Schema.org JSON-LD (Person & Image)',
      code: `{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "${profile.name}",
  "alternateName": "${profile.brand}",
  "jobTitle": "${profile.role}",
  "image": "${profile.avatar || '/src/assets/images/profile_avatar.jpg'}",
  "url": "https://arsgroup.dev/",
  "knowsAbout": ["JavaScript", "React", "PWAs", "Tailwind CSS", "Vite"],
  "hasPart": [
    { "@type": "SoftwareApplication", "name": "Seatify", "operatingSystem": "PWA" },
    { "@type": "SoftwareApplication", "name": "Meter-wise", "operatingSystem": "Web" }
  ]
}`
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Live Meta Tags & Schema Inspector</h3>
              <p className="text-xs text-slate-400">SEO & Social Sharing Metadata configured for {profile.name}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4 font-mono text-xs">
          <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-800/60 text-indigo-300 text-xs flex items-center gap-2">
            <Globe className="w-4 h-4 shrink-0" />
            <span>All meta tags are live inside <strong className="text-white">index.html</strong> and fully indexed for Google Search Console and social preview cards.</span>
          </div>

          <div className="space-y-4">
            {metaTagsList.map((tag) => (
              <div key={tag.id} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-indigo-400 font-semibold">{tag.label}</span>
                  <button
                    onClick={() => handleCopy(tag.code, tag.id)}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
                  >
                    {copiedTag === tag.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Copy Tag</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-3 bg-slate-900/90 rounded-lg text-slate-300 text-[11px] overflow-x-auto whitespace-pre-wrap">
                  {tag.code}
                </pre>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-950 px-6 py-3 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer"
          >
            Close Inspector
          </button>
        </div>

      </div>
    </div>
  );
};
