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
          <p className="mt-2 text-sm leading-6 text-aarkon-muted">
            {project.whyItMatters}
          </p>
        </div>

        {project.warnings?.length ? (
          <ProjectList
            title="Known Limits"
            items={project.warnings}
            tone="warning"
          />
        ) : null}
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        {githubLink ? (
          <ButtonLink href={githubLink} icon={ExternalLink} tone="secondary" external>
            GitHub
          </ButtonLink>
        ) : (
          <span className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[6px] border border-aarkon-line bg-white/[0.025] px-4 py-2.5 text-sm font-medium text-aarkon-muted">
            <Lock aria-hidden="true" className="size-4 shrink-0" />
            {project.github.accessLabel}
          </span>
        )}
        <ButtonLink href={project.contactHref} icon={Mail} tone="ghost">
          Contact
        </ButtonLink>
      </div>
    </article>
  );
}

function GithubMetadataBlock({ metadata }: { metadata: GithubMetadata }) {
  const details = [
    metadata.primaryLanguage,
    typeof metadata.stars === "number"
      ? `${metadata.stars.toLocaleString("en-US")} stars`
      : null,
    metadata.updatedAt ? `updated ${formatDate(metadata.updatedAt)}` : null,
  ].filter(Boolean);

  if (!metadata.description && details.length === 0) {
    return null;
  }

  return (
    <div className="mt-3 rounded-[6px] border border-aarkon-line bg-aarkon-bg/55 p-3">
      <p className="text-xs font-medium uppercase text-aarkon-dim">
        Repository Metadata
      </p>
      {metadata.description ? (
        <p className="mt-2 text-sm leading-5 text-aarkon-text">
          {metadata.description}
        </p>
      ) : null}
      {details.length > 0 ? (
        <p className="mt-2 text-xs leading-5 text-aarkon-muted">
          {details.join(" / ")}
        </p>
      ) : null}
    </div>
  );
}

function MetaBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[6px] border border-aarkon-line bg-aarkon-bg/55 p-3">
      <p className="text-xs font-medium uppercase text-aarkon-dim">{label}</p>
      <p className="mt-2 text-sm leading-5 text-aarkon-text">{value}</p>
    </div>
  );
}

function ProjectList({
  title,
  items,
  tone = "default",
}: {
  title: string;
  items: readonly string[];
  tone?: "default" | "warning";
}) {
  const titleClass =
    tone === "warning" ? "text-aarkon-gold" : "text-aarkon-cyan";
  const dotClass =
    tone === "warning" ? "bg-aarkon-gold/70" : "bg-aarkon-mint/70";

  return (
    <div className="rounded-[6px] border border-aarkon-line bg-white/[0.025] p-4">
      <p className={`text-xs font-medium uppercase ${titleClass}`}>{title}</p>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-aarkon-muted">
        {items.map((item) => (
          <li key={item} className="grid grid-cols-[0.45rem_1fr] gap-3">
            <span className={`mt-2 size-1.5 rounded-[2px] ${dotClass}`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectPreview({ project }: { project: ProjectContent }) {
  return (
    <MockBrowserWindow
      title={project.preview.title}
      status={project.preview.status}
      tone={project.preview.tone}
    >
      <div className="terminal-window space-y-2 font-mono text-[11px] text-aarkon-muted">
        {project.preview.rows.map((row, index) => (
          <div
            key={row.label}
            className="terminal-row flex items-center justify-between gap-4 rounded-[6px] border border-aarkon-line-soft bg-white/[0.02] px-3 py-2"
            style={{ animationDelay: `${index * 1.1}s` }}
          >
            <span className="min-w-0">
              <span className="text-aarkon-cyan">{row.label}</span>:{" "}
              {row.value}
            </span>
            <span className="shrink-0 text-aarkon-mint">{row.state}</span>
          </div>
        ))}
      </div>
    </MockBrowserWindow>
  );
}

function MockBrowserWindow({
  title,
  status,
  tone,
  children,
}: {
  title: string;
  status: string;
  tone: "mint" | "cyan";
  children: ReactNode;
}) {
  const dotClass = tone === "mint" ? "bg-aarkon-mint" : "bg-aarkon-cyan";

  return (
    <div className="mock-window mt-7 overflow-hidden rounded-[8px] border border-aarkon-line bg-aarkon-bg/62">
      <div className="flex items-center justify-between gap-3 border-b border-aarkon-line-soft px-4 py-2.5 text-xs text-aarkon-muted">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-[#ff6b5f]/50" />
          <span className="size-2 rounded-full bg-aarkon-gold/55" />
          <span className="size-2 rounded-full bg-aarkon-mint/55" />
        </div>
        <span className="min-w-0 truncate text-[11px]">{title}</span>
        <span className="inline-flex shrink-0 items-center gap-2">
          <span className={`status-dot size-1.5 rounded-[2px] ${dotClass}`} />
          {status}
        </span>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

function formatDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "unknown";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}
