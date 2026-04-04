import {
  Code2,
  Server,
  Zap,
  Plug,
  Briefcase,
  Award,
  Users,
  CheckCircle,
  ArrowUpRight,
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
} from "lucide-react";

// TODO: Update with Abdur Rehman's actual information
export const services = [
  {
    id: "fullstack",
    title: "Full-Stack Development",
    description:
      "End-to-end web application development using modern technologies like MERN Stack and Laravel. I build scalable, secure, and performant applications tailored to your business needs.",
    icon: Code2,
    features: [
      "React/Next.js Frontend",
      "Node.js/Laravel Backend",
      "RESTful & GraphQL APIs",
      "Database Design & Optimization",
    ],
    link: "#services",
  },
  {
    id: "backend",
    title: "Backend Architecture",
    description:
      "Scalable server-side solutions designed for performance and reliability. From API design to database optimization, I build robust backend systems.",
    icon: Server,
    features: [
      "API Architecture",
      "Database Design",
      "Authentication & Security",
      "Cloud Deployment",
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
    imageUrl: "/images/account-verse.webp",
    liveUrl: "https://account-verse.demo",
    demoUrl: "https://github.com/abdi2004574/account-verse",
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
    imageUrl: "/images/mind-bridge.webp",
    liveUrl: "https://mind-bridge.demo",
    demoUrl: "https://github.com/abdi2004574/mind-bridge",
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
    imageUrl: "/images/sultan-ai.webp",
    liveUrl: "https://sultan-ai.demo",
    demoUrl: "https://github.com/abdi2004574/sultan-ai",
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
    imageUrl: "/images/orion-ai.webp",
    liveUrl: "https://orion-ai.demo",
    demoUrl: "https://github.com/abdi2004574/orion-ai",
  },
  {
    id: "lovedone-phycare",
    name: "Lovedone_Phycare",
    description:
      "A patient-first healthcare portal designed for families to track the physical therapy progress of their loved ones. It simplifies medical jargon into easy-to-read progress bars.",
    challenge:
      "Making complex medical data accessible and understandable for families while ensuring secure, real-time updates.",
    solution:
      "Built a secure login system with progress snapshots enabling remote family monitoring, using Firebase for real-time updates.",
    techStack: ["React", "Tailwind CSS", "Firebase"],
    imageUrl: "/images/lovedone-phycare.webp",
    liveUrl: "https://lovedone-phycare.demo",
    demoUrl: "https://github.com/abdi2004574/lovedone-phycare",
  },
];

// Update these stats with actual numbers
export const stats = [
  {
    icon: Briefcase,
    value: "3+",
    label: "Years of Experience",
  },
  {
    icon: Award,
    value: "16+",
    label: "Projects Delivered",
  },
  {
    icon: Users,
    value: "100%",
    label: "Client Satisfaction",
  },
  {
    icon: CheckCircle,
    value: "50+",
    label: "Happy Clients",
  },
];

export const heroContent = {
  headline: "Combining human intent with AI intelligence to build platforms like Account Verse and Orion.ai in record time. Why wait weeks when we can launch in days?",
  tagline: "Vibe Coder | Orchestrating AI to Build High-Performance Digital Products",
  ctaText: "View My Services",
  ctaHref: "#services",
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

// Update with Abdur Rehman's actual social links
export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/abdur-rehman",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/abdur-rehman-64b429317/",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/abdur-rehman",
    icon: Twitter,
  },
  {
    name: "Email",
    url: "mailto:abdur.rehman@email.com",
    icon: Mail,
  },
];

export const footerLinks = {
  services: [
    { label: "Full-Stack Development", href: "#services" },
    { label: "Backend Architecture", href: "#services" },
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