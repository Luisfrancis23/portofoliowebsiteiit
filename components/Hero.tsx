import {
  ArrowDown,
  Database,
  Github,
  Linkedin,
  Facebook,
  Mail,
  Code2,
  Sparkles,
} from "lucide-react";
import { SOCIALS, SITE } from "@/lib/data";
import Reveal from "./Reveal";

const SOCIAL_ICONS = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Facebook: Facebook,
  Email: Mail,
} as const;

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-20 pt-32 sm:pt-36">
      {/* Background: grid + glow */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(59 130 246 / 0.055) 1px, transparent 1px), linear-gradient(to bottom, rgb(59 130 246 / 0.055) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 85% 65% at 50% 35%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 65% at 50% 35%, black 30%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-600/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute right-[-8rem] top-1/3 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        {/* Kontéudu tekstu */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-400">
              <Sparkles className="h-3.5 w-3.5" />
              {SITE.role}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              Olá, Hau Mak{" "}
              <span className="bg-gradient-to-r from-brand-400 via-cyan-300 to-brand-500 bg-clip-text text-transparent">
                Profisionál iha Teknolojia Informasaun.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Hau dezenvolve solusaun dijitál, website, aplikasaun no sistema
              informasaun atu ajuda negósiu no organizasaun sira sai efisiente
              liután.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-3 text-sm font-semibold text-brand-400">
              {SITE.name} — {SITE.location}
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projetu"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/40 transition hover:-translate-y-0.5 hover:bg-brand-500"
              >
                Haree Hau-nia Projetu sira
                <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href="#kontaktu"
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-glass px-6 py-3.5 text-sm font-semibold text-ink backdrop-blur-md transition hover:-translate-y-0.5 hover:border-brand-500/60 hover:text-brand-400"
              >
                <Mail className="h-4 w-4" />
                Kontaktu Hau
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-8 flex items-center gap-3">
              {SOCIALS.map((social) => {
                const Icon = SOCIAL_ICONS[social.label as keyof typeof SOCIAL_ICONS];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-glass text-muted backdrop-blur-md transition hover:-translate-y-1 hover:border-brand-500/60 hover:text-brand-400"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* Avatar / foto */}
        <Reveal delay={200} className="relative mx-auto w-full max-w-md">
          <div
            aria-hidden
            className="absolute -inset-6 rounded-[2.75rem] bg-gradient-to-br from-brand-500/40 via-cyan-400/25 to-violet-500/30 blur-2xl"
          />
          <div className="relative rounded-[2.25rem] border border-line bg-surface p-3 shadow-2xl shadow-black/20">
            <div className="relative aspect-square overflow-hidden rounded-[1.75rem] bg-elevated">
              <img
                src={SITE.avatar}
                alt={`Avatar ${SITE.name}`}
                width={640}
                height={640}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Chips flutuante */}
            <div
              aria-hidden
              className="absolute -left-5 top-12 flex animate-float items-center gap-2 rounded-xl border border-line bg-glass px-3.5 py-2 shadow-lg backdrop-blur-md"
            >
              <Code2 className="h-4 w-4 text-brand-400" />
              <span className="text-xs font-semibold text-ink">Next.js</span>
            </div>
            <div
              aria-hidden
              className="absolute -right-5 bottom-16 flex animate-float-slow items-center gap-2 rounded-xl border border-line bg-glass px-3.5 py-2 shadow-lg backdrop-blur-md"
            >
              <Database className="h-4 w-4 text-cyan-400" />
              <span className="text-xs font-semibold text-ink">MySQL</span>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Indikador scroll */}
      <Reveal delay={500} className="mt-16 flex justify-center">
        <a
          href="#kona-ba-hau"
          aria-label="Bai ba seksaun Kona-ba Hau"
          className="flex h-11 w-11 animate-pulse-soft items-center justify-center rounded-full border border-line bg-glass text-muted backdrop-blur-md transition hover:text-brand-400"
        >
          <ArrowDown className="h-5 w-5" />
        </a>
      </Reveal>
    </section>
  );
}
