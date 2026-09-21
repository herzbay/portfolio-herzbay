import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FadeIn } from "@/components/motion/FadeIn";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="border-b border-border py-24 sm:py-32">
      <div className="mx-auto max-w-[var(--container-width)] px-6">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured Projects"
          description="A selection of projects I've built, from idea to a working, usable product."
        />

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.1}>
              <ProjectCard project={project} reversed={index % 2 === 1} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
