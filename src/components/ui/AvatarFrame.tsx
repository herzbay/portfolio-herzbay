import Image from "next/image";

export function AvatarFrame() {
  return (
    <div className="relative mx-auto aspect-[2/3] w-44 sm:w-52 md:w-60">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[var(--radius-lg)] opacity-40 blur-2xl"
        style={{ background: "var(--accent)" }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 animate-[spin_6s_linear_infinite] rounded-[var(--radius-lg)] bg-[conic-gradient(from_0deg,var(--accent),var(--accent-2),var(--accent))] transition-transform duration-500 ease-out hover:scale-105"
      />

      <div className="absolute inset-[4px] overflow-hidden rounded-[calc(var(--radius-lg)-4px)] border-2 border-background bg-gradient-to-br from-surface to-background">
        {
          <Image src="/images/avatar.webp" alt="Bayu Herlambang" fill className="object-cover" />
        }
      </div>
    </div>
  );
}