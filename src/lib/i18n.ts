export type Locale = "en" | "id";

export const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      certifications: "Certifications",
      contact: "Contact",
    },
    hero: {
      role: "Full Stack Engineer",
      description:
        "Crafting intuitive web and mobile applications through clean architecture, purposeful design, and technology built to scale.",
      viewProjects: "View Projects",
      downloadCv: "Download CV",
      getInTouch: "Get In Touch",
    },
  },
  id: {
    nav: {
      about: "Tentang",
      skills: "Keahlian",
      projects: "Proyek",
      experience: "Pengalaman",
      certifications: "Sertifikat",
      contact: "Kontak",
    },
    hero: {
      role: "Full Stack Engineer",
      description:
        "Membangun aplikasi web dan seluler yang intuitif melalui arsitektur yang bersih, desain yang terarah, dan teknologi yang dirancang untuk skalabilitas.",
      viewProjects: "Lihat Proyek",
      downloadCv: "Unduh CV",
      getInTouch: "Hubungi Saya",
    },
  },
} as const;