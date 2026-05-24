---
id: "output-project-aware-content-audit-2026-05-24"
kind: "output"
title: "Project-Aware Content Audit"
source_paths:
  - "src/content/projects.ts"
  - "src/components/sections/Projects.tsx"
  - "README.md"
  - "../mac-storage-optimizer/README.md"
  - "../mac-storage-optimizer/TECHNICAL_BETA.md"
  - "../mac-storage-optimizer/SAFETY.md"
  - "../mac-storage-optimizer/pyproject.toml"
  - "../mac-storage-optimizer/mac_storage_optimizer/cli.py"
  - "../mac-storage-optimizer/tests/test_regression.py"
  - "../mac-storage-optimizer/.github/workflows/ci.yml"
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
updated_at: "2026-05-24T16:26:54Z"
status: "active"
tags:
  - "output"
  - "project-registry"
  - "audit"
links:
  - "wiki/index"
  - "wiki/domains/project-registry"
  - "wiki/sources/index"
---

# Project-Aware Content Audit

## Aark Optimize

Confirmed from the `mac-storage-optimizer` repository: Aark is a private technical beta for local-first macOS storage intelligence. The implementation supports selected-root scans, deterministic Markdown/JSON reports, cleanup-plan generation, source discovery, setup-first app mode, demo mode, read-only dashboard mode, compare, approve, and terminal-only cleanup of explicitly approved generated artifacts.

Evidence used: README, TECHNICAL_BETA, SAFETY, pyproject metadata, CLI dispatch, regression tests, GitHub Actions CI, and screenshot docs.

Intentionally excluded: public downloadable-app claims, autonomous cleanup claims, provider API/cloud quota claims, remote-only cloud-file inspection, signed/notarized app packaging, and destination-capacity/checksum/rollback guarantees for move/archive recommendations.

## LedgerSeal

Confirmed from the `LedgerSeal` repository: LedgerSeal is experimental XRPL Testnet proof infrastructure. The implementation includes Next.js App Router pages, org-scoped seal creation/list/detail APIs, public verification by file or hash, Prisma/Postgres seal metadata, LS-1 file/root hash fields, testnet-only XRPL guardrails, and a narrow hash-vector test.

Evidence used: APP_FLOW, BACKEND_STRUCTURE, TECH_STACK, PRD, Prisma schema, API route files, XRPL config/guardrail code, hash test, and GitHub Actions CI.

Intentionally excluded: XRPL mainnet support, full account/role authentication, running BullMQ worker infrastructure, authorship/content-accuracy claims, first-existence claims, and broad production-readiness claims.

## Architecture

Project content now lives in `src/content/projects.ts`. The UI in `src/components/sections/Projects.tsx` consumes the structured content and renders evidence-backed sections for what exists now, technical signals, known limits, and why the project matters.

Future projects should be added to `src/content/projects.ts` with source paths that cite real repository files. The optional GitHub metadata fetch is dynamic and graceful: it attempts GitHub REST API enrichment for public repositories, uses `GITHUB_TOKEN` if configured for private metadata, and returns static project content if GitHub is unavailable or private.

## Public Release Hardening

The public cards render only the first three feature bullets and first three technical signals to keep the landing page scannable. Full feature, proof, and known-limit arrays remain in `src/content/projects.ts` for future detail pages.

The GitHub CTA no longer renders broken public links for inaccessible repositories. Private or internal repositories render a neutral access label instead.
