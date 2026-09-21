import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import type { Project } from "@/types/portfolio";

type ProjectCardProps = {
  project: Project;
  reversed?: boolean;
};

export function ProjectCard({ project, reversed = false }: ProjectCardProps) {
  return (
    <article
      className={`group grid items-center gap-8 rounded-[var(--radius-lg)] border border-border bg-surface p-6 backdrop-blur-sm transition-shadow duration-300 hover:border-accent hover:shadow-[var(--glow-accent)] sm:p-8 md:grid-cols-2 md:gap-12 ${
        reversed ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="relative aspect-video overflow-hidden rounded-[var(--radius-md)] border border-border bg-background">
        <Image
          src={project.image}
          alt={`Tangkapan layar project ${project.title}`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-text-primary">
          {project.title}
        </h3>
        {project.role && (
          <p className="mt-1 font-[family-name:var(--font-mono)] text-xs uppercase tracking-wide text-accent">
            {project.role}
          </p>
        )}
        <p className="mt-4 text-text-secondary">{project.description}</p>

        {project.features && project.features.length > 0 && (
          <ul className="mt-4 space-y-1.5 text-sm text-text-secondary">
            {project.features.slice(0, 3).map((feature) => (
              <li key={feature} className="flex gap-2">
                <span className="text-accent">›</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-3 py-1 font-[family-name:var(--font-mono)] text-xs text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-text-primary hover:text-accent"
            >
              Live Demo <ArrowUpRight size={16} />
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-text-primary hover:text-accent"
            >
              <GithubIcon size={16} /> Source
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
