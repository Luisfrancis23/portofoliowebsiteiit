import { SKILLS } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="kompetensia" className="relative bg-elevated/40 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Kompeténsia Téknika"
          title={
            <>
              Hau-nia{" "}
              <span className="bg-gradient-to-r from-brand-400 to-cyan-300 bg-clip-text text-transparent">
                Kompeténsia
              </span>
            </>
          }
          description="Habilidade ne'ebé hau dezenvolve iha projetu real no treinamentu kontinuo. Informasaun ne'e bele atualiza tuir realidade — la iha nivel inventadu."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((category, i) => (
            <Reveal key={category.id} delay={(i % 3) * 120}>
              <article className="group h-full rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/50 hover:shadow-xl hover:shadow-brand-600/10">
                <div className="flex items-start justify-between gap-4">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-xl transition group-hover:scale-110"
                    style={{
                      backgroundColor: `${category.color}1f`,
                      color: category.color,
                    }}
                  >
                    <category.icon className="h-6 w-6" />
                  </span>
                  <span
                    className="rounded-full px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase"
                    style={{
                      backgroundColor: `${category.color}14`,
                      color: category.color,
                    }}
                  >
                    {category.skills.length} habilidade
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-bold text-ink">
                  {category.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {category.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-line bg-elevated/60 px-2.5 py-1.5 text-xs font-medium text-ink"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
