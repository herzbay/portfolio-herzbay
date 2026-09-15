import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/motion/SmoothScroll";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

// TODO: ganti dengan nama, role, dan deskripsi asli sebelum deploy
export const metadata: Metadata = {
  title: "Nama Kamu — Software Engineer & Mobile Developer",
  description:
    "Portofolio Nama Kamu, Software Engineer yang fokus pada pengembangan Android dan Website.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const noFlashScript = `
    try {
      var theme = localStorage.getItem('theme');
      var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      if (theme === 'light' || (theme === null && prefersLight)) {
        document.documentElement.classList.add('light');
      }
    } catch (e) {}
  `;

  return (
    <html
      lang="id"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-text-primary">
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
