import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";

export function About() {
  return (
    <section
      id="about"
      className="border-b border-border py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[var(--container-width)] px-6">
        <FadeIn>
          <SectionHeading eyebrow="Tentang Saya" title="About" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="max-w-2xl space-y-5 text-base leading-relaxed text-text-secondary sm:text-lg">
            <p>
              Saya Bayu Herlambang, fresh graduate jurusan Informatika yang
              berdomisili di Bekasi. Saya berfokus pada pengembangan aplikasi
              Android dan website — dari merancang struktur data, membangun
              antarmuka, sampai menghubungkannya ke backend.
            </p>
            <p>
              {/* TODO: ganti dengan cerita/pendekatan kerja asli kamu */}
              Ganti paragraf ini dengan cerita tentang bagaimana kamu mulai
              tertarik ngoding, project yang paling berkesan, atau pendekatan
              kamu saat membangun sebuah produk.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
