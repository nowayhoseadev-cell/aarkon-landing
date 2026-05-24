type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-medium uppercase text-aarkon-cyan">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold text-aarkon-text sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-aarkon-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
