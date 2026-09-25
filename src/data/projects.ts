import { Project, ProjectCategory } from "@/types/portfolio";

export const categories: { key: ProjectCategory; label: string }[] = [
  { key: "website", label: "Website" },
  { key: "mobile", label: "Mobile" },
  { key: "ui-design", label: "UI Design" },
  { key: "machine-learning", label: "Machine Learning" },
  { key: "iot", label: "IoT" },
];

const categoryLabel: Record<ProjectCategory, string> = Object.fromEntries(
  categories.map((c) => [c.key, c.label])
) as Record<ProjectCategory, string>;

// TODO: ganti setiap placeholder ini dengan project asli kamu
function placeholder(category: ProjectCategory, index: number): Project {
  const label = categoryLabel[category];
  return {
    slug: `${category}-placeholder-${index}`,
    title: `${label} Project ${index}`,
    description:
      "Short description of this project — replace with the real description before publishing.",
    role: "Developer",
    technologies: ["Tech A", "Tech B"],
    features: ["Replace with key feature #1", "Replace with key feature #2"],
    image: "/images/project-placeholder.webp",
    githubUrl: "https://github.com/username-kamu/repo-kamu",
    liveUrl: undefined,
    category,
    featured: true,
  };
}

export const projects: Project[] = [
  // Mobile — real project
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
    image: "/images/sizinus-cover.webp",
    liveUrl: undefined,
    githubUrl: undefined,
    category: "mobile",
    featured: true,
  },
  placeholder("mobile", 2),
  placeholder("mobile", 3),

  // Website
  {
    slug: "project-website-kamu",
    title: "Your Website Project",
    description:
      "Short description of this website project — replace with the real description before publishing.",
    role: "Web Developer",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Replace with key feature #1",
      "Replace with key feature #2",
      "Replace with key feature #3",
    ],
    image: "/images/project-placeholder.webp",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username-kamu/repo-kamu",
    category: "website",
    featured: true,
  },
  placeholder("website", 2),
  placeholder("website", 3),

  // UI Design
  placeholder("ui-design", 1),
  placeholder("ui-design", 2),
  placeholder("ui-design", 3),

  // Machine Learning
  placeholder("machine-learning", 1),
  placeholder("machine-learning", 2),
  placeholder("machine-learning", 3),

  // IoT
  placeholder("iot", 1),
  placeholder("iot", 2),
  placeholder("iot", 3),
];