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
