---
id: "design-aarkon-quick-reference"
kind: "design-system-reference"
title: "AARKON Design Quick Reference"
source_paths:
  - "docs/aark-design-system.md"
  - "src/app/globals.css"
  - "src/components/ui/ButtonLink.tsx"
  - "src/components/ui/StatusBadge.tsx"
updated_at: "2026-05-24T18:07:53Z"
status: "active"
tags:
  - "aarkon"
  - "design-system"
  - "agents"
links:
  - "docs/aark-design-system"
  - "knowledge/wiki/domains/aarkon-design-system"
---

# AARKON Design Quick Reference

Use [docs/aark-design-system.md](docs/aark-design-system.md) as the canonical design-system guide. This file is the short reference for agents and future app work.

## Core Direction

AARKON UI is calm, dark, technical, source-backed, and operator-controlled. Preserve existing product behavior and safety boundaries before making visual changes.

## Base Tokens

- `aarkon-bg`: `#070808`
- `aarkon-panel`: `#101211`
- `aarkon-panel-soft`: `#141714`
- `aarkon-line`: `#252923`
- `aarkon-line-soft`: `#1b1f1b`
- `aarkon-text`: `#e7ece8`
- `aarkon-muted`: `#8d968f`
- `aarkon-dim`: `#59625c`
- `aarkon-mint`: `#91d3b8`
- `aarkon-cyan`: `#9fbfd0`
- `aarkon-gold`: `#d2ba7b`

## Component Rules

- Use 8px radius for cards, panels, mock windows, and major containers.
- Use 6px radius for buttons, badges, compact controls, and nested blocks.
- Use dark technical surfaces with restrained borders and low-opacity texture.
- Use mint for primary action or safe/online proof, cyan for secondary metadata, and gold for review or approval gates.
- Use local CSS motion only, with `prefers-reduced-motion` support.
- Product apps may add semantic status tokens, but the AARKON brand tokens remain the base layer.
