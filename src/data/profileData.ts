import { DeveloperProfile, Project, SkillCategory } from '../types';
import seatifyImg from '../assets/images/seatify_app_preview_1786035502763.jpg';
import meterwiseImg from '../assets/images/meterwise_app_preview_1786035515545.jpg';
import profileAvatarImg from '../assets/images/profile_portrait_1786102520376.jpg';
import heroBgImg from '../assets/images/hero_mountain_bg_1786036239686.jpg';

export const initialProfile: DeveloperProfile = {
  name: "Muhammad Arham Shahid",
  brand: "ARSGROUP",
  role: "FULL-STACK & FRONTEND WEB DEVELOPER",
  location: "Global / Remote",
  status: "Available for projects & full-stack roles",
  avatar: profileAvatarImg,
  heroBg: heroBgImg,
  overview: {
    primaryFocus: "Full-Stack & Frontend Web Development, Progressive Web Apps (PWAs), and performance optimization.",
    corePhilosophy: "Building fast, responsive, and user-centric web applications with seamless digital experiences and clean UI design.",
    bio: "Passionate developer dedicated to architecting scalable frontend applications, high-performance PWAs, and intuitive utility tools. Leading digital craft under the ARSGROUP brand entity."
  },
  contact: {
    email: "hplaptophome173@gmail.com",
    github: "https://github.com/MuhammadArhamShahid",
    portfolioUrl: "https://arsgroup-portfolio.vercel.app",
    location: "Pakistan / Remote"
  }
};

export const projectsData: Project[] = [
  {
    id: "seatify",
    name: "Seatify",
    tagline: "Specialized Seating Arrangement PWA",
    description: "A specialized seating arrangement and organization Progressive Web App built to streamline event and classroom layouts with offline caching.",
    badge: "PWA • Progressive Web App",
    liveUrl: "https://seatify-steel.vercel.app/",
    githubUrl: "https://github.com/MuhammadArhamShahid",
    techStack: ["React", "Progressive Web App", "Service Workers", "Tailwind CSS"],
    image: seatifyImg,
    demoType: "seatify"
  },
  {
    id: "meter-wise",
    name: "Meter-wise",
    tagline: "Resource Metric Monitoring Utility",
    description: "A utility tracking web application designed to monitor, log, and analyze resource metrics efficiently with real-time visual charts.",
    badge: "Vercel Deployed",
    liveUrl: "https://meter-wise-app.vercel.app/",
    githubUrl: "https://github.com/MuhammadArhamShahid",
    techStack: ["React", "Vercel", "Tailwind CSS", "Recharts"],
    image: meterwiseImg,
    demoType: "meterwise"
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
