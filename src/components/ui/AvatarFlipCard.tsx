import Image from "next/image";

export function AvatarFlipCard() {
  return (
    <div className="flip-card-wrap relative mx-auto aspect-[3/4] w-64 sm:w-72 md:w-[clamp(280px,24vw,380px)] lg:w-[clamp(320px,26vw,420px)]">
      <div className="flip-card-inner">
        <div className="flip-card-face flip-card-face-front">
          {/* TODO: ganti dengan foto asli — ini foto yang tampil sebelum di-hover */}
          <Image
            src="/images/mypp.webp"
            alt="Bayu Herlambang"
            fill
            sizes="(min-width: 1280px) 420px, (min-width: 768px) 380px, 70vw"
            className="object-cover"
          />
        </div>
        <div className="flip-card-face flip-card-face-back">
          {/* TODO: ganti dengan foto kedua — tampil saat card di-hover */}
          <Image
            src="/images/logonav.png"
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