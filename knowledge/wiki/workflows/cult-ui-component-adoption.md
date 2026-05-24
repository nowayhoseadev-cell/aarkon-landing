---
id: "workflow-cult-ui-component-adoption"
kind: "workflow"
title: "Cult UI Component Adoption"
source_paths:
  - "package.json"
  - "src/app/globals.css"
  - "src/components/ui/ButtonLink.tsx"
  - "src/components/ui/StatusBadge.tsx"
  - "src/components/sections/Projects.tsx"
  - "README.md"
updated_at: "2026-05-24T16:39:41.805Z"
status: "active"
tags:
  - "workflow"
  - "frontend"
  - "components"
  - "cult-ui"
links:
  - "wiki/workflows/index"
  - "wiki/workflows/product-motion-transitions"
  - "wiki/decisions/landing-page-stack"
---

# Cult UI Component Adoption

AARKON has a restrained Next.js, React, Tailwind, and lucide-react frontend. The local Codex skill `cult-ui` was created from the reviewed MIT-licensed `nolly-studio/cult-ui` repository so future UI work can selectively adopt copy-paste components without changing the app's runtime direction by default.

## Use Rule

Use Cult UI when a discrete component would improve an existing workflow: a more expressive CTA, status surface, poll, onboarding sequence, terminal/code surface, card, panel, or media preview. Avoid pasting full demo sections or hero shaders unless the task specifically calls for that visual surface.

## Integration Guardrails

- Preserve AARKON's existing typography, dark palette, 6-8px radius language, and restrained technical tone.
- Install only the selected component's dependencies; many Cult UI components require `motion`, but not all do.
- Prefer source ownership in `src/components/ui/` and adapt imports to existing aliases.
- Keep `src/app/globals.css` as the theme and motion coordination surface.
- Verify responsive layout and reduced-motion behavior for animated, shader, carousel, drawer, and media components.
