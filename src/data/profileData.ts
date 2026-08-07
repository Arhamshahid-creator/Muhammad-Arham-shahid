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
    email: "arhamsahab62@gmail.com",
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
    demoType: "meterwise"
  }
];

export const skillCategoriesData: SkillCategory[] = [
  {
    title: "Cloud Services & Platforms",
    icon: "Wrench",
    skills: [
      { name: "GitHub", level: "Expert", description: "Source code repositories, pull requests, automated GitHub Actions CI/CD workflows, project management.", featured: true },
      { name: "Vercel", level: "Expert", description: "Zero-config continuous deployments, edge network caching, custom domain management, serverless integrations.", featured: true },
      { name: "Google AI Studio", level: "Expert", description: "Integrating Gemini LLM APIs, prompt engineering, multimodal AI model workflows, rapid prototyping.", featured: true },
      { name: "Cloudflare", level: "Advanced", description: "DNS management, edge security, SSL protection, Workers serverless edge execution, asset performance.", featured: true },
      { name: "Google Search Console", level: "Expert", description: "Sitemap submission, Google search crawling verification, SEO structured schema indexing, core web vitals auditing.", featured: true }
    ]
  },
  {
    title: "Languages & Core Web",
    icon: "Code2",
    skills: [
      { name: "JavaScript (ES6+)", level: "Expert", description: "Modern ES6+ syntax, async/await pipelines, DOM APIs, functional patterns.", featured: true },
      { name: "HTML5 & Web Storage", level: "Expert", description: "Semantic markup, accessibility (a11y), canvas API, IndexedDB, offline manifests.", featured: true },
      { name: "CSS3 & Modern Layouts", level: "Expert", description: "Custom properties, Flexbox, CSS Grid, responsive media queries, fluid typography.", featured: true }
    ]
  },
  {
    title: "Frameworks & Applications",
    icon: "Layers",
    skills: [
      { name: "React", level: "Expert", description: "Component state architecture, hooks, context API, client-side rendering performance.", featured: true },
      { name: "Progressive Web Apps (PWAs)", level: "Expert", description: "Service worker caching, offline manifests, background sync, install prompts (Seatify, Meter-wise).", featured: true }
    ]
  },
  {
    title: "Styling & UI Systems",
    icon: "Palette",
    skills: [
      { name: "Tailwind CSS", level: "Expert", description: "Utility-first design systems, responsive layout math, custom themes, dark/light modes.", featured: true },
      { name: "Responsive Engineering", level: "Expert", description: "Fluid layouts, desktop-first precision with mobile-first CSS execution, touch ergonomics.", featured: true }
    ]
  }
];
