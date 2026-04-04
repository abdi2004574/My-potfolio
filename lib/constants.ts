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

// TODO: Add your actual project data here
export const projects = [
  {
    id: "project-1",
    name: "Project Name",
    description: "Brief description of what the project does.",
    challenge: "What was the main challenge or problem?",
    solution: "How did you solve it? What was your approach?",
    techStack: ["React", "Node.js", "MongoDB"],
    imageUrl: "/images/project-1.webp",
    liveUrl: "https://project-live-url.com",
    demoUrl: "#",
  },
  {
    id: "project-2",
    name: "Project Name",
    description: "Brief description of what the project does.",
    challenge: "What was the main challenge or problem?",
    solution: "How did you solve it? What was your approach?",
    techStack: ["Laravel", "Vue.js", "MySQL"],
    imageUrl: "/images/project-2.webp",
    liveUrl: "https://project-live-url.com",
    demoUrl: "#",
  },
  {
    id: "project-3",
    name: "Project Name",
    description: "Brief description of what the project does.",
    challenge: "What was the main challenge or problem?",
    solution: "How did you solve it? What was your approach?",
    techStack: ["React", "Express", "MongoDB", "AWS"],
    imageUrl: "/images/project-3.webp",
    liveUrl: "https://project-live-url.com",
    demoUrl: "#",
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

// Update hero content - this appears at the top of the page
export const heroContent = {
  headline: "Engineering Digital Growth Through Code",
  tagline: "Full-Stack Developer | MERN & Laravel Specialist",
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