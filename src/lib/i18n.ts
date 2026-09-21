export type Locale = "en" | "id";

export const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      role: "Full Stack Engineer",
      description:
        "I design and build end-to-end digital products — from Android apps to modern web platforms — turning ideas into fast, reliable, and user-friendly software.",
      viewProjects: "View Projects",
      getInTouch: "Get In Touch",
    },
  },
  id: {
    nav: {
      about: "Tentang",
      skills: "Keahlian",
      projects: "Proyek",
      experience: "Pengalaman",
      contact: "Kontak",
    },
    hero: {
      role: "Full Stack Engineer",
      description:
        "Saya merancang dan membangun produk digital secara menyeluruh — dari aplikasi Android hingga platform web modern — mengubah ide menjadi software yang cepat, andal, dan ramah pengguna.",
      viewProjects: "Lihat Proyek",
      getInTouch: "Hubungi Saya",
    },
  },
} as const;