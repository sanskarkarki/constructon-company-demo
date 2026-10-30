# Karki Bandhu Construction — Website Demo

A premium, multi-page construction company website built with Next.js App Router, TypeScript, Tailwind CSS v4, Framer Motion, GSAP, Lenis, and a React Bits-inspired text reveal component.

## Requirements
- Node.js 20.9+
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

## Pages
- `/` — Home
- `/about` — About the company
- `/services` — Service overview
- `/projects` — Filterable project portfolio
- `/projects/[slug]` — Individual project detail pages
- `/members` — Team overview with photos, designations, and short summaries
- `/members/[slug]` — Individual member profiles and biographies
- `/contact` — Project enquiry form

## Motion setup
- **Lenis** provides smooth scrolling in `components/SiteShell.tsx`.
- **GSAP + ScrollTrigger** animate elements carrying `data-reveal` and `data-image-reveal`.
- **Framer Motion** powers the staggered word reveal in `components/ReactBitsText.tsx`.
- **React Bits** is represented by a small locally implemented split-text reveal inspired by the React Bits component pattern; it avoids depending on an unofficial React Bits package.

## Before using this as a client demo
This is a fictional showcase, not verified company information. Replace:
- The placeholder phone and email in `components/Footer.tsx`, `app/contact/page.tsx`, and `lib/site.ts`.
- The sample projects, locations, project years, status, and copy in `lib/site.ts`.
- Sample imagery with the construction company's actual project photography.
- `metadataBase` in `app/layout.tsx` with the real production domain.
- Add the real company registration/credentials, office address, and approved testimonials only after verifying them.

The contact form opens a prefilled `mailto:` draft. It does not store leads. For production lead capture, connect it to a secure route handler or a CRM/email service and add spam protection.

## Deployment on Vercel
1. Push the project to a GitHub repository.
2. Import the repository in Vercel.
3. Keep the framework preset as Next.js and build command as `npm run build`.
4. Deploy. No environment variables are required for this demo.


## Homepage additions
- Team portrait grid showing each member's photo and designation, linking to full member profiles.
- Client/partner name grid.
- Ongoing project highlights.
- Company history timeline.
- Awards and achievements list.

All team names, client names, milestones, awards, and project details in this demo are placeholders. Replace them with verified, authorised information before publishing.


## Detailed project case studies
Each project detail route now has sections for the project brief, challenge, approach, scope, materials and considerations, and intended outcome. Project narratives remain illustrative demo copy and must be replaced with verified project information before publishing.
