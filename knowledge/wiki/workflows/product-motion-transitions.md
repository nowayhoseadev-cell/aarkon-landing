---
id: "workflow-product-motion-transitions"
kind: "workflow"
title: "Product Motion Transitions"
source_paths:
  - "src/app/globals.css"
  - "src/components/visuals/SystemSignal.tsx"
  - "src/components/ui/StatusBadge.tsx"
  - "src/components/sections/Projects.tsx"
  - "README.md"
updated_at: "2026-05-24T16:39:41.804Z"
status: "active"
tags:
  - "workflow"
  - "frontend"
  - "motion"
links:
  - "wiki/workflows/index"
  - "wiki/decisions/landing-page-stack"
---

# Product Motion Transitions

AARKON currently uses restrained CSS motion in `src/app/globals.css` for reveal timing, atmospheric grids, scanlines, status dots, trace drawing, and terminal row animation.

## External Reference

The local Codex skill `transitions-dev` was created from the reviewed `Jakubantalik/transitions.dev` repository. Use it as a product-motion palette when a future UI needs a reusable transition such as a dropdown, modal, badge, panel reveal, page slide, icon swap, success check, avatar or chip hover, or error shake.

## Use Rule

Prefer the existing AARKON visual system for ambient brand motion. Reach for `transitions-dev` when a discrete interface state change needs a reusable, accessible transition with documented hooks and a reduced-motion guard.

## Integration Guardrails

- Keep transition CSS local-file based and dependency-free.
- Add shared transition variables to `src/app/globals.css` only once.
- Preserve `prefers-reduced-motion` behavior.
- Avoid replacing existing ambient hero motion unless the component's workflow asks for a concrete state transition.
- Keep class hooks explicit so future audits can map motion behavior back to source components.
