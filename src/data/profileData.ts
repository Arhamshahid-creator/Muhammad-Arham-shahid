import { DeveloperProfile, Project, SkillCategory } from '../types';
import seatifyImg from '../assets/images/seatify_app_preview_1786035502763.jpg';
import meterwiseImg from '../assets/images/meterwise_app_preview_1786035515545.jpg';
import heroBgImg from '../assets/images/hero_mountain_bg_1786036239686.jpg';
import profileAvatarImg from '../assets/images/arham_real_portrait_1789892507777.jpg';

export const initialProfile: DeveloperProfile = {
  name: "Muhammad Arham Shahid",
  brand: "ARSGROUP",
  role: "PROGRESSIVE WEB APP (PWA) ARCHITECT & DEVELOPER",
  location: "Global / Remote",
  status: "Available for PWA & Frontend Engineering",
  avatar: profileAvatarImg,
  heroBg: heroBgImg,
  overview: {
    primaryFocus: "Progressive Web Apps (PWAs), Offline-First Service Worker Architecture, 99+ Lighthouse Optimization, and Cross-Platform Fluidity.",
    corePhilosophy: "Delivering 60fps native-grade app experiences directly in the browser—offline-ready, installable on any device, and engineered with zero-latency caching.",
    bio: "PWA Architect and frontend engineer leading digital products under the ARSGROUP brand entity. Specialized in building installable, responsive web apps with verified 100/100 Lighthouse scores, background sync, and modern component architectures."
  },
  contact: {
    email: "hplaptophome173@gmail.com",
    github: "https://github.com/MuhammadArhamShahid",
    portfolioUrl: "https://arsgroup-portfolio.vercel.app",
    location: "Global / Remote"
  }
};

export const projectsData: Project[] = [
  {
    id: "seatify",
    name: "Seatify",
    tagline: "High-Performance Seating Arrangement PWA",
    description: "A specialized seating arrangement and organization Progressive Web App engineered with offline-first service worker caching, drag-and-drop desk planning, and instantaneous launch.",
    badge: "PWA • 100 LIGHTHOUSE",
    liveUrl: "https://seatify-steel.vercel.app/",
    githubUrl: "https://github.com/MuhammadArhamShahid",
    techStack: ["React", "Service Worker Cache API", "Web App Manifest", "Tailwind CSS", "Vite PWA"],
    image: seatifyImg,
    demoType: "seatify",
    lighthouseScores: {
      performance: 100,
      accessibility: 100,
      bestPractices: 100,
      seo: 100,
      pwa: 100
    },
    metrics: {
      fcp: "0.3s",
      lcp: "0.6s",
      cls: "0.00",
      offlineCache: "Stale-While-Revalidate"
    },
    keyFeatures: [
      "Offline-first caching with Service Worker lifecycle",
      "One-click install banner on iOS, Android, and Desktop",
      "Dynamic interactive seating layouts and grid math",
      "Instant 60fps viewport scaling across screen sizes"
    ]
  },
  {
    id: "meter-wise",
    name: "Meter-wise",
    tagline: "Resource & Utility Metric Analytics PWA",
    description: "A utility metric tracking Progressive Web App designed to monitor, log, and analyze resource consumption in real-time with zero-latency client caching and responsive charts.",
    badge: "PWA • 99+ LIGHTHOUSE",
    liveUrl: "https://meter-wise-app.vercel.app/",
    githubUrl: "https://github.com/MuhammadArhamShahid",
    techStack: ["React", "Vercel Edge", "Service Workers", "Recharts", "Tailwind CSS"],
    image: meterwiseImg,
    demoType: "meterwise",
    lighthouseScores: {
      performance: 99,
      accessibility: 100,
      bestPractices: 100,
      seo: 100,
      pwa: 100
    },
    metrics: {
      fcp: "0.4s",
      lcp: "0.7s",
      cls: "0.00",
      offlineCache: "Cache-First Strategy"
    },
    keyFeatures: [
      "Real-time visual data metrics and consumption logs",
      "IndexedDB offline persistence across sessions",
      "Ultra-fast Core Web Vitals with 99+ Performance",
      "Custom standalone app shell for desktop & mobile"
    ]
  }
];

export const skillCategoriesData: SkillCategory[] = [
  {
    title: "Cloud Services & Platforms",
    icon: "Wrench",
    skills: [
      {
        name: "GitHub",
        level: "Expert",
        description: "Source code repositories, pull requests, automated GitHub Actions CI/CD workflows, project management.",
        featured: true,
        logo: "/github-logo.svg",
        brandTheme: "black",
        brandTag: "DevOps & VCM",
        metrics: ["CI/CD Workflows", "Git Architecture", "Release Automation"],
        linkUrl: "https://github.com/MuhammadArhamShahid"
      },
      {
        name: "Vercel",
        level: "Expert",
        description: "Zero-config continuous deployments, edge network caching, custom domain management, serverless integrations.",
        featured: true,
        logo: "/vercel-logo.svg",
        brandTheme: "white",
        brandTag: "Edge Deployment",
        metrics: ["Global Edge CDN", "Zero-Config Deploy", "Serverless Functions"],
        linkUrl: "https://vercel.com"
      },
      {
        name: "Google AI Studio",
        level: "Expert",
        description: "Integrating Gemini LLM APIs, prompt engineering, multimodal AI model workflows, rapid prototyping.",
        featured: true,
        logo: "/google-ai-studio-logo.svg",
        brandTheme: "blue",
        brandTag: "Generative AI",
        metrics: ["Gemini 2.5 LLM", "Prompt Engineering", "Multimodal APIs"],
        linkUrl: "https://aistudio.google.com"
      },
      {
        name: "Cloudflare",
        level: "Advanced",
        description: "DNS management, edge security, SSL protection, Workers serverless edge execution, asset performance.",
        featured: true,
        logo: "/cloudflare-logo.svg",
        brandTheme: "orange",
        brandTag: "Edge Security",
        metrics: ["DNS Management", "Edge Security & SSL", "Workers CDN Cache"],
        linkUrl: "https://cloudflare.com"
      },
      {
        name: "Google Search Console",
        level: "Expert",
        description: "Sitemap submission, Google search crawling verification, SEO structured schema indexing, core web vitals auditing.",
        featured: true,
        logo: "/google-search-console-logo.svg",
        brandTheme: "white",
        brandTag: "SEO & Core Vitals",
        metrics: ["Sitemap Verification", "Schema Rich Snippets", "Core Web Vitals"],
        linkUrl: "https://search.google.com/search-console"
      }
    ]
  },
  {
    title: "Languages & Core Web",
    icon: "Code2",
    skills: [
      {
        name: "JavaScript (ES6+)",
        level: "Expert",
        description: "Modern ES6+ syntax, async/await pipelines, DOM APIs, functional programming patterns, client runtime performance.",
        featured: true,
        brandTheme: "yellow",
        brandTag: "ECMAScript Engine",
        metrics: ["Async / Await Pipelines", "Modern ESNext Modules", "DOM Event Loop"]
      },
      {
        name: "HTML5 & Web Storage",
        level: "Expert",
        description: "Semantic markup, accessibility (a11y), canvas API, IndexedDB, Web Workers, offline storage manifests.",
        featured: true,
        brandTheme: "rose",
        brandTag: "Web Standards",
        metrics: ["W3C Semantic Hierarchy", "IndexedDB & Storage", "PWA Web Manifests"]
      },
      {
        name: "CSS3 & Modern Layouts",
        level: "Expert",
        description: "Custom properties, CSS Grid 2.0, Flexbox architectures, media queries, keyframe animations, fluid typography.",
        featured: true,
        brandTheme: "indigo",
        brandTag: "Layout Architecture",
        metrics: ["CSS Grid & Subgrid", "Flexbox Precision", "Fluid Typography Math"]
      }
    ]
  },
  {
    title: "Frameworks & Applications",
    icon: "Layers",
    skills: [
      {
        name: "React",
        level: "Expert",
        description: "Component state architecture, custom hooks, context API, memoization, hydration, and high-FPS client rendering.",
        featured: true,
        brandTheme: "cyan",
        brandTag: "UI Component Framework",
        metrics: ["Hooks & Custom State", "Context Architecture", "High-FPS Performance"]
      },
      {
        name: "Progressive Web Apps (PWAs)",
        level: "Expert",
        description: "Service worker caching strategies, offline manifests, background sync, install prompts across Seatify and Meter-wise.",
        featured: true,
        brandTheme: "purple",
        brandTag: "Offline App Architecture",
        metrics: ["Service Worker Cache", "Install to Homescreen", "Background Sync"]
      }
    ]
  },
  {
    title: "Styling & UI Systems",
    icon: "Palette",
    skills: [
      {
        name: "Tailwind CSS",
        level: "Expert",
        description: "Utility-first design systems, responsive layout tokens, arbitrary modifiers, custom theme configuration, dark/light modes.",
        featured: true,
        brandTheme: "cyan",
        brandTag: "Utility Design Tokens",
        metrics: ["JIT Compiler Optimization", "Design System Tokens", "Zero Runtime CSS"]
      },
      {
        name: "Responsive Engineering",
        level: "Expert",
        description: "Fluid layouts, desktop-first precision with mobile-first CSS execution, touch ergonomics, and adaptive container queries.",
        featured: true,
        brandTheme: "emerald",
        brandTag: "Multi-Device Design",
        metrics: ["Fluid Breakpoint Ranges", "44px Touch Targets", "Adaptive Viewports"]
      }
    ]
  }
];
