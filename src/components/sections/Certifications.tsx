"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { CertificationCard } from "@/components/ui/CertificationCard";
import { certifications } from "@/data/experience";

const PAGE_SIZE = 4;

const variants = {
  enter: (direction: number) => ({ x: direction > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -60 : 60, opacity: 0 }),
};

export function Certifications() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  if (certifications.length === 0) return null;

  const totalPages = Math.ceil(certifications.length / PAGE_SIZE);
  const start = page * PAGE_SIZE;
  const currentItems = certifications.slice(start, start + PAGE_SIZE);

  function goTo(targetPage: number, dir: number) {
    setDirection(dir);
    setPage((targetPage + totalPages) % totalPages);
  }

  return (
    <section
      id="certifications"
      className="border-b border-border py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[var(--container-width)] px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="Credentials"
            title="Certifications"
            description="A selection of certifications and training I've completed."
          />
        </FadeIn>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2"
            >
              {currentItems.map((cert) => (
                <CertificationCard key={cert.title} certification={cert} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => goTo(page - 1, -1)}
              aria-label="Previous certifications"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-accent hover:text-accent"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="font-[family-name:var(--font-mono)] text-xs text-text-muted">
              {page + 1} / {totalPages}
            </span>
            <button
              type="button"
              onClick={() => goTo(page + 1, 1)}
              aria-label="Next certifications"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-accent hover:text-accent"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}