---
id: "domain-aarkon-design-system"
kind: "domain"
title: "AARKON Design System"
source_paths:
  - "docs/aark-design-system.md"
  - "DESIGN.md"
  - "src/app/globals.css"
  - "src/components/layout/SiteHeader.tsx"
  - "src/components/sections/Hero.tsx"
  - "src/components/sections/Projects.tsx"
  - "src/components/visuals/SystemSignal.tsx"
  - "src/components/ui/ButtonLink.tsx"
  - "src/components/ui/StatusBadge.tsx"
updated_at: "2026-05-24T18:07:53Z"
status: "active"
tags:
  - "domain"
  - "design-system"
  - "frontend"
links:
  - "wiki/domains/index"
  - "wiki/domains/aarkon-identity"
  - "wiki/workflows/product-motion-transitions"
  - "wiki/workflows/cult-ui-component-adoption"
  - "wiki/sources/index"
---

# AARKON Design System

The AARKON design system is the reusable visual convention for the landing page and future product apps. The canonical guide is `docs/aark-design-system.md`; `DESIGN.md` is the quick reference for agents and developers.

## Token Contract

The base token contract comes from `src/app/globals.css`: `aarkon-bg`, `aarkon-panel`, `aarkon-panel-soft`, `aarkon-line`, `aarkon-line-soft`, `aarkon-text`, `aarkon-muted`, `aarkon-dim`, `aarkon-mint`, `aarkon-cyan`, and `aarkon-gold`.

## Component Language

AARKON surfaces use dark technical backgrounds, restrained borders, 6-8px radius geometry, compact status badges, texture overlays, mock-window and terminal patterns, and local CSS motion that respects reduced-motion preferences.

## Adoption Rule

Future apps may add local semantic status tokens for product-specific states, but the AARKON brand tokens remain the base layer. Product migrations should begin with tokens, typography, background treatment, and panel/card styling before changing navigation or workflows.
