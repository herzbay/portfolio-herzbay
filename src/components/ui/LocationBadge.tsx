import { MapPin } from "lucide-react";

export function LocationBadge({ label }: { label: string }) {
  return (
    <div className="inline-flex rounded-full bg-border p-[1px]">
      <span className="flex items-center gap-2 rounded-full bg-gradient-to-b from-[color:var(--btn-from)] to-[color:var(--btn-to)] px-5 py-2.5 text-sm font-medium text-[color:var(--btn-text)] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
        <MapPin size={16} className="text-accent" aria-hidden="true" />
        {label}
      </span>
    </div>
  );
}