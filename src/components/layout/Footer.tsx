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
