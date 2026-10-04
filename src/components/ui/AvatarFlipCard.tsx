import Image from "next/image";

export function AvatarFlipCard() {
  return (
    <div className="flip-card-wrap group relative mx-auto aspect-square w-64 sm:w-72 md:w-[clamp(280px,24vw,380px)] lg:w-[clamp(320px,26vw,420px)]">
      <span className="flip-card-border-static" aria-hidden="true" />
      <span className="flip-card-border-glow" aria-hidden="true" />

      <div className="flip-card-inner relative z-10">
        <div className="flip-card-face flip-card-face-front">
          <Image
            src="/images/logonav.webp"
            alt="Bayu Herlambang"
            fill
            sizes="(min-width: 1280px) 420px, (min-width: 768px) 380px, 70vw"
            className="object-cover"
          />
        </div>
        <div className="flip-card-face flip-card-face-back">
          <Image
            src="/images/mypp.webp"
            alt="Bayu Herlambang"
            fill
            sizes="(min-width: 1280px) 420px, (min-width: 768px) 380px, 70vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}