import {
  Code2,
  Server,
  Zap,
  Plug,
  Briefcase,
  Award,
  Users,
  CheckCircle,
  Rocket,
  Brain,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

export const services = [
  {
    id: "frontend",
    title: "Modern Frontend Development",
    description:
      "Building highly interactive, responsive, and accessible web interfaces using React and Next.js, tailored for an exceptional user experience.",
    icon: Code2,
    features: [
      "React & Next.js Development",
      "Tailwind CSS & Framer Motion",
      "Responsive & Mobile-First",
      "Interactive UIs & Animations",
    ],
    link: "#services",
  },
  {
    id: "webapp",
    title: "Web App & BaaS Architecture",
    description:
      "Creating functional, scalable applications using modern Backend-as-a-Service solutions like Supabase and Firebase, alongside AI capabilities.",
    icon: Server,
    features: [
      "Supabase & Firebase Integration",
      "OpenAI & AI Integrations",
      "Robust State Management",
      "Dynamic Data Handling",
    ],
    link: "#services",
  },
  {
    id: "performance",
    title: "Performance Optimization",
    description:
      "Speed up your applications with code optimization, caching strategies, and modern performance techniques. Target 60fps and sub-3-second load times.",
    icon: Zap,
    features: [
      "Code Optimization",
      "Caching Strategies",
      "CDN Integration",
      "Core Web Vitals Optimization",
    ],
    link: "#services",
  },
  {
    id: "api",
    title: "API Integration",
    description:
      "Seamless integration with third-party services and payment gateways. Connect your application with the tools your business needs.",
    icon: Plug,
    features: [
      "Payment Gateways",
      "Third-party APIs",
      "Webhook Handlers",
      "System Integration",
    ],
    link: "#services",
  },
];

export const projects = [
  {
    id: "account-verse",
    name: "Account Verse",
    description:
      "A comprehensive financial management platform designed for modern businesses. It features real-time transaction tracking, automated invoicing, and a clean command center for account balancing.",
    challenge:
      "Building an intuitive financial dashboard that could handle complex data visualization while maintaining performance and clarity for non-technical users.",
    solution:
      "Implemented interactive data visualization with real-time cash flow trends using React and Shadcn UI components, creating a seamless user experience.",
    techStack: ["React", "Tailwind CSS", "Lucide Icons", "Shadcn UI"],
    imageUrl: "/images/account-verse.png",
    liveUrl: "https://account-verse.demo",
    codeUrl: "https://github.com/abdi2004574/account-verse",
  },
  {
    id: "mind-bridge",
    name: "Mind Bridge",
    description:
      "An empathetic AI-driven platform that acts as a bridge between users and mental wellness resources. It includes a Mood Journal and an AI chatbot designed for supportive, low-friction conversation.",
    challenge:
      "Creating a calming, safe environment that adapts to user emotions while integrating OpenAI for meaningful interactions.",
    solution:
      "Built a vibe-based UI that dynamically changes color themes based on user's reported mood, with smooth Framer Motion animations for a soothing experience.",
    techStack: ["Next.js", "Framer Motion", "OpenAI API"],
    imageUrl: "/images/mind-bridge.png",
    liveUrl: "https://mind-bridge.demo",
    codeUrl: "https://github.com/abdi2004574/mind-bridge",
  },
  {
    id: "sultan-ai",
    name: "Sultan.ai",
    description:
      "A high-end, Gold & Obsidian themed landing page for a luxury AI consulting agency. Designed to look expensive and premium, focusing on high-ticket client acquisition.",
    challenge:
      "Creating a luxurious, premium aesthetic that appeals to high-value clients while ensuring the design feels exclusive and sophisticated.",
    solution:
      "Developed custom CSS glassmorphism effects with scroll-triggered 3D-effect cards showcasing AI service tiers.",
    techStack: ["React", "Vite", "Custom CSS", "Glassmorphism"],
    imageUrl: "/images/sultan-ai.png",
    liveUrl: "https://sultan-ai.demo",
    codeUrl: "https://github.com/abdi2004574/sultan-ai",
  },
  {
    id: "orion-ai",
    name: "Orion.ai",
    description:
      "A B2B SaaS platform that automates repetitive workflows. Built for teams who need set-it-and-forget-it solutions for data entry and lead scraping.",
    challenge:
      "Designing an intuitive workflow builder interface that allows non-technical users to create complex automation sequences.",
    solution:
      "Created a drag-and-drop workflow builder prototype with Supabase backend for seamless data management and automation.",
    techStack: ["React", "Tailwind", "Supabase"],
    imageUrl: "/images/orion-ai.png",
    liveUrl: "https://orion-ai.demo",
    codeUrl: "https://github.com/abdi2004574/orion-ai",
  },
  {
    id: "lovedone-phycare",
    name: "Lovedone Phycare",
    description:
      "A patient-first healthcare portal designed for families to track the physical therapy progress of their loved ones. It simplifies medical jargon into easy-to-read progress bars.",
    challenge:
      "Making complex medical data accessible and understandable for families while ensuring secure, real-time updates.",
    solution:
      "Built a secure login system with progress snapshots enabling remote family monitoring, using Firebase for real-time updates.",
    techStack: ["React", "Tailwind CSS", "Firebase"],
    imageUrl: "/images/lovedone-phycare.png",
    liveUrl: "https://lovedone-phycare.demo",
    codeUrl: "https://github.com/abdi2004574/lovedone-phycare",
  },
];

export const stats = [
  {
    icon: Rocket,
    value: "5+",
    label: "Projects Shipped",
  },
  {
    icon: Brain,
    value: "AI-Native",
    label: "Development Workflow",
  },
  {
    icon: Award,
    value: "10+",
    label: "Technologies Mastered",
  },
  {
    icon: CheckCircle,
    value: "100%",
    label: "Committed to Quality",
  },
];

export const heroContent = {
  headline: "Abdur Rehman - Building the Future via Intent",
  tagline: "Karachi-based Frontend Developer specializing in Vibe Coding and AI-Native Workflows",
  ctaText: "Start a Project",
  ctaHref: "#contact",
  whatsappNumber: "923368243824",
};

export const aboutContent = {
  greeting: "Hey, I'm Abdur Rehman 👋",
  bio: "A first-year Computer Engineering student from Karachi, Pakistan, who doesn't wait for the classroom to start building. I ship real products using AI-native workflows and modern web technologies — turning ideas into production-ready applications at the speed of thought.",
  highlights: [
    "First-year CE student building production-level apps",
    "Specializing in React, Next.js & AI-powered development",
    "Focused on solving real problems for real users",
    "Passionate about clean code and beautiful interfaces",
  ],
  traits: ["Builder", "Problem Solver", "AI-Native", "Self-Taught", "Fast Learner", "Detail Oriented"],
};

export const techStack = {
  frontend: [
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Tailwind CSS", icon: "tailwind" },
    { name: "Framer Motion", icon: "framer" },
    { name: "HTML5", icon: "html" },
    { name: "CSS3", icon: "css" },
  ],
  backend: [
    { name: "Node.js", icon: "nodejs" },
    { name: "Firebase", icon: "firebase" },
    { name: "Supabase", icon: "supabase" },
    { name: "REST APIs", icon: "api" },
  ],
  tools: [
    { name: "Git & GitHub", icon: "git" },
    { name: "VS Code", icon: "vscode" },
    { name: "Vercel", icon: "vercel" },
    { name: "Figma", icon: "figma" },
  ],
  learning: [
    { name: "Python", icon: "python" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "Docker", icon: "docker" },
  ],
};

export const projectTypes = [
  { id: "webapp", label: "Web Application", icon: "🖥️" },
  { id: "ecommerce", label: "E-commerce Platform", icon: "🛒" },
  { id: "saas", label: "SaaS Product", icon: "☁️" },
  { id: "mobile", label: "Mobile App", icon: "📱" },
  { id: "api", label: "API Development", icon: "🔌" },
  { id: "other", label: "Other", icon: "💡" },
];

export const budgetRanges = [
  { id: "1k-5k", label: "$1,000 - $5,000", description: "Small projects & MVPs" },
  { id: "5k-15k", label: "$5,000 - $15,000", description: "Mid-size applications" },
  { id: "15k-50k", label: "$15,000 - $50,000", description: "Large web applications" },
  { id: "50k+", label: "$50,000+", description: "Enterprise solutions" },
];

export const timelines = [
  { id: "1-month", label: "1 Month", description: "Quick turnaround" },
  { id: "2-3-months", label: "2-3 Months", description: "Standard timeline" },
  { id: "3-6-months", label: "3-6 Months", description: "Comprehensive build" },
  { id: "6-months+", label: "6+ Months", description: "Long-term partnership" },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/abdi2004574",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/abdur-rehman-64b429317/",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "mailto:abdur.rehman@email.com",
    icon: Mail,
  },
];

export const footerLinks = {
  services: [
    { label: "Frontend Development", href: "#services" },
    { label: "Web App Architecture", href: "#services" },
    { label: "Performance Optimization", href: "#services" },
    { label: "API Integration", href: "#services" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
  ],
};