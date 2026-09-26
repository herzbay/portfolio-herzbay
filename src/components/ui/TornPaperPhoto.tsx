import Image from "next/image";

export function TornPaperPhoto() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-64 sm:w-80 md:w-full md:max-w-sm">
      {/* Glow lembut di belakang, warna ikut tema aktif */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 rounded-[var(--radius-lg)] opacity-50 blur-3xl"
        style={{
          background:
            "linear-gradient(135deg, var(--accent), var(--accent-2))",
        }}
      />

      {/* Foto — layer utama, mengisi container di belakang frame */}
      <div className="absolute inset-[8%] overflow-hidden">
        {
          <Image
            src="/images/avatar.webp"
            alt="Bayu Herlambang"
            fill
            sizes="(min-width: 768px) 380px, 60vw"
            className="object-cover"
          />
        }
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface to-background font-[family-name:var(--font-heading)] text-6xl font-bold text-text-primary">
          BAYU
        </div>
      </div>

      {/* Torn paper frame — asset WEBP, transparan di tengah, layer di atas foto */}
      <Image
        src="/images/frames/torn-paper.webp"
        alt=""
        aria-hidden="true"
        fill
        sizes="(min-width: 768px) 380px, 60vw"
        className="pointer-events-none select-none object-contain"
      />
    </div>
  );
}