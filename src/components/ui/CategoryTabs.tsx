import { cn } from "@/lib/utils";
import type { ProjectCategory } from "@/types/portfolio";

type CategoryTabsProps = {
  categories: { key: ProjectCategory; label: string }[];
  active: ProjectCategory;
  onSelect: (category: ProjectCategory) => void;
};

export function CategoryTabs({ categories, active, onSelect }: CategoryTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Project categories"
      className="mb-10 flex flex-wrap gap-2"
    >
      {categories.map((category) => (
        <button
          key={category.key}
          type="button"
          role="tab"
          aria-selected={active === category.key}
          onClick={() => onSelect(category.key)}
          className={cn(
            "rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200",
            active === category.key
              ? "border-accent bg-accent text-[var(--accent-contrast)]"
              : "border-border text-text-secondary hover:border-accent hover:text-accent"
          )}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}