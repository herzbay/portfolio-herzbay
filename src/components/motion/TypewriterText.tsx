"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

type TypewriterTextProps = {
  text: string;
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
};

export function TypewriterText({
  text,
  className,
  typingSpeed = 90,
  deletingSpeed = 50,
  pauseDuration = 1800,
}: TypewriterTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(shouldReduceMotion ? text : "");
  const [phase, setPhase] = useState<"typing" | "deleting">("typing");

  useEffect(() => {
    if (shouldReduceMotion) return;

    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (display.length < text.length) {
        timeout = setTimeout(
          () => setDisplay(text.slice(0, display.length + 1)),
          typingSpeed
        );
      } else {
        timeout = setTimeout(() => setPhase("deleting"), pauseDuration);
      }
    } else {
      if (display.length > 0) {
        timeout = setTimeout(
          () => setDisplay(text.slice(0, display.length - 1)),
          deletingSpeed
        );
      } else {
        timeout = setTimeout(() => setPhase("typing"), 400);
      }
    }

    return () => clearTimeout(timeout);
  }, [display, phase, text, typingSpeed, deletingSpeed, pauseDuration, shouldReduceMotion]);

  return (
    <span className={className}>
      {display}
      {!shouldReduceMotion && (
        <span
          aria-hidden="true"
          className="ml-0.5 inline-block w-[2px] animate-pulse bg-current align-middle"
          style={{ height: "0.9em" }}
        />
      )}
    </span>
  );
}