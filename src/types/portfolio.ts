export type ProjectCategory =
  | "website"
  | "mobile"
  | "ui-design"
  | "machine-learning"
  | "iot";

export type Project = {
  slug: string;
  title: string;
  description: string;
  problem?: string;
  role?: string;
  technologies: string[];
  features?: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  category: ProjectCategory;
  featured?: boolean;
};

export type SkillCategory = {
  category: string;
  items: string[];
};

export type ExperienceItem = {
  title: string;
  organization: string;
  period: string;
  description?: string;
  type: "work" | "education" | "organization" | "freelance";
};

export type Certification = {
  title: string;
  issuer: string;
  year: string;
  url?: string;
};

export type SocialLink = {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "mail" | "instagram" | "x" | "globe";
};