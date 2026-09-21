"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export function StaggerGroup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

// Konten SELALU opacity: 1 — animasi hanya transform.
export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  const item = {
    hidden: { y: shouldReduceMotion ? 0 : 12 },
    show: { y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
  };

  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}