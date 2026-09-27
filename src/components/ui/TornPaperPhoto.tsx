import Image from "next/image";

export function TornPaperPhoto() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-72 sm:w-80 md:w-[clamp(360px,30vw,560px)] lg:w-[clamp(420px,32vw,640px)]">
      {/* Glow lembut di belakang, warna ikut tema aktif */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 rounded-[var(--radius-lg)] opacity-50 blur-3xl"
        style={{
          background:
            "linear-gradient(135deg, var(--accent), var(--accent-2))",
        }}
      />

      {/* Foto — di-mask mengikuti bentuk lubang sobekan */}
      <div
        className="absolute inset-0"
        style={{
          WebkitMaskImage: "url(/images/frames/torn-hole-mask.webp)",
          maskImage: "url(/images/frames/torn-hole-mask.webp)",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      >
        <Image
          src="/images/mypp.webp"
          alt="Bayu Herlambang"
          fill
          sizes="(min-width: 1280px) 680px, (min-width: 768px) 560px, 80vw"
          className="object-cover"
        />
      </div>

      {/* Torn paper frame */}
      <Image
        src="/images/frames/torn-paper-frame.webp"
        alt=""
        aria-hidden="true"
        fill
        sizes="(min-width: 1280px) 680px, (min-width: 768px) 560px, 80vw"
        className="pointer-events-none select-none object-cover"
      />
    </div>
  );
}