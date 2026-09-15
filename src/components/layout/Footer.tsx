import { socialLinks } from "@/data/social";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[var(--container-width)] flex-col items-center gap-4 px-6 py-10 sm:flex-row sm:justify-between">
        <p className="text-sm text-text-muted">
          © {year} Bayu Herlambang. All rights reserved.
        </p>
        <SocialLinks links={socialLinks} />
      </div>
    </footer>
  );
}
