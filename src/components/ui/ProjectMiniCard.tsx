import Image from "next/image";
import { GithubIcon } from "@/components/ui/BrandIcons";
import type { Project } from "@/types/portfolio";

type ProjectMiniCardProps = {
  project: Project;
  onOpen: (project: Project) => void;
};

export function ProjectMiniCard({ project, onOpen }: ProjectMiniCardProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className="group flex flex-col overflow-hidden rounded-[var(--radius-md)] border border-border bg-surface text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[var(--glow-accent)]"
    >
      <div className="relative aspect-video overflow-hidden bg-background">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-text-primary">
          {project.title}
        </h3>
        <p className="line-clamp-2 text-sm text-text-secondary">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-2 py-0.5 font-[family-name:var(--font-mono)] text-[10px] text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="mt-1 inline-flex w-fit items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-accent"
          >
            <GithubIcon size={14} /> Source
          </a>
        )}
      </div>
    </button>
  );
}