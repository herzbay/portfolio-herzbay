import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="border-b border-border py-24 sm:py-32">
      <div className="mx-auto max-w-[var(--container-width)] px-6">
        <SectionHeading
          eyebrow="Kemampuan"
          title="Skills & Tech Stack"
          description="Teknologi yang saya gunakan untuk membangun aplikasi mobile dan website."
        />

        <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <StaggerItem
              key={group.category}
              className="rounded-[var(--radius-md)] border border-border bg-surface p-6 transition-shadow duration-300 hover:border-accent-2 hover:shadow-[var(--glow-accent-2)]"
            >
              <h3 className="mb-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-wide text-accent-2">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-text-secondary">
                    {item}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
