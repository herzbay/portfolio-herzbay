import { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "sizinus",
    title: "Sizinus",
    description:
      "An Android app that helps small business owners understand and simulate the business licensing process, complete with personalized license recommendations and guidance.",
    problem:
      "Small business owners often struggle to understand which business licenses they need and how the process works, making licensing feel confusing and inaccessible.",
    role: "Mobile Developer (Solo Project)",
    technologies: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore"],
    features: [
      "Interactive business licensing simulation (NIB) via step-by-step flow",
      "Rule-based decision tree for license recommendations",
      "Adaptive learning path for business guidance",
      "Gamification: rewards, missions, and a realtime multi-user leaderboard",
      "Simulation history and profile management",
    ],
    image: "/images/sizinus-cover.webp", // TODO: screenshot asli
    liveUrl: undefined, // TODO
    githubUrl: undefined, // TODO
    featured: true,
  },
  {
    slug: "project-website-kamu",
    title: "Your Website Project",
    description: "Short description of this website project — replace with the real description before publishing.",
    role: "Web Developer",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: ["Replace with key feature #1", "Replace with key feature #2", "Replace with key feature #3"],
    image: "/images/project-placeholder.webp", // TODO: screenshot asli
    liveUrl: "https://example.com", // TODO
    githubUrl: "https://github.com/username-kamu/repo-kamu", // TODO
    featured: true,
  },
];