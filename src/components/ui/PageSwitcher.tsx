import { cn } from "@/lib/utils";

type PageSwitcherProps = {
  total: number;
  active: number;
  onChange: (index: number) => void;
  label: string;
  name?: string;
};

export function PageSwitcher({
  total,
  active,
  onChange,
  label,
  name = "page-switcher",
}: PageSwitcherProps) {
  return (
    <div
      role="radiogroup"
      aria-label={label}
      className="relative flex items-center overflow-hidden rounded-full border border-border bg-surface backdrop-blur-sm"
      style={{ width: `${total * 56}px`, maxWidth: "100%" }}
    >
      {Array.from({ length: total }, (_, index) => (
        <label
          key={index}
          className={cn(
            "relative z-10 flex flex-1 cursor-pointer items-center justify-center py-2.5 text-sm font-semibold tracking-tight transition-colors duration-150 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-inset has-[:focus-visible]:ring-accent",
            active === index
              ? "text-[var(--accent-contrast)]"
              : "text-text-secondary hover:text-text-primary"
          )}
        >
          <input
            type="radio"
            name={name}
            value={index}
            checked={active === index}
            onChange={() => onChange(index)}
            className="sr-only"
          />
          <span>{index + 1}</span>
        </label>
      ))}

      {/* Highlight geser, sama seperti .selection di template */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 z-0 h-full bg-accent transition-transform duration-200 ease-out"
        style={{
          width: `${100 / total}%`,
          transform: `translateX(${active * 100}%)`,
        }}
      />
    </div>
  );
}