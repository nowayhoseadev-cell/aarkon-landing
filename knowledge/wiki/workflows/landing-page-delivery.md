---
id: "workflow-landing-page-delivery"
kind: "workflow"
title: "Landing Page Delivery"
source_paths:
  - "README.md"
  - "package.json"
  - "src/app/page.tsx"
  - "public/brand/aarkon-mark.png"
updated_at: "2026-05-24T16:39:41.803Z"
status: "active"
tags:
  - "workflow"
  - "delivery"
  - "vercel"
links:
  - "wiki/workflows/index"
  - "wiki/decisions/landing-page-stack"
---

# Landing Page Delivery

Use `npm run dev` for local work, `npm run lint` for static checks, and `npm run build` for a production Next.js build.

The site is Vercel-ready with standard Next.js settings. Brand positioning, social links, and principles live in `src/lib/site.ts`; evidence-backed project entries live in `src/content/projects.ts`. Mobile navigation, textured cards, mock preview windows, and the primary CTA treatment are implemented with local CSS-only transitions to avoid broad component-library setup.
