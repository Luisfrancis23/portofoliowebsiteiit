"use client";

import { useEffect, useRef } from "react";
import { ExternalLink, Github, Info, X } from "lucide-react";
import type { Project } from "@/lib/data";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-line bg-surface shadow-2xl">
        <div className="relative aspect-video overflow-hidden bg-elevated">
          <img
            src={project.image}
            alt={`Screenshot ${project.title}`}
            className="h-full w-full object-cover"
          />
          {project.isDemo && (
            <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
              <Info className="h-3 w-3" />
              Projetu demonstrasaun
            </span>
          )}
        </div>

        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Serra"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black/80"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6 sm:p-8">
          <h3 className="text-2xl font-extrabold text-ink">{project.title}</h3>
          <p className="mt-1 text-sm font-semibold text-brand-400">
            {project.tagline}
          </p>

          <p className="mt-4 leading-relaxed text-muted">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-lg border border-brand-500/30 bg-brand-500/10 px-2.5 py-1 text-xs font-semibold text-brand-400"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-500"
              >
                <ExternalLink className="h-4 w-4" />
                Haree Demo
              </a>
            ) : null}
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-glass px-5 py-2.5 text-sm font-semibold text-ink backdrop-blur transition hover:border-brand-500/60 hover:text-brand-400"
              >
                <Github className="h-4 w-4" />
                Kódigo iha GitHub
              </a>
            ) : null}
            {!project.demoUrl && !project.githubUrl && (
              <p className="text-sm italic text-muted">
                Demo ka link GitHub seidauk disponivel — troka iha{" "}
                <code className="rounded bg-elevated px-1.5 py-0.5 text-xs">
                  lib/data.ts
                </code>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
