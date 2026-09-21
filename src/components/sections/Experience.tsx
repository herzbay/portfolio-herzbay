import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { experience, certifications } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-border py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[var(--container-width)] px-6">
        <SectionHeading
          eyebrow="My Journey"
          title="Experience & Education"
        />

        <StaggerGroup className="flex flex-col gap-6">
          {experience.map((item) => (
            <StaggerItem
              key={`${item.title}-${item.organization}`}
              className="flex flex-col gap-1 border-l-2 border-border pl-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
            >
              <div>
                <h3 className="text-lg font-medium text-text-primary">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary">
                  {item.organization}
                </p>
                {item.description && (
                  <p className="mt-1 text-sm text-text-muted">
                    {item.description}
                  </p>
                )}
              </div>
              <span className="font-[family-name:var(--font-mono)] text-xs text-text-muted whitespace-nowrap">
                {item.period}
              </span>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {certifications.length > 0 && (
          <div className="mt-16">
            <h3 className="mb-6 text-xl font-medium text-text-primary">
              Certifications
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {certifications.map((cert) => (
                <li
                  key={cert.title}
                  className="rounded-[var(--radius-sm)] border border-border bg-surface p-4 text-sm text-text-secondary"
                >
                  <span className="font-medium text-text-primary">
                    {cert.title}
                  </span>{" "}
                  — {cert.issuer} ({cert.year})
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
