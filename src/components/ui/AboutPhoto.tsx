import Image from "next/image";

export function AboutPhoto() {
  return (
    <div className="stack-card mx-auto md:mx-0 md:justify-self-end">
      <div className="stack-card-front">
        <div className="stack-card-image">
          <Image
            src="/images/aboutpp.webp"
            alt="Bayu Herlambang"
            fill
            sizes="(min-width: 768px) 340px, 80vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}