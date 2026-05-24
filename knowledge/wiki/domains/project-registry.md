---
id: "domain-project-registry"
kind: "domain"
title: "Project Registry"
source_paths:
  - "src/content/projects.ts"
  - "src/components/sections/Projects.tsx"
  - "../mac-storage-optimizer/README.md"
  - "../mac-storage-optimizer/TECHNICAL_BETA.md"
  - "../mac-storage-optimizer/SAFETY.md"
  - "../mac-storage-optimizer/pyproject.toml"
  - "../mac-storage-optimizer/mac_storage_optimizer/cli.py"
  - "../mac-storage-optimizer/tests/test_regression.py"
  - "../mac-storage-optimizer/.github/workflows/ci.yml"
  - "../LedgerSeal/README.md"
  - "../LedgerSeal/APP_FLOW.md"
  - "../LedgerSeal/BACKEND_STRUCTURE.md"
  - "../LedgerSeal/TECH_STACK.md"
  - "../LedgerSeal/PRD.md"
  - "../LedgerSeal/prisma/schema.prisma"
  - "../LedgerSeal/app/api/seal/route.ts"
  - "../LedgerSeal/app/api/seals/route.ts"
  - "../LedgerSeal/app/api/seals/[id]/route.ts"
  - "../LedgerSeal/app/api/seals/verify/route.ts"
  - "../LedgerSeal/lib/xrpl-config.ts"
  - "../LedgerSeal/test/hash.test.js"
  - "../LedgerSeal/.github/workflows/ci.yml"
updated_at: "2026-05-24T16:39:41.802Z"
status: "active"
tags:
  - "domain"
  - "projects"
links:
  - "wiki/domains/index"
  - "wiki/workflows/landing-page-delivery"
---

# Project Registry

The landing page exposes evidence-backed snapshots for AARKON projects. Project content lives in `src/content/projects.ts` so public claims can cite real implementation, docs, tests, routes, CI, and known limits from sibling repositories.

## Current Projects

- Aark Optimize: private technical beta for local-first macOS storage intelligence, implemented as Aark and the `mac-storage-optimizer` Python package.
- LedgerSeal: experimental XRPL Testnet proof infrastructure with Next.js App Router APIs, Prisma/Postgres metadata, org-scoped dashboard flows, and public verification.

## Card Contract

Each public project card should include slug, name, tagline, status, maturity, description, GitHub visibility/access metadata, stack, features, proof points, known limits, why-it-matters copy, source paths, and preview rows.

## Evidence Rule

Only include capabilities supported by implementation, tests, docs, routes, manifests, CI, or screenshots. Label incomplete or scoped behavior explicitly in `warnings`, rendered publicly as Known Limits.

## Public Density Rule

Keep the public cards scannable by rendering the first three feature bullets and first three technical signals. Preserve the full arrays in `src/content/projects.ts` for future detail pages.

## Expansion Rule

Add future projects to `src/content/projects.ts` first. If a project needs a dedicated public narrative, add a route under `src/app/projects/` and link it from the project registry.
