"use client";

import { useEffect, useRef, useState } from "react";

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
  const [display, setDisplay] = useState("");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let prefersReducedMotion = false;
    try {
      prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
    } catch {
      prefersReducedMotion = false;
    }

    if (prefersReducedMotion) {
      setDisplay(text);
      return;
    }

    let index = 0;
    let isDeleting = false;
    setDisplay("");

    function tick() {
      if (!isDeleting) {
        index += 1;
        setDisplay(text.slice(0, index));

        timeoutRef.current = setTimeout(
          tick,
          index >= text.length ? pauseDuration : typingSpeed
        );
        if (index >= text.length) isDeleting = true;
      } else {
        index -= 1;
        setDisplay(text.slice(0, Math.max(index, 0)));

        timeoutRef.current = setTimeout(
          tick,
          index <= 0 ? 400 : deletingSpeed
        );
        if (index <= 0) isDeleting = false;
      }
    }

    timeoutRef.current = setTimeout(tick, typingSpeed);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className}>
      {display}
      <span
        aria-hidden="true"
        className="ml-0.5 inline-block w-[2px] animate-pulse bg-current align-middle"
        style={{ height: "0.9em" }}
      />
    </span>
  );
}