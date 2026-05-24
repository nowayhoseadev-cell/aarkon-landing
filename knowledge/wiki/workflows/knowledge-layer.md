---
id: "workflow-knowledge-layer"
kind: "workflow"
title: "Knowledge Layer Workflow"
source_paths:
  - "README.md"
  - "scripts/knowledge.mjs"
  - ".env.example"
updated_at: "2026-05-24T16:39:41.803Z"
status: "active"
tags:
  - "workflow"
  - "knowledge"
  - "obsidian"
links:
  - "wiki/workflows/index"
  - "wiki/sources/index"
---

# Knowledge Layer Workflow

The repository maintains an Obsidian-first vault in `knowledge/`.

## Maintenance Loop

1. Run `npm run knowledge:ingest` after meaningful source changes.
2. Run `npm run knowledge:compile` after domain, workflow, or decision changes.
3. Run `npm run knowledge:lint` before sharing or deploying.
4. Use `npm run knowledge:ask -- --prompt "..."` for local retrieval and generated Q&A outputs.
