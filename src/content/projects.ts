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
      "Private technical beta, not a public downloadable app, autonomous cleanup service, or cloud sync product.",
      "The Finder .app is a lightweight launcher, not a signed or notarized macOS application.",
      "Cloud support is local sync-folder mapping only; it does not call iCloud, Google Drive, Dropbox, or GitHub APIs.",
      "Move/archive recommendations are review-only and do not verify destination capacity, checksums, or rollback.",
    ],
    whyItMatters:
      "Mac storage pressure usually mixes safe generated artifacts with user data, project state, and cloud sync folders. Aark Optimize makes the evidence visible before cleanup and keeps destructive action separated behind explicit approval.",
    sourcePaths: [
      "../mac-storage-optimizer/README.md",
      "../mac-storage-optimizer/TECHNICAL_BETA.md",
      "../mac-storage-optimizer/SAFETY.md",
      "../mac-storage-optimizer/pyproject.toml",
      "../mac-storage-optimizer/mac_storage_optimizer/cli.py",
      "../mac-storage-optimizer/tests/test_regression.py",
      "../mac-storage-optimizer/.github/workflows/ci.yml",
      "../mac-storage-optimizer/docs/screenshots/README.md",
    ],
    signal: "local",
    preview: {
      title: "storage intelligence",
      status: "local",
      tone: "mint",
      rows: [
        {
          label: "scan",
          value: "setup-first CLI/app flow",
          state: "read-only",
        },
        {
          label: "plan",
          value: "cleanup-plan.json approvals",
          state: "gated",
        },
        {
          label: "clean",
          value: "terminal-only dry run",
          state: "explicit",
        },
      ],
    },
  },
  {
    slug: "ledgerseal",
    name: "LedgerSeal",
    tagline:
      "XRPL Testnet proof infrastructure for document hash anchoring and independent verification.",
    status: "Experimental testnet infrastructure",
    maturity: "experimental",
    description:
      "A Next.js App Router application that hashes document bytes, anchors hashes to XRPL Testnet, stores LS-1 proof metadata in Postgres, and exposes org-scoped dashboard workflows plus public verification.",
    github: {
      owner: "nowayhoseadev-cell",
      repo: "LedgerSeal",
      url: "https://github.com/nowayhoseadev-cell/LedgerSeal",
      visibility: "private",
      accessLabel: "Private Repository",
    },
    contactHref: "mailto:hello@aarkon.com?subject=LedgerSeal",
    stack: [
      "Next.js App Router",
      "TypeScript",
      "Prisma",
      "Postgres",
      "XRPL JS SDK",
      "Tailwind",
      "BullMQ/Redis plumbing",
    ],
    tags: [
      "XRPL Testnet",
      "SHA-256",
      "proof bundles",
      "org-scoped API",
      "public verification",
    ],
    features: [
      "POST /api/seal accepts multipart, octet-stream, text, or JSON content, requires x-org-id, hashes raw bytes, submits an XRPL Testnet transaction, and stores proof metadata.",
      "GET /api/seals and GET /api/seals/[id] expose org-scoped list/detail APIs with status, date, network, query, cursor, and limit handling.",
      "POST /api/seals/verify accepts file upload or SHA-256 hash input, rate limits public verification, checks hash match, and confirms the XRPL transaction.",
      "Dashboard pages cover org access setup, seal creation, seal listing, seal detail verification, proof-bundle download, and the public /verify flow.",
      "The Prisma Seal model stores LS-1 versioning, file/root hashes, XRPL tx data, ledger index, validated timestamp, org/user scope, and query indexes.",
    ],
    proofPoints: [
      "Five API route files implement health, seal creation, seal listing, seal detail, and verification endpoints.",
      "App Router pages cover the landing, public verify screen, dashboard, seal upload, seal detail, and redirect compatibility paths.",
      "lib/xrpl-config.ts and lib/testnet-guardrails.ts reject non-testnet configuration and mainnet URLs.",
      "CI runs npm ci, npm run lint, and npm test; the test file verifies SHA-256 known vectors.",
      "APP_FLOW.md and BACKEND_STRUCTURE.md document the implemented route, scoping, database, and verification flows.",
    ],
    warnings: [
      "XRPL mainnet support is explicitly out of scope; the code enforces Testnet.",
      "BullMQ and Redis worker modules exist, but workers are not wired to a runtime entrypoint yet.",
      "Authentication is currently org header/API-key scoping, not full user accounts or role management.",
      "Automated test coverage is narrow today: one Node test file covers hash vectors.",
      "A proof confirms byte integrity and ledger anchoring, not authorship, content accuracy, or first existence.",
    ],
    whyItMatters:
      "Operational records often need an integrity check that survives outside the app that created them. LedgerSeal keeps the stored record small: hash the bytes, anchor the hash, store proof metadata, and let internal or public verifiers check the result later.",
    sourcePaths: [
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
    signal: "verification",
    preview: {
      title: "proof packet",
      status: "testnet",
      tone: "cyan",
      rows: [
        {
          label: "hash",
          value: "SHA-256 raw bytes",
          state: "stored",
        },
        {
          label: "anchor",
          value: "XRPL Testnet tx",
          state: "guarded",
        },
        {
          label: "verify",
          value: "file or hash endpoint",
          state: "public",
        },
      ],
    },
  },
] as const satisfies readonly ProjectContent[];

export async function getProjectsWithGithubMetadata(): Promise<
  ProjectWithGithubMetadata[]
> {
  const entries = await Promise.all(
    projects.map(async (project) => ({
      ...project,
      githubMetadata: await getGithubMetadata(project),
    })),
  );

  return entries;
}

async function getGithubMetadata(
  project: ProjectContent,
): Promise<GithubMetadata | null> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 2500);
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  const token = process.env.GITHUB_TOKEN;

  if (project.github.visibility !== "public" && !token) {
    return null;
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(
      `https://api.github.com/repos/${project.github.owner}/${project.github.repo}`,
      {
        headers,
        next: { revalidate: 3600 },
        signal: controller.signal,
      },
    );

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as GithubApiRepository;

    return {
      description: data.description ?? null,
      stars:
        typeof data.stargazers_count === "number"
          ? data.stargazers_count
          : null,
      lastPushedAt: data.pushed_at ?? null,
      updatedAt: data.updated_at ?? null,
      primaryLanguage: data.language ?? null,
    };
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}
