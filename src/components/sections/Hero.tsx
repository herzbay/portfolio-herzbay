"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Sparkle } from "@/components/ui/Sparkle";
import { socialLinks } from "@/data/social";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const revealUp = (delay: number) => ({
    initial: { y: shouldReduceMotion ? 0 : 20 },
    animate: { y: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  });

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-border pt-24"
    >
      <div className="halftone-dots pointer-events-none absolute inset-0" aria-hidden="true" />
      <Sparkle className="sparkle-twinkle pointer-events-none absolute left-[12%] top-[22%] h-5 w-5 text-accent" aria-hidden="true" />
      <Sparkle className="sparkle-twinkle pointer-events-none absolute right-[16%] top-[34%] h-3 w-3 text-accent-2" style={{ animationDelay: "0.8s" }} aria-hidden="true" />
      <Sparkle className="sparkle-twinkle pointer-events-none absolute bottom-[18%] left-[22%] h-4 w-4 text-accent-2" style={{ animationDelay: "1.4s" }} aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-[var(--container-width)] px-6">
        <motion.p {...revealUp(0)} className="text-glow mb-4 inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.25em] text-accent">
          <Sparkle className="h-4 w-4" /> Full Stack Developer
        </motion.p>

        <motion.h1 {...revealUp(0.1)} className="max-w-3xl text-4xl font-semibold leading-tight text-text-primary sm:text-5xl md:text-6xl">
          Bayu Herlambang
        </motion.h1>

        <motion.p {...revealUp(0.2)} className="mt-6 max-w-xl text-lg text-text-secondary sm:text-xl">
          I design and build end-to-end digital products — from Android
          apps to modern web platforms — turning ideas into fast,
          reliable, and user-friendly software.
        </motion.p>

        <motion.div {...revealUp(0.3)} className="mt-10 flex flex-wrap items-center gap-4">
          <Button href="#projects">View Projects <ArrowRight size={16} /></Button>
          <Button href="#contact" variant="secondary">Get In Touch</Button>
        </motion.div>

        <motion.div {...revealUp(0.4)} className="mt-10">
          <SocialLinks links={socialLinks} />
        </motion.div>
      </div>
    </section>
  );
}