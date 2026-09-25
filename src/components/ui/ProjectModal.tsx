"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { X, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import type { Project } from "@/types/portfolio";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-[var(--radius-lg)] border border-border bg-surface shadow-[var(--glow-accent)]"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-text-primary hover:text-accent"
            >
              <X size={18} />
            </button>

            <div className="relative aspect-video w-full bg-background">
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                sizes="(min-width: 768px) 640px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-text-primary">
                {project.title}
              </h3>
              {project.role && (
                <p className="mt-1 font-[family-name:var(--font-mono)] text-xs uppercase tracking-wide text-accent">
                  {project.role}
                </p>
              )}

              <p className="mt-4 text-text-secondary">{project.description}</p>

              {project.problem && (
                <p className="mt-3 text-sm text-text-muted">
                  <span className="font-medium text-text-secondary">Problem: </span>
                  {project.problem}
                </p>
              )}

              {project.features && project.features.length > 0 && (
                <ul className="mt-5 space-y-1.5 text-sm text-text-secondary">
                  {project.features.map((feature) => (
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
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-text-primary hover:text-accent"
                  >
                    Live Demo <ArrowUpRight size={16} />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-text-primary hover:text-accent"
                  >
                    <GithubIcon size={16} /> Source
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}