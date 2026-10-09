import { ExperienceItem, Certification } from "@/types/portfolio";

// TODO: sesuaikan dengan riwayat pendidikan/pengalaman asli kamu
export const experience: ExperienceItem[] = [
  {
    title: "B.S. in Informatics",
    organization: "Your University",
    period: "Start Year — Graduation Year",
    description: "Fresh graduate in Informatics / Computer Science.",
    type: "education",
  },
];

// TODO: ganti placeholder dengan sertifikat asli
function placeholderCertification(index: number, date: string): Certification {
  return {
    title: `Certification Title ${index}`,
    issuer: "Issuing Organization",
    year: date,
    description:
      "Short description of what this certification covers — replace with the real summary.",
  };
}

export const certifications: Certification[] = [
  placeholderCertification(1, "Mar 2025"),
  placeholderCertification(2, "Feb 2025"),
  placeholderCertification(3, "Jan 2025"),
  placeholderCertification(4, "Nov 2024"),
  placeholderCertification(5, "Sep 2024"),
  placeholderCertification(6, "Jul 2024"),
  placeholderCertification(7, "May 2024"),
  placeholderCertification(8, "Mar 2024"),
  placeholderCertification(9, "Dec 2023"),
  placeholderCertification(10, "Oct 2023"),
  placeholderCertification(11, "Aug 2023"),
  placeholderCertification(12, "Jun 2023"),
];