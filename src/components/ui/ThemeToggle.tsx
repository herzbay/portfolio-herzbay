"use client";

import { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";
import {
  subscribeTheme,
  getThemeSnapshot,
  getThemeServerSnapshot,
  setTheme,
} from "@/lib/theme-store";

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getThemeServerSnapshot
  );

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label={
        theme === "light" ? "Ganti ke dark mode" : "Ganti ke light mode"
      }
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      {theme === "light" ? (
        <Moon size={18} strokeWidth={1.75} />
      ) : (
        <Sun size={18} strokeWidth={1.75} />
      )}
    </button>
  );
}
