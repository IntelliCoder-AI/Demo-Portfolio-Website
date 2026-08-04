import { Project } from '@/types/project';

// This data can be replaced with API calls
export const projectsData: Project[] = [
  {
    id: "1",
    title: "CloudSync Dashboard",
    slug: "cloudsync-dashboard",
    description: "Full-stack cloud monitoring dashboard with real-time metrics and alerts.",
    longDescription: "CloudSync Dashboard is a comprehensive monitoring solution for multi-cloud environments. It features a real-time metrics dashboard, custom alert rules, and detailed analytics for infrastructure utilization.",
    category: "fullstack",
    technologies: [
      { name: "React", icon: "react" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "AWS", icon: "aws" },
      { name: "PostgreSQL", icon: "database" }
    ],
    image: "/images/projects/cloudsync-dashboard.jpg",
    liveUrl: "https://cloudsync.demo",
    githubUrl: "https://github.com/radhe-dev/cloudsync",
    featured: true,
    completedAt: "2024-05-15T00:00:00Z",
    highlights: [
      "Reduced monitoring latency by 40%",
      "Implemented real-time WebSocket updates",
      "Handled over 1M metrics per hour"
    ]
  },
  {
    id: "2",
    title: "AI Content Studio",
    slug: "ai-content-studio",
    description: "AI-powered content generation platform for marketing teams.",
    longDescription: "An advanced platform that leverages GPT models to generate, edit, and optimize marketing copy, blog posts, and social media content tailored to brand voice.",
    category: "ai-ml",
    technologies: [
      { name: "Next.js", icon: "nextjs" },
      { name: "Python", icon: "python" },
      { name: "OpenAI API", icon: "bot" },
      { name: "Redis", icon: "database" }
    ],
    image: "/images/projects/ai-content-studio.jpg",
    featured: true,
    completedAt: "2024-11-20T00:00:00Z",
    highlights: [
      "Integrated advanced RAG architecture",
      "Achieved 95% user satisfaction rate",
      "Scaled to 10k+ monthly active users"
    ]
  },
  {
    id: "3",
    title: "DevFlow CLI",
    slug: "devflow-cli",
    description: "Developer workflow automation CLI tool to boost productivity.",
    longDescription: "A powerful command-line interface that automates repetitive development tasks, including environment setup, standardizing git workflows, and deploying test environments.",
    category: "tools",
    technologies: [
      { name: "Python", icon: "python" },
      { name: "Click", icon: "terminal" },
      { name: "Docker", icon: "docker" },
      { name: "AWS Lambda", icon: "aws" }
    ],
    image: "/images/projects/devflow-cli.jpg",
    githubUrl: "https://github.com/radhe-dev/devflow-cli",
    featured: false,
    completedAt: "2023-08-10T00:00:00Z",
    highlights: [
      "Saved developers an average of 2 hours per week",
      "Over 5k downloads on PyPI",
      "Extensive plugin system"
    ]
  },
  {
    id: "4",
    title: "FinTrack Pro",
    slug: "fintrack-pro",
    description: "Personal finance tracking app with automated transaction categorization.",
    longDescription: "A mobile-first personal finance application that securely connects to banks via Plaid to track spending, set budgets, and provide AI-driven financial insights.",
    category: "fullstack",
    technologies: [
      { name: "React Native", icon: "smartphone" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "PostgreSQL", icon: "database" },
      { name: "Plaid API", icon: "link" }
    ],
    image: "/images/projects/fintrack-pro.jpg",
    liveUrl: "https://fintrack.app",
    featured: true,
    completedAt: "2025-01-30T00:00:00Z",
    highlights: [
      "Processed over $10M in tracked transactions",
      "Implemented bank-grade security protocols",
      "4.8 star rating on App Store"
    ]
  },
  {
    id: "5",
    title: "InfraBot",
    slug: "infrabot",
    description: "AI-powered infrastructure management chatbot for DevOps teams.",
    longDescription: "A Slack/Teams integrated chatbot that allows DevOps engineers to query infrastructure status, provision resources, and resolve common incidents using natural language.",
    category: "ai-ml",
    technologies: [
      { name: "Python", icon: "python" },
      { name: "LangChain", icon: "link" },
      { name: "AWS CDK", icon: "aws" },
      { name: "Terraform", icon: "layers" }
    ],
    image: "/images/projects/infrabot.jpg",
    featured: false,
    completedAt: "2024-03-22T00:00:00Z",
    highlights: [
      "Reduced MTTR by 30% for routine incidents",
      "Natural language to Terraform generation",
      "Enterprise-grade access control integration"
    ]
  },
  {
    id: "6",
    title: "EcoMarket",
    slug: "ecomarket",
    description: "Sustainable e-commerce marketplace for eco-friendly products.",
    longDescription: "A modern e-commerce platform connecting buyers with verified sustainable sellers, featuring a carbon footprint calculator for every purchase.",
    category: "frontend",
    technologies: [
      { name: "Next.js", icon: "nextjs" },
      { name: "Stripe", icon: "credit-card" },
      { name: "PostgreSQL", icon: "database" },
      { name: "Redis", icon: "database" }
    ],
    image: "/images/projects/ecomarket.jpg",
    liveUrl: "https://ecomarket.demo",
    featured: false,
    completedAt: "2023-11-05T00:00:00Z",
    highlights: [
      "Integrated comprehensive Stripe payment flows",
      "Sub-second page loads globally",
      "Onboarded 500+ sellers in first month"
    ]
  }
];
