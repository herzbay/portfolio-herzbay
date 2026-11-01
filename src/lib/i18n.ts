export type Locale = "en" | "id";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
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
    about: {
      eyebrow: "About Me",
      title: "About",
      paragraphs: [
        "Hello! I'm Bayu Herlambang, a 2026 graduate of the Bachelor's program in Informatics with a GPA of 3.76/4.00. I have a strong interest and competence in web and mobile application development, focusing on building digital solutions that are responsive, functional, and centered on user needs.",
        "I have experience developing applications with a range of modern technologies, applying clean code principles, problem-solving, and structured software development. I'm eager to keep growing as a Full-Stack Developer, collaborate within a team, and contribute to creating innovative digital products that deliver real value to users and companies.",
      ],
      location: "Bekasi, West Java, Indonesia",
    },
  },
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      experience: "Pengalaman",
      skills: "Keahlian",
      projects: "Proyek",
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
    about: {
      eyebrow: "Tentang Saya",
      title: "Tentang",
      paragraphs: [
        "Halo! Saya Bayu Herlambang, lulusan S1 Informatika tahun 2026 dengan IPK 3,76/4,00. Saya memiliki ketertarikan dan kompetensi dalam pengembangan aplikasi web dan mobile, dengan fokus pada pembangunan solusi digital yang responsif, fungsional, dan berorientasi pada kebutuhan pengguna.",
        "Saya memiliki pengalaman dalam mengembangkan aplikasi dengan memanfaatkan berbagai teknologi modern serta menerapkan prinsip clean code, problem-solving, dan pengembangan perangkat lunak yang terstruktur. Saya bersemangat untuk terus mengembangkan kompetensi sebagai Full-Stack Developer, berkolaborasi dalam tim, dan berkontribusi menciptakan produk digital yang inovatif serta memberikan nilai nyata bagi pengguna dan perusahaan.",
      ],
      location: "Bekasi, Jawa Barat, Indonesia",
    },
  },
} as const;