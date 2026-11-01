import type { Certification, ExperienceItem } from "@/types/portfolio";

export const experience: ExperienceItem[] = [
  // EDUCATION
  {
    id: "education-ubhinus",
    type: "education",
    organization: {
      en: "Universitas Bhinneka Nusantara (formerly STIKI Malang)",
      id: "Universitas Bhinneka Nusantara (d.h. STIKI Malang)",
    },
    location: "Malang, Indonesia",
    period: "Sep 2022 — Aug 2026",
    title: {
      en: "Bachelor of Informatics",
      id: "S1 Informatika",
    },
    subtitle: {
      en: "GPA: 3.76/4.00",
      id: "IPK: 3,76/4,00",
    },
    logo: "/images/logo_ubhinus.webp",
    bullets: {
      en: [
        "Showcased projects in web development, IoT, and machine learning at the TechnoFest and ICIE technology exhibitions.",
      ],
      id: [
        "Menampilkan dan mempresentasikan proyek pengembangan web, IoT, dan machine learning dalam pameran teknologi TechnoFest dan ICIE.",
      ],
    },
    competencies: {
      en: [
        "Web Development",
        "Mobile Application Development",
        "Database Management",
        "IT Project Management",
        "Information Security",
      ],
      id: [
        "Pengembangan Web",
        "Pengembangan Aplikasi Mobile",
        "Manajemen Basis Data",
        "Manajemen Proyek TI",
        "Keamanan Informasi",
      ],
    },
  },

  // WORK EXPERIENCE: LABORATORY TEACHING ASSISTANT
  {
    id: "work-lab-assistant",
    type: "work",
    organization: {
      en: "Universitas Bhinneka Nusantara",
      id: "Universitas Bhinneka Nusantara",
    },
    location: "Malang, Indonesia",
    period: "Sep 2025 — Jan 2026",
    title: {
      en: "Laboratory Teaching Assistant",
      id: "Asisten Laboratorium",
    },
    subtitle: {
      en: "Advanced Database & Algorithms and Programming I Course",
      id: "Mata Kuliah Basis Data Lanjut & Algoritma dan Pemrograman I",
    },
    logo: "/images/logo_ubhinus.webp",
    bullets: {
      en: [
        "Guided students through practical sessions in Advanced Database and Algorithms & Programming I, covering database management, SQL, algorithms, and programming fundamentals.",
        "Assisted students in troubleshooting database and programming issues, including SQL queries, code debugging, and logical problem-solving.",
        "Evaluated practical assignments and provided feedback to assess student performance and improve technical understanding.",
      ],
      id: [
        "Membimbing mahasiswa dalam praktikum Basis Data Lanjut serta Algoritma dan Pemrograman I, mencakup pengelolaan basis data, SQL, algoritma, dan dasar pemrograman.",
        "Membantu mahasiswa mengatasi kendala basis data dan pemrograman, termasuk penyusunan query SQL, debugging kode, dan pemecahan masalah logika.",
        "Menilai tugas praktikum serta memberikan umpan balik untuk mengevaluasi dan meningkatkan pemahaman teknis mahasiswa.",
      ],
    },
  },

  // WORK EXPERIENCE: WINNICODE
  {
    id: "work-winnicode",
    type: "work",
    organization: {
      en: "PT Winnicode Garuda Teknologi",
      id: "PT Winnicode Garuda Teknologi",
    },
    location: "Bandung, Indonesia",
    period: "Feb 2025 — Jul 2025",
    title: {
      en: "Full Stack Developer Intern",
      id: "Magang Full Stack Developer",
    },
    subtitle: {
      en: "Media and digital services company specializing in software development and journalism.",
      id: "Perusahaan media dan layanan digital yang berfokus pada pengembangan perangkat lunak dan jurnalistik.",
    },
    logo: "/images/logo_winnicode.webp",
    bullets: {
      en: [
        "Developed a web-based news portal using PHP and CodeIgniter 4, implementing gamification features such as likes, comments, a points system, and leaderboards to enhance user engagement.",
        "Built and integrated frontend and backend functionality using HTML, CSS, JavaScript, and Tailwind CSS, with MySQL for database management, including an admin panel for managing news content and platform data.",
      ],
      id: [
        "Mengembangkan portal berita berbasis web menggunakan PHP dan CodeIgniter 4, dengan fitur gamifikasi seperti likes, komentar, sistem poin, dan leaderboard untuk meningkatkan keterlibatan pengguna.",
        "Membangun dan mengintegrasikan fungsionalitas frontend dan backend menggunakan HTML, CSS, JavaScript, dan Tailwind CSS, serta MySQL untuk pengelolaan basis data, termasuk panel admin untuk mengelola konten berita dan data platform.",
      ],
    },
  },
];

export const certifications: Certification[] = [
  {
    title: "Ethical Hacking Essentials (EHE)",
    issuer: "EC-Council",
    year: "2026",
  },
  {
    title: "Web Developer",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    year: "2026",
  },
];