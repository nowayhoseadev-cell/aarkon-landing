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
