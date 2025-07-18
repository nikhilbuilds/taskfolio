export interface WorkedOnItem {
  id: number;
  title: string;
  description: string;
  color: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  images?: string[];
  status: string;
  assignee: string;
  reporter: string;
  createdDate: string;
}

export const workedOnItems: WorkedOnItem[] = [
  {
    id: 1,
    title: "SyllabusBuddy – AI-Powered Quiz & Revision Platform",
    description:
      "An AI-driven platform that transforms syllabus documents into daily quiz-based revision plans. Students can upload their syllabus, get topic-wise breakdowns, and receive daily MCQs tailored to their difficulty level and schedule. Includes streak tracking, quiz history, and a dashboard for personalized learning. Built with LLMs, React Native, and TypeScript.",
    color: "blue",
    techStack: [
      "React Native",
      "TypeScript",
      "Node.js",
      "ExpressJS",
      "PostgreSQL",
      "OpenAI API",
      "Expo",
      "AWS S3",
      "Prisma",
    ],
    githubUrl: "https://github.com/nikhilbuilds/syllabusbuddy", // update if private
    liveUrl: "https://syllabusbuddy.com",
    images: [
      "https://picsum.photos/seed/syllabus-1/400/300",
      "https://picsum.photos/seed/syllabus-2/400/300",
      "https://picsum.photos/seed/syllabus-3/400/300",
    ],
    status: "In Progress",
    assignee: "Nikhil Khanna",
    reporter: "Nikhil Khanna",
    createdDate: "May 2024",
  },
  {
    id: 2,
    title: "Ticketing App - Full Stack Microservices Application",
    description:
      "A comprehensive full stack application where customers can create, sell, or purchase tickets for various events. Built with modern Event-Based Microservice Architecture and Server-Side Rendering capabilities. Features include user authentication, payment processing, real-time notifications, and scalable microservices communication.",
    color: "green",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "ExpressJS",
      "MongoDB",
      "Kubernetes",
      "Docker",
      "Redis",
    ],
    githubUrl: "https://github.com/nikhilbuilds/ticketing-app",
    liveUrl: "https://ticketing-app-demo.vercel.app",
    images: [
      "https://picsum.photos/seed/ticketing-1/400/300",
      "https://picsum.photos/seed/ticketing-2/400/300",
      "https://picsum.photos/seed/ticketing-3/400/300",
    ],
    status: "Completed",
    assignee: "Nikhil Khanna",
    reporter: "Nikhil Khanna",
    createdDate: "March 2024",
  },
  {
    id: 3,
    title: "AI Chat Interface Challenge",
    description:
      "A cutting-edge AI chat assistant featuring voice capabilities, real-time responses, and modern Material UI design. Implements advanced features like text-to-speech synthesis, WebSocket connections for real-time communication, speech recognition, and comprehensive dark mode support for enhanced user experience.",
    color: "blue",
    techStack: [
      "React",
      "Material-UI",
      "WebSocket",
      "Speech API",
      "Node.js",
      "OpenAI API",
    ],
    githubUrl: "https://github.com/nikhilbuilds/ai-chat-interface",
    liveUrl: "https://ai-chat-demo.netlify.app",
    images: [
      "https://picsum.photos/seed/ai-1/400/300",
      "https://picsum.photos/seed/ai-2/400/300",
    ],
    status: "In Progress",
    assignee: "Nikhil Khanna",
    reporter: "Nikhil Khanna",
    createdDate: "February 2024",
  },
  {
    id: 4,
    title: "HRIS Dashboard",
    description:
      "A modern, responsive, and highly scalable Human Resource Information System (HRIS) dashboard designed for comprehensive HR management. Built with Next.js for optimal performance, GraphQL for efficient data fetching, and Material-UI for consistent design patterns. Features employee management, payroll processing, and analytics.",
    color: "purple",
    techStack: [
      "Next.js",
      "GraphQL",
      "Material-UI",
      "PostgreSQL",
      "Prisma",
      "TypeScript",
    ],
    githubUrl: "https://github.com/nikhilbuilds/hris-dashboard",
    liveUrl: "https://hris-dashboard-demo.vercel.app",
    images: [
      "https://picsum.photos/seed/hris-1/400/300",
      "https://picsum.photos/seed/hris-2/400/300",
      "https://picsum.photos/seed/hris-3/400/300",
    ],
    status: "Completed",
    assignee: "Nikhil Khanna",
    reporter: "Nikhil Khanna",
    createdDate: "January 2024",
  },
  {
    id: 5,
    title: "WhatsApp Clone",
    description:
      "Full-featured WhatsApp clone application built with React.js, Next.js, and Google Firebase. Implements real-time messaging capabilities, file sharing, group chats, user authentication, and modern UI components that closely replicate the original WhatsApp experience with enhanced features.",
    color: "yellow",
    techStack: [
      "React.js",
      "Next.js",
      "Firebase",
      "Firestore",
      "Firebase Auth",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/nikhilbuilds/whatsapp-clone",
    liveUrl: "https://whatsapp-clone-demo.vercel.app",
    images: [
      "https://picsum.photos/seed/whatsapp-1/400/300",
      "https://picsum.photos/seed/whatsapp-2/400/300",
    ],
    status: "Completed",
    assignee: "Nikhil Khanna",
    reporter: "Nikhil Khanna",
    createdDate: "December 2023",
  },
  {
    id: 6,
    title: "Netflix Clone",
    description:
      "Netflix clone application built with React, featuring comprehensive movie browsing capabilities, streaming interface, user authentication, personalized recommendations, and responsive design that accurately mimics the original Netflix experience with modern web technologies.",
    color: "red",
    techStack: [
      "React",
      "Redux",
      "Node.js",
      "MongoDB",
      "Express",
      "JWT",
      "Stripe API",
    ],
    githubUrl: "https://github.com/nikhilbuilds/netflix-clone",
    liveUrl: "https://netflix-clone-demo.netlify.app",
    images: [
      "https://picsum.photos/seed/netflix-1/400/300",
      "https://picsum.photos/seed/netflix-2/400/300",
    ],
    status: "Completed",
    assignee: "Nikhil Khanna",
    reporter: "Nikhil Khanna",
    createdDate: "November 2023",
  },
];
