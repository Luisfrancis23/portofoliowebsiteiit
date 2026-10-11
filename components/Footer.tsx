import { Code2, Github, Heart, Linkedin, Facebook, Mail } from "lucide-react";
import { NAV_LINKS, SOCIALS, SITE } from "@/lib/data";

const FOOTER_ICONS = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Facebook: Facebook,
  Email: Mail,
} as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface/60">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Marka */}
          <div>
            <a href="#inicio" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-600/30">
                <Code2 className="h-5 w-5" />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-bold text-ink sm:text-base">
                  {SITE.name}
                </span>
                <span className="block text-[11px] font-medium tracking-wide text-muted">
                  {SITE.roleShort}
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              IT Professional no Informatics Engineer — dezenvolve solusaun
              dijitál, website, aplikasaun no sistema informasaun ba empresa,
              eskola no organizasaun.
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              {SOCIALS.map((social) => {
                const Icon =
                  FOOTER_ICONS[social.label as keyof typeof FOOTER_ICONS];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-glass text-muted transition hover:-translate-y-1 hover:border-brand-500/60 hover:text-brand-400"
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigasaun */}
          <nav aria-label="Navigasaun footer">
            <h3 className="text-sm font-bold tracking-widest text-ink uppercase">
              Navigasaun
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition hover:text-brand-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Kontaktu */}
          <div>
            <h3 className="text-sm font-bold tracking-widest text-ink uppercase">
              Kontaktu
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2.5 transition hover:text-brand-400"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand-400" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-4 w-4 shrink-0" />
                {SITE.location}
              </li>
            </ul>
            <a
              href="#kontaktu"
              className="mt-5 inline-flex items-center rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-500"
            >
              Kontaktu Hau
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-7 sm:flex-row">
          <p className="text-xs text-muted">
            © {year} {SITE.name}. Direitu rezervadu.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-muted">
            Dezenvolvidu ho dedikasaun no teknolojia.
            <Heart className="h-3.5 w-3.5 text-brand-400" fill="currentColor" />
          </p>
        </div>
      </div>
    </footer>
  );
}
