import { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "sizinus",
    title: "Sizinus",
    description:
      "Aplikasi mobile Android yang membantu pelaku UMKM memahami dan mensimulasikan proses perizinan usaha, lengkap dengan rekomendasi izin dan panduan usaha yang dipersonalisasi.",
    problem:
      "Pelaku UMKM sering kesulitan memahami alur dan jenis perizinan usaha yang perlu diurus, sehingga proses perizinan terasa rumit dan tidak jelas.",
    role: "Mobile Developer (Solo Project)",
    technologies: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore"],
    features: [
      "Simulasi perizinan usaha (khusus NIB) melalui stepper interaktif",
      "Rekomendasi izin usaha berbasis algoritma decision tree (rule based)",
      "Panduan usaha dengan adaptive learning path (rule based)",
      "Sistem gamifikasi: reward, mission, dan leaderboard realtime multi-user",
      "Riwayat simulasi dan manajemen profil pengguna",
    ],
    // TODO: ganti dengan screenshot asli aplikasi
    image: "/images/sizinus-cover.webp",
    // TODO: isi jika ada live demo / GitHub repo publik
    liveUrl: undefined,
    githubUrl: undefined,
    featured: true,
  },
  {
    slug: "project-website-kamu",
    title: "Nama Project Website Kamu",
    description:
      "Deskripsi singkat project website ini — ganti dengan deskripsi asli sebelum publish.",
    role: "Web Developer",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Ganti dengan fitur utama #1",
      "Ganti dengan fitur utama #2",
      "Ganti dengan fitur utama #3",
    ],
    // TODO: ganti dengan screenshot asli
    image: "/images/project-placeholder.webp",
    // TODO: isi dengan URL asli
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username-kamu/repo-kamu",
    featured: true,
  },
];
