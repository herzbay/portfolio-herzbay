import type { SVGProps } from "react";

export function Sparkle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 0c.9 4.2 2.1 7.1 3.6 8.6 1.5 1.5 4.4 2.7 8.6 3.6-4.2.9-7.1 2.1-8.6 3.6-1.5 1.5-2.7 4.4-3.6 8.6-.9-4.2-2.1-7.1-3.6-8.6C6.9 14.3 4 13.1-.2 12.2 4 11.3 6.9 10.1 8.4 8.6 9.9 7.1 11.1 4.2 12 0Z" />
    </svg>
  );
}