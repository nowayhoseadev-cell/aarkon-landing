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
