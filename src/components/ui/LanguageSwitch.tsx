"use client";

import { cn } from "@/lib/utils";
import { useLocale } from "@/lib/use-locale";
import { setLocale } from "@/lib/language-store";

export function LanguageSwitch() {
  const { locale } = useLocale();

  return (
    <div
      role="group"
      aria-label="Language switch"
      className="flex items-center rounded-full border border-border bg-surface p-0.5 text-xs font-semibold"
    >
      {(["id", "en"] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLocale(option)}
          aria-pressed={locale === option}
          className={cn(
            "rounded-full px-2.5 py-1 uppercase transition-colors duration-200",
            locale === option
              ? "bg-accent text-[var(--accent-contrast)]"
              : "text-text-secondary hover:text-text-primary"
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}