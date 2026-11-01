"use client";

import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
} from "@/components/ui/BrandIcons";
import { contactEmail } from "@/data/social";
import { useLocale } from "@/lib/use-locale";

const socialAccounts = [
  {
    name: "GitHub",
    username: "herzbay",
    url: "https://github.com/herzbay",
    displayUrl: "github.com/herzbay",
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    username: "Bayu Herlambang",
    url: "https://www.linkedin.com/in/bayher",
    displayUrl: "linkedin.com/in/bayher",
    icon: LinkedinIcon,
  },
  {
    name: "Instagram",
    username: "@herzbay",
    url: "https://www.instagram.com/herzbay",
    displayUrl: "instagram.com/herzbay",
    icon: InstagramIcon,
  },
];

const translations = {
  en: {
    eyebrow: "Contact",
    title: "Let's Talk",
    description:
      "I'm open to new opportunities, professional collaborations, and meaningful conversations about technology and development.",
    socialTitle: "Connect With Me",
  },
  id: {
    eyebrow: "Kontak",
    title: "Mari Terhubung",
    description:
      "Saya terbuka terhadap peluang karier, kolaborasi profesional, dan diskusi seputar teknologi serta pengembangan aplikasi.",
    socialTitle: "Terhubung Dengan Saya",
  },
};

export function Contact() {
  const { locale } = useLocale();
  const t = translations[locale];

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-[var(--container-width)] px-6">
        <FadeIn>
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left: Contact introduction */}
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                eyebrow={t.eyebrow}
                title={t.title}
                description={t.description}
              />

              <Button href={`mailto:${contactEmail}`}>
                <Mail size={16} />
                {contactEmail}
                <ArrowUpRight size={15} />
              </Button>
            </div>

            {/* Right: Social media cards */}
            <div>
              <h3 className="mb-5 text-sm font-medium text-text-secondary">
                {t.socialTitle}
              </h3>

              <div className="flex flex-col gap-3">
                {socialAccounts.map((social) => {
                  const Icon = social.icon;

                  return (
                    <Link
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-[var(--radius-md)] border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent-2 hover:shadow-[var(--glow-accent-2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-accent-2/20 bg-accent-2-soft text-accent-2 transition-transform duration-300 group-hover:scale-105">
                        <Icon size={21} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-text-primary">
                          {social.name}
                        </p>

                        <p className="mt-0.5 text-sm text-text-secondary">
                          {social.username}
                        </p>

                        <p className="mt-1 truncate text-xs text-text-muted transition-colors duration-300 group-hover:text-accent-2">
                          {social.displayUrl}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={18}
                        className="shrink-0 text-text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-2"
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
