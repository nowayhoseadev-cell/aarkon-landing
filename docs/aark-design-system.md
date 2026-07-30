---
id: "docs-aark-design-system"
kind: "design-system"
title: "AARKON Design System"
source_paths:
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
  - "aarkon"
  - "design-system"
  - "frontend"
links:
  - "DESIGN"
  - "knowledge/wiki/domains/aarkon-design-system"
---

# AARKON Design System

This is the canonical design-system guide for AARKON apps and project surfaces. The current landing page is the source of truth; future products should inherit its restrained technical mood, dark token base, compact geometry, and safety-forward information hierarchy before adding product-specific states.

## Visual Theme

AARKON interfaces should feel calm, technical, inspectable, and controlled. The UI is dark by default, uses low-contrast structural borders, and reserves color for status, proof, trust, and primary action. It should not feel like a marketing template or a decorative dashboard.

Use:

- dense but readable product layouts
- visible provenance, status, and decision surfaces
- compact panels with subtle texture and restrained motion
- direct copy that explains what exists, what is limited, and what requires operator control

Avoid:

- one-off palettes disconnected from AARKON tokens
- oversized decorative cards in operational tools
- gradient-heavy hero sections without product evidence
- broad claims that are not backed by source paths, tests, or implemented behavior

## Color Tokens

The token contract lives in `src/app/globals.css` and should be copied or mapped into future apps before local semantic tokens are added.

| Token | Hex | Role |
| --- | --- | --- |
| `aarkon-bg` | `#070808` | Base page background and deepest surfaces. |
| `aarkon-panel` | `#101211` | Primary dark panel background. |
| `aarkon-panel-soft` | `#141714` | Slightly lifted secondary panels and menus. |
| `aarkon-line` | `#252923` | Primary borders and dividers. |
| `aarkon-line-soft` | `#1b1f1b` | Low-emphasis section dividers and internal rules. |
| `aarkon-text` | `#e7ece8` | Main foreground text. |
| `aarkon-muted` | `#8d968f` | Body copy, metadata, and inactive navigation. |
| `aarkon-dim` | `#59625c` | Least prominent metadata and technical labels. |
| `aarkon-mint` | `#91d3b8` | Primary action, online state, safe state, and proof highlights. |
| `aarkon-cyan` | `#9fbfd0` | Secondary accent, section eyebrows, metadata highlights. |
| `aarkon-gold` | `#d2ba7b` | Warning, review, or approval-gate states. |

Product apps may add local semantic tokens for domain status, such as danger, review, success, or storage pressure, but AARKON brand tokens remain the base visual layer. Local tokens should map back to these roles instead of replacing the system.

## Typography

The type stack is `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.

- Use semibold display type for page and section headings.
- Use medium uppercase labels for eyebrows, status labels, and compact metadata.
- Keep body text relaxed enough for technical reading: around `leading-7` for body copy and `leading-6` for dense cards.
- Keep letter spacing at `0`; do not use negative tracking.
- Use monospace only for terminal rows, traces, IDs, paths, and code-like operational values.

## Layout

The landing page establishes a centered max-width shell with responsive viewport guards:

- page gutters: `px-5`, `sm:px-6`, `lg:px-8`
- content width: `lg:max-w-7xl`
- mobile-safe width: `max-w-[calc(100vw-2.5rem)]`, `sm:max-w-[calc(100vw-3rem)]`
- section rhythm: `py-16`, `sm:py-20`, with larger hero spacing

Operational tools should favor dense, scan-friendly layouts over marketing composition. Use grids for repeated records, split layouts for a primary work area plus a decision/status side panel, and sticky local navigation only when it improves repeated use.

## Surfaces And Panels

Default surfaces are dark, bordered, and subtly layered:

- large panels and cards use `rounded-[8px]`
- compact controls, badges, nested blocks, and inputs use `rounded-[6px]`
- borders use `aarkon-line` or `aarkon-line-soft`
- panels use `aarkon-bg/72`, `aarkon-panel/88`, or `white/[0.025]` overlays
- elevation is restrained, usually black shadows around `shadow-black/30` for major hero or menu surfaces only

Do not nest cards inside decorative cards. If a surface contains repeated items, the repeated items may be cards; the surrounding section should remain a layout band or work area.

## Reusable Patterns

**Buttons**

Primary actions use mint fill with dark text. Secondary actions use bordered dark glass. Ghost actions are transparent until hover. Buttons are `min-h-11`, `rounded-[6px]`, medium weight, and include lucide icons when an icon exists.

**Badges And Status**

Status badges are compact bordered pills or rounded rectangles with a square-ish status dot. Mint means active, safe, online, or primary proof. Cyan means secondary metadata. Gold means review, warning, or gate.

**Cards**

Project and product cards use a dark background, 8px radius, low-emphasis border, optional texture overlay, and a subtle hover state that changes border/accent before motion. Card copy should expose maturity, known limits, source-backed evidence, and the next useful action.

**Mock Windows And Terminal Rows**

Mock windows use a bordered dark panel, tiny control dots, a top bar, and monospace rows. Use this pattern for system previews, traces, proof packets, scan previews, and generated-output previews.

**Texture**

Texture is created with local CSS overlays, not external images. Use low-opacity grid lines and soft radial accent inside `.texture-card`, `.mock-window`, or `.texture-button`. Texture should support structure, not become decoration.

## Motion

Motion is local CSS only unless a future component has a specific interaction need that justifies a dependency. The current system uses:

- reveal timing for first-load hierarchy
- slow grid drift and scanlines for technical atmosphere
- trace drawing for operational proof paths
- status-dot pulse for live or gated state
- short dropdown/menu transitions
- primary-button sheen on hover

Every motion addition must respect `prefers-reduced-motion: reduce`. Avoid motion that changes workflow meaning, hides state, or distracts from operational decisions.

## Accessibility

- Preserve semantic HTML first: real headings, lists, buttons, links, tables, `nav`, `main`, `section`, and `article`.
- Use visible focus rings with mint accents and a dark focus offset.
- Keep text contrast high against dark surfaces.
- Use `aria-label` for icon-only or visual-only technical displays.
- Mark decorative images and effects with empty alt text or `aria-hidden="true"`.
- Ensure text fits in buttons, cards, badges, and table cells across mobile widths.

## Copy Tone

AARKON copy is specific, source-backed, and plain. Prefer "approval required", "read-only", "local-first", "known limits", "private technical beta", and "evidence-backed" when those are true. Do not imply automation, deletion, public availability, security guarantees, or cloud behavior unless the implementation proves it.

## Future App Adoption

For future AARKON apps:

1. Start from the token table above and map it into the app's local styling system.
2. Keep product-specific behavior, safety boundaries, and terminology unchanged unless the product task explicitly asks for a behavior change.
3. Apply the first visual slice in this order: shared color tokens, typography, background treatment, panel/card styling, then only later navigation and workflow-specific components.
4. Add local semantic tokens only after the base AARKON layer is stable.
5. Document any product-specific exceptions in the product repo's knowledge vault and cite real source files.
