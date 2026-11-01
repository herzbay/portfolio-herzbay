"use client";

import Image from "next/image";
import {
  BriefcaseBusiness,
  GraduationCap,
} from "lucide-react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/Stagger";
import { FadeIn } from "@/components/motion/FadeIn";

import { experience } from "@/data/experience";
import { useLocale } from "@/lib/use-locale";

export function Experience() {
  const { locale } = useLocale();

  const education = experience.filter(
    (item) => item.type === "education",
  );

  const workExperiences = experience.filter(
    (item) => item.type === "work",
  );

  const renderExperienceCard = (
    items: typeof experience,
  ) => (
    <StaggerGroup className="flex flex-col gap-5">
      {items.map((item) => (
        <StaggerItem
          key={item.id}
          className="
            rounded-[var(--radius-md)]
            border border-border
            bg-surface
            p-5
            transition-colors duration-300
            hover:border-accent-2
            sm:p-6
          "
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
            {/* Institution / Company Logo */}
            <div className="relative size-12 shrink-0 overflow-hidden rounded-xl">
              <Image
                src={item.logo}
                alt={`${item.organization[locale]} logo`}
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>

            <div className="min-w-0 flex-1">
              {/* Title, Organization, and Period */}
              <div
                className="
                  flex flex-col gap-2
                  sm:flex-row
                  sm:items-start
                  sm:justify-between
                "
              >
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-text-primary">
                    {item.title[locale]}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-text-secondary">
                    {item.organization[locale]}
                  </p>

                  <p className="mt-1 text-xs text-text-muted">
                    {item.location}
                  </p>
                </div>

                <span
                  className="
                    w-fit shrink-0
                    rounded-full
                    border border-border
                    px-3 py-1
                    font-[family-name:var(--font-mono)]
                    text-[11px]
                    text-text-muted
                  "
                >
                  {item.period}
                </span>
              </div>

              {/* Subtitle */}
              {item.subtitle && (
                <p className="mt-3 text-sm font-medium text-accent-2">
                  {item.subtitle[locale]}
                </p>
              )}

              {/* Description / Highlights */}
              <ul className="mt-4 space-y-2.5">
                {item.bullets[locale].map((bullet) => (
                  <li
                    key={bullet}
                    className="
                      flex gap-2.5
                      text-sm leading-relaxed
                      text-text-secondary
                    "
                  >
                    <span
                      aria-hidden="true"
                      className="
                        mt-[0.55rem]
                        size-1.5 shrink-0
                        rounded-full
                        bg-accent-2
                      "
                    />

                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Competencies - Education Only */}
              {item.competencies && (
                <div className="mt-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-muted">
                    {locale === "id"
                      ? "Bidang Kompetensi"
                      : "Areas of Competence"}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.competencies[locale].map((competency) => (
                      <span
                        key={competency}
                        className="
                          rounded-full
                          border border-border
                          bg-background
                          px-3 py-1.5
                          text-xs
                          text-text-secondary
                        "
                      >
                        {competency}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );

  return (
    <section
      id="experience"
      className="border-b border-border py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[var(--container-width)] px-6">
        <FadeIn>
          <SectionHeading
            eyebrow={
              locale === "id"
                ? "Perjalanan Saya"
                : "My Journey"
            }
            title={
              locale === "id"
                ? "Pengalaman"
                : "Experience"
            }
          />
        </FadeIn>

        <div className="mt-12 space-y-12">
          {/* EDUCATION */}
          {education.length > 0 && (
            <div className="space-y-5">
              <FadeIn>
                <div className="flex items-center gap-3 border-b border-border pb-4">
                  <GraduationCap
                    size={21}
                    strokeWidth={1.7}
                    className="text-accent-2"
                  />

                  <h3 className="text-xl font-semibold text-text-primary">
                    {locale === "id"
                      ? "Pendidikan"
                      : "Education"}
                  </h3>
                </div>
              </FadeIn>

              {renderExperienceCard(education)}
            </div>
          )}

          {/* WORK EXPERIENCE */}
          {workExperiences.length > 0 && (
            <div className="space-y-5">
              <FadeIn>
                <div className="flex items-center gap-3 border-b border-border pb-4">
                  <BriefcaseBusiness
                    size={21}
                    strokeWidth={1.7}
                    className="text-accent-2"
                  />

                  <h3 className="text-xl font-semibold text-text-primary">
                    {locale === "id"
                      ? "Pengalaman Kerja"
                      : "Work Experience"}
                  </h3>
                </div>
              </FadeIn>

              {renderExperienceCard(workExperiences)}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}