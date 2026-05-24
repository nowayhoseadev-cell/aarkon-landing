---
id: "raw-source-snapshots"
kind: "raw"
title: "Source Snapshots"
source_paths:
  - ".env.example"
  - "eslint.config.mjs"
  - "next-env.d.ts"
  - "next.config.ts"
  - "package-lock.json"
  - "package.json"
  - "postcss.config.mjs"
  - "README.md"
  - "scripts/knowledge.mjs"
  - "src/app/globals.css"
  - "src/app/layout.tsx"
  - "src/app/page.tsx"
  - "src/app/robots.ts"
  - "src/app/sitemap.ts"
  - "src/components/layout/Footer.tsx"
  - "src/components/layout/SiteHeader.tsx"
  - "src/components/sections/Hero.tsx"
  - "src/components/sections/Philosophy.tsx"
  - "src/components/sections/Projects.tsx"
  - "src/components/ui/BrandMark.tsx"
  - "src/components/ui/ButtonLink.tsx"
  - "src/components/ui/SectionHeading.tsx"
  - "src/components/ui/StatusBadge.tsx"
  - "src/components/visuals/SystemSignal.tsx"
  - "src/content/projects.ts"
  - "src/lib/site.ts"
  - "tsconfig.json"
updated_at: "2026-05-24T16:39:41.877Z"
status: "active"
tags:
  - "raw"
  - "sources"
  - "snapshots"
links:
  - "wiki/sources/index"
---

# Source Snapshots

Machine-ingested source snapshots for local retrieval.

## .env.example

```example
OPENAI_API_KEY=
KNOWLEDGE_MODEL=gpt-4.1-mini
KNOWLEDGE_MAX_CONTEXT_NOTES=6
GITHUB_TOKEN=

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
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

```

## next.config.ts

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
};

export default nextConfig;

```

## package-lock.json

```json
{
  "name": "aarkon-landing",
  "version": "0.1.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "aarkon-landing",
      "version": "0.1.0",
      "dependencies": {
        "lucide-react": "1.16.0",
        "next": "16.2.6",
        "react": "19.2.6",
        "react-dom": "19.2.6"
      },
      "devDependencies": {
        "@tailwindcss/postcss": "4.3.0",
        "@types/node": "25.9.1",
        "@types/react": "19.2.15",
        "@types/react-dom": "19.2.3",
        "eslint": "9.39.4",
        "eslint-config-next": "16.2.6",
        "postcss": "8.5.15",
        "tailwindcss": "4.3.0",
        "typescript": "6.0.3"
      }
    },
    "node_modules/@alloc/quick-lru": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz",
      "integrity": "sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.29.0",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.29.0.tgz",
      "integrity": "sha512-9NhCeYjq9+3uxgdtp20LSiJXJvN0FeCtNGpJxuMFZ1Kv3cWUNb6DOhJwUvcVCzKGR66cw4njwM6hrJLqgOwbcw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.28.5",
        "js-tokens": "^4.0.0",
        "picocolors": "^1.1.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.29.3",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.29.3.tgz",
      "integrity": "sha512-LIVqM46zQWZhj17qA8wb4nW/ixr2y1Nw+r1etiAWgRM6U1IqP+LNhL1yg440jYZR72jCWcWbLWzIosH+uP1fqg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.29.0",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.29.0.tgz",
      "integrity": "sha512-CGOfOJqWjg2qW/Mb6zNsDm+u5vFQ8DxXfbM09z69p5Z6+mE1ikP2jUXw+j42Pf1XTYED2Rni5f95npYeuwMDQA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.29.0",
        "@babel/generator": "^7.29.0",
        "@babel/helper-compilation-targets": "^7.28.6",
        "@babel/helper-module-transforms": "^7.28.6",
        "@babel/helpers": "^7.28.6",
        "@babel/parser": "^7.29.0",
        "@babel/template": "^7.28.6",
        "@babel/traverse": "^7.29.0",
        "@babel/types": "^7.29.0",
        "@jridgewell/remapping": "^2.3.5",
        "convert-source-map": "^2.0.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.29.1",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.29.1.tgz",
      "integrity": "sha512-qsaF+9Qcm2Qv8SRIMMscAvG4O3lJ0F1GuMo5HR/Bp02LopNgnZBC/EkbevHFeGs4ls/oPz9v+Bsmzbkbe+0dUw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.29.0",
        "@babel/types": "^7.29.0",
        "@jridgewell/gen-mapping": "^0.3.12",
        "@jridgewell/trace-mapping": "^0.3.28",
        "jsesc": "^3.0.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.28.6",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.28.6.tgz",
      "integrity": "sha512-JYtls3hqi15fcx5GaSNL7SCTJ2MNmjrkHXg4FSpOA/grxK

[Snapshot truncated at 4000 characters]

```

## package.json

```json
{
  "name": "aarkon-landing",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "knowledge:ingest": "node scripts/knowledge.mjs ingest",
    "knowledge:compile": "node scripts/knowledge.mjs compile",
    "knowledge:lint": "node scripts/knowledge.mjs lint",
    "knowledge:ask": "node scripts/knowledge.mjs ask"
  },
  "dependencies": {
    "lucide-react": "1.16.0",
    "next": "16.2.6",
    "react": "19.2.6",
    "react-dom": "19.2.6"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "4.3.0",
    "@types/node": "25.9.1",
    "@types/react": "19.2.15",
    "@types/react-dom": "19.2.3",
    "eslint": "9.39.4",
    "eslint-config-next": "16.2.6",
    "postcss": "8.5.15",
    "tailwindcss": "4.3.0",
    "typescript": "6.0.3"
  },
  "overrides": {
    "postcss": "8.5.15"
  }
}

```

## postcss.config.mjs

```mjs
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;

```

## README.md

```md
# AARKON Landing Page

A calm, technical landing page for AARKON: an independent software lab building local-first tools, verification infrastructure, and operational systems.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Production checks:

```bash
npm run lint
npm run build
```

## Vercel Deployment

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Use the default Next.js framework settings.
4. Add environment variables only if needed for knowledge tooling or private GitHub metadata enrichment. The landing page works fully without secrets.
5. Deploy.

## Project Structure

```text
src/app/                 App Router entrypoints and metadata
src/components/layout/   Header and footer
src/components/sections/ Landing page sections
src/components/ui/       Reusable UI primitives
src/components/visuals/  Technical visual systems
src/content/projects.ts  Evidence-backed project registry and GitHub metadata fetches
src/lib/site.ts          Brand, navigation, social, and principle data
public/brand/            AARKON emblem and cropped web mark assets
knowledge/               Obsidian-first repo knowledge vault
scripts/knowledge.mjs    Local knowledge tooling
```

Future projects should be added to `src/content/projects.ts` with status, maturity, stack, features, proof points, warnings, links, preview rows, and source paths. If a project gets a dedicated public narrative later, add a route under `src/app/projects/` and link it from the project registry.

The project registry attempts to enrich cards with GitHub metadata from the GitHub REST API. Builds and requests continue normally if GitHub is unavailable or the repositories are private. `GITHUB_TOKEN` is optional and is used only when private GitHub metadata should be available to the server runtime.

The landing page uses local CSS-only transitions for the mobile navigation dropdown, textured project cards, mock preview windows, the primary CTA, and the operational hero visual. This keeps the Cult UI-style polish dependency-light.

The active brand mark is `public/brand/aarkon-mark.png`; the original supplied emblem is preserved at `public/brand/aarkon-emblem-original.png`. Next.js uses `src/app/icon.png` for the generated favicon route.

## Obsidian Knowledge Vault

Open the top-level `knowledge/` folder as an Obsidian vault. The vault is organized as:

```text
knowledge/raw/       Machine-ingested source snapshots
knowledge/wiki/      Canonical domain, workflow, decision, and source-map notes
knowledge/outputs/   Generated reports and Q&A artifacts
knowledge/assets/    Vault assets
knowledge/.obsidian/ Vault settings
```

Vault links are vault-relative, such as `[[wiki/index]]`.

## Knowledge Scripts

```bash
npm run knowledge:ingest
npm run knowledge:compile
npm run knowledge:lint
npm run knowledge:ask -- --prompt "Where should future project pages be added?"
```

`knowledge:ask` performs local retrieval over the vault. If a repo-root `.env` provides `OPENAI_API_KEY`, it uses the OpenAI Responses API for synthesis. If no key is configured or the API call fails, it writes a deterministic fallback answer to `knowledge/outputs/`.

Supported `.env` keys:

```bash
OPENAI_API_KEY=
KNOWLEDGE_MODEL=gpt-4.1-mini
KNOWLEDGE_MAX_CONTEXT_NOTES=6
GITHUB_TOKEN=
```

The landing page renders static project content without any `.env` file. `GITHUB_TOKEN` is not required for deployment unless private repository metadata should appear on the public cards.

```

## scripts/knowledge.mjs

```mjs
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
  const files = col

[Snapshot truncated at 4000 characters]

```

## src/app/globals.css

```css
@import "tailwindcss";
@source "../**/*.{ts,tsx,mdx}";

@theme {
  --color-aarkon-bg: #070808;
  --color-aarkon-panel: #101211;
  --color-aarkon-panel-soft: #141714;
  --color-aarkon-line: #252923;
  --color-aarkon-line-soft: #1b1f1b;
  --color-aarkon-text: #e7ece8;
  --color-aarkon-muted: #8d968f;
  --color-aarkon-dim: #59625c;
  --color-aarkon-mint: #91d3b8;
  --color-aarkon-cyan: #9fbfd0;
  --color-aarkon-gold: #d2ba7b;
  --font-sans: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

:root {
  color-scheme: dark;
  --background: #070808;
  --foreground: #e7ece8;
}

* {
  box-sizing: border-box;
  letter-spacing: 0;
}

html {
  overflow-x: clip;
  scroll-behavior: smooth;
  background: var(--background);
}

body {
  overflow-x: clip;
  min-height: 100vh;
  margin: 0;
  background:
    linear-gradient(180deg, rgba(145, 211, 184, 0.04), transparent 22rem),
    linear-gradient(90deg, rgba(159, 191, 208, 0.035), transparent 34rem),
    var(--background);
  color: var(--foreground);
  font-family: var(--font-sans);
  text-rendering: geometricPrecision;
}

body::before {
  position: fixed;
  inset: 0;
  z-index: -2;
  pointer-events: none;
  content: "";
  background-image:
    linear-gradient(rgba(231, 236, 232, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(231, 236, 232, 0.035) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: linear-gradient(to bottom, black, transparent 80%);
}

body::after {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  content: "";
  background: linear-gradient(180deg, transparent 0%, rgba(7, 8, 8, 0.8) 68%, #070808 100%);
}

::selection {
  background: rgba(145, 211, 184, 0.24);
  color: #f8fffb;
}

a {
  text-decoration-thickness: 1px;
  text-underline-offset: 4px;
}

.reveal {
  animation: reveal 720ms cubic-bezier(0.22, 1, 0.36, 1) both;
}

.reveal-delay-1 {
  animation-delay: 90ms;
}

.reveal-delay-2 {
  animation-delay: 170ms;
}

.reveal-delay-3 {
  animation-delay: 250ms;
}

.hero-atmosphere {
  isolation: isolate;
}

.hero-atmosphere::before {
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  content: "";
  background-image:
    linear-gradient(rgba(145, 211, 184, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(159, 191, 208, 0.035) 1px, transparent 1px);
  background-position: 0 0;
  background-size: 42px 42px;
  mask-image: radial-gradient(circle at 58% 38%, black, transparent 72%);
  animation: grid-drift 28s linear infinite;
}

.hero-atmosphere::after {
  position: absolute;
  inset: 14% 8% auto auto;
  z-index: -1;
  width: min(38rem, 64vw);
  height: min(22rem, 42vw);
  pointer-events: none;
  content: "";
  background: radial-gradient(circle, rgba(145, 211, 184, 0.1), transparent 62%);
  filter: blur(22px);
  opacity: 0.36;
  animation: operational-pulse 7s ease-in-out infinite;
}

.hero-scanlines {
  opacity: 0.28;
  background: repeating-linear-gradient(
    180deg,
    transparent 0,
    transparent 7px,
    rgba(231, 236, 232, 0.03) 8px
  );
  mask-image: linear-gradient(to bottom, transparent, black 24%, transparent 82%);
  animation: scanline-drift 12s linear infinite;
}

.mobile-menu-panel {
  transform-origin: top right;
  animation: menu-dropdown 180ms cubic-bezier(0.22, 1, 0.36, 1) both;
}

.texture-card,
.mock-window,
.texture-button {
  position: relative;
}

.texture-card::before,
.mock-window::before,
.texture-button::before {
  position: absolute;
  inset: 0;
  pointer-events: none;
  content: "";
  opacity: 0.35;
  background-image:
    linear-gradient(rgba(231, 236, 232, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(231, 236, 232, 0.025) 1px, transparent 1px),
    radial-gradient(circle at 28% 0%, rgba(145, 211, 184, 0.08), transparent 34%);
  background-size: 18px 18px, 18px 18px, 100% 100%;
  mask-image: linear-gradient(to bottom, black, transparent 92%);
}

.texture-card > *,
.mock-window > *,
.texture-button > * {
  

[Snapshot truncated at 4000 characters]

```

## src/app/layout.tsx

```tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  icons: {
    icon: site.assets.mark,
    shortcut: site.assets.mark,
    apple: site.assets.mark,
  },
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    images: [
      {
        url: site.assets.emblem,
        width: 1024,
        height: 1024,
        alt: "AARKON emblem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: [site.assets.emblem],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070808",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-aarkon-bg text-aarkon-text antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-[6px] focus:border focus:border-aarkon-mint/50 focus:bg-aarkon-panel focus:px-4 focus:py-2 focus:text-sm focus:text-aarkon-text"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}

```

## src/app/page.tsx

```tsx
import { Footer } from "@/components/layout/Footer";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <SiteHeader />
      <main id="main">
        <Hero />
        <Projects />
        <Philosophy />
      </main>
      <Footer />
    </div>
  );
}

```

## src/app/robots.ts

```ts
import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}

```

## src/app/sitemap.ts

```ts
import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

```

## src/components/layout/Footer.tsx

```tsx
import { ExternalLink, GitBranch, Mail } from "lucide-react";
import { BrandMark } from "@/components/ui/BrandMark";
import { site } from "@/lib/site";

const footerLinks = [
  { label: "GitHub", href: site.links.github, icon: GitBranch },
  { label: "X", href: site.links.x, icon: ExternalLink },
  { label: "Contact", href: site.links.contact, icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-aarkon-line-soft">
      <div className="mx-auto flex w-full max-w-[calc(100vw-2.5rem)] flex-col gap-8 py-10 sm:max-w-[calc(100vw-3rem)] md:flex-row md:items-center md:justify-between lg:max-w-7xl">
        <div className="flex items-start gap-4">
          <BrandMark size="sm" />
          <div>
            <p className="text-sm font-medium text-aarkon-text">{site.name}</p>
            <p className="mt-2 max-w-md text-sm leading-6 text-aarkon-muted">
              Building careful software, infrastructure, and experiments for long-term use.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex flex-wrap gap-2">
            {footerLinks.map((item) => {
              const Icon = item.icon;
              const external = item.href.startsWith("http");

              return (
                <a
                  key={item.href}
                  className="inline-flex h-10 items-center gap-2 rounded-[6px] border border-aarkon-line bg-white/[0.025] px-3 text-sm text-aarkon-muted transition hover:border-aarkon-cyan/45 hover:bg-white/[0.055] hover:text-aarkon-text focus:outline-none focus:ring-2 focus:ring-aarkon-mint/35"
                  href={item.href}
                  rel={external ? "noreferrer" : undefined}
                  target={external ? "_blank" : undefined}
                >
                  <Icon aria-hidden="true" className="size-4" />
                  {item.label}
                </a>
              );
            })}
          </div>
          <p className="text-sm text-aarkon-dim">
            © {new Date().getFullYear()} AARKON.
          </p>
        </div>
      </div>
    </footer>
  );
}

```

## src/components/layout/SiteHeader.tsx

```tsx
import { GitBranch, Menu, X } from "lucide-react";
import { BrandMark } from "@/components/ui/BrandMark";
import { navigation, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-aarkon-line-soft bg-aarkon-bg/78 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-[calc(100vw-2.5rem)] items-center justify-between sm:max-w-[calc(100vw-3rem)] lg:max-w-7xl">
        <a
          aria-label="AARKON home"
          className="group inline-flex items-center gap-3 rounded-[6px] focus:outline-none focus:ring-2 focus:ring-aarkon-mint/35 focus:ring-offset-2 focus:ring-offset-aarkon-bg"
          href="#main"
        >
          <BrandMark size="sm" priority />
          <span className="text-sm font-semibold text-aarkon-text">
            {site.name}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 sm:flex">
          {navigation.map((item) => {
            const external = item.href.startsWith("http");

            return (
              <a
                key={item.href}
                className="inline-flex h-9 items-center rounded-[6px] px-3 text-sm text-aarkon-muted transition hover:bg-white/[0.035] hover:text-aarkon-text focus:outline-none focus:ring-2 focus:ring-aarkon-mint/35"
                href={item.href}
                rel={external ? "noreferrer" : undefined}
                target={external ? "_blank" : undefined}
              >
                {item.label === "GitHub" ? (
                  <GitBranch aria-hidden="true" className="mr-2 size-4" />
                ) : null}
                {item.label}
              </a>
            );
          })}
        </nav>

        <details className="mobile-menu group relative sm:hidden">
          <summary className="inline-flex size-10 cursor-pointer list-none items-center justify-center rounded-[6px] border border-aarkon-line bg-white/[0.035] text-aarkon-muted transition hover:border-aarkon-cyan/45 hover:text-aarkon-text focus:outline-none focus:ring-2 focus:ring-aarkon-mint/35 [&::-webkit-details-marker]:hidden">
            <Menu aria-hidden="true" className="size-4 group-open:hidden" />
            <X aria-hidden="true" className="hidden size-4 group-open:block" />
            <span className="sr-only">Toggle navigation</span>
          </summary>
          <nav
            aria-label="Mobile primary"
            className="mobile-menu-panel absolute right-0 top-12 z-50 w-56 overflow-hidden rounded-[8px] border border-aarkon-line bg-aarkon-panel/98 p-1 shadow-2xl shadow-black/35 backdrop-blur-xl"
          >
            {navigation.map((item) => {
              const external = item.href.startsWith("http");

              return (
                <a
                  key={item.href}
                  className="flex min-h-10 items-center gap-2 rounded-[6px] px-3 text-sm text-aarkon-muted transition hover:bg-white/[0.045] hover:text-aarkon-text focus:outline-none focus:ring-2 focus:ring-aarkon-mint/35"
                  href={item.href}
                  rel={external ? "noreferrer" : undefined}
                  target={external ? "_blank" : undefined}
                >
                  {item.label === "GitHub" ? (
                    <GitBranch aria-hidden="true" className="size-4" />
                  ) : null}
                  {item.label}
                </a>
              );
            })}
          </nav>
        </details>
      </div>
    </header>
  );
}

```

## src/components/sections/Hero.tsx

```tsx
import { ArrowDown, ExternalLink, GitBranch } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { BrandMark } from "@/components/ui/BrandMark";
import { SystemSignal } from "@/components/visuals/SystemSignal";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero-atmosphere relative px-5 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-18 lg:px-8 lg:pb-24">
      <div className="hero-scanlines pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid w-full min-w-0 max-w-[calc(100vw-2.5rem)] gap-12 sm:max-w-[calc(100vw-3rem)] lg:max-w-7xl lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="min-w-0 max-w-3xl">
          <div className="reveal flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <BrandMark size="lg" priority />
            <div className="inline-flex items-center gap-2 rounded-[6px] border border-aarkon-line bg-white/[0.035] px-3 py-1.5 text-sm text-aarkon-muted">
              <span className="size-1.5 rounded-[2px] bg-aarkon-mint" />
              Independent software lab
            </div>
          </div>

          <h1 className="reveal reveal-delay-1 mt-8 text-5xl font-semibold text-aarkon-text sm:text-6xl lg:text-7xl">
            AARKON
          </h1>

          <p className="reveal reveal-delay-2 mt-7 max-w-2xl text-xl leading-8 text-aarkon-text sm:text-2xl sm:leading-9">
            {site.mission}
          </p>

          <p className="reveal reveal-delay-2 mt-5 max-w-2xl text-base leading-7 text-aarkon-muted sm:text-lg">
            {site.summary}
          </p>

          <div className="reveal reveal-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href="#projects"
              icon={ArrowDown}
              tone="primary"
              className="texture-button w-full sm:w-auto"
            >
              View Projects
            </ButtonLink>
            <ButtonLink
              href={site.links.github}
              icon={GitBranch}
              external
              className="w-full sm:w-auto"
            >
              GitHub
            </ButtonLink>
            <ButtonLink
              href={site.links.x}
              icon={ExternalLink}
              tone="ghost"
              external
              className="w-full sm:w-auto"
            >
              Follow on X
            </ButtonLink>
          </div>
        </div>

        <div className="min-w-0">
          <SystemSignal />
        </div>
      </div>
    </section>
  );
}

```

## src/components/sections/Philosophy.tsx

```tsx
import { SectionHeading } from "@/components/ui/SectionHeading";
import { principles } from "@/lib/site";

export function Philosophy() {
  return (
    <section id="principles" className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto w-full max-w-[calc(100vw-2.5rem)] sm:max-w-[calc(100vw-3rem)] lg:max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionHeading
            eyebrow="Principles"
            title="Technical work with room to evolve"
            description="AARKON stays broad enough for new ideas, but consistent in how products are built: clear, controlled, durable, and useful."
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {principles.map((principle) => (
              <article
                key={principle.title}
                className="rounded-[8px] border border-aarkon-line bg-white/[0.025] p-5 transition hover:border-aarkon-mint/35 hover:bg-white/[0.045]"
              >
                <h3 className="text-base font-semibold text-aarkon-text">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-aarkon-muted">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

```

## src/components/sections/Projects.tsx

```tsx
import type { ReactNode } from "react";
import { ExternalLink, Fingerprint, HardDrive, Lock, Mail } from "lucide-react";
import { getProjectsWithGithubMetadata } from "@/content/projects";
import type {
  GithubMetadata,
  ProjectContent,
  ProjectSignal,
  ProjectWithGithubMetadata,
} from "@/content/projects";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusBadge } from "@/components/ui/StatusBadge";

const projectIcons = {
  local: HardDrive,
  verification: Fingerprint,
} satisfies Record<ProjectSignal, typeof HardDrive>;

export async function Projects() {
  const projects = await getProjectsWithGithubMetadata();

  return (
    <section
      id="projects"
      className="border-y border-aarkon-line-soft bg-aarkon-panel/35 px-5 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto w-full max-w-[calc(100vw-2.5rem)] sm:max-w-[calc(100vw-3rem)] lg:max-w-7xl">
        <SectionHeading
          eyebrow="Project Registry"
          title="Current work under AARKON"
          description="Evidence-backed snapshots of AARKON projects, sourced from the implementation repos rather than placeholder copy."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: ProjectWithGithubMetadata }) {
  const Icon = projectIcons[project.signal];
  const visibleFeatures = project.features.slice(0, 3);
  const visibleProofPoints = project.proofPoints.slice(0, 3);
  const githubLink =
    project.github.visibility === "public" && project.github.url
      ? project.github.url
      : null;

  return (
    <article className="texture-card group relative overflow-hidden rounded-[8px] border border-aarkon-line bg-aarkon-bg/72 p-6 transition duration-200 hover:-translate-y-0.5 hover:border-aarkon-cyan/40 hover:bg-aarkon-bg/88 sm:p-7">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-aarkon-mint/45 to-transparent opacity-0 transition group-hover:opacity-100" />

      <div className="flex items-start justify-between gap-5">
        <div className="grid size-11 shrink-0 place-items-center rounded-[6px] border border-aarkon-line bg-white/[0.035] text-aarkon-mint">
          <Icon aria-hidden="true" className="size-5" />
        </div>
        <StatusBadge>{project.status}</StatusBadge>
      </div>

      <ProjectPreview project={project} />

      <h3 className="mt-7 text-2xl font-semibold text-aarkon-text">
        {project.name}
      </h3>
      <p className="mt-3 text-sm font-medium leading-6 text-aarkon-cyan">
        {project.tagline}
      </p>
      <p className="mt-4 max-w-2xl text-base leading-7 text-aarkon-muted">
        {project.description}
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <MetaBlock label="Maturity" value={project.maturity} />
        <MetaBlock label="Stack" value={project.stack.join(" / ")} />
      </div>

      {project.githubMetadata ? (
        <GithubMetadataBlock metadata={project.githubMetadata} />
      ) : null}

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-[6px] border border-aarkon-line bg-white/[0.025] px-2.5 py-1 text-xs text-aarkon-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 grid gap-4">
        <ProjectList title="What Exists Now" items={visibleFeatures} />
        <ProjectList title="Technical Signals" items={visibleProofPoints} />

        <div className="rounded-[6px] border border-aarkon-line bg-white/[0.025] p-4">
          <p className="text-xs font-medium uppercase text-aarkon-cyan">
            Why It Matters
          </p>
          

[Snapshot truncated at 4000 characters]

```

## src/components/ui/BrandMark.tsx

```tsx
import Image from "next/image";
import { site } from "@/lib/site";

type BrandMarkProps = {
  size?: "sm" | "md" | "lg";
  priority?: boolean;
};

const sizeClasses = {
  sm: "size-9",
  md: "size-12",
  lg: "size-16 sm:size-20",
};

export function BrandMark({ size = "md", priority = false }: BrandMarkProps) {
  return (
    <span
      className={[
        "relative block shrink-0 overflow-hidden rounded-[8px] border border-aarkon-line bg-black shadow-lg shadow-black/30",
        sizeClasses[size],
      ].join(" ")}
      aria-hidden="true"
    >
      <Image
        src={site.assets.mark}
        alt=""
        fill
        priority={priority}
        sizes={size === "lg" ? "80px" : "48px"}
        className="object-cover"
      />
      <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
    </span>
  );
}

```

## src/components/ui/ButtonLink.tsx

```tsx
import Link from "next/link";
import type { ComponentType, ReactNode } from "react";
import type { LucideProps } from "lucide-react";

type ButtonTone = "primary" | "secondary" | "ghost";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  icon?: ComponentType<LucideProps>;
  tone?: ButtonTone;
  external?: boolean;
  className?: string;
};

const toneClasses: Record<ButtonTone, string> = {
  primary:
    "border-aarkon-mint/40 bg-aarkon-mint text-[#07100c] hover:border-aarkon-mint hover:bg-[#abe6cf]",
  secondary:
    "border-aarkon-line bg-white/[0.035] text-aarkon-text hover:border-aarkon-cyan/45 hover:bg-white/[0.065]",
  ghost:
    "border-transparent bg-transparent text-aarkon-muted hover:border-aarkon-line hover:bg-white/[0.035] hover:text-aarkon-text",
};

export function ButtonLink({
  href,
  children,
  icon: Icon,
  tone = "secondary",
  external = false,
  className = "",
}: ButtonLinkProps) {
  const classes = [
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-[6px] border px-4 py-2.5 text-sm font-medium transition duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-aarkon-mint/35 focus:ring-offset-2 focus:ring-offset-aarkon-bg",
    toneClasses[tone],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {Icon ? <Icon aria-hidden="true" className="size-4 shrink-0" /> : null}
      <span>{children}</span>
    </>
  );

  if (external) {
    return (
      <a className={classes} href={href} rel="noreferrer" target="_blank">
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {content}
    </Link>
  );
}

```

## src/components/ui/SectionHeading.tsx

```tsx
type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-medium uppercase text-aarkon-cyan">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold text-aarkon-text sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-aarkon-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

```

## src/components/ui/StatusBadge.tsx

```tsx
type StatusBadgeProps = {
  children: string;
};

export function StatusBadge({ children }: StatusBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-[6px] border border-aarkon-line bg-white/[0.035] px-2.5 py-1 text-xs font-medium text-aarkon-cyan">
      <span className="size-1.5 rounded-[2px] bg-aarkon-mint" />
      {children}
    </span>
  );
}

```

## src/components/visuals/SystemSignal.tsx

```tsx
const lanes = [
  { label: "Project state", value: "indexed / inspectable", tone: "bg-aarkon-mint" },
  { label: "Decision gate", value: "approval required", tone: "bg-aarkon-gold" },
  { label: "Proof path", value: "tamper-evident", tone: "bg-aarkon-cyan" },
];

const stages = [
  { label: "Observe", state: "watch" },
  { label: "Explain", state: "trace" },
  { label: "Approve", state: "gate" },
  { label: "Commit", state: "write" },
];

const terminalRows = [
  "state: observe",
  "risk: bounded",
  "gate: awaiting approval",
];

export function SystemSignal() {
  return (
    <div
      aria-label="AARKON operational signal visual"
      className="reveal reveal-delay-2 operational-glow relative min-h-[420px] min-w-0 overflow-hidden rounded-[8px] border border-aarkon-line bg-aarkon-panel/88 p-4 shadow-2xl shadow-black/30 sm:min-h-[440px] sm:p-5"
    >
      <div className="drifting-grid absolute inset-0 bg-[linear-gradient(rgba(231,236,232,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(231,236,232,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="micro-scanline absolute inset-0" />
      <div className="signal-sweep absolute inset-y-0 left-1/2 w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-aarkon-mint/10 to-transparent blur-sm" />

      <div className="relative flex h-full min-h-[388px] flex-col justify-between gap-4 sm:min-h-[400px]">
        <div className="flex items-center justify-between border-b border-aarkon-line-soft pb-4">
          <div>
            <p className="text-xs font-medium uppercase text-aarkon-cyan">
              Operation Trace
            </p>
            <p className="mt-1 text-sm text-aarkon-muted">
              careful execution model
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-[6px] border border-aarkon-line bg-aarkon-bg/72 px-2.5 py-1.5 text-xs text-aarkon-muted">
            <span className="node-pulse size-1.5 rounded-[2px] bg-aarkon-mint" />
            online
          </div>
        </div>

        <div className="grid gap-2">
          {lanes.map((lane) => (
            <div
              key={lane.label}
              className="grid grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] items-center gap-4 border-b border-aarkon-line-soft py-2.5 last:border-b-0"
            >
              <div className="flex min-w-0 items-center gap-3">
                <span className={`status-dot size-2 shrink-0 rounded-[2px] ${lane.tone}`} />
                <span className="truncate text-sm text-aarkon-text">
                  {lane.label}
                </span>
              </div>
              <span className="truncate text-right text-sm text-aarkon-muted">
                {lane.value}
              </span>
            </div>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-[1fr_0.82fr]">
          <div className="relative min-h-24 overflow-hidden rounded-[6px] border border-aarkon-line bg-aarkon-bg/62 p-3">
            <div className="mb-2 flex items-center justify-between text-[11px] uppercase text-aarkon-dim">
              <span>Trace</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="status-dot size-1.5 rounded-[2px] bg-aarkon-cyan" />
                live
              </span>
            </div>
            <svg
              className="h-12 w-full overflow-visible"
              viewBox="0 0 260 64"
              role="img"
              aria-label="Animated system trace"
            >
              <path
                d="M0 46 L34 46 L56 26 L89 26 L112 38 L144 38 L169 18 L204 18 L226 30 L260 30"
                className="trace-path"
                fill="none"
                pathLength="1"
              />
              <path
                d="M0 46 L34 46 L56 26 L89 26 L112 38 L144 38 L169 18 L204 18 L226 30 L260 30"
                className="trace-path trace-path-secondary"
                fill="none"
              

[Snapshot truncated at 4000 characters]

```

## src/content/projects.ts

```ts
import "server-only";

export type ProjectSignal = "local" | "verification";

export type ProjectGithubVisibility = "public" | "private" | "internal";

export type ProjectMaturity =
  | "prototype"
  | "experimental"
  | "beta"
  | "production"
  | "internal tooling";

export type GithubMetadata = {
  description: string | null;
  stars: number | null;
  lastPushedAt: string | null;
  updatedAt: string | null;
  primaryLanguage: string | null;
};

export type ProjectContent = {
  slug: string;
  name: string;
  tagline: string;
  status: string;
  maturity: ProjectMaturity;
  description: string;
  github: {
    owner: string;
    repo: string;
    url?: string;
    visibility: ProjectGithubVisibility;
    accessLabel: string;
  };
  contactHref: string;
  stack: readonly string[];
  tags: readonly string[];
  features: readonly string[];
  proofPoints: readonly string[];
  warnings?: readonly string[];
  whyItMatters: string;
  sourcePaths: readonly string[];
  signal: ProjectSignal;
  preview: {
    title: string;
    status: string;
    tone: "mint" | "cyan";
    rows: readonly {
      label: string;
      value: string;
      state: string;
    }[];
  };
};

type GithubApiRepository = {
  description?: string | null;
  stargazers_count?: number | null;
  pushed_at?: string | null;
  updated_at?: string | null;
  language?: string | null;
};

export type ProjectWithGithubMetadata = ProjectContent & {
  githubMetadata: GithubMetadata | null;
};

export const projects = [
  {
    slug: "aark-optimize",
    name: "Aark Optimize",
    tagline:
      "Local-first Mac storage intelligence with explainable reports and approval-gated cleanup.",
    status: "Private technical beta",
    maturity: "beta",
    description:
      "Implemented as Aark and the mac-storage-optimizer package: a Python CLI and local dashboard for technical Mac users to scan storage, generate deterministic reports, review cleanup plans, and clean only explicitly approved generated artifacts.",
    github: {
      owner: "nowayhoseadev-cell",
      repo: "mac-storage-optimizer",
      url: "https://github.com/nowayhoseadev-cell/mac-storage-optimizer",
      visibility: "private",
      accessLabel: "Private Repository",
    },
    contactHref: "mailto:hello@aarkon.com?subject=Aark%20Optimize",
    stack: [
      "Python 3.11+",
      "macOS",
      "local files",
      "static dashboard assets",
      "pytest",
      "GitHub Actions",
    ],
    tags: [
      "local-first",
      "macOS storage",
      "deterministic reports",
      "approval-gated cleanup",
      "read-only dashboard",
    ],
    features: [
      "Scans selected local roots and optional local source groups into Markdown and deterministic JSON reports.",
      "Generates cleanup-plan.md and cleanup-plan.json with stable action IDs and approved: false by default.",
      "Serves setup-first app mode, demo mode, and a read-only local dashboard from packaged static assets.",
      "Discovers local disks, external SSDs, local iCloud/Google Drive/Dropbox sync folders, and locally cloned GitHub repos without provider API calls.",
      "Executes cleanup only through the terminal clean command after explicit approval, with dry-run support.",
    ],
    proofPoints: [
      "pyproject.toml exposes the mac-storage-optimizer console script and classifies the package as alpha/private beta.",
      "mac_storage_optimizer/cli.py dispatches app, dashboard, demo, compare, sources, approve, and clean workflows.",
      "43 regression test functions cover scanner output, storage decisions, source discovery, dashboard safety, approval tokens, cleanup guards, demo mode, and launcher contracts.",
      "GitHub Actions validate pytest, Python compileall, dashboard JavaScript syntax, launcher shell syntax, and the knowledge vault lint.",
      "docs/screenshots documents deterministic demo-dashboard captures built from packaged fictional sample data.",
    ],
    warnings: [
      "Private technical beta, not a p

[Snapshot truncated at 4000 characters]

```

## src/lib/site.ts

```ts
export const site = {
  name: "AARKON",
  url: "https://aarkon.com",
  description:
    "AARKON is an independent software lab building local-first tools, verification infrastructure, and operational systems.",
  mission:
    "AARKON is an independent software lab building local-first tools, verification infrastructure, and operational systems.",
  summary:
    "A home for focused products and experiments shaped by clarity, trust, and careful engineering.",
  links: {
    github: "https://github.com/aarkon",
    x: "https://x.com/aarkon",
    contact: "mailto:hello@aarkon.com",
  },
  assets: {
    mark: "/brand/aarkon-mark.png",
    emblem: "/brand/aarkon-emblem-original.png",
  },
};

export const navigation = [
  { label: "Projects", href: "#projects" },
  { label: "Principles", href: "#principles" },
  { label: "GitHub", href: site.links.github },
];

export const principles = [
  {
    title: "Useful Before Loud",
    description:
      "Build for real workflows before broad claims.",
  },
  {
    title: "Explainable Systems",
    description:
      "Make behavior, risk, and tradeoffs visible.",
  },
  {
    title: "Trustworthy Records",
    description:
      "Use verification where records need durability and auditability.",
  },
  {
    title: "Operator Control",
    description:
      "Keep important actions intentional, reviewable, and reversible where possible.",
  },
] as const;

```

## tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts"
  ],
  "exclude": ["node_modules"]
}

```
