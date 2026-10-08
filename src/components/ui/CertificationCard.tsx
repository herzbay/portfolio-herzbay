import Image from "next/image";
import { Award, ExternalLink } from "lucide-react";
import type { Certification } from "@/types/portfolio";

export function CertificationCard({
  certification,
}: {
  certification: Certification;
}) {
  return (
    <div className="cert-card">
      <div className="cert-card-visual">
        {certification.image ? (
          <Image
            src={certification.image}
            alt={certification.title}
            fill
            sizes="(min-width: 768px) 320px, 90vw"
            className="object-cover"
          />
        ) : (
          <Award className="h-10 w-10 text-accent" strokeWidth={1.5} />
        )}
      </div>

      <div className="cert-card-content">
        <p className="cert-card-title">{certification.title}</p>
        <p className="cert-card-meta">
          {certification.issuer} &middot; {certification.year}
        </p>
        {certification.description && (
          <p className="cert-card-description">{certification.description}</p>
        )}
        {certification.url && (
          <a
            href={certification.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
          >
            View credential <ExternalLink size={12} />
          </a>
        )}
      </div>
    </div>
  );
}