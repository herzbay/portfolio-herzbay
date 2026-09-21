"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

// Konten SELALU opacity: 1 — animasi hanya transform (translateY),
// jadi tidak akan pernah "hilang" walau JS lambat/gagal jalan.
export function FadeIn({ children, delay = 0, y = 16, className }: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ y: shouldReduceMotion ? 0 : y }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}