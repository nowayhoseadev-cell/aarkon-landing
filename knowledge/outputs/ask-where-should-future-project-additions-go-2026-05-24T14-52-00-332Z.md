---
id: "ask-where-should-future-project-additions-go-2026-05-24T14-52-00-332Z"
kind: "qa"
title: "Q&A: Where should future project additions go?"
source_paths:
  - "knowledge/raw/source-snapshots.md"
  - "knowledge/wiki/decisions/landing-page-stack.md"
  - "knowledge/wiki/domains/project-registry.md"
  - "knowledge/wiki/domains/aarkon-identity.md"
  - "knowledge/wiki/index.md"
  - "knowledge/wiki/sources/index.md"
updated_at: "2026-05-24T14:52:00.333Z"
status: "generated"
tags:
  - "outputs"
  - "qa"
links:
  - "raw/source-snapshots"
  - "wiki/decisions/landing-page-stack"
  - "wiki/domains/project-registry"
  - "wiki/domains/aarkon-identity"
  - "wiki/index"
  - "wiki/sources/index"
---

# Q&A

## Prompt

Where should future project additions go?

## Answer

No OpenAI synthesis was available, so this deterministic fallback returns the most relevant local notes for the prompt.

Prompt: Where should future project additions go?

## Retrieved Notes

- `knowledge/raw/source-snapshots.md` (score 4)
- `knowledge/wiki/decisions/landing-page-stack.md` (score 2)
- `knowledge/wiki/domains/project-registry.md` (score 2)
- `knowledge/wiki/domains/aarkon-identity.md` (score 1)
- `knowledge/wiki/index.md` (score 1)
- `knowledge/wiki/sources/index.md` (score 1)

## Local Context Excerpts

### knowledge/raw/source-snapshots.md

# Source Snapshots

Machine-ingested source snapshots for local retrieval.

## .env.example

```example
OPENAI_API_KEY=
KNOWLEDGE_MODEL=gpt-4.1-mini
KNOWLEDGE_MAX_CONTEXT_NOTES=6

```

## eslint.config.mjs

```mjs
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [...nextCoreWebVitals, ...nextTypescript];

export default eslintConfig;

```

## next-env.d.ts

```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />
import "./.next/types/routes.d.ts";

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more

### knowledge/wiki/decisions/landing-page-stack.md

# Landing Page Stack

## Decision

Use Next.js App Router, TypeScript, Tailwind CSS, and small reusable React components for the first production-ready AARKON landing page.

## Rationale

This keeps the site deployable to Vercel with a familiar frontend stack while leaving room for future project pages, docs surfaces, and product-specific routes. Motion is implemented with restrained CSS so the landing page stays fast and avoids unnecessary runtime dependencies.

### knowledge/wiki/domains/project-registry.md

# Project Registry

The landing page currently exposes two AARKON projects.

## Current Projects

- Aark Optimize: local-first Mac storage intelligence and approval-gated cleanup orchestration.
- LedgerSeal: tamper-evident proof-of-existence infrastructure anchored to XRPL.

## Expansion Rule

Add future projects to `src/lib/site.ts` first. If a project needs a dedicated public narrative, add a route under `src/app/projects/` and link it from the project registry.

### knowledge/wiki/domains/aarkon-identity.md

# AARKON Identity

AARKON is positioned as a systems software lab, not a consulting agency, portfolio, or hype-oriented startup.

## Canonical Positioning

Building local-first systems, verification infrastructure, and intelligent operational tools.

## Tone

The public identity should remain minimal, technical, restrained, and infrastructure-focused. Copy should favor operational clarity, user control, and verifiable workflows over broad startup claims.

### knowledge/wiki/index.md

# AARKON Knowledge Index

This vault is the long-term planning and architecture surface for the AARKON landing page and future AARKON systems.

## Start Here

- [[wiki/domains/index]] for product and brand domains.
- [[wiki/workflows/index]] for delivery and maintenance workflows.
- [[wiki/decisions/index]] for durable technical decisions.
- [[wiki/sources/index]] for source maps back to real repository files.

### knowledge/wiki/sources/index.md

# Sources Index

Source-backed notes in this vault cite real repository files in frontmatter.

## Primary Source Map

| Source | Purpose |
| --- | --- |
| `src/lib/site.ts` | Brand, social links, projects, and principles. |
| `src/app/page.tsx` | Landing page section composition. |
| `src/components/sections/Hero.tsx` | AARKON hero positioning and CTAs. |
| `src/components/sections/Projects.tsx` | Current project cards and GitHub placeholders. |
| `src/components/sections/Philosophy.tsx` | AARKON operating principles. |
| `src/app/globals.css` | Dark visual system, motion, and responsive styling primitives. |
| `scripts/knowledge.mjs` | Local ingest, compile, lint, and ask tooling. |
