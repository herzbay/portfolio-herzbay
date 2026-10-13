"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { AboutPhoto } from "@/components/ui/AboutPhoto";
import { LocationBadge } from "@/components/ui/LocationBadge";
import { FadeIn } from "@/components/motion/FadeIn";
import { useLocale } from "@/lib/use-locale";

export function About() {
  const { t } = useLocale();

  return (
    <section id="about" className="border-b border-border py-24 sm:py-32">
      <div className="mx-auto max-w-[var(--container-width)] px-6">
        <FadeIn>
          <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />
        </FadeIn>

        <div className="grid items-center gap-14 md:grid-cols-[1.4fr_0.6fr]">
          <FadeIn delay={0.1}>
            <div className="glass-card max-w-2xl space-y-5 p-6 text-justify text-base leading-relaxed text-text-primary/90 sm:p-8 sm:text-lg">
              {t.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-6">
              <LocationBadge label={t.about.location} />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <AboutPhoto />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}