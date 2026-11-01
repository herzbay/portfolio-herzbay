
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { CertificationCard } from "@/components/ui/CertificationCard";
import { PageSwitcher } from "@/components/ui/PageSwitcher";
import { useLocale } from "@/lib/use-locale";

const PAGE_SIZE = 2;


const certifications = [
  {
    title: "Ethical Hacking Essentials",
    issuer: "EC-Council",
    year: "2026",
    image: "/images/c_ehe.jpg",
    description: {
      en: "Achieved a score of 96/100, demonstrating an understanding of fundamental cybersecurity concepts, common cyber threats, network security, and essential ethical hacking techniques.",
      id: "Memperoleh skor 96/100 dengan pemahaman mengenai konsep dasar keamanan siber, ancaman digital, keamanan jaringan, serta teknik dasar ethical hacking.",
    },
  },
  {
    title: "Web Developer",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    year: "2026",
    image: "/images/c_lsp.jpg",
    description: {
      en: "Demonstrates competency in web development, including website planning, implementation, and testing based on established professional competency standards.",
      id: "Menunjukkan kompetensi dalam pengembangan web, meliputi perencanaan, implementasi, dan pengujian website berdasarkan standar kompetensi kerja.",
    },
  },
  {
    title: "UI/UX Design",
    issuer: "PT Dibimbing Digital Indonesia",
    year: "2025",
    image: "/images/c_ui.jpg",
    description: {
      en: "Completed UI/UX design training covering user interface design, user experience principles, wireframing, prototyping, and designing user-centered digital experiences.",
      id: "Mengikuti pelatihan UI/UX Design yang mencakup perancangan antarmuka pengguna, prinsip pengalaman pengguna, wireframing, prototyping, serta pembuatan desain digital yang berorientasi pada kebutuhan pengguna.",
    },
  },
  {
    title: "Code Generation and Optimization",
    issuer: "Hacktiv8 & IBM",
    year: "2025",
    image: "/images/c_code.jpg",
    description: {
      en: "Completed training on using IBM Granite generative AI models for code generation and optimization, achieving a final score of 85.55/100.",
      id: "Menyelesaikan pelatihan penggunaan model AI generatif IBM Granite untuk pembuatan dan optimasi kode program, dengan memperoleh skor akhir 85,55/100.",
    },
  },
  {
    title: "English Competency Test",
    issuer: "Universitas Bhinneka Nusantara",
    year: "2025",
    image: "/images/c_english.jpg",
    description: {
      en: "Achieved a score of 550 in an English competency test assessing Listening Comprehension, Structure and Written Expression, and Reading Comprehension.",
      id: "Memperoleh skor 550 dalam tes kompetensi bahasa Inggris yang mencakup Listening Comprehension, Structure and Written Expression, serta Reading Comprehension.",
    },
  },
  {
    title: "Kaggle & Google Colab",
    issuer: "Universitas Bhinneka Nusantara",
    year: "2024",
    image: "/images/c_kaggle.jpg",
    description: {
      en: "Participated in a hands-on workshop introducing Kaggle and Google Colab for data science activities, including working with datasets and executing code in a cloud-based notebook environment.",
      id: "Mengikuti workshop praktik penggunaan Kaggle dan Google Colab untuk kegiatan data science, termasuk pengelolaan dataset dan menjalankan kode melalui lingkungan notebook berbasis cloud.",
    },
  },
];

const translations = {
  en: {
    eyebrow: "Credentials",
    title: "Certifications",
    pageLabel: "Certification pages",
  },
  id: {
    eyebrow: "Kredensial",
    title: "Sertifikasi",
    pageLabel: "Halaman sertifikasi",
  },
};

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
  }),
};

export function Certifications() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const { locale } = useLocale();

  const t = translations[locale];

  const totalPages = Math.ceil(certifications.length / PAGE_SIZE);
  const start = page * PAGE_SIZE;
  const currentItems = certifications.slice(start, start + PAGE_SIZE);

  function goTo(target: number) {
    if (target === page) return;

    setDirection(target > page ? 1 : -1);
    setPage(target);
  }

  return (
    <section
      id="certifications"
      className="border-b border-border py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[var(--container-width)] px-6">
        <FadeIn>
          <SectionHeading
            eyebrow={t.eyebrow}
            title={t.title}
          />
        </FadeIn>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2"
            >
              {currentItems.map((cert) => (
                <CertificationCard
                  key={cert.title}
                  certification={cert}
                  locale={locale}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {totalPages > 1 && (
          <div className="mt-8 flex justify-center">
            <PageSwitcher
              total={totalPages}
              active={page}
              onChange={goTo}
              label={t.pageLabel}
              name="certification-page"
            />
          </div>
        )}
      </div>
    </section>
  );
}
