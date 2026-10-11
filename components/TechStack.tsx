import { TECH_STACK } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function TechChip({ name, abbr, color }: { name: string; abbr: string; color: string }) {
  return (
    <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-500/50">
      <span
        className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-xs font-extrabold"
        style={{
          backgroundColor: `${color}1f`,
          color,
          border: `1px solid ${color}55`,
        }}
      >
        {abbr}
      </span>
      <span className="text-sm font-semibold text-ink">{name}</span>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="teknolojia" className="relative overflow-hidden bg-elevated/40 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Stack Tékniku"
          title={
            <>
              Teknolojia ne'ebé{" "}
              <span className="bg-gradient-to-r from-brand-400 to-cyan-300 bg-clip-text text-transparent">
                Hau Uza
              </span>
            </>
          }
          description="Ferramenta no framework ne'ebé hau uza ba dezenvolvimentu solusaun dijitál modernu."
        />
      </div>

      {/* Marquee */}
      <Reveal>
        <div className="group relative">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-base to-transparent sm:w-40"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-base to-transparent sm:w-40"
          />
          <div className="overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max animate-marquee gap-4 pr-4 group-hover:[animation-play-state:paused]">
              {[0, 1].map((copy) => (
                <div key={copy} className="flex items-center gap-4 pr-4" aria-hidden={copy === 1}>
                  {TECH_STACK.map((tech) => (
                    <TechChip key={`${copy}-${tech.name}`} {...tech} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
