import Image from "next/image";

// Poligon zigzag yang mensimulasikan sobekan kertas.
// Desktop: robekan diagonal (miring), sisi kanan penuh (full-bleed ke tepi layar).
const diagonalTornClip =
  "polygon(38% 0%,45% 4%,34% 9%,42% 15%,30% 20%,37% 26%,25% 32%,33% 38%,20% 44%,28% 50%,15% 56%,23% 62%,10% 68%,18% 74%,6% 80%,14% 86%,2% 92%,10% 100%,100% 100%,100% 0%)";

// Mobile: robekan horizontal (foto ditumpuk di bawah teks, penuh lebar layar).
const horizontalTornClip =
  "polygon(0% 15%,8% 8%,16% 18%,24% 6%,32% 16%,40% 4%,48% 14%,56% 2%,64% 12%,72% 0%,80% 10%,88% 3%,96% 13%,100% 5%,100% 100%,0% 100%)";

export function TornEdgePhoto() {
  return (
    <>
      {/* Desktop: panel foto full-bleed di kanan, robekan miring di sisi kiri */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/4 md:block"
        style={{ clipPath: diagonalTornClip }}
      >
        <div className="relative h-full w-full">
          {
            <Image src="/images/avatar.webp" alt="Bayu Herlambang" fill priority className="object-cover" />
          }
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface to-background font-[family-name:var(--font-heading)] text-6xl font-bold text-text-primary">
            BAYU
          </div>
        </div>
      </div>

      {/* Mobile: foto full-width di bawah teks, robekan horizontal di atas */}
      <div
        className="relative mt-10 aspect-[4/3] w-full md:hidden"
        style={{ clipPath: horizontalTornClip }}
      >
        {
            <Image src="/images/avatar.webp" alt="Bayu Herlambang" fill priority className="object-cover" />
        }
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface to-background font-[family-name:var(--font-heading)] text-5xl font-bold text-text-primary">
          BAYU
        </div>
      </div>
    </>
  );
}