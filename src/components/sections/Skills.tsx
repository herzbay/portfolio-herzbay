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

const technicalSkills = [
  {
    category: "Frontend Development",
    icon: Code2,
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    category: "Backend Development",
    icon: Server,
    items: [
      "PHP",
      "Laravel",
      "CodeIgniter",
      "Node.js",
      "Python",
      "Java",
      "REST API",
    ],
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    items: ["Flutter", "Dart", "Kotlin"],
  },
  {
    category: "Database Management",
    icon: Database,
    items: ["MySQL", "PostgreSQL", "Firebase"],
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

const softSkills = [
  "Problem-Solving",
  "Analytical Thinking",
  "Teamwork & Collaboration",
  "Communication",
  "Adaptability",
  "Time Management",
  "Technical Documentation",
];

const cardClass =
  "h-full rounded-[var(--radius-md)] border border-border bg-surface p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-2 hover:shadow-[var(--glow-accent-2)] sm:p-6";

const chipClass =
  "inline-flex items-center rounded-lg border border-border bg-background/40 px-3 py-2 text-xs text-text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-2 hover:bg-surface-hover hover:text-text-primary";

export function Skills() {
  return (
    <section
      id="skills"
      className="border-b border-border py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[var(--container-width)] px-6">
        {/* Section Heading */}
        <FadeIn>
          <SectionHeading
            eyebrow="My Expertise"
            title="Skills & Tech Stack"
          />
        </FadeIn>

        {/* Technical Skills */}
        <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {technicalSkills.map((group) => {
            const CategoryIcon = group.icon;

            return (
              <StaggerItem key={group.category} className="h-full">
                <article className={cardClass}>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-accent-2/20 bg-accent-2-soft text-accent-2">
                      <CategoryIcon size={19} strokeWidth={1.7} />
                    </div>

                    <h3 className="skill-category-title font-[family-name:var(--font-mono)] text-xs font-medium uppercase tracking-wide">
                      {group.category}
                    </h3>
                  </div>

                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        {/* Tools & Soft Skills */}
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
          <FadeIn delay={0.1}>
            <article className={cardClass}>
              <div className="mb-5 flex items-center gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-accent-2/20 bg-accent-2-soft text-accent-2">
                  <Wrench size={19} strokeWidth={1.7} />
                </div>

                <h3 className="skill-category-title font-[family-name:var(--font-mono)] text-xs font-medium uppercase tracking-wide">
                  Tools & Platforms
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
          </FadeIn>

          <FadeIn delay={0.2}>
            <article className={cardClass}>
              <div className="mb-5 flex items-center gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-accent-2/20 bg-accent-2-soft text-accent-2">
                  <Brain size={19} strokeWidth={1.7} />
                </div>

                <h3 className="skill-category-title font-[family-name:var(--font-mono)] text-xs font-medium uppercase tracking-wide">
                  Soft Skills
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span key={skill} className={chipClass}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
