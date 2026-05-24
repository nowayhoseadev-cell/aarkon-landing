---
id: "decision-landing-page-stack"
kind: "decision"
title: "Landing Page Stack"
source_paths:
  - "package.json"
  - "next.config.ts"
  - "postcss.config.mjs"
  - "src/app/globals.css"
updated_at: "2026-05-24T16:39:41.806Z"
status: "active"
tags:
  - "decision"
  - "frontend"
  - "stack"
links:
  - "wiki/decisions/index"
  - "wiki/workflows/landing-page-delivery"
---

# Landing Page Stack

## Decision

Use Next.js App Router, TypeScript, Tailwind CSS, and small reusable React components for the first production-ready AARKON landing page.

## Rationale

This keeps the site deployable to Vercel with a familiar frontend stack while leaving room for future project pages, docs surfaces, and product-specific routes. Motion is implemented with restrained CSS for drifting grids, scanlines, trace animation, glow pulses, a mobile dropdown, textured cards, mock preview windows, and terminal-style status transitions so the landing page stays fast and avoids unnecessary runtime dependencies.
