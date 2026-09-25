"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CategoryTabs } from "@/components/ui/CategoryTabs";
import { ProjectMiniCard } from "@/components/ui/ProjectMiniCard";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { FadeIn } from "@/components/motion/FadeIn";
import { projects, categories } from "@/data/projects";
import type { Project, ProjectCategory } from "@/types/portfolio";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(
    categories[0].key
  );
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const visibleProjects = projects
    .filter((project) => project.category === activeCategory)
    .slice(0, 3);

  return (
    <section id="projects" className="border-b border-border py-24 sm:py-32">
      <div className="mx-auto max-w-[var(--container-width)] px-6">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured Projects"
          description="Pick a category to see the top projects in that area — click any card for the full story."
        />

        <FadeIn>
          <CategoryTabs
            categories={categories}
            active={activeCategory}
            onSelect={setActiveCategory}
          />
        </FadeIn>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.08}>
              <ProjectMiniCard project={project} onOpen={setSelectedProject} />
            </FadeIn>
          ))}
        </div>

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}