import { Project } from "./types";

export const projects: Project[] = [
  {
    id: 1,
    title: "SpendWise – AI-Powered Expense Tracker",
    date: "Nov 2024 – Present",
    role: "Full Stack Developer",
    image: "https://source.unsplash.com/random/800x600?finance,app",
    tags: [
      "Next.js",
      "LangChain",
      "Groq",
      "NeonDB",
      "Drizzle ORM",
      "ShadCN",
      "Recharts",
    ],
    shortDescription:
      "An expense tracker and AI financial advisor built with Next.js, LangChain, and NeonDB.",
    longDescription:
      "SpendWise is a modern expense tracker and AI-powered financial advisor app. It includes recurring income, budget tracking, expense reminders via notifications/email, and interactive charts. Integrated LangChain with Groq to deliver personalized financial advice, reducing manual calculations by 30%. Designed a responsive UI with Tailwind and ShadCN, enhancing data retrieval by 50% using Drizzle ORM and NeonDB.",
    features: [
      "Recurring income and budget tracking",
      "Automated expense reminders via notifications/email",
      "AI-powered personalized financial insights",
      "Interactive charts with Recharts",
      "Responsive UI with Tailwind & ShadCN",
    ],
    github: "https://github.com/Euphoric-Coder/SpendWise--Expense-Tracker",
    demo: "https://spend-wise-expense-tracker.netlify.app/",
    video: "https://youtu.be/example-spendwise-demo",
    live: true,
  },
  {
    id: 2,
    title: "ColdConnect – AI Cold Email Generator",
    date: "Oct 2024 – Nov 2024",
    role: "Full Stack Developer",
    image: "https://source.unsplash.com/random/800x600?email,ai",
    tags: [
      "React",
      "Vite",
      "FastAPI",
      "LangChain",
      "ChromaDB",
      "Groq",
      "ShadCN",
    ],
    shortDescription:
      "An AI-driven cold email generator with job matching and semantic GitHub search.",
    longDescription:
      "ColdConnect generates personalized cold emails tailored to job descriptions. The frontend was built with React, Vite, and ShadCN UI for seamless UX. The backend uses FastAPI and Python for efficient job parsing and email generation. LangChain enables 90% accurate job matching, while ChromaDB powers semantic retrieval of GitHub projects, reducing manual workload by 30%.",
    features: [
      "Resume-tailored cold email generation",
      "Job portal scraping for contextual input",
      "Semantic GitHub project retrieval via ChromaDB",
      "FastAPI backend for efficient processing",
      "Polished UI with React + ShadCN",
    ],
    github: "https://github.com/Euphoric-Coder/ColdConnect",
    demo: "https://cold-connect.netlify.app/",
    video: "https://youtu.be/example-coldconnect-demo",
    live: true,
  },
  {
    id: 3,
    title: "Code Blog – Developer Blogging Platform",
    date: "Oct 2024",
    role: "Frontend Developer",
    image: "https://source.unsplash.com/random/800x600?blog,code",
    tags: ["Next.js", "Remark", "Rehype", "Tailwind CSS", "ShadCN"],
    shortDescription:
      "A Markdown-powered blog app for coding tutorials and tech insights.",
    longDescription:
      "Code Blog is a developer-focused blogging platform powered by Markdown. It uses Remark and Rehype for parsing and syntax highlighting, ensuring clarity in technical posts. A theme switcher with animations, gradients, and Tailwind Typography improves aesthetics by 40%. The platform has published 15+ coding tutorials and technical insights.",
    features: [
      "Markdown support with syntax highlighting",
      "Theme switcher with smooth animations",
      "Gradient typography for aesthetics",
      "Typing animation for interactivity",
      "Published 15+ coding/tech tutorials",
    ],
    github: "https://github.com/Euphoric-Coder/Dev-Block",
    demo: "https://code-blog-md.vercel.app/",
    video: "https://youtu.be/example-codeblog-demo",
    live: true,
  },
  {
    id: 4,
    title: "Live Story – Life-in-Weeks Timeline",
    date: "Jun 2024 – Jul 2024",
    role: "Full Stack Developer",
    image: "https://source.unsplash.com/random/800x600?timeline,history",
    tags: ["React", "Tailwind CSS", "jsPDF"],
    shortDescription:
      "An interactive timeline app with event categorization and PDF exports.",
    longDescription:
      "Live Story is an interactive life-in-weeks timeline app for personal and historical events. It supports color-coded categories, filters, and search for quick event retrieval. With jsPDF integration, users can export personalized timelines and stats, improving shareability by 60%. Presented at a hackathon, the project placed in the Top 3 finalists.",
    features: [
      "Add personal and historical events",
      "Color-coded categories and filters",
      "Searchable event timeline",
      "Export timelines with jsPDF",
      "Top 3 hackathon finalist project",
    ],
    github: "https://github.com/Euphoric-Coder/Live-Story",
    demo: "https://example.com/live-story",
    video: "https://youtu.be/example-livestory-demo",
    live: true,
  },
];
