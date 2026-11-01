"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type TypewriterTextProps = {
  text: string | string[];
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
  const texts = useMemo(
    () => (Array.isArray(text) ? text : [text]),
    [text]
  );

  const [display, setDisplay] = useState("");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (texts.length === 0) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setDisplay(texts[0]);
      return;
    }

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    setDisplay("");

    function tick() {
      const currentText = texts[textIndex];

      if (!isDeleting) {
        charIndex += 1;
        setDisplay(currentText.slice(0, charIndex));

        if (charIndex >= currentText.length) {
          isDeleting = true;
          timeoutRef.current = setTimeout(tick, pauseDuration);
        } else {
          timeoutRef.current = setTimeout(tick, typingSpeed);
        }
      } else {
        charIndex -= 1;
        setDisplay(currentText.slice(0, charIndex));

        if (charIndex <= 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
          timeoutRef.current = setTimeout(tick, 400);
        } else {
          timeoutRef.current = setTimeout(tick, deletingSpeed);
        }
      }
    }

    timeoutRef.current = setTimeout(tick, typingSpeed);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [texts, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className}>
      {display}
      <span
        aria-hidden="true"
        className="ml-0.5 inline-block w-[2px] animate-pulse align-middle"
        style={{
          height: "0.9em",
          backgroundColor: "var(--accent)",
        }}
      />
    </span>
  );
}
