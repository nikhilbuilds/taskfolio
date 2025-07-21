export interface WorkedOnItem {
  id: number;
  title: string;
  description: string;
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
    githubUrl: undefined,
    liveUrl: "https://www.syllabusbuddy.com/",
    images: [
      "/syllabusbuddy/1.png",
      "/syllabusbuddy/2.png",
      "/syllabusbuddy/3.png",
      "/syllabusbuddy/4.png",
      "/syllabusbuddy/5.png",
    ],
    status: "In Progress",
    assignee: "Nikhil Khanna",
    reporter: "Nikhil Khanna",
    createdDate: "May 2024",
  },
  {
    id: 2,
    title: "HRIS Dashboard",
    description:
      "A comprehensive Human Resource Information System (HRIS) dashboard for managing employee data, payroll, and company policies. Features role-based access control, data visualization, and automated reporting.",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "ExpressJS",
      "MongoDB",
      "Redux",
    ],
    githubUrl: "https://github.com/nikhilbuilds/hris-dashboard",
    liveUrl: "https://hris.devnikhil.com",
    images: ["/hris/1.png", "/hris/2.png", "/hris/3.png"],
    status: "Done",
    assignee: "Nikhil Khanna",
    reporter: "Nikhil Khanna",
    createdDate: "January 2024",
  },
  {
    id: 3,
    title: "Ticketing App (Full-Stack Application)",
    description:
      "A full-stack application for creating, managing, and tracking support tickets. Built with a microservices architecture, it handles user authentication, ticket creation, and real-time updates.",
    techStack: [
      "React",
      "Node.js",
      "TypeScript",
      "Microservices",
      "Docker",
      "Kubernetes",
    ],
    githubUrl: "https://github.com/nikhilbuilds/ticketing-app",
    liveUrl: undefined,
    images: [
      "/ticketing-app/1.png",
      "/ticketing-app/2.png",
      "/ticketing-app/3.png",
      "/ticketing-app/4.png",
    ],
    status: "In Progress",
    assignee: "Nikhil Khanna",
    reporter: "Nikhil Khanna",
    createdDate: "October 2023",
  },
  {
    id: 4,
    title: "AI Chat Interface Challenge",
    description:
      "A frontend challenge to build a responsive and interactive chat interface. The application features real-time messaging, user presence indicators, and a modern UI.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Socket.io"],
    githubUrl: "https://github.com/nikhilbuilds/chat-interface-challenge",
    liveUrl: undefined,
    images: ["/chat-app/1.png", "/chat-app/2.png", "/chat-app/3.png"],
    status: "Done",
    assignee: "Nikhil Khanna",
    reporter: "Nikhil Khanna",
    createdDate: "July 2023",
  },
  {
    id: 5,
    title: "Netflix Clone",
    description:
      "A clone of the popular streaming service, Netflix. The application features user authentication, a browse page with movie categories, and a video player.",
    techStack: ["React", "Firebase", "Styled Components"],
    githubUrl: "https://github.com/nikhilbuilds/netflix-clone",
    liveUrl: undefined,
    images: [
      "/netflix-clone/1.png",
      "/netflix-clone/2.png",
      "/netflix-clone/3.png",
    ],
    status: "Done",
    assignee: "Nikhil Khanna",
    reporter: "Nikhil Khanna",
    createdDate: "April 2023",
  },
  {
    id: 6,
    title: "WhatsApp Clone",
    description:
      "A real-time chat application that mimics the functionality of WhatsApp. Users can send and receive messages, create group chats, and share media.",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
    githubUrl: "https://github.com/nikhilbuilds/whatsapp-clone",
    liveUrl: undefined,
    images: ["/whatsapp-clone/1.png", "/whatsapp-clone/2.png"],
    status: "In Progress",
    assignee: "Nikhil Khanna",
    reporter: "Nikhil Khanna",
    createdDate: "February 2023",
  },
];
