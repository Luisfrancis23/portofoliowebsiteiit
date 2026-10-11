import { TIMELINE, TIMELINE_ICONS } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="esperiensia" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Karreira"
          title={
            <>
              Hau-nia{" "}
              <span className="bg-gradient-to-r from-brand-400 to-cyan-300 bg-clip-text text-transparent">
                Esperiénsia no Edukasaun
              </span>
            </>
          }
          description="Edukasaun, esperiénsia servisu, projetu importante, kursu no sertifikadu. Dadus provizóriu bele troka iha lib/data.ts."
        />

        <div className="relative">
          {/* Linha timeline */}
          <div
            aria-hidden
            className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-brand-500/60 via-line to-transparent lg:left-1/2 lg:-translate-x-1/2"
          />

          <ol className="space-y-10">
            {TIMELINE.map((item, i) => {
              const Icon = TIMELINE_ICONS[item.type];
              const left = i % 2 === 0;
              return (
                <li
                  key={`${item.title}-${i}`}
                  className={`relative pl-14 lg:w-1/2 lg:pl-0 ${
                    left ? "lg:pr-14" : "lg:ml-auto lg:pl-14"
                  }`}
                >
                  {/* Ikona na linha */}
                  <span className="absolute left-5 top-0 flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface text-brand-400 shadow-lg lg:h-12 lg:w-12 lg:shadow-xl">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span
                    aria-hidden
                    className={`absolute -bottom-0 hidden lg:block ${
                      left ? "-right-[2.35rem]" : "-left-[2.35rem]"
                    }`}
                  />

                  <Reveal delay={left ? 0 : 120}>
                    <article className="rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/50 hover:shadow-xl hover:shadow-brand-600/10">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-brand-500/10 px-3 py-1 text-[11px] font-bold tracking-wide text-brand-400 uppercase">
                          {item.period}
                        </span>
                        <span className="rounded-full border border-line px-3 py-1 text-[11px] font-semibold tracking-wide text-muted uppercase">
                          {item.type === "education"
                            ? "Edukasaun"
                            : item.type === "work"
                              ? "Esperiénsia"
                              : item.type === "project"
                                ? "Projetu"
                                : item.type === "course"
                                  ? "Kursu"
                                  : "Sertifikadu"}
                        </span>
                        {item.placeholder && (
                          <span className="rounded-full border border-dashed border-amber-500/50 px-3 py-1 text-[11px] font-semibold tracking-wide text-amber-500 uppercase">
                            Dadus provizóriu
                          </span>
                        )}
                      </div>

                      <h3 className="mt-3.5 text-lg font-bold text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-sm font-semibold text-brand-400/90">
                        {item.org}
                      </p>
                      <p className="mt-2.5 text-sm leading-relaxed text-muted">
                        {item.description}
                      </p>

                      {item.items && item.items.length > 0 && (
                        <ul className="mt-4 space-y-1.5">
                          {item.items.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-2.5 text-sm text-muted"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      )}
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
