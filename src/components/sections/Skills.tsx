"use client";

import {
  Code2,
  Server,
  Smartphone,
  Database,
  Wrench,
  Brain,
} from "lucide-react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { FadeIn } from "@/components/motion/FadeIn";
import { useLocale } from "@/lib/use-locale";

const technicalSkills = [
  {
    category: "Frontend Development",
    icon: Code2,
    items: [
      { name: "HTML", logo: "html5" },
      { name: "CSS", logo: "css" },
      { name: "JavaScript", logo: "javascript" },
      { name: "TypeScript", logo: "typescript" },
      { name: "React", logo: "react" },
      { name: "Next.js", logo: "nextdotjs" },
      { name: "Tailwind CSS", logo: "tailwindcss" },
      { name: "Bootstrap", logo: "bootstrap" },
    ],
  },
  {
    category: "Backend Development",
    icon: Server,
    items: [
      { name: "PHP", logo: "php" },
      { name: "Laravel", logo: "laravel" },
      { name: "CodeIgniter", logo: "codeigniter" },
      { name: "Node.js", logo: "nodedotjs" },
      { name: "Express.js", logo: "express" },
      { name: "Python", logo: "python" },
      { name: "Java", logo: "openjdk" },
      { name: "REST API", logo: "postman" },
    ],
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    items: [
      { name: "Flutter", logo: "flutter" },
      { name: "Dart", logo: "dart" },
      { name: "Kotlin", logo: "kotlin" },
    ],
  },
  {
    category: "Database Management",
    icon: Database,
    items: [
      { name: "MySQL", logo: "mysql" },
      { name: "PostgreSQL", logo: "postgresql" },
      { name: "Firebase", logo: "firebase" },
    ],
  },
];

const tools = [
  "Visual Studio Code",
  "Android Studio",
  "Git",
  "GitHub",
  "Postman",
  "DBeaver",
  "Docker",
  "Figma",
  "Notion",
  "Jira",
  "Trello",
  "Canva",
  "Microsoft Office",
  "Vercel",
];

const softSkills = {
  en: [
    "Problem-Solving",
    "Analytical Thinking",
    "Teamwork & Collaboration",
    "Communication",
    "Adaptability",
    "Time Management",
    "Technical Documentation",
  ],
  id: [
    "Pemecahan Masalah",
    "Berpikir Analitis",
    "Kerja Sama Tim",
    "Komunikasi",
    "Adaptabilitas",
    "Manajemen Waktu",
    "Dokumentasi Teknis",
  ],
};

const translations = {
  en: {
    eyebrow: "My Expertise",
    title: "Skills & Tech Stack",
    frontend: "Frontend Development",
    backend: "Backend Development",
    mobile: "Mobile Development",
    database: "Database Management",
    tools: "Tools & Platforms",
    softSkills: "Soft Skills",
  },
  id: {
    eyebrow: "Keahlian Saya",
    title: "Keahlian & Teknologi",
    frontend: "Pengembangan Frontend",
    backend: "Pengembangan Backend",
    mobile: "Pengembangan Mobile",
    database: "Manajemen Basis Data",
    tools: "Perangkat & Platform",
    softSkills: "Keterampilan Nonteknis",
  },
};

const cardClass =
  "h-full rounded-[var(--radius-md)] border border-border bg-surface p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-2 hover:shadow-[var(--glow-accent-2)] sm:p-6";

const chipClass =
  "inline-flex items-center rounded-lg border border-border bg-background/40 px-3 py-2 text-xs text-text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-2 hover:bg-surface-hover hover:text-text-primary";

function SkillLogo({
  name,
  logo,
}: {
  name: string;
  logo: string;
}) {
  return (
    <div className="flex min-w-0 items-center gap-2 rounded-lg px-2 py-1.5 transition-colors duration-300 hover:bg-transparent sm:gap-3">
      <div className="flex size-7 shrink-0 items-center justify-center bg-transparent">
        <img
          src={`https://cdn.simpleicons.org/${logo}`}
          alt={`${name} logo`}
          loading="lazy"
          className="skill-logo size-5 object-contain"
        />
      </div>

      <span className="min-w-0 text-xs text-text-secondary transition-colors duration-200 hover:text-text-primary sm:text-sm">
        {name}
      </span>
    </div>
  );
}

export function Skills() {
  const { locale } = useLocale();

  const t = translations[locale];
  const categoryTranslations = {
    "Frontend Development": t.frontend,
    "Backend Development": t.backend,
    "Mobile Development": t.mobile,
    "Database Management": t.database,
  };

  return (
    <section
      id="skills"
      className="border-b border-border py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[var(--container-width)] px-6">
        <FadeIn>
          <SectionHeading
            eyebrow={t.eyebrow}
            title={t.title}
          />
        </FadeIn>

        <StaggerGroup className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {technicalSkills.map((group) => {
            const CategoryIcon = group.icon;
            const isCompact = group.items.length === 3;
            const isDatabase = group.category === "Database Management";

            return (
              <StaggerItem key={group.category} className="h-full">
                <article
                  className={`rounded-[var(--radius-md)] border border-border bg-surface backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-2 hover:shadow-[var(--glow-accent-2)] ${
                    isCompact
                      ? "p-4 sm:p-5"
                      : "h-full p-5 sm:p-6"
                  }`}
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-accent-2/20 bg-accent-2-soft text-accent-2">
                      <CategoryIcon size={19} strokeWidth={1.7} />
                    </div>

                    <h3 className="skill-category-title font-[family-name:var(--font-mono)] text-xs font-medium uppercase tracking-wide">
                      {categoryTranslations[group.category as keyof typeof categoryTranslations]}
                    </h3>
                  </div>

                  <div
                    className={`grid gap-x-2 gap-y-2 sm:gap-x-3 ${
                      isDatabase
                        ? "grid-cols-2 sm:grid-cols-3"
                        : isCompact
                          ? "grid-cols-3"
                          : "grid-cols-2"
                    }`}
                  >
                    {group.items.map((item) => (
                      <SkillLogo
                        key={item.name}
                        name={item.name}
                        logo={item.logo}
                      />
                    ))}
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
          <article className={cardClass}>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-accent-2/20 bg-accent-2-soft text-accent-2">
                <Wrench size={19} strokeWidth={1.7} />
              </div>

              <h3 className="skill-category-title font-[family-name:var(--font-mono)] text-xs font-medium uppercase tracking-wide">
                {t.tools}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span key={tool} className={chipClass}>
                  {tool}
                </span>
              ))}
            </div>
          </article>

          <article className={cardClass}>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-accent-2/20 bg-accent-2-soft text-accent-2">
                <Brain size={19} strokeWidth={1.7} />
              </div>

              <h3 className="skill-category-title font-[family-name:var(--font-mono)] text-xs font-medium uppercase tracking-wide">
                {t.softSkills}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {softSkills[locale].map((skill) => (
                <span key={skill} className={chipClass}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
