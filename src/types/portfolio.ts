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

export type LocalizedText = {
  en: string;
  id: string;
};

export type LocalizedList = {
  en: string[];
  id: string[];
};

export type ExperienceItem = {
  id: string;
  type: "work" | "education" | "organization" | "freelance";
  title: LocalizedText;
  organization: LocalizedText;
  location: string;
  period: string;
  subtitle?: LocalizedText;
  logo: string;
  bullets: LocalizedList;
  competencies?: LocalizedList;
};

export type Certification = {
  title: string;
  issuer: string;
  year: string;
  description?: string;
  image?: string;
  url?: string;
};

export type SocialLink = {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "mail" | "instagram" | "x" | "globe";
};