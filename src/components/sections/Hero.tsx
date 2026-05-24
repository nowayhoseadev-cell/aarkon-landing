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
