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
        "End-to-end web and Android development, clean architecture, reliable backends, and polished interfaces built for real users.",
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
        "Pengembangan aplikasi web dan Android secara menyeluruh — arsitektur yang rapi, backend yang andal, dan antarmuka yang nyaman digunakan.",
      viewProjects: "Lihat Proyek",
      downloadCv: "Unduh CV",
      getInTouch: "Hubungi Saya",
    },
  },
} as const;