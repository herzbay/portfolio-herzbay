# Portfolio Website — Bayu Herlambang

## Overview

Website portofolio personal untuk Bayu Herlambang, Software Engineer (Android & Web Developer). Single-page portfolio dengan anchor navigation, dibangun dengan visual dark/minimal/developer-editorial.

## Features

- Hero, About, Skills, Featured Projects, Experience/Education, Contact, Footer
- Smooth scroll (Lenis) & scroll-reveal animation (Framer Motion)
- Data-driven content — tambah project/skill tanpa mengubah markup
- Responsive (mobile, tablet, desktop)
- Menghormati `prefers-reduced-motion`

## Tech Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (`motion`)
- Lenis (smooth scroll)
- Lucide React (icon)

## Getting Started

\`\`\`bash
npm install
npm run dev
\`\`\`

Buka http://localhost:3000

## Environment Variables

Belum ada environment variable wajib untuk MVP. Jika menambahkan integrasi (mis. form contact ke email service), simpan di `.env.local` (tidak di-commit).

## Development

\`\`\`bash
npm run lint    # cek lint
npm run build   # production build
npm run start   # jalankan hasil build secara lokal
\`\`\`

## Build

Pastikan `npm run build` sukses sebelum push/deploy.

## Deployment

1. Push repository ke GitHub.
2. Import project ke Vercel (vercel.com/new), framework otomatis terdeteksi sebagai Next.js.
3. Deploy.

## Project Structure

\`\`\`text
src/
├── app/            # layout, page, global styles
├── components/
│   ├── layout/     # Navbar, Footer
│   ├── sections/   # Hero, About, Skills, Projects, Experience, Contact
│   ├── ui/         # Button, SectionHeading, ProjectCard, SocialLinks, BrandIcons
│   └── motion/     # SmoothScroll, FadeIn, Stagger
├── data/           # projects.ts, skills.ts, experience.ts, social.ts
├── lib/            # utils.ts
└── types/          # portfolio.ts
\`\`\`

## TODO sebelum publish

- Ganti semua data placeholder di `src/data/*.ts` (social links, skills, project kedua, experience/education) dengan data asli.
- Ganti bio di `src/components/sections/About.tsx`.
- Ganti metadata (title/description) di `src/app/layout.tsx`.
- Ganti screenshot placeholder di `public/images/` dengan screenshot asli project.
