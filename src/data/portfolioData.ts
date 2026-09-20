export interface ShowcaseProject {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl?: string;
  tags: string[];
  metrics?: {
    label: string;
    value: string;
  };
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

export interface StatItem {
  value: string;
  label: string;
}

export const initialShowcaseProjects: ShowcaseProject[] = [
  {
    id: "meterwise",
    number: "01 / WEB APP",
    title: "MeterWise",
    tagline: "Resource & Submeter Management Platform",
    description: "A modern utility management platform designed for electricity submeter billing, consumption tracking, tenant management, and automated invoice generation with zero-latency client data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://meter-wise-app.vercel.app/",
    githubUrl: "https://github.com/MuhammadArhamShahid",
    tags: ["React", "Recharts", "IndexedDB", "Tailwind CSS", "Vercel Edge"],
    metrics: {
      label: "Lighthouse Score",
      value: "99+ / 100"
    }
  },
  {
    id: "seatify",
    number: "02 / PWA & DESK PLANNER",
    title: "Seatify",
    tagline: "High-Performance Seating Arrangement PWA",
    description: "A specialized seating arrangement and organization Progressive Web App engineered with offline-first service worker caching, drag-and-drop desk planning, and instantaneous desktop and mobile installation.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://seatify-steel.vercel.app/",
    githubUrl: "https://github.com/MuhammadArhamShahid",
    tags: ["Service Worker", "Cache API", "Web App Manifest", "Tailwind CSS"],
    metrics: {
      label: "Lighthouse Audit",
      value: "100 / 100"
    }
  },
  {
    id: "mobile-pwa",
    number: "03 / MOBILE PWA",
    title: "Mobile Experience",
    tagline: "Zero-Latency Installable Native Shells",
    description: "Progressive web applications built to feel fast, responsive, and natural across desktop and mobile devices, featuring custom web app manifests, background sync, and offline persistence.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://seatify-steel.vercel.app/",
    githubUrl: "https://github.com/MuhammadArhamShahid",
    tags: ["PWA Standalone", "iOS Splash", "Android Chrome", "Offline Sync"],
    metrics: {
      label: "Frame Rate",
      value: "60 FPS Native"
    }
  },
  {
    id: "digital-platform",
    number: "04 / CLOUD PLATFORM",
    title: "Digital Platform",
    tagline: "Enterprise Edge Caching & Fast CDN",
    description: "A responsive digital platform with clean navigation, interactive sections, and a verified engineering visual system designed for businesses, organizations, and global deployment.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://arsgroup-portfolio.vercel.app",
    githubUrl: "https://github.com/MuhammadArhamShahid",
    tags: ["Cloudflare", "GitHub Actions", "Edge Network", "Core Web Vitals"],
    metrics: {
      label: "First Paint",
      value: "< 0.3s FCP"
    }
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: "web-dev",
    icon: "◈",
    title: "Web Development",
    description: "Modern responsive websites built with clean, scalable, and performance-focused code designed for maximum conversions and fluid interaction.",
    tags: ["React 18", "TypeScript", "Tailwind CSS", "Vite"]
  },
  {
    id: "pwa-dev",
    icon: "◇",
    title: "PWA Development",
    description: "Fast installable web applications with offline capabilities, background sync, service worker cache strategies, and mobile-first experiences.",
    tags: ["Service Workers", "Cache Storage API", "Web App Manifest", "Offline-First"]
  },
  {
    id: "ui-ux",
    icon: "✦",
    title: "UI / UX Design",
    description: "Minimal interfaces designed around usability, visual hierarchy, mathematical padding scales, and smooth 60fps micro-interactions.",
    tags: ["Dark Luxury UI", "Typography Hierarchy", "Design Systems", "Prototyping"]
  },
  {
    id: "cloud-devops",
    icon: "⚡",
    title: "Edge & Cloud DevOps",
    description: "Automated GitHub Actions CI/CD pipelines, zero-config Vercel edge deployments, Cloudflare security, and 100/100 Core Web Vitals optimization.",
    tags: ["GitHub Actions", "Vercel Edge", "Cloudflare DNS", "Google Lighthouse"]
  }
];

export const aboutStats: StatItem[] = [
  {
    value: "10+",
    label: "Projects Delivered"
  },
  {
    value: "100%",
    label: "Lighthouse Benchmark"
  },
  {
    value: "0.3s",
    label: "Average First Paint"
  },
  {
    value: "24/7",
    label: "Edge Reliability"
  }
];
