export function MarkerUnderline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 20"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M2 12 C 40 3, 68 17, 100 9 C 132 1, 162 16, 198 7"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="6"
        strokeLinecap="round"
        pathLength="1"
        className="draw-underline"
      />
    </svg>
  );
}