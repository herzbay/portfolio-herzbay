"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Sparkle } from "@/components/ui/Sparkle";
import { MarkerUnderline } from "@/components/ui/MarkerUnderline";
import { AvatarTiltCard } from "@/components/ui/AvatarTiltCard";
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
      className="relative flex min-h-screen items-center overflow-hidden border-b border-border pt-24"
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

      <div className="relative mx-auto grid w-full max-w-[var(--container-width)] items-center gap-12 px-6 py-16 md:grid-cols-[1.3fr_0.7fr] md:py-0">
        <div>
          <motion.div {...revealUp(0)} className="relative mb-6 inline-block">
            <p
              className="-skew-x-6 font-[family-name:var(--font-heading)] text-2xl font-semibold italic tracking-tight sm:text-3xl md:text-4xl"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, var(--accent), var(--accent-2))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              <TypewriterText text={t.hero.role} />
            </p>
            <MarkerUnderline className="absolute -bottom-2 left-1 h-3 w-[85%]" />
          </motion.div>

          <motion.h1
            {...revealUp(0.1)}
            className="max-w-3xl text-4xl font-semibold leading-tight text-text-primary sm:text-5xl md:text-5xl lg:text-6xl"
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

        <motion.div {...revealUp(0.2)} className="order-first md:order-last">
          <AvatarTiltCard />
        </motion.div>
      </div>
    </section>
  );
}