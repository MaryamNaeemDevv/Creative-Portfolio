# Maryam Naeem — Creative Portfolio

A distinctive, responsive portfolio built with Next.js, React, TypeScript, and Tailwind CSS. It showcases original portfolio files supplied by Maryam, with image assets optimized to WebP and a compressed MP4 edit included locally.

## Features
- Acid-lime and charcoal Creative Studio art direction
- Responsive layout for desktop, tablet, and mobile
- Filterable project gallery with accessible project-detail modal
- Embedded video player
- About, services/skills, and email contact sections
- Optimized image assets and reduced-motion support

## Run locally
Requires Node.js 18.17 or newer.

```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Deploy to Vercel
1. Extract this project and push the `maryam-creative-portfolio` folder contents to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Keep the detected framework as Next.js and use the default build settings.
4. Deploy. No environment variables are required.

## Before sharing publicly
- Update the `metadataBase` URL in `app/layout.tsx` after you have your real Vercel domain.
- Confirm the displayed contact email and replace it if needed.
- Review all project labels and descriptions for accuracy. Conceptual designs are presented as concepts, not client commissions.
- The video is a 720p-ish web-optimized encode of the supplied Super Sonic project edit; original video is not modified.

## Project structure
```
app/
  globals.css
  layout.tsx
  page.tsx
public/
  work/  # optimized portfolio images + MP4 edit
```
