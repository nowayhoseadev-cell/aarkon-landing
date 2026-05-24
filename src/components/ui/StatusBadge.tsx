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
