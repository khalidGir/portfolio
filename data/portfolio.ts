import {
  BarChart3,
  Timer,
  Leaf,
  Puzzle,
  type LucideIcon,
} from "lucide-react"

export const personalInfo = {
  name: "Khalid Girma",
  title: "Full-Stack Engineer & Systems Architect",
  tagline: "High-performance full-stack engineer building scalable backends, autonomous automation systems, and real-time decentralized applications.",
  bio: "A high-performance full-stack engineer and solutions architect specialized in building high-throughput backend infrastructures, autonomous automation systems, and real-time decentralized applications. Focused on product-led growth, I bridge complex systems design with seamless, friction-free user interfaces to turn ambitious ideas into scalable digital realities.",
  email: "khalidgirma3@gmail.com",
  phone: "+251 903 146 834",
  location: "Remote",
  avatar: "/images/avatar.svg",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/khalidGir",
    linkedin: "https://www.linkedin.com/in/khalid-girma-5a864a2a0/",
    twitter: "https://twitter.com/khalid",
    dribbble: "https://dribbble.com/khalid",
  },
}

export interface Skill {
  name: string
  category: string
  badge: { label: string; color: string; logo: string }
}

export const skills: Skill[] = [
  { name: "TypeScript / JavaScript", category: "Language", badge: { label: "TypeScript", color: "3178C6", logo: "typescript" } },
  { name: "Python", category: "Language", badge: { label: "Python", color: "3776AB", logo: "python" } },
  { name: "Rust", category: "Language", badge: { label: "Rust", color: "000000", logo: "rust" } },
  { name: "Go", category: "Language", badge: { label: "Go", color: "00ADD8", logo: "go" } },
  { name: "Solidity", category: "Language", badge: { label: "Solidity", color: "363636", logo: "solidity" } },
  { name: "Next.js 16 / React", category: "Frontend", badge: { label: "Next.js", color: "000000", logo: "nextdotjs" } },
  { name: "React Native", category: "Frontend", badge: { label: "React Native", color: "61DAFB", logo: "react" } },
  { name: "Tailwind CSS v4", category: "Frontend", badge: { label: "Tailwind CSS", color: "06B6D4", logo: "tailwindcss" } },
  { name: "Node.js", category: "Backend", badge: { label: "Node.js", color: "339933", logo: "nodedotjs" } },
  { name: "FastAPI", category: "Backend", badge: { label: "FastAPI", color: "009688", logo: "fastapi" } },
  { name: "GraphQL", category: "Backend", badge: { label: "GraphQL", color: "E10098", logo: "graphql" } },
  { name: "WebSockets", category: "Backend", badge: { label: "WebSockets", color: "010101", logo: "socketdotio" } },
  { name: "PostgreSQL / PostGIS", category: "Database", badge: { label: "PostgreSQL", color: "4169E1", logo: "postgresql" } },
  { name: "MongoDB / Redis", category: "Database", badge: { label: "MongoDB", color: "47A248", logo: "mongodb" } },
  { name: "Supabase", category: "Database", badge: { label: "Supabase", color: "3FCF8E", logo: "supabase" } },
  { name: "Docker & Containerization", category: "DevOps", badge: { label: "Docker", color: "2496ED", logo: "docker" } },
  { name: "Flutter", category: "Frontend", badge: { label: "Flutter", color: "02569B", logo: "flutter" } },
  { name: "Webflow", category: "Frontend", badge: { label: "Webflow", color: "4353FF", logo: "webflow" } },
  { name: "LangChain", category: "Backend", badge: { label: "LangChain", color: "1C3C3C", logo: "langchain" } },
  { name: "Claude AI", category: "Design", badge: { label: "Claude", color: "D97757", logo: "claude" } },
  { name: "AWS / Cloud", category: "DevOps", badge: { label: "AWS", color: "FF9900", logo: "amazonwebservices" } },
  { name: "CI/CD & Linux", category: "DevOps", badge: { label: "Linux", color: "FCC624", logo: "linux" } },
  { name: "n8n Workflows & Automations", category: "DevOps", badge: { label: "n8n", color: "EA6A20", logo: "n8n" } },
  { name: "Framer Motion", category: "Design", badge: { label: "Framer", color: "0055FF", logo: "framer" } },
  { name: "Figma", category: "Design", badge: { label: "Figma", color: "F24E1E", logo: "figma" } },
  { name: "System Architecture", category: "Design", badge: { label: "Architecture", color: "6B3FA0", logo: "diagramsdotnet" } },
]

export interface Project {
  id: number
  title: string
  description: string
  image: string
  icon: LucideIcon
  tags: string[]
  liveUrl: string
  githubUrl: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Tap Trade Pro",
    description: "A high-frequency derivatives and perpetual futures trading terminal integrating Web3 wallet connections with ultra-low latency WebSocket streams from global exchanges like Hyperliquid and OKX.",
    image: "/images/project-1.png",
    icon: BarChart3,
    tags: ["Next.js", "Node.js", "WebSockets", "Hyperliquid API", "Docker", "Tailwind CSS"],
    liveUrl: "https://taptrade.example.com",
    githubUrl: "https://github.com/khalidGir/tap-trade-pro",
    featured: true,
  },
  {
    id: 2,
    title: "Tanker Logistics Engine",
    description: "A comprehensive multi-actor logistics platform for on-demand fluid distribution, mapping over 16 dedicated state-synchronized views across driver, customer, and dispatch applications with offline-first support.",
    image: "/images/project-2.png",
    icon: Timer,
    tags: ["Next.js", "React Native", "PostgreSQL", "Framer Motion"],
    liveUrl: "https://tanker.example.com",
    githubUrl: "https://github.com/khalidGir/tanker-logistics",
    featured: true,
  },
  {
    id: 3,
    title: "SatAgro Internal Platform",
    description: "An enterprise-grade internal insights dashboard for agroeconomists, leveraging processing pipelines for satellite telemetry data and automated alerts driven by custom spatial algorithms.",
    image: "/images/project-3.png",
    icon: Leaf,
    tags: ["Python", "Next.js", "FastAPI", "PostGIS", "n8n Automation"],
    liveUrl: "https://satagro.example.com",
    githubUrl: "https://github.com/khalidGir/satagro-insights",
    featured: true,
  },
  {
    id: 4,
    title: "Bilingual AI Support Core",
    description: "An autonomous AI-powered agent framework designed for institutional support over low-bandwidth communication channels, utilizing semantic vector search and custom localized language processing layers.",
    image: "/images/project-4.png",
    icon: Puzzle,
    tags: ["Node.js", "Qwen LLM", "Vector DB", "Telegram API", "TypeScript"],
    liveUrl: "https://ai-core.example.com",
    githubUrl: "https://github.com/khalidGir/bilingual-ai-core",
    featured: false,
  },
]

export const experience = [
  {
    id: 1,
    role: "Founder & Principal Architect",
    company: "NexaSoft Software Agency",
    location: "Remote",
    period: "Mar 2026 — Present",
    description: "Architecting and bootstrapping a boutique development agency focused on high-impact software systems, multi-party marketplace logistics, and workflow automation engines engineered for high-concurrency environments.",
    highlights: [
      "Engineered scalable multi-actor logistics backends orchestration frameworks supporting hundreds of concurrent real-time nodes.",
      "Designed and integrated production-grade autonomous agent workflows using n8n and LLM APIs to cut client operational overhead by 40%.",
      "Built an institutional fintech infrastructure integrating USSD interfaces, international payment gateways, and local mobile money rails.",
    ],
  },
  {
    id: 2,
    role: "Senior Backend & Automation Engineer",
    company: "AgroInsight Tech Solutions",
    location: "Remote",
    period: "Oct 2025 — Feb 2026",
    description: "Led the development of data-intensive infrastructure and communication layers utilizing satellite imagery data and asynchronous message routing to optimize large-scale agricultural distribution and monitoring.",
    highlights: [
      "Architected a low-latency geospatial intelligence platform delivering actionable crop health insights directly to distributed agronomists and operations managers.",
      "Designed a bilingually-optimized, highly reliable conversational interface built on Telegram's API to bridge complex institutional workflows with field agents.",
      "Optimized database indexing, distributed caching layers, and high-performance querying to handle telemetry logs over large spatial regions.",
    ],
  },
  {
    id: 3,
    role: "Full Stack Engineer (Remote Contracts)",
    company: "Global Dev Logistics & Fintech",
    location: "Remote",
    period: "Apr 2024 — Sep 2025",
    description: "Built and scaled secure Web3 financial systems, custom e-commerce engines, and high-fidelity internal tooling for cross-border operations.",
    highlights: [
      "Integrated multi-exchange perpetual and derivatives trading APIs with real-time WebSocket state synchronizations and high-frequency execution loops.",
      "Spearheaded custom automated headless store systems processing global transactions via integrated international multi-currency gateways.",
      "Rebuilt core containerized continuous deployment structures using Docker to reduce cold-boot application startup delays significantly.",
    ],
  },
]

export const testimonials = [
  {
    id: 1,
    name: "Nathnael Alam Seged",
    role: "Senior Systems Architect",
    content: "Working alongside them on highly complex repository architectures has been a masterclass in clean, defensive code structure. Their ability to cleanly design distributed asynchronous backends while seamlessly matching fluid interactive UI standards is exceptionally rare.",
    avatar: "/images/testimonial-1.svg",
  },
  {
    id: 2,
    name: "Elena Rostova",
    role: "Product Director at FinVerge",
    content: "They stepped in to untangle our multi-exchange API integration when everyone else hit performance walls. Not only did they optimize our WebSocket state loop, but they also delivered an incredibly polished interactive terminal that exceeded our benchmarks.",
    avatar: "/images/testimonial-2.svg",
  },
  {
    id: 3,
    name: "Marcus Vance",
    role: "Operations Lead at AgroCorp",
    content: "The workflow optimization engines built by NexaSoft completely revolutionized our field logistics. Complex data structures feel trivial when interacting with the highly intuitive systems they map out.",
    avatar: "/images/testimonial-3.svg",
  },
]

export const blogPosts = [
  {
    id: 1,
    title: "Architecting Real-Time Multi-Exchange Order Books in Next.js",
    excerpt: "A deep dive into managing high-frequency WebSocket streams from Hyperliquid and OKX without tanking React state rendering performance.",
    content: `Building a real-time order book that aggregates data from multiple cryptocurrency exchanges is a fascinating engineering challenge. The core problem is managing high-frequency WebSocket streams without overwhelming React's rendering pipeline.

The key insight is to separate data ingestion from UI updates. By using a dedicated WebSocket manager that buffers incoming ticks and batches updates via requestAnimationFrame, we can maintain a smooth 60fps UI even when processing thousands of messages per second.

For Hyperliquid and OKX specifically, each exchange uses a different message format and update frequency. Normalizing these into a unified order book state requires careful attention to sequence IDs and timestamp alignment to prevent race conditions.

One approach that worked well was using a Web Worker for the heavy parsing and book reconstruction, sending only the aggregated deltas to the main thread. This keeps the UI thread free for animations and user interactions.`,
    date: "May 24, 2026",
    readTime: "8 min read",
    slug: "architecting-real-time-multi-exchange-order-books-nextjs",
    tags: ["Next.js", "WebSockets", "Trading"],
  },
  {
    id: 2,
    title: "Building Offline-First Logistics Workflows for Emerging Infrastructures",
    excerpt: "Strategies for structuring multi-actor transactional sync loops using Google Stitch, dedicated emulators, and local network tolerance.",
    content: `Designing logistics software for regions with unreliable internet connectivity requires a fundamental shift in thinking. Instead of assuming always-on connectivity, every operation must work offline and sync gracefully when connectivity returns.

The architecture centers around a local-first data model using an embedded database that mirrors the server schema. Each operation generates a conflict-free replicated data type (CRDT) that can be merged deterministically, eliminating the need for complex conflict resolution.

For the Tanker Logistics Engine, we implemented a multi-actor sync protocol where drivers, dispatchers, and customers each have their own sync schedule based on their role and connectivity patterns. Drivers get priority sync for delivery confirmations, while route planning updates can tolerate longer delays.

Google Stitch (now part of MongoDB Atlas) provided the backend sync infrastructure, with custom emulators for offline testing that simulated various network conditions — from complete disconnection to high-latency satellite links.`,
    date: "April 12, 2026",
    readTime: "11 min read",
    slug: "offline-first-logistics-emerging-infrastructures",
    tags: ["Logistics", "Architecture", "Offline-First"],
  },
  {
    id: 3,
    title: "The Power of Autonomous Agents: Scaling Workflows with n8n and Python",
    excerpt: "How to design production-ready, self-healing automation loops that connect local business protocols with global large language models.",
    content: `Autonomous agents powered by LLMs are transforming how we think about workflow automation. By combining n8n's visual workflow engine with Python-based agent loops, we can create self-healing automation pipelines that adapt to changing conditions.

The architecture uses n8n as the orchestration layer for triggering workflows, managing retries, and routing between services. Python microservices handle the heavy lifting — vector search, LLM inference, and custom business logic.

A key pattern we've refined is the "reflect-retry" loop: when an agent encounters an error, it logs the failure, analyzes the root cause using an LLM, adjusts its approach, and retries. This dramatically reduces the need for manual intervention in production workflows.

We've built this into production at NexaSoft, connecting n8n workflows with local business protocols (Telegram, SMS, email) and global LLM APIs. The result is a system that handles 90% of routine operations autonomously, with human oversight only for edge cases.`,
    date: "February 18, 2026",
    readTime: "6 min read",
    slug: "scaling-workflows-n8n-python-autonomous-agents",
    tags: ["n8n", "Python", "Automation"],
  },
]
