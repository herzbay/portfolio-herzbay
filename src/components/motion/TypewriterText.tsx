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
  const phaseRef = useRef<"typing" | "deleting">("typing");

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setDisplay(text);
      return;
    }

    phaseRef.current = "typing";
    let charIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    function tick() {
      if (phaseRef.current === "typing") {
        charIndex += 1;
        setDisplay(text.slice(0, charIndex));

        if (charIndex >= text.length) {
          phaseRef.current = "deleting";
          timeoutId = setTimeout(tick, pauseDuration);
        } else {
          timeoutId = setTimeout(tick, typingSpeed);
        }
      } else {
        charIndex -= 1;
        setDisplay(text.slice(0, Math.max(charIndex, 0)));

        if (charIndex <= 0) {
          phaseRef.current = "typing";
          timeoutId = setTimeout(tick, 400);
        } else {
          timeoutId = setTimeout(tick, deletingSpeed);
        }
      }
    }

    timeoutId = setTimeout(tick, typingSpeed);

    return () => clearTimeout(timeoutId);
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