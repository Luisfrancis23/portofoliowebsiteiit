import { ArrowRight } from "lucide-react";
import { SERVICES, SITE } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="servisu" className="relative bg-elevated/40 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Servisu"
          title={
            <>
              Servisu ne'ebé{" "}
              <span className="bg-gradient-to-r from-brand-400 to-cyan-300 bg-clip-text text-transparent">
                Hau Fó
              </span>
            </>
          }
          description="Solusaun teknolojia tuir nesesidade o — husi website simples ka'de'it sistema informasaun integradu."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.id} delay={(i % 3) * 120}>
              <article className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/50 hover:shadow-xl hover:shadow-brand-600/10">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl transition group-hover:scale-110"
                  style={{
                    backgroundColor: `${service.color}1f`,
                    color: service.color,
                  }}
                >
                  <service.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <a
                  href={`mailto:${SITE.email}?subject=${encodeURIComponent(
                    `Orsamentu: ${service.title}`
                  )}&body=${encodeURIComponent(
                    "Olá, hau hakarak husu orsamentu ba servisu ne'e. Oinsá projetu o?\n\n— Naran:\nDeskrisaun projetu:\n"
                  )}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400 transition hover:gap-2.5 hover:text-brand-300"
                >
                  Husu Orsamentu
                  <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
