import Image from "next/image";

export function AvatarFrame() {
  return (
    <div className="relative mx-auto aspect-square w-52 sm:w-64 md:w-72">
      {/* Glow di belakang */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full opacity-40 blur-2xl"
        style={{ background: "var(--accent)" }}
      />

      {/* Rotating gradient ring — interaktif, membesar saat hover */}
      <div
        aria-hidden="true"
        className="absolute inset-0 animate-[spin_6s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,var(--accent),var(--accent-2),var(--accent))] transition-transform duration-500 ease-out hover:scale-105"
      />

      {/* Frame foto */}
      <div className="absolute inset-[6px] overflow-hidden rounded-full border-2 border-background bg-gradient-to-br from-surface to-background">
        {
          <Image src="/images/avatar.webp" alt="Bayu Herlambang" fill className="object-cover" />
        }
      </div>
    </div>
  );
}