import {
  Award,
  BookOpen,
  Briefcase,
  Cloud,
  Code2,
  Coffee,
  Database,
  GraduationCap,
  Heart,
  Mail,
  MapPin,
  Phone,
  Server,
} from "lucide-react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

import PROJECT_IMG_1 from "../assets/images/project-1.png";
import PROJECT_IMG_2 from "../assets/images/project-2.png";
import PROJECT_IMG_3 from "../assets/images/project-3.png";

export const SKILL_CATEGORY = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Crafting beatiful, Responsive user interface",
    skills: [
      {
        name: "React",
        level: 85,
        color: "bg-blue-500",
      },
      {
        name: "TypeScript",
        level: 90,
        color: "bg-blue-600",
      },
      {
        name: "Next.js",
        level: 82,
        color: "bg-gray-500",
      },
      {
        name: "Tailwind CSS",
        level: 80,
        color: "bg-cyan-500",
      },
      {
        name: "Framer Motion",
        level: 72,
        color: "bg-pink-500",
      },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Building robust server-side solutions",
    skills: [
      {
        name: "Node.js",
        level: 90,
        color: "bg-green-500",
      },
      {
        name: "Express.js",
        level: 88,
        color: "bg-gray-500",
      },
      {
        name: "Java",
        level: 85,
        color: "bg-yellow-500",
      },
      {
        name: "GraphQL",
        level: 60,
        color: "bg-pink-600",
      },
      {
        name: "REST APIs",
        level: 92,
        color: "bg-orange-500",
      },
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "Managing and optimizing data storage",
    skills: [
      {
        name: "MySQL",
        level: 88,
        color: "bg-green-600",
      },
      {
        name: "MongoDB",
        level: 85,
        color: "bg-blue-700",
      },
      {
        name: "Redis",
        level: 80,
        color: "bg-red-500",
      },
      {
        name: "Prisma",
        level: 82,
        color: "bg-indigo-600",
      },
      {
        name: "Firebase",
        level: 78,
        color: "bg-yellow-600",
      },
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    description: "Deploying and scaling applications",
    skills: [
      {
        name: "Docker",
        level: 82,
        color: "bg-blue-600",
      },
      {
        name: "AWS",
        level: 78,
        color: "bg-orange-600",
      },
      {
        name: "Vercel",
        level: 90,
        color: "bg-gray-500",
      },
      {
        name: "Git",
        level: 95,
        color: "bg-orange-700",
      },
      {
        name: "CI/CD",
        level: 75,
        color: "bg-purple-600",
      },
    ],
  },
];

export const TECH_STACK = [
  "C/C++",
  "Java",
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "SaSS",
  "Vite",
  "Notion",
  "Slack",
  "React",
  "Node.js",
];

export const STATS = [
  {
    number: "10+",
    label: "Projects Completed",
  },
  {
    number: "1+",
    label: "Years Experience",
  },
  {
    number: "15+",
    label: "Technologies",
  },
  {
    number: "100%",
    label: "Client Satisfaction",
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Blog App with AI Post Generator",
    description:
      "A full-stack blog app using mern stack - with full Markdown support, tag filtering, and an integration of ai to generate blogs on the go",
    image: PROJECT_IMG_2,
    tags: ["React.js", "Node.js", "MongoDB", "Tailwindcss"],
    liveUrl: "",
    githubUrl: "",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Sprint-Track",
    description:
      "Real-time collaborative project management tool that helps managers and teams track projects using sprints and Kanban boards. It allows managers to create organizations and projects, invite members, and organize tasks (issues) into multiple sprints.",
    image: PROJECT_IMG_2,
    tags: ["Next.js", "Node.js", "PostgresSQL", "Tailwindcss"],
    liveUrl: "",
    githubUrl: "",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 3,
    title: "PrepMate",
    description:
      "A smart AI-Powered Interview Preparation App using MERN stack - along with the Gemini-API for generating Interview Q&As",
    image: PROJECT_IMG_3,
    tags: ["React", "Node.js", "MongoDB", "Tailwindcss"],
    liveUrl: "",
    githubUrl: "",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 4,
    title: "Classifi",
    description:
      "Classifi is a centralized academic workflow system with role-based dashboards for students, teachers, and admins. It streamlines university processes with modules for assignments, quizzes, and a real-time chat. It also automates a daily task by using a cron job to schedule attendance table creation.",
    image: PROJECT_IMG_3,
    tags: ["Next.js", "Node.js", "MySQL", "Tailwindcss"],
    liveUrl: "",
    githubUrl: "",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 5,
    title: "Expense Tracker App",
    description:
      "Classifi is a centralized academic workflow system with role-based dashboards for students, teachers, and admins. It streamlines university processes with modules for assignments, quizzes, and a real-time chat. It also automates a daily task by using a cron job to schedule attendance table creation.",
    image: PROJECT_IMG_1,
    tags: ["Next.js", "Node.js", "MySQL", "TypeScript"],
    liveUrl: "",
    githubUrl: "",
    featured: true,
    category: "Full Stack",
  },
];

export const JOURNEY_STEPS = [
  {
    year: "2023",
    title: "Started Coding Journey",
    company: "Self-taught",
    description:
      "Began learning web development with HTML, CSS, and JavaScript. Built my first website and fell in love with creating digital experience.",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: "2024",
    title: "First Internship",
    company: "TechStart Inc.",
    description:
      "Joined as a frontend intern, working with working with react and learning modern development practices. Contribute to 3 clients",
    icon: Briefcase,
    color: "bg-green-500",
  },
  {
    year: "2025",
    title: "Infomation Technology Degree",
    company: "University of Mumbai",
    description:
      "Graduated with honors, specializing in web technologies and software engineering. Led the final year project.",
    icon: GraduationCap,
    color: "bg-blue-500",
  },
  {
    year: "2025",
    title: "Freelance & Open Source",
    company: "Independent",
    description:
      "Started freelancing and contributing to open source projects. Built 3 successful web applications",
    icon: Award,
    color: "bg-orange-500",
  },
];

export const PASSIONS = [
  {
    icon: Heart,
    title: "User Experience",
    description: "Creating intuitive interfaces that user loves.",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Turning complex challenges into elegant solutions.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always exploring new technologies and best practices.",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: FiGithub,
    name: "GitHub",
    url: "",
    color: "hover:text-gray-600",
    bgColor: "hover:bg-gray-800",
  },
  {
    icon: FiLinkedin,
    name: "LinkedIn",
    url: "",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-500/10",
  },
  {
    icon: FiTwitter,
    name: "Twitter",
    url: "",
    color: "hover:text-sky-400",
    bgColor: "hover:bg-sky-500/10",
  },
  {
    icon: Mail,
    name: "Email",
    url: "mailto:fahad.khan44604@gmail.com",
    color: "hover:text-green-400",
    bgColor: "hover:bg-green-500/10",
  },
];

export const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Location",
    value: "Mumbai, India",
  },
  {
    icon: Mail,
    label: "Email",
    value: "fahad.khan44604@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8856970614",
  },
];
