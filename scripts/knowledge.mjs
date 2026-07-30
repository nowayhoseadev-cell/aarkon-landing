#!/usr/bin/env node

import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const KNOWLEDGE_DIR = path.join(ROOT, "knowledge");
const REQUIRED_DIRS = [
  "raw",
  "wiki",
  "wiki/domains",
  "wiki/workflows",
  "wiki/decisions",
  "wiki/sources",
  "outputs",
  "assets",
  ".obsidian",
];
const REQUIRED_FRONTMATTER = [
  "id",
  "kind",
  "title",
  "source_paths",
  "updated_at",
  "status",
  "tags",
  "links",
];
const EXCLUDED_DIRS = new Set([
  ".git",
  ".next",
  ".vercel",
  "coverage",
  "dist",
  "node_modules",
  "out",
]);
const SNAPSHOT_EXTENSIONS = new Set([
  ".css",
  ".json",
  ".md",
  ".mjs",
  ".ts",
  ".tsx",
  ".txt",
]);

const command = process.argv[2];
const now = () => new Date().toISOString();

function repoPath(...parts) {
  return path.join(ROOT, ...parts);
}

function vaultPath(...parts) {
  return path.join(KNOWLEDGE_DIR, ...parts);
}

function toRepoRelative(filePath) {
  return path.relative(ROOT, filePath).split(path.sep).join("/");
}

function ensureDirs() {
  mkdirSync(KNOWLEDGE_DIR, { recursive: true });
  for (const dir of REQUIRED_DIRS) {
    mkdirSync(vaultPath(dir), { recursive: true });
  }

  writeJsonIfMissing(vaultPath(".obsidian", "app.json"), {
    alwaysUpdateLinks: true,
    newFileLocation: "folder",
    newFileFolderPath: "wiki",
  });
  writeJsonIfMissing(vaultPath(".obsidian", "appearance.json"), {
    baseFontSize: 16,
    theme: "obsidian",
  });
  writeJsonIfMissing(vaultPath(".obsidian", "core-plugins.json"), {
    fileExplorer: true,
    globalSearch: true,
    graph: true,
    outgoingLink: true,
    backlink: true,
    canvas: false,
  });
}

function writeJsonIfMissing(filePath, value) {
  if (!existsSync(filePath)) {
    writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
  }
}

function yamlList(values) {
  if (!values || values.length === 0) {
    return "  []";
  }

  return values.map((value) => `  - ${JSON.stringify(value)}`).join("\n");
}

function frontmatter(meta) {
  return `---\nid: ${JSON.stringify(meta.id)}\nkind: ${JSON.stringify(meta.kind)}\ntitle: ${JSON.stringify(meta.title)}\nsource_paths:\n${yamlList(meta.source_paths)}\nupdated_at: ${JSON.stringify(now())}\nstatus: ${JSON.stringify(meta.status ?? "active")}\ntags:\n${yamlList(meta.tags ?? [])}\nlinks:\n${yamlList(meta.links ?? [])}\n---\n\n`;
}

function writeNote(relativePath, meta, body) {
  const filePath = vaultPath(relativePath);
  mkdirSync(path.dirname(filePath), { recursive: true });
  writeFileSync(filePath, `${frontmatter(meta)}${body.trim()}\n`);
}

function collectSourceFiles(dir = ROOT) {
  const entries = readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name.startsWith(".") && entry.name !== ".env.example") {
      if (entry.name !== ".obsidian") {
        continue;
      }
    }

    const fullPath = path.join(dir, entry.name);
    const relative = toRepoRelative(fullPath);
    const firstSegment = relative.split("/")[0];

    if (entry.isDirectory()) {
      if (EXCLUDED_DIRS.has(entry.name) || firstSegment === "knowledge") {
        continue;
      }
      files.push(...collectSourceFiles(fullPath));
      continue;
    }

    if (!entry.isFile()) {
      continue;
    }

    const extension = path.extname(entry.name);
    if (SNAPSHOT_EXTENSIONS.has(extension) || entry.name === ".env.example") {
      files.push(fullPath);
    }
  }

  return files.sort((a, b) => toRepoRelative(a).localeCompare(toRepoRelative(b)));
}

function readSnippet(filePath, maxChars = 4000) {
  const text = readFileSync(filePath, "utf8");
  if (text.length <= maxChars) {
    return text;
  }
  return `${text.slice(0, maxChars)}\n\n[Snapshot truncated at ${maxChars} characters]\n`;
}

function ingest() {
  ensureDirs();
  const files = collectSourceFiles();
  const sourcePaths = files.map(toRepoRelative);
  const manifestRows = files
    .map((file) => {
      const stats = statSync(file);
      return `| \`${toRepoRelative(file)}\` | ${path.extname(file) || "file"} | ${stats.size} | ${stats.mtime.toISOString()} |`;
    })
    .join("\n");

  writeNote(
    "raw/repo-file-manifest.md",
    {
      id: "raw-repo-file-manifest",
      kind: "raw",
      title: "Repository File Manifest",
      source_paths: sourcePaths,
      tags: ["raw", "sources", "manifest"],
      links: ["wiki/sources/index"],
    },
    `# Repository File Manifest\n\nMachine-ingested inventory of source files used by the knowledge vault.\n\n| Path | Type | Bytes | Modified |\n| --- | --- | ---: | --- |\n${manifestRows}`
  );

  const snapshots = files
    .map((file) => {
      const relative = toRepoRelative(file);
      return `## ${relative}\n\n\`\`\`${path.extname(file).slice(1) || "text"}\n${readSnippet(file)}\n\`\`\``;
    })
    .join("\n\n");

  writeNote(
    "raw/source-snapshots.md",
    {
      id: "raw-source-snapshots",
      kind: "raw",
      title: "Source Snapshots",
      source_paths: sourcePaths,
      tags: ["raw", "sources", "snapshots"],
      links: ["wiki/sources/index"],
    },
    `# Source Snapshots\n\nMachine-ingested source snapshots for local retrieval.\n\n${snapshots}`
  );

  console.log(`Ingested ${files.length} source files into knowledge/raw/.`);
}

function compile() {
  ensureDirs();

  writeNote(
    "wiki/index.md",
    {
      id: "wiki-index",
      kind: "index",
      title: "AARKON Knowledge Index",
      source_paths: ["README.md", "docs/aark-design-system.md", "src/lib/site.ts", "src/content/projects.ts", "src/app/page.tsx"],
      tags: ["aarkon", "index"],
      links: [
        "wiki/domains/aarkon-design-system",
        "wiki/domains/index",
        "wiki/workflows/index",
        "wiki/decisions/index",
        "wiki/sources/index",
      ],
    },
    `# AARKON Knowledge Index\n\nThis vault is the long-term planning and architecture surface for the AARKON landing page and future AARKON systems.\n\n## Start Here\n\n- [[wiki/domains/aarkon-design-system]] for reusable UI conventions.\n- [[wiki/domains/index]] for product and brand domains.\n- [[wiki/workflows/index]] for delivery and maintenance workflows.\n- [[wiki/decisions/index]] for durable technical decisions.\n- [[wiki/sources/index]] for source maps back to real repository files.`
  );

  writeNote(
    "wiki/domains/index.md",
    {
      id: "wiki-domains-index",
      kind: "index",
      title: "Domains Index",
      source_paths: ["docs/aark-design-system.md", "src/app/globals.css", "src/content/projects.ts", "src/components/sections/Projects.tsx"],
      tags: ["domains", "index"],
      links: ["wiki/index", "wiki/domains/aarkon-design-system", "wiki/domains/aarkon-identity", "wiki/domains/project-registry"],
    },
    `# Domains Index\n\nAARKON knowledge is organized around the domains the site communicates, not around folders.\n\n## Domains\n\n- [[wiki/domains/aarkon-design-system]] describes the reusable AARKON visual system for future apps.\n- [[wiki/domains/aarkon-identity]] describes the parent software-lab identity.\n- [[wiki/domains/project-registry]] describes current projects and how new projects join the public surface.`
  );

  writeNote(
    "wiki/domains/aarkon-design-system.md",
    {
      id: "domain-aarkon-design-system",
      kind: "domain",
      title: "AARKON Design System",
      source_paths: [
        "docs/aark-design-system.md",
        "DESIGN.md",
        "src/app/globals.css",
        "src/components/layout/SiteHeader.tsx",
        "src/components/sections/Hero.tsx",
        "src/components/sections/Projects.tsx",
        "src/components/visuals/SystemSignal.tsx",
        "src/components/ui/ButtonLink.tsx",
        "src/components/ui/StatusBadge.tsx",
      ],
      tags: ["domain", "design-system", "frontend"],
      links: [
        "wiki/domains/index",
        "wiki/domains/aarkon-identity",
        "wiki/workflows/product-motion-transitions",
        "wiki/workflows/cult-ui-component-adoption",
        "wiki/sources/index",
      ],
    },
    `# AARKON Design System\n\nThe AARKON design system is the reusable visual convention for the landing page and future product apps. The canonical guide is \`docs/aark-design-system.md\`; \`DESIGN.md\` is the quick reference for agents and developers.\n\n## Token Contract\n\nThe base token contract comes from \`src/app/globals.css\`: \`aarkon-bg\`, \`aarkon-panel\`, \`aarkon-panel-soft\`, \`aarkon-line\`, \`aarkon-line-soft\`, \`aarkon-text\`, \`aarkon-muted\`, \`aarkon-dim\`, \`aarkon-mint\`, \`aarkon-cyan\`, and \`aarkon-gold\`.\n\n## Component Language\n\nAARKON surfaces use dark technical backgrounds, restrained borders, 6-8px radius geometry, compact status badges, texture overlays, mock-window and terminal patterns, and local CSS motion that respects reduced-motion preferences.\n\n## Adoption Rule\n\nFuture apps may add local semantic status tokens for product-specific states, but the AARKON brand tokens remain the base layer. Product migrations should begin with tokens, typography, background treatment, and panel/card styling before changing navigation or workflows.`
  );

  writeNote(
    "wiki/domains/aarkon-identity.md",
    {
      id: "domain-aarkon-identity",
      kind: "domain",
      title: "AARKON Identity",
      source_paths: [
        "src/lib/site.ts",
        "src/components/sections/Hero.tsx",
        "src/components/ui/BrandMark.tsx",
        "public/brand/aarkon-mark.png",
        "public/brand/aarkon-emblem-original.png",
        "README.md",
      ],
      tags: ["domain", "brand", "positioning"],
      links: ["wiki/domains/index", "wiki/workflows/landing-page-delivery"],
    },
    `# AARKON Identity\n\nAARKON is positioned as an independent software lab, not a consulting agency, portfolio, or hype-oriented startup.\n\n## Canonical Positioning\n\nAARKON is an independent software lab building local-first tools, verification infrastructure, and operational systems.\n\n## Tone\n\nThe public identity should remain minimal, technical, restrained, and broadly extensible. Copy should favor clarity, trust, and careful engineering over narrow category claims or startup theater.`
  );

  writeNote(
    "wiki/domains/project-registry.md",
    {
      id: "domain-project-registry",
      kind: "domain",
      title: "Project Registry",
      source_paths: [
        "src/content/projects.ts",
        "src/components/sections/Projects.tsx",
        "../mac-storage-optimizer/README.md",
        "../mac-storage-optimizer/TECHNICAL_BETA.md",
        "../mac-storage-optimizer/SAFETY.md",
        "../mac-storage-optimizer/pyproject.toml",
        "../mac-storage-optimizer/mac_storage_optimizer/cli.py",
        "../mac-storage-optimizer/tests/test_regression.py",
        "../mac-storage-optimizer/.github/workflows/ci.yml",
        "../LedgerSeal/README.md",
        "../LedgerSeal/APP_FLOW.md",
        "../LedgerSeal/BACKEND_STRUCTURE.md",
        "../LedgerSeal/TECH_STACK.md",
        "../LedgerSeal/PRD.md",
        "../LedgerSeal/prisma/schema.prisma",
        "../LedgerSeal/app/api/seal/route.ts",
        "../LedgerSeal/app/api/seals/route.ts",
        "../LedgerSeal/app/api/seals/[id]/route.ts",
        "../LedgerSeal/app/api/seals/verify/route.ts",
        "../LedgerSeal/lib/xrpl-config.ts",
        "../LedgerSeal/test/hash.test.js",
        "../LedgerSeal/.github/workflows/ci.yml",
      ],
      tags: ["domain", "projects"],
      links: ["wiki/domains/index", "wiki/workflows/landing-page-delivery"],
    },
    `# Project Registry\n\nThe landing page exposes evidence-backed snapshots for AARKON projects. Project content lives in \`src/content/projects.ts\` so public claims can cite real implementation, docs, tests, routes, CI, and known limits from sibling repositories.\n\n## Current Projects\n\n- Aark Optimize: private technical beta for local-first macOS storage intelligence, implemented as Aark and the \`mac-storage-optimizer\` Python package.\n- LedgerSeal: experimental XRPL Testnet proof infrastructure with Next.js App Router APIs, Prisma/Postgres metadata, org-scoped dashboard flows, and public verification.\n\n## Card Contract\n\nEach public project card should include slug, name, tagline, status, maturity, description, GitHub visibility/access metadata, stack, features, proof points, known limits, why-it-matters copy, source paths, and preview rows.\n\n## Evidence Rule\n\nOnly include capabilities supported by implementation, tests, docs, routes, manifests, CI, or screenshots. Label incomplete or scoped behavior explicitly in \`warnings\`, rendered publicly as Known Limits.\n\n## Public Density Rule\n\nKeep the public cards scannable by rendering the first three feature bullets and first three technical signals. Preserve the full arrays in \`src/content/projects.ts\` for future detail pages.\n\n## Expansion Rule\n\nAdd future projects to \`src/content/projects.ts\` first. If a project needs a dedicated public narrative, add a route under \`src/app/projects/\` and link it from the project registry.`
  );

  writeNote(
    "wiki/workflows/index.md",
    {
      id: "wiki-workflows-index",
      kind: "index",
      title: "Workflows Index",
      source_paths: ["README.md", "scripts/knowledge.mjs", "package.json"],
      tags: ["workflows", "index"],
      links: [
        "wiki/index",
        "wiki/workflows/landing-page-delivery",
        "wiki/workflows/knowledge-layer",
        "wiki/workflows/product-motion-transitions",
        "wiki/workflows/cult-ui-component-adoption",
      ],
    },
    `# Workflows Index\n\n- [[wiki/workflows/landing-page-delivery]] describes local development, verification, and deployment.\n- [[wiki/workflows/knowledge-layer]] describes the Obsidian-first knowledge maintenance loop.\n- [[wiki/workflows/product-motion-transitions]] describes how reusable product-motion transitions should be evaluated before being added to the landing page.\n- [[wiki/workflows/cult-ui-component-adoption]] describes when Cult UI components are appropriate for the AARKON interface.`
  );

  writeNote(
    "wiki/workflows/landing-page-delivery.md",
    {
      id: "workflow-landing-page-delivery",
      kind: "workflow",
      title: "Landing Page Delivery",
      source_paths: ["README.md", "package.json", "src/app/page.tsx", "public/brand/aarkon-mark.png"],
      tags: ["workflow", "delivery", "vercel"],
      links: ["wiki/workflows/index", "wiki/decisions/landing-page-stack"],
    },
    `# Landing Page Delivery\n\nUse \`npm run dev\` for local work, \`npm run lint\` for static checks, and \`npm run build\` for a production Next.js build.\n\nThe site is Vercel-ready with standard Next.js settings. Brand positioning, social links, and principles live in \`src/lib/site.ts\`; evidence-backed project entries live in \`src/content/projects.ts\`. Mobile navigation, textured cards, mock preview windows, and the primary CTA treatment are implemented with local CSS-only transitions to avoid broad component-library setup.`
  );

  writeNote(
    "wiki/workflows/knowledge-layer.md",
    {
      id: "workflow-knowledge-layer",
      kind: "workflow",
      title: "Knowledge Layer Workflow",
      source_paths: ["README.md", "scripts/knowledge.mjs", ".env.example"],
      tags: ["workflow", "knowledge", "obsidian"],
      links: ["wiki/workflows/index", "wiki/sources/index"],
    },
    `# Knowledge Layer Workflow\n\nThe repository maintains an Obsidian-first vault in \`knowledge/\`.\n\n## Maintenance Loop\n\n1. Run \`npm run knowledge:ingest\` after meaningful source changes.\n2. Run \`npm run knowledge:compile\` after domain, workflow, or decision changes.\n3. Run \`npm run knowledge:lint\` before sharing or deploying.\n4. Use \`npm run knowledge:ask -- --prompt \"...\"\` for local retrieval and generated Q&A outputs.`
  );

  writeNote(
    "wiki/workflows/product-motion-transitions.md",
    {
      id: "workflow-product-motion-transitions",
      kind: "workflow",
      title: "Product Motion Transitions",
      source_paths: [
        "src/app/globals.css",
        "src/components/visuals/SystemSignal.tsx",
        "src/components/ui/StatusBadge.tsx",
        "src/components/sections/Projects.tsx",
        "README.md",
      ],
      tags: ["workflow", "frontend", "motion"],
      links: ["wiki/workflows/index", "wiki/decisions/landing-page-stack"],
    },
    `# Product Motion Transitions\n\nAARKON currently uses restrained CSS motion in \`src/app/globals.css\` for reveal timing, atmospheric grids, scanlines, status dots, trace drawing, and terminal row animation.\n\n## External Reference\n\nThe local Codex skill \`transitions-dev\` was created from the reviewed \`Jakubantalik/transitions.dev\` repository. Use it as a product-motion palette when a future UI needs a reusable transition such as a dropdown, modal, badge, panel reveal, page slide, icon swap, success check, avatar or chip hover, or error shake.\n\n## Use Rule\n\nPrefer the existing AARKON visual system for ambient brand motion. Reach for \`transitions-dev\` when a discrete interface state change needs a reusable, accessible transition with documented hooks and a reduced-motion guard.\n\n## Integration Guardrails\n\n- Keep transition CSS local-file based and dependency-free.\n- Add shared transition variables to \`src/app/globals.css\` only once.\n- Preserve \`prefers-reduced-motion\` behavior.\n- Avoid replacing existing ambient hero motion unless the component's workflow asks for a concrete state transition.\n- Keep class hooks explicit so future audits can map motion behavior back to source components.`
  );

  writeNote(
    "wiki/workflows/cult-ui-component-adoption.md",
    {
      id: "workflow-cult-ui-component-adoption",
      kind: "workflow",
      title: "Cult UI Component Adoption",
      source_paths: [
        "package.json",
        "src/app/globals.css",
        "src/components/ui/ButtonLink.tsx",
        "src/components/ui/StatusBadge.tsx",
        "src/components/sections/Projects.tsx",
        "README.md",
      ],
      tags: ["workflow", "frontend", "components", "cult-ui"],
      links: [
        "wiki/workflows/index",
        "wiki/workflows/product-motion-transitions",
        "wiki/decisions/landing-page-stack",
      ],
    },
    `# Cult UI Component Adoption\n\nAARKON has a restrained Next.js, React, Tailwind, and lucide-react frontend. The local Codex skill \`cult-ui\` was created from the reviewed MIT-licensed \`nolly-studio/cult-ui\` repository so future UI work can selectively adopt copy-paste components without changing the app's runtime direction by default.\n\n## Use Rule\n\nUse Cult UI when a discrete component would improve an existing workflow: a more expressive CTA, status surface, poll, onboarding sequence, terminal/code surface, card, panel, or media preview. Avoid pasting full demo sections or hero shaders unless the task specifically calls for that visual surface.\n\n## Integration Guardrails\n\n- Preserve AARKON's existing typography, dark palette, 6-8px radius language, and restrained technical tone.\n- Install only the selected component's dependencies; many Cult UI components require \`motion\`, but not all do.\n- Prefer source ownership in \`src/components/ui/\` and adapt imports to existing aliases.\n- Keep \`src/app/globals.css\` as the theme and motion coordination surface.\n- Verify responsive layout and reduced-motion behavior for animated, shader, carousel, drawer, and media components.`
  );

  writeNote(
    "wiki/decisions/index.md",
    {
      id: "wiki-decisions-index",
      kind: "index",
      title: "Decisions Index",
      source_paths: ["package.json", "next.config.ts", "src/app/globals.css"],
      tags: ["decisions", "index"],
      links: ["wiki/index", "wiki/decisions/landing-page-stack"],
    },
    `# Decisions Index\n\n- [[wiki/decisions/landing-page-stack]] records the initial stack and visual system decisions.`
  );

  writeNote(
    "wiki/decisions/landing-page-stack.md",
    {
      id: "decision-landing-page-stack",
      kind: "decision",
      title: "Landing Page Stack",
      source_paths: ["package.json", "next.config.ts", "postcss.config.mjs", "src/app/globals.css"],
      tags: ["decision", "frontend", "stack"],
      links: ["wiki/decisions/index", "wiki/workflows/landing-page-delivery"],
    },
    `# Landing Page Stack\n\n## Decision\n\nUse Next.js App Router, TypeScript, Tailwind CSS, and small reusable React components for the first production-ready AARKON landing page.\n\n## Rationale\n\nThis keeps the site deployable to Vercel with a familiar frontend stack while leaving room for future project pages, docs surfaces, and product-specific routes. Motion is implemented with restrained CSS for drifting grids, scanlines, trace animation, glow pulses, a mobile dropdown, textured cards, mock preview windows, and terminal-style status transitions so the landing page stays fast and avoids unnecessary runtime dependencies.`
  );

  writeNote(
    "wiki/sources/index.md",
    {
      id: "wiki-sources-index",
      kind: "index",
      title: "Sources Index",
      source_paths: [
        "DESIGN.md",
        "README.md",
        "docs/aark-design-system.md",
        "package.json",
        "src/lib/site.ts",
        "src/content/projects.ts",
        "scripts/knowledge.mjs",
        "src/components/layout/SiteHeader.tsx",
        "src/components/sections/Projects.tsx",
        "src/components/visuals/SystemSignal.tsx",
        "src/components/ui/BrandMark.tsx",
        "src/components/ui/ButtonLink.tsx",
        "src/components/ui/StatusBadge.tsx",
        "public/brand/aarkon-mark.png",
        "src/app/icon.png",
      ],
      tags: ["sources", "index"],
      links: [
        "wiki/index",
        "wiki/domains/aarkon-design-system",
        "wiki/domains/aarkon-identity",
        "wiki/domains/project-registry",
        "wiki/workflows/product-motion-transitions",
        "wiki/workflows/cult-ui-component-adoption",
      ],
    },
    `# Sources Index

Source-backed notes in this vault cite real repository files in frontmatter.

## Primary Source Map

| Source | Purpose |
| --- | --- |
| \`DESIGN.md\` | Short design-system reference for agents and future app work. |
| \`docs/aark-design-system.md\` | Canonical AARKON design-system guide and future-app adoption rules. |
| \`src/lib/site.ts\` | Brand, social links, navigation, and principles. |
| \`src/content/projects.ts\` | Evidence-backed project registry, source paths, warnings, previews, and GitHub metadata fallback logic. |
| \`src/app/page.tsx\` | Landing page section composition. |
| \`src/components/layout/SiteHeader.tsx\` | Desktop navigation and CSS-only mobile dropdown. |
| \`src/components/sections/Hero.tsx\` | AARKON hero positioning, CTAs, and atmospheric motion wrapper. |
| \`src/components/sections/Projects.tsx\` | Textured project cards, mock preview windows, features, proof points, warnings, metadata, tags, and links. |
| \`src/components/sections/Philosophy.tsx\` | AARKON operating principles. |
| \`src/components/visuals/SystemSignal.tsx\` | Hero operational visual, live indicators, graph trace, and terminal state rows. |
| \`src/components/ui/BrandMark.tsx\` | Reusable AARKON mark rendering. |
| \`src/components/ui/ButtonLink.tsx\` | Current CTA/button primitive and baseline for any Cult UI button adoption. |
| \`src/components/ui/StatusBadge.tsx\` | Small status badge primitive that may receive future discrete badge motion. |
| \`public/brand/aarkon-mark.png\` | Cropped public brand mark for UI and metadata. |
| \`src/app/icon.png\` | Next.js favicon route source. |
| \`src/app/globals.css\` | Dark visual system, motion, and responsive styling primitives. |
| \`scripts/knowledge.mjs\` | Local ingest, compile, lint, and ask tooling. |`
  );

  console.log("Compiled knowledge/wiki/ notes.");
}

function parseFrontmatter(content) {
  if (!content.startsWith("---\n")) {
    return null;
  }
  const end = content.indexOf("\n---\n", 4);
  if (end === -1) {
    return null;
  }
  return content.slice(4, end);
}

function parseYamlList(frontmatterText, key) {
  const match = frontmatterText.match(new RegExp(`^${key}:\\n([\\s\\S]*?)(?=\\n[a-z_]+:|$)`, "m"));
  if (!match) {
    return [];
  }

  const block = match[1].trim();
  if (block === "[]" || block === "[]") {
    return [];
  }

  return block
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("- "))
    .map((line) => line.slice(2).replace(/^"|"$/g, ""));
}

function collectMarkdownFiles(dir = KNOWLEDGE_DIR) {
  if (!existsSync(dir)) {
    return [];
  }

  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectMarkdownFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(fullPath);
    }
  }
  return files.sort();
}

function lint() {
  ensureDirs();
  const errors = [];

  for (const dir of REQUIRED_DIRS) {
    if (!existsSync(vaultPath(dir))) {
      errors.push(`Missing required directory: knowledge/${dir}`);
    }
  }

  const notes = collectMarkdownFiles();
  for (const note of notes) {
    const relative = toRepoRelative(note);
    const content = readFileSync(note, "utf8");
    const fm = parseFrontmatter(content);

    if (!fm) {
      errors.push(`${relative}: missing frontmatter`);
      continue;
    }

    for (const key of REQUIRED_FRONTMATTER) {
      if (!new RegExp(`^${key}:`, "m").test(fm)) {
        errors.push(`${relative}: missing frontmatter key ${key}`);
      }
    }

    for (const sourcePath of parseYamlList(fm, "source_paths")) {
      if (!existsSync(repoPath(sourcePath))) {
        errors.push(`${relative}: source_path does not exist: ${sourcePath}`);
      }
    }

    const linkMatches = content.matchAll(/\[\[([^\]#|]+)(?:[#|][^\]]*)?\]\]/g);
    for (const match of linkMatches) {
      const target = match[1].endsWith(".md") ? match[1] : `${match[1]}.md`;
      if (!existsSync(vaultPath(target))) {
        errors.push(`${relative}: unresolved Obsidian link [[${match[1]}]]`);
      }
    }
  }

  if (errors.length > 0) {
    console.error(errors.join("\n"));
    process.exitCode = 1;
    return;
  }

  console.log(`Knowledge lint passed for ${notes.length} markdown notes.`);
}

function loadEnv() {
  const envPath = repoPath(".env");
  if (!existsSync(envPath)) {
    return;
  }

  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const index = trimmed.indexOf("=");
    if (index === -1) {
      continue;
    }

    const key = trimmed.slice(0, index).trim();
    const value = trimmed
      .slice(index + 1)
      .trim()
      .replace(/^["']|["']$/g, "");

    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

function getPrompt() {
  const args = process.argv.slice(3);
  const promptIndex = args.indexOf("--prompt");
  if (promptIndex !== -1 && args[promptIndex + 1]) {
    return args[promptIndex + 1];
  }
  return args.join(" ").trim();
}

function tokenize(text) {
  return new Set(
    text
      .toLowerCase()
      .replace(/[^a-z0-9\s/-]/g, " ")
      .split(/\s+/)
      .filter((token) => token.length > 2)
  );
}

function retrieveNotes(prompt, limit) {
  const queryTokens = tokenize(prompt);
  return collectMarkdownFiles()
    .filter((file) => !toRepoRelative(file).startsWith("knowledge/outputs/"))
    .map((file) => {
      const content = readFileSync(file, "utf8");
      const tokens = tokenize(content);
      let score = 0;
      for (const token of queryTokens) {
        if (tokens.has(token)) {
          score += 1;
        }
      }
      return { file, content, score };
    })
    .sort((a, b) => b.score - a.score || toRepoRelative(a.file).localeCompare(toRepoRelative(b.file)))
    .slice(0, limit);
}

function extractOutputText(responseJson) {
  if (typeof responseJson.output_text === "string") {
    return responseJson.output_text;
  }

  if (!Array.isArray(responseJson.output)) {
    return "";
  }

  return responseJson.output
    .flatMap((item) => item.content ?? [])
    .map((content) => content.text ?? content.output_text ?? "")
    .filter(Boolean)
    .join("\n");
}

async function synthesizeWithOpenAI(prompt, notes) {
  const key = process.env.OPENAI_API_KEY;
  if (!key) {
    return null;
  }

  const model = process.env.KNOWLEDGE_MODEL || "gpt-4.1-mini";
  const context = notes
    .map((note) => `## ${toRepoRelative(note.file)}\n\n${note.content.slice(0, 6000)}`)
    .join("\n\n");

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      input: [
        {
          role: "system",
          content:
            "Answer using only the supplied repository knowledge notes. Cite vault-relative note paths when useful. If the notes do not contain an answer, say what is missing.",
        },
        {
          role: "user",
          content: `Prompt:\n${prompt}\n\nRepository knowledge notes:\n${context}`,
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenAI Responses API failed: ${response.status} ${await response.text()}`);
  }

  const json = await response.json();
  return extractOutputText(json).trim() || null;
}

function deterministicAnswer(prompt, notes) {
  const retrieved = notes
    .map((note) => `- \`${toRepoRelative(note.file)}\` (score ${note.score})`)
    .join("\n");
  const excerpts = notes
    .map((note) => {
      const body = note.content.replace(/^---[\s\S]*?---\n/, "").trim().slice(0, 700);
      return `### ${toRepoRelative(note.file)}\n\n${body}`;
    })
    .join("\n\n");

  return `## Answer\n\nNo OpenAI synthesis was available, so this deterministic fallback returns the most relevant local notes for the prompt.\n\nPrompt: ${prompt}\n\n## Retrieved Notes\n\n${retrieved || "No notes found."}\n\n## Local Context Excerpts\n\n${excerpts || "Run knowledge:ingest and knowledge:compile to generate vault context."}`;
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 52) || "question";
}

async function ask() {
  ensureDirs();
  loadEnv();

  const prompt = getPrompt();
  if (!prompt) {
    console.error('Usage: npm run knowledge:ask -- --prompt "Your question"');
    process.exitCode = 1;
    return;
  }

  const limit = Number.parseInt(process.env.KNOWLEDGE_MAX_CONTEXT_NOTES || "6", 10);
  const notes = retrieveNotes(prompt, Number.isFinite(limit) ? limit : 6);
  let answer;

  try {
    answer = await synthesizeWithOpenAI(prompt, notes);
  } catch (error) {
    console.warn(error instanceof Error ? error.message : String(error));
  }

  if (!answer) {
    answer = deterministicAnswer(prompt, notes);
  }

  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const relativeOutput = `outputs/ask-${slugify(prompt)}-${timestamp}.md`;
  writeNote(
    relativeOutput,
    {
      id: `ask-${slugify(prompt)}-${timestamp}`,
      kind: "qa",
      title: `Q&A: ${prompt}`,
      source_paths: notes.map((note) => toRepoRelative(note.file)),
      status: "generated",
      tags: ["outputs", "qa"],
      links: notes
        .map((note) => toRepoRelative(note.file).replace(/^knowledge\//, "").replace(/\.md$/, ""))
        .filter((link) => link.startsWith("wiki/") || link.startsWith("raw/")),
    },
    `# Q&A\n\n## Prompt\n\n${prompt}\n\n${answer}\n`
  );

  console.log(`Wrote knowledge/${relativeOutput}`);
}

switch (command) {
  case "ingest":
    ingest();
    break;
  case "compile":
    compile();
    break;
  case "lint":
    lint();
    break;
  case "ask":
    await ask();
    break;
  default:
    console.log("Usage: node scripts/knowledge.mjs <ingest|compile|lint|ask>");
    process.exitCode = 1;
}
