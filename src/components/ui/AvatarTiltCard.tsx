import Image from "next/image";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/BrandIcons";
import { Sparkle } from "@/components/ui/Sparkle";
import { socialLinks } from "@/data/social";

const socialIconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  mail: Mail,
} as const;

export function AvatarTiltCard() {
  return (
    <div className="tilt-card-wrap relative mx-auto aspect-[29/30] w-72 sm:w-80 md:w-[clamp(360px,30vw,480px)] lg:w-[clamp(400px,32vw,520px)]">
      <div className="tilt-card">
        <div className="tilt-card-logo">
          <span className="tilt-card-circle tilt-card-circle-1" />
          <span className="tilt-card-circle tilt-card-circle-2" />
          <span className="tilt-card-circle tilt-card-circle-3" />
          <span className="tilt-card-circle tilt-card-circle-4" />
          <span className="tilt-card-circle tilt-card-circle-5">
            <Sparkle className="h-[45%] w-[45%]" />
          </span>
        </div>

        <div className="tilt-card-photo">
          <Image
            src="/images/logonav.png"
            alt="Bayu Herlambang"
            fill
            sizes="(min-width: 1280px) 520px, (min-width: 768px) 480px, 80vw"
            className="object-cover"
          />
        </div>

        <div className="tilt-card-bottom">
          <div className="tilt-card-socials">
            {socialLinks
              .filter((link): link is typeof link & { icon: keyof typeof socialIconMap } =>
                link.icon in socialIconMap
              )
              .map((link) => {
                const Icon = socialIconMap[link.icon];
                const isExternal = link.url.startsWith("http");
                return (
                  <a
                    key={link.label}
                    href={link.url}
                    aria-label={link.label}
                    {...(isExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="tilt-card-social-btn"
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}