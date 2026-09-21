"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageSwitch } from "@/components/ui/LanguageSwitch";
import { Sparkle } from "@/components/ui/Sparkle";
import { useLocale } from "@/lib/use-locale";

const navItems = [
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "experience", href: "#experience" },
  { key: "contact", href: "#contact" },
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLocale();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/60 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[var(--container-width)] items-center justify-between px-6 py-4">
        <Link href="#" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-[var(--radius-sm)] bg-accent text-accent-contrast shadow-[var(--glow-accent)]">
            <Sparkle className="h-4 w-4" />
          </span>
          <span className="font-[family-name:var(--font-heading)] text-lg font-semibold text-text-primary">
            Portfolio
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <ul className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-text-secondary transition-colors hover:text-accent"
                >
                  {t.nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>

          <span
            className="hidden h-5 w-px bg-border md:block"
            aria-hidden="true"
          />

          <LanguageSwitch />
          <ThemeToggle />

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] text-text-primary md:hidden"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="flex flex-col gap-4 border-t border-border bg-background px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-[var(--radius-sm)] px-2 py-3 text-base text-text-secondary hover:text-accent"
                >
                  {t.nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageSwitch />
        </div>
      )}
    </header>
  );
}