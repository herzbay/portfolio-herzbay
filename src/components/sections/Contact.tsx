import { Mail } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { socialLinks, contactEmail } from "@/data/social";

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-[var(--container-width)] px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="Kontak"
            title="Let's Talk"
            description="Terbuka untuk peluang kerja, kolaborasi project, atau sekadar diskusi seputar development."
          />

          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <Button href={`mailto:${contactEmail}`}>
              <Mail size={16} /> {contactEmail}
            </Button>
            <SocialLinks links={socialLinks} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
