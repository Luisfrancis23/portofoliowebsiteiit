"use client";

import { useState } from "react";
import { ArrowUpRight, ExternalLink, Github, Info } from "lucide-react";
import { PROJECTS, type Project } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projetu" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfólio"
          title={
            <>
              Hau-nia{" "}
              <span className="bg-gradient-to-r from-brand-400 to-cyan-300 bg-clip-text text-transparent">
                Projetu sira
              </span>
            </>
          }
          description="Projetu ne'ebé mostra hau-nia abilidade iha frontend, backend, database no IT. Kada kartu bele hatudu detallu."
        />

        <Reveal className="mb-8">
          <p className="inline-flex items-center gap-2 rounded-xl border border-brand-500/25 bg-brand-500/10 px-4 py-2.5 text-xs font-medium text-muted sm:text-sm">
            <Info className="h-4 w-4 shrink-0 text-brand-400" />
            Projetu ne'e mak demonstrasaun. Troka naran, screenshot, deskrisaun
            no link ho facil iha{" "}
            <code className="rounded bg-elevated px-1.5 py-0.5 font-semibold text-ink">
              lib/data.ts
            </code>
            .
          </p>
        </Reveal>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 120}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/50 hover:shadow-2xl hover:shadow-brand-600/10">
                <div className="relative aspect-video overflow-hidden bg-elevated">
                  <img
                    src={project.image}
                    alt={`Screenshot ${project.title}`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  {project.isDemo && (
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur">
                      <Info className="h-3 w-3" />
                      Demonstrasaun
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold text-ink transition group-hover:text-brand-400">
                    {project.title}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-brand-400/90">
                    {project.tagline}
                  </p>
                  <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-line bg-elevated/60 px-2 py-0.5 text-[11px] font-semibold text-ink"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-2 border-t border-line pt-4">
                    <button
                      type="button"
                      onClick={() => setSelected(project)}
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-brand-600/10 px-4 py-2.5 text-sm font-semibold text-brand-400 transition hover:bg-brand-600 hover:text-white"
                    >
                      Haree Detallu
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Demo ${project.title}`}
                        title="Demo"
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-line text-muted transition hover:border-brand-500/60 hover:text-brand-400"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub ${project.title}`}
                        title="GitHub"
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-line text-muted transition hover:border-brand-500/60 hover:text-brand-400"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
