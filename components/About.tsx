import { User } from "lucide-react";
import { ABOUT, SITE } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="kona-ba-hau" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Kona-ba Hau"
          title={
            <>
              Profisionál ne'ebé gosta{" "}
              <span className="bg-gradient-to-r from-brand-400 to-cyan-300 bg-clip-text text-transparent">
                rezolve problema
              </span>
            </>
          }
        />

        <div className="grid items-start gap-10 lg:grid-cols-5 lg:gap-14">
          {/* Kartu identidade */}
          <Reveal className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-3xl border border-line bg-surface p-8 shadow-xl shadow-black/5">
              <div
                aria-hidden
                className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-600/15 blur-3xl"
              />
              <div className="relative flex items-center gap-5">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-600/30">
                  <User className="h-8 w-8" />
                </span>
                <div>
                  <p className="text-xl font-bold text-ink">{SITE.name}</p>
                  <p className="text-sm font-medium text-brand-400">{SITE.role}</p>
                  <p className="mt-1 text-xs text-muted">{SITE.location}</p>
                </div>
              </div>
              <div className="relative mt-6 space-y-3 border-t border-line pt-6">
                {ABOUT.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="text-sm leading-relaxed text-muted">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Tri kartu foku */}
          <div className="lg:col-span-3">
            <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-3">
              {ABOUT.cards.map((card, i) => (
                <Reveal key={card.title} delay={i * 120}>
                  <div className="group h-full rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/50 hover:shadow-xl hover:shadow-brand-600/10">
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-xl transition group-hover:scale-110"
                      style={{
                        backgroundColor: `${card.color}1f`,
                        color: card.color,
                      }}
                    >
                      <card.icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 text-base font-bold text-ink">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {card.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <div className="mt-6 rounded-2xl border border-brand-500/25 bg-gradient-to-br from-brand-500/10 to-cyan-500/5 p-6">
                <p className="text-sm leading-relaxed text-ink sm:text-base">
                  <span className="font-bold text-brand-400">
                    Ita iha ideia ka presiza solusaun teknolojia?
                  </span>{" "}
                  Hau sempre aberto ba kolaborasaun foun — husi website simples
                  ka'de'it sistema enterprise. Haree hau-nia{" "}
                  <a href="#servisu" className="font-semibold text-brand-400 underline decoration-brand-400/40 underline-offset-4 transition hover:text-brand-300">
                    servisu
                  </a>{" "}
                  no{" "}
                  <a href="#kontaktu" className="font-semibold text-brand-400 underline decoration-brand-400/40 underline-offset-4 transition hover:text-brand-300">
                    kontaktu hau
                  </a>
                  .
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
