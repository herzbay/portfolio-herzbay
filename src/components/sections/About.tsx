import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";

export function About() {
  return (
    <section id="about" className="border-b border-border py-24 sm:py-32">
      <div className="mx-auto max-w-[var(--container-width)] px-6">
        <FadeIn>
          <SectionHeading eyebrow="About Me" title="About" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="max-w-2xl space-y-5 text-base leading-relaxed text-text-secondary sm:text-lg">
            <p>
              I&apos;m Bayu Herlambang, a Full Stack Developer and fresh
              Informatics graduate based in Bekasi, Indonesia. I focus on
              building Android applications and web platforms — from
              structuring data and designing interfaces to connecting
              everything to a working backend.
            </p>
            <p>
              {/* TODO: ganti dengan cerita/pendekatan kerja asli kamu */}
              Replace this paragraph with your own story — how you got
              into coding, a project you&apos;re most proud of, or how
              you approach building a product from scratch.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}