import type { Metadata } from "next";
import { Unbounded, Montserrat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/motion/SmoothScroll";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://bayuherlambang.dev"; // TODO: ganti dengan domain asli
const title = "Bayu Herlambang — Full Stack Developer";
const description =
  "Portfolio of Bayu Herlambang, a Full Stack Developer specializing in web and mobile application development — from Android apps to modern web platforms.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Bayu Herlambang",
    "Full Stack Developer",
    "Android Developer",
    "Web Developer",
    "Software Engineer",
    "Flutter Developer",
    "Next.js Developer",
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Bayu Herlambang Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
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
      lang="en"
      className={`${unbounded.variable} ${montserrat.variable} ${jetbrainsMono.variable} h-full antialiased`}
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