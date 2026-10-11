"use client";

import { useEffect, useState } from "react";
import { Code2, Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-glass shadow-lg shadow-black/5 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#inicio" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-600/30 transition group-hover:scale-105">
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

        {/* Nav desktop */}
        <nav aria-label="Navigasaun prinsipal" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition hover:bg-brand-500/10 hover:text-brand-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Aksaun */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#kontaktu"
            className="hidden rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-500 md:inline-flex"
          >
            Kontaktu Hau
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Serra menu" : "Haree menu"}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-glass text-ink backdrop-blur-md lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? "max-h-[26rem] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav
          className="mx-4 mb-4 rounded-2xl border border-line bg-glass p-3 shadow-xl backdrop-blur-xl"
          aria-label="Menu mobile"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-ink transition hover:bg-brand-500/10 hover:text-brand-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontaktu"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-xl bg-brand-600 px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Kontaktu Hau
          </a>
        </nav>
      </div>
    </header>
  );
}
