export type ThemeOption = 'dark' | 'white-green' | 'emerald-dark' | 'indigo-slate';

export interface DeveloperProfile {
  name: string;
  brand: string;
  role: string;
  location: string;
  status: string;
  avatar?: string;
  heroBg?: string;
  theme?: ThemeOption;
  overview: {
    primaryFocus: string;
    corePhilosophy: string;
    bio: string;
  };
  contact: {
    email: string;
    github: string;
    portfolioUrl: string;
    location: string;
  };
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  badge: string;
  architecture?: string;
  hostingInfo?: string;
  techStack: string[];
  keyFeatures?: string[];
  image?: string;
  demoType?: string;
  liveUrl?: string;
  githubUrl?: string;
  lighthouseScores?: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
    pwa: number;
  };
  metrics?: {
    fcp: string; // First Contentful Paint, e.g. "0.4s"
    lcp: string; // Largest Contentful Paint, e.g. "0.8s"
    cls: string; // Cumulative Layout Shift, e.g. "0.00"
    offlineCache: string; // e.g. "Cache-First"
  };
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    description: string;
    featured?: boolean;
    logo?: string;
    linkUrl?: string;
    brandTheme?: 'black' | 'white' | 'blue' | 'orange' | 'yellow' | 'purple' | 'cyan' | 'emerald' | 'rose' | 'indigo';
    brandTag?: string;
    metrics?: string[];
  }[];
}

export interface Seat {
  id: string;
  row: number;
  col: number;
  label: string;
  assignedTo?: string;
  type: 'standard' | 'vip' | 'accessible' | 'desk';
  status: 'available' | 'occupied' | 'reserved';
}

export interface MetricLog {
  id: string;
  timestamp: string;
  type: 'Electricity' | 'Water' | 'Gas' | 'Bandwidth';
  value: number;
  unit: string;
  location: string;
  status: 'normal' | 'warning' | 'optimal';
}
