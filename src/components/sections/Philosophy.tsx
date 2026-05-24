import { SectionHeading } from "@/components/ui/SectionHeading";
import { principles } from "@/lib/site";

export function Philosophy() {
  return (
    <section id="principles" className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto w-full max-w-[calc(100vw-2.5rem)] sm:max-w-[calc(100vw-3rem)] lg:max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionHeading
            eyebrow="Principles"
            title="Technical work with room to evolve"
            description="AARKON stays broad enough for new ideas, but consistent in how products are built: clear, controlled, durable, and useful."
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {principles.map((principle) => (
              <article
                key={principle.title}
                className="rounded-[8px] border border-aarkon-line bg-white/[0.025] p-5 transition hover:border-aarkon-mint/35 hover:bg-white/[0.045]"
              >
                <h3 className="text-base font-semibold text-aarkon-text">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-aarkon-muted">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
