---
id: "output-cult-ui-transitions-fit-review-2026-05-24T15-54-27-691Z"
kind: "output"
title: "Cult UI and Transitions Fit Review"
source_paths:
  - "package.json"
  - "src/app/globals.css"
  - "src/components/sections/Hero.tsx"
  - "src/components/visuals/SystemSignal.tsx"
  - "src/components/sections/Projects.tsx"
  - "src/components/sections/Philosophy.tsx"
  - "src/components/ui/ButtonLink.tsx"
  - "src/components/ui/StatusBadge.tsx"
  - "src/components/layout/SiteHeader.tsx"
  - "src/lib/site.ts"
updated_at: "2026-05-24T15:54:27.691Z"
status: "active"
tags:
  - "output"
  - "frontend"
  - "cult-ui"
  - "transitions"
links:
  - "wiki/workflows/cult-ui-component-adoption"
  - "wiki/workflows/product-motion-transitions"
---

# Cult UI and Transitions Fit Review

This review uses the local `cult-ui` and `transitions-dev` skills against the current AARKON landing page. It is a fit map only; no product UI files were changed.

## Current Constraints

- The app has Next.js, React, Tailwind CSS, and `lucide-react` only.
- There is no `components.json`, shadcn registry setup, `cn` helper, `motion`, `class-variance-authority`, or Radix dependency yet.
- The current visual language is restrained, dark, technical, and mostly server-rendered.

## Best Candidates

1. Mobile navigation in `src/components/layout/SiteHeader.tsx`

The primary nav is hidden below `sm`, leaving no mobile navigation affordance. This is the highest-value gap.

- Cult UI fit: `side-panel`, but its source imports `motion` and `react-use-measure`, so dependency impact is medium.
- Transitions.dev fit: `menu-dropdown` or `modal` style nav with local CSS only, lower dependency impact.
- Recommendation: start with `transitions-dev` menu-dropdown for a compact mobile menu. Use Cult UI `side-panel` only if the mobile navigation should feel like a richer drawer.

2. Project cards in `src/components/sections/Projects.tsx`

The project cards are central to the page and already have subtle hover treatment. Cult UI can add more tactile structure without changing the page concept.

- Cult UI fit: `texture-card` or `minimal-card` for low-dependency structure.
- Cult UI fit if more motion is desired: `shift-card`, but it requires `motion`.
- Transitions.dev fit: keep current card hover, or add a conservative card resize only if cards gain expandable details.
- Recommendation: `texture-card` is the best first Cult UI component here because it can preserve the AARKON palette and avoid adding `motion`.

3. Project previews in `src/components/sections/Projects.tsx`

The storage map and proof packet previews are strong candidates because they are already mini product surfaces.

- Cult UI fit: `mock-browser-window` for product-preview framing.
- Cult UI fit: `terminal-animation` for the LedgerSeal proof packet.
- Transitions.dev fit: `number-pop-in` for storage percentages and `text-states-swap` for proof/status rows if those values become dynamic.
- Recommendation: use `mock-browser-window` for both previews if you want a consistent product-demo frame; use `terminal-animation` only for LedgerSeal if proof trace storytelling matters more.

4. Hero operational visual in `src/components/visuals/SystemSignal.tsx`

The current custom visual works and matches the brand. Cult UI can help if the hero needs to feel more inspectable or product-like.

- Cult UI fit: `terminal-animation` for command playback and trace state.
- Cult UI fit: `grid-beam` for a richer canvas grid, but it becomes a client component.
- Transitions.dev fit: keep current `trace-draw`, `terminal-row`, and `status-dot` unless the visual gains discrete state changes.
- Recommendation: do not replace the whole visual. Consider extracting only the terminal section into `terminal-animation`.

5. Primary CTA buttons in `src/components/ui/ButtonLink.tsx`

The buttons are plain and intentionally restrained. A single upgraded primary CTA could work.

- Cult UI fit: `texture-button` or `bg-animate-button`.
- Avoid by default: `metal-button`, because it adds `metal-fx` and is visually loud for the current brand.
- Transitions.dev fit: `icon-swap` only if button icon state changes, not for static links.
- Recommendation: if upgrading, apply `texture-button` only to the primary "View Projects" CTA first.

6. Philosophy cards in `src/components/sections/Philosophy.tsx`

The cards are quiet and scannable. Cult UI could add a small amount of depth.

- Cult UI fit: `minimal-card` or `texture-card`.
- Transitions.dev fit: no strong transition unless cards become expandable.
- Recommendation: low priority. Keep current cards unless the section needs stronger visual hierarchy.

7. Status badges and dots in `src/components/ui/StatusBadge.tsx`, `Projects.tsx`, and `SystemSignal.tsx`

The badges and status dots are static today.

- Transitions.dev fit: `notification-badge` if statuses appear, update, or need attention.
- Transitions.dev fit: `success-check` for completed proof/verification moments.
- Cult UI fit: no direct replacement is better than the local `StatusBadge`.
- Recommendation: leave as-is until status changes become interactive.

8. Contact and project actions in `Projects.tsx` and `Footer.tsx`

Current links are direct and simple.

- Cult UI fit: `popover-form` for contact capture or quick interest forms, but it brings `motion`.
- Transitions.dev fit: `modal` if contact becomes an inline dialog.
- Recommendation: defer until there is an actual form workflow.

## Avoid For Now

- `hero-*` shader components: visually impressive, but they add `@paper-design/shaders-react` and risk replacing a brand-specific hero that already works.
- `shader-lens-blur`, `three-d-carousel`, `dock`: high expression relative to this page's quiet technical tone.
- `metal-button`: useful for a campaign or launch moment, not as the default AARKON button treatment.
- Broad shadcn/Cult UI init: unnecessary until a specific component is being applied.

## Suggested Implementation Order

1. Add mobile navigation with `transitions-dev` menu-dropdown or Cult UI `side-panel`.
2. Upgrade project cards with Cult UI `texture-card`.
3. Upgrade project previews with `mock-browser-window` and possibly `terminal-animation` for LedgerSeal.
4. Optionally upgrade only the primary hero CTA with `texture-button`.
