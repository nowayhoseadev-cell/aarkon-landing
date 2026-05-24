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
