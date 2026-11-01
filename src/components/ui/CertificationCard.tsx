
import Image from "next/image";
import { Award, ExternalLink } from "lucide-react";

type CertificationData = {
  title: string;
  issuer: string;
  year: string;
  image?: string;
  description: {
    en: string;
    id: string;
  };
  url?: string;
};

export function CertificationCard({
  certification,
  locale,
}: {
  certification: CertificationData;
  locale: "en" | "id";
}) {
  return (
    <div className="cert-card">
      <div className="cert-card-visual">
        {certification.image ? (
          <Image
            src={certification.image}
            alt={`${certification.issuer} logo`}
            fill
            sizes="(min-width: 768px) 320px, 90vw"
            className="object-contain p-10"
          />
        ) : (
          <Award className="h-10 w-10 text-accent" strokeWidth={1.5} />
        )}
      </div>

      <div className="cert-card-content">
        <p className="cert-card-title">
          {certification.title}
        </p>

        <p className="cert-card-meta">
          {certification.issuer} &middot; {certification.year}
        </p>

        <p className="cert-card-description">
          {certification.description[locale]}
        </p>

        {certification.url && (
          <a
            href={certification.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
          >
            {locale === "id" ? "Lihat Sertifikat" : "View Credential"}
            <ExternalLink size={12} />
          </a>
        )}
      </div>
    </div>
  );
}
