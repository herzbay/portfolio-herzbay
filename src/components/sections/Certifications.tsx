"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { CertificationCard } from "@/components/ui/CertificationCard";
import { PageSwitcher } from "@/components/ui/PageSwitcher";
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

  function goTo(target: number) {
    if (target === page) return;
    setDirection(target > page ? 1 : -1);
    setPage(target);
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
          <div className="mt-8 flex justify-center">
            <PageSwitcher
              total={totalPages}
              active={page}
              onChange={goTo}
              label="Certification pages"
              name="certification-page"
            />
          </div>
        )}
      </div>
    </section>
  );
}