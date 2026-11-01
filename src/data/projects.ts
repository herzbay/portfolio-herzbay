import { Project, ProjectCategory } from "@/types/portfolio";

export const categories: { key: ProjectCategory; label: string }[] = [
  { key: "website", label: "Website" },
  { key: "mobile", label: "Mobile" },
  { key: "ui-design", label: "UI Design" },
  { key: "machine-learning", label: "Machine Learning" },
  { key: "iot", label: "Internet of Think (IoT)" },
];

const categoryLabel: Record<ProjectCategory, string> = Object.fromEntries(
  categories.map((c) => [c.key, c.label])
) as Record<ProjectCategory, string>;

// TODO: ganti setiap placeholder ini dengan project asli kamu
function placeholder(category: ProjectCategory, index: number): Project {
  const label = categoryLabel[category];
  return {
    slug: `${category}-placeholder-${index}`,
    title: `${label} Project ${index}`,
    description:
      "Short description of this project",
    role: "Developer",
    technologies: ["Tech A", "Tech B"],
    features: ["Replace with key feature #1", "Replace with key feature #2"],
    image: "/images/project-placeholder.webp",
    githubUrl: "https://github.com/herzbay",
    liveUrl: undefined,
    category,
    featured: true,
  };
}

export const projects: Project[] = [
  // Mobile
  {
    slug: "sizinus",
    title: "SIZINUS",
    description: {
      en: "An Android-based business licensing simulation and learning application designed to help MSMEs understand business legality through interactive, adaptive, and gamified learning experiences.",
      id: "Aplikasi simulasi dan pembelajaran perizinan usaha berbasis Android yang dirancang untuk membantu pelaku UMKM memahami legalitas usaha melalui pengalaman belajar yang interaktif, adaptif, dan berbasis gamifikasi.",
    },
    technologies: [
      "Flutter",
      "Dart",
      "Firebase Authentication",
      "Cloud Firestore",
    ],
    features: {
      en: [
        "Step-by-step business licensing simulation with form validation and progress tracking",
        "Business permit recommendations using a Rule-Based Decision Tree",
        "Adaptive learning paths with gamification features such as XP, levels, badges, missions, and leaderboards",
      ],
      id: [
        "Simulasi perizinan usaha bertahap dengan validasi formulir dan pelacakan progres",
        "Rekomendasi perizinan usaha menggunakan Rule-Based Decision Tree",
        "Jalur pembelajaran adaptif dengan fitur gamifikasi seperti XP, level, badge, misi, dan leaderboard",
      ],
    },
    image: "/images/app-sizinus.webp",
    githubUrl: "https://github.com/herzbay/sizinus",
    category: "mobile",
    featured: true,
  },
  {
    slug: "maze-journey",
    title: "Maze Journey",
    description: {
      en: "An Android-based maze puzzle game developed with Kotlin, featuring progressive challenges, time-based scoring, motion-based controls, and sensor-responsive gameplay.",
      id: "Game puzzle labirin berbasis Android yang dikembangkan menggunakan Kotlin, dengan tantangan bertingkat, sistem skor berbasis waktu, kontrol berbasis gerakan, dan gameplay yang merespons sensor perangkat.",
    },
    technologies: [
      "Kotlin",
      "Android Studio",
    ],
    features: {
      en: [
        "Progressive maze challenges with a 60-second countdown timer and time-based scoring",
        "Multiple navigation controls using on-screen buttons, gyroscope, and accelerometer",
        "Light sensor integration for dynamic visibility in dark maze levels",
      ],
      id: [
        "Tantangan labirin bertingkat dengan hitung mundur 60 detik dan sistem skor berdasarkan sisa waktu",
        "Pilihan kontrol navigasi melalui tombol layar, gyroscope, dan accelerometer",
        "Integrasi light sensor untuk mengatur visibilitas secara dinamis pada level labirin gelap",
      ],
    },
    image: "/images/app-maze.webp",
    githubUrl: "https://github.com/herzbay/maze-app",
    category: "mobile",
    featured: true,
  },

  // Website
  {
    slug: "newstechly",
    title: "NEWSTECHLY",
    description: {
      en: "A technology news portal built with CodeIgniter 4 that integrates gamification to increase reader interaction and engagement.",
      id: "Portal berita teknologi berbasis CodeIgniter 4 yang mengintegrasikan gamifikasi untuk meningkatkan interaksi dan keterlibatan pembaca.",
    },
    technologies: [
      "CodeIgniter",
      "PHP",
      "MySQL",
      "Tailwind CSS",
      "JavaScript",
    ],
    features: {
      en: [
        "News content management through an integrated admin dashboard",
        "Reader interactions through likes, comments, and shares with a points system",
        "Leaderboard ranking users based on accumulated points",
      ],
      id: [
        "Pengelolaan konten berita melalui dashboard admin",
        "Interaksi pembaca melalui fitur suka, komentar, dan berbagi dengan sistem poin",
        "Papan peringkat pengguna berdasarkan akumulasi poin",
      ],
    },
    image: "/images/app-news.png",
    githubUrl: "https://github.com/herzbay/technews-portal-berita",
    category: "website",
    featured: true,
  },
  {
    slug: "auctionary",
    title: "AUCTIONARY",
    description: {
      en: "A web-based auction management application that streamlines administrative processes through an integrated dashboard for managing auction items and user accounts.",
      id: "Aplikasi web manajemen lelang yang membantu proses administrasi melalui dashboard terintegrasi untuk mengelola barang lelang dan akun pengguna.",
    },
    technologies: [
      "Laravel",
      "PHP",
      "Blade",
      "Tailwind CSS",
      "JavaScript",
    ],
    features: {
      en: [
        "Auction item management, including owner details, descriptions, and prices",
        "User account and user type management",
        "Authenticated administrative dashboard for centralized data management",
      ],
      id: [
        "Pengelolaan data barang lelang, termasuk informasi pemilik, deskripsi, dan harga",
        "Pengelolaan akun pengguna dan jenis pengguna",
        "Dashboard admin dengan autentikasi untuk pengelolaan data terpusat",
      ],
    },
    image: "/images/app-auctionary.png",
    githubUrl: "https://github.com/herzbay/laravel-auctionary",
    category: "website",
    featured: true,
  },
  {
    slug: "selwa",
    title: "SELWA",
    description: {
      en: "A machine learning-based web application designed to support university scholarship selection by classifying applicants based on academic and socioeconomic criteria.",
      id: "Aplikasi web berbasis machine learning yang dirancang untuk mendukung proses seleksi beasiswa perguruan tinggi melalui klasifikasi calon penerima berdasarkan kriteria akademik dan sosial ekonomi.",
    },
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
    ],
    features: {
      en: [
        "Scholarship applicant classification using the CatBoost algorithm",
        "Applicant evaluation based on GPA, household income, and number of dependents",
        "Responsive web interface for submitting applicant data and viewing predictions",
      ],
      id: [
        "Klasifikasi calon penerima beasiswa menggunakan algoritma CatBoost",
        "Penilaian calon penerima berdasarkan IPK, penghasilan keluarga, dan jumlah tanggungan",
        "Antarmuka web responsif untuk memasukkan data calon penerima dan melihat hasil prediksi",
      ],
    },
    image: "/images/app-selwa.png",
    githubUrl: "https://github.com/herzbay/seleksi-beasiswa",
    category: "website",
    featured: true,
  },

  // UI Design
  placeholder("ui-design", 1),
  placeholder("ui-design", 2),
  placeholder("ui-design", 3),

  // Machine Learning
  placeholder("machine-learning", 1),
  placeholder("machine-learning", 2),
  placeholder("machine-learning", 3),

  // IoT
  placeholder("iot", 1),
  placeholder("iot", 2),
  placeholder("iot", 3),
];