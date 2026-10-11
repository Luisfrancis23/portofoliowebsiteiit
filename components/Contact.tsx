"use client";

import { useState, type FormEvent } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Info,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { SOCIALS, SITE } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "success"; message: string }
  | { kind: "error"; message: string };

const INITIAL: FormState = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const update = (field: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, honeypot: "" }),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setStatus({ kind: "success", message: data.message });
        setForm(INITIAL);
      } else if (res.status === 422 && data.errors) {
        setErrors(data.errors);
        setStatus({
          kind: "error",
          message: "Hakfila fali — haree erru iha formuláriu.",
        });
      } else {
        setStatus({
          kind: "error",
          message: data.error || "Hau na'in iha problema. Havoa hatama fila.",
        });
      }
    } catch {
      setStatus({
        kind: "error",
        message: "La bele konekta agora. Havoa fila mais tarde.",
      });
    }
  };

  const inputClass = (field: keyof FormState) =>
    `w-full rounded-xl border bg-elevated/50 px-4 py-3 text-sm text-ink placeholder:text-muted/60 transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 ${
      errors[field] ? "border-red-400" : "border-line"
    }`;

  return (
    <section id="kontaktu" className="relative py-24 sm:py-28">
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-brand-600/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Kontaktu"
          title={
            <>
              Mai{" "}
              <span className="bg-gradient-to-r from-brand-400 to-cyan-300 bg-clip-text text-transparent">
                Kolabora ho Hau
              </span>
            </>
          }
          description="Ita iha ideia projetu foun ka presiza solusaun teknolojia? Kontaktu hau atu ita bele ko'alia kona-ba oinsá teknolojia bele ajuda ita-nia servisu."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Info kontaktu */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-5">
              <div className="rounded-2xl border border-line bg-surface p-6">
                <h3 className="text-lg font-bold text-ink">
                  Kontaktu direktamente
                </h3>
                <ul className="mt-5 space-y-4">
                  <li>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="group flex items-center gap-4"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 transition group-hover:bg-brand-500 group-hover:text-white">
                        <Mail className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold tracking-wide text-muted uppercase">
                          Email
                        </span>
                        <span className="text-sm font-medium text-ink underline-offset-4 group-hover:underline">
                          {SITE.email}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`${SITE.whatsapp}?text=${encodeURIComponent(
                        "Olá, hau hakarak ko'alia kona-ba projetu teknolojia."
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 transition group-hover:bg-brand-500 group-hover:text-white">
                        <MessageCircle className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold tracking-wide text-muted uppercase">
                          WhatsApp
                        </span>
                        <span className="text-sm font-medium text-ink underline-offset-4 group-hover:underline">
                          {SITE.phone}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                      className="group flex items-center gap-4"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 transition group-hover:bg-brand-500 group-hover:text-white">
                        <Phone className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold tracking-wide text-muted uppercase">
                          Telefone
                        </span>
                        <span className="text-sm font-medium text-ink underline-offset-4 group-hover:underline">
                          {SITE.phone}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold tracking-wide text-muted uppercase">
                        Lokalizasaun
                      </span>
                      <span className="text-sm font-medium text-ink">
                        {SITE.location}
                      </span>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-brand-500/25 bg-gradient-to-br from-brand-500/10 to-cyan-500/5 p-5">
                <p className="flex items-start gap-2.5 text-sm leading-relaxed text-ink">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                  Hau halo oin hau responde mensajen iha 24 oras. Para proposta
                  rápidu, haree{" "}
                  <a href="#servisu" className="font-semibold text-brand-400 underline decoration-brand-400/40 underline-offset-4">
                    servisu
                  </a>{" "}
                  no husu orsamentu.
                </p>
              </div>

              <div className="flex items-center gap-3">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface text-muted transition hover:-translate-y-1 hover:border-brand-500/60 hover:text-brand-400"
                  >
                    <span className="text-xs font-extrabold">
                      {social.label.slice(0, 2).toUpperCase()}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Formuláriu */}
          <Reveal delay={150} className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-3xl border border-line bg-surface p-6 shadow-xl shadow-black/5 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-ink"
                  >
                    Naran <span className="text-brand-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="O-nia naran kompletu"
                    className={inputClass("name")}
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-400">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-ink"
                  >
                    Email <span className="text-brand-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="nome@exemplo.com"
                    className={inputClass("email")}
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-400">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-ink"
                >
                  Asuntu
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={(e) => update("subject", e.target.value)}
                  placeholder="Projetu website, sistema, suporte..."
                  maxLength={200}
                  className={inputClass("subject")}
                  aria-invalid={Boolean(errors.subject)}
                />
                {errors.subject && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-400">
                    <AlertCircle className="h-3.5 w-3.5" />
                    {errors.subject}
                  </p>
                )}
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-ink"
                >
                  Mensajen <span className="text-brand-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Ko'alia kona-ba o-nia ideia, nesesidade no prazu..."
                  maxLength={5000}
                  className={`${inputClass("message")} resize-y`}
                  aria-invalid={Boolean(errors.message)}
                />
                <div className="mt-1.5 flex items-center justify-between">
                  {errors.message ? (
                    <p className="flex items-center gap-1.5 text-xs font-medium text-red-400">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.message}
                    </p>
                  ) : (
                    <span />
                  )}
                  <span className="text-[11px] text-muted/70">
                    {form.message.length}/5000
                  </span>
                </div>
              </div>

              {/* Honeypot anti-spam (invizivel ba humanu) */}
              <input
                type="text"
                name="companyWebsite"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="pointer-events-none absolute h-0 w-0 opacity-0"
                defaultValue=""
              />

              <button
                type="submit"
                disabled={status.kind === "sending"}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/40 transition hover:bg-brand-500 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status.kind === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Haruka...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Haruka Mensajen
                  </>
                )}
              </button>

              {status.kind === "success" && (
                <p
                  role="status"
                  className="mt-4 flex items-start gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-400"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                  {status.message}
                </p>
              )}
              {status.kind === "error" && (
                <p
                  role="alert"
                  className="mt-4 flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-400"
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  {status.message}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
