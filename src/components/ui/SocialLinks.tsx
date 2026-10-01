import Link from "next/link";
import { Mail, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/BrandIcons";
import type { SocialLink } from "@/types/portfolio";
import { cn } from "@/lib/utils";

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
  instagram: InstagramIcon,
  x: Globe,
  globe: Globe,
};

type SocialLinksProps = {
  links: SocialLink[];
  className?: string;
};

export function SocialLinks({ links, className }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {links.map((link) => {
        const Icon = iconMap[link.icon];
        const isExternal = link.url.startsWith("http");
        return (
          <Link
            key={link.label}
            href={link.url}
            aria-label={link.label}
            {...(isExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="shine-btn flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Icon size={18} strokeWidth={1.75} />
          </Link>
        );
      })}
    </div>
  );
}