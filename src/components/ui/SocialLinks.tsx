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
          <div key={link.label} className="group relative">
            <Link
              href={link.url}
              aria-label={link.label}
              {...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="shine-btn flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Icon size={18} strokeWidth={1.75} />
            </Link>

            {/* Tooltip bubble — sibling dari link supaya tidak terpotong overflow-hidden */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md bg-text-primary px-2.5 py-1 text-xs font-medium text-background opacity-0 shadow-lg transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100"
            >
              {link.label}
              <span className="absolute left-1/2 top-full -mt-1 h-2 w-2 -translate-x-1/2 rotate-45 bg-text-primary" />
            </span>
          </div>
        );
      })}
    </div>
  );
}