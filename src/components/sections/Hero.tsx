"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Sparkle } from "@/components/ui/Sparkle";
import { TornEdgePhoto } from "@/components/ui/TornEdgePhoto";
import { TypewriterText } from "@/components/motion/TypewriterText";
import { socialLinks } from "@/data/social";
import { useLocale } from "@/lib/use-locale";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLocale();

  const revealUp = (delay: number) => ({
    initial: { y: shouldReduceMotion ? 0 : 20 },
    animate: { y: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  });

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden border-b border-border pt-24 pb-16 md:pb-0"
    >
      <Sparkle
        className="sparkle-twinkle pointer-events-none absolute left-[8%] top-[20%] h-5 w-5 text-accent"
        aria-hidden="true"
      />
      <Sparkle
        className="sparkle-twinkle pointer-events-none absolute left-[28%] top-[70%] h-3 w-3 text-accent-2"
        style={{ animationDelay: "0.8s" }}
        aria-hidden="true"
      />

      {/* Foto full-bleed (desktop: absolute kanan; mobile: normal flow di bawah) */}
      <motion.div {...revealUp(0.2)}>
        <TornEdgePhoto />
      </motion.div>

      <div className="relative mx-auto w-full max-w-[var(--container-width)] px-6 md:pr-[27%]">
        <motion.p
          {...revealUp(0)}
          className="text-glow mb-4 inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-xl font-semibold uppercase tracking-[0.1em] text-accent sm:text-2xl md:text-3xl"
        >
          <Sparkle className="h-6 w-6 shrink-0" />
          <TypewriterText text={t.hero.role} />
        </motion.p>

        <motion.h1
          {...revealUp(0.1)}
          className="max-w-3xl text-4xl font-semibold leading-tight text-text-primary sm:text-5xl md:text-6xl"
        >
          Bayu Herlambang
        </motion.h1>

        <motion.p
          {...revealUp(0.2)}
          className="mt-6 max-w-xl text-lg text-text-secondary sm:text-xl"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          {...revealUp(0.3)}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="#projects">
            {t.hero.viewProjects} <ArrowRight size={16} />
          </Button>
          <Button href="#contact" variant="secondary">
            {t.hero.getInTouch}
          </Button>
        </motion.div>

        <motion.div {...revealUp(0.4)} className="mt-10">
          <SocialLinks links={socialLinks} />
        </motion.div>
      </div>
    </section>
  );
}