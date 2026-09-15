"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { socialLinks } from "@/data/social";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  });

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-border pt-24"
    >
      <div
        className="cyber-grid pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-[var(--container-width)] px-6">
        <motion.p
          {...fadeUp(0)}
          className="text-glow mb-4 font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.25em] text-accent"
        >
          Software Engineer
        </motion.p>

        <motion.h1
          {...fadeUp(0.1)}
          className="max-w-3xl text-4xl font-semibold leading-tight text-text-primary sm:text-5xl md:text-6xl"
        >
          Bayu Herlambang
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="mt-6 max-w-xl text-lg text-text-secondary sm:text-xl"
        >
          Android & Web Developer — fresh graduate Informatika yang membangun
          aplikasi mobile dan website dari ide sampai production.
        </motion.p>

        <motion.div
          {...fadeUp(0.3)}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="#projects">
            Lihat Project <ArrowRight size={16} />
          </Button>
          <Button href="#contact" variant="secondary">
            Hubungi Saya
          </Button>
        </motion.div>

        <motion.div {...fadeUp(0.4)} className="mt-10">
          <SocialLinks links={socialLinks} />
        </motion.div>
      </div>
    </section>
  );
}
