import { NextResponse } from "next/server";
import { validateContact, type ContactInput } from "@/lib/validations";

const WINDOW_MS = 60 * 60 * 1000; // 1 hora
const MAX_PER_HOUR = 5;

/* Rate limiting in-memory (simples). Ba produisaun serverless, uza Redis/Upstash. */
const limiter = new Map<string, { count: number; reset: number }>();

function clientIp(request: Request): string {
  const fwd = request.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return "desconhecido";
}

export async function POST(request: Request) {
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { ok: false, error: "Korpu requisaun invalida." },
        { status: 400 }
      );
    }

    const input = body as ContactInput;

    /* Honeypot — bot emplena fali ne'e; responde sucesso maibé la halo nada. */
    if (input && typeof input.honeypot === "string" && input.honeypot.length > 0) {
      return NextResponse.json(
        { ok: true, configured: false, message: "Obrigadu!" },
        { status: 200 }
      );
    }

    const { ok, errors } = validateContact(input);
    if (!ok) {
      return NextResponse.json({ ok: false, errors }, { status: 422 });
    }

    /* Rate limiting */
    const ip = clientIp(request);
    const now = Date.now();
    const record = limiter.get(ip);
    if (record && record.reset > now && record.count >= MAX_PER_HOUR) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Hau resebeu mensajen barak hosi endereçu ne'e iha tempo ne'e. Havoa minutos balu no hatama fila.",
        },
        { status: 429 }
      );
    }
    if (!record || record.reset <= now) {
      limiter.set(ip, { count: 1, reset: now + WINDOW_MS });
    } else {
      record.count += 1;
    }

    const to = process.env.CONTACT_TO_EMAIL || "";
    const apiKey = process.env.RESEND_API_KEY || "";
    const from = process.env.RESEND_FROM || `Portfolio <${to}>`;

    /* Sistema email la konfiguradu — simu mensajen maibé la haruka email. */
    if (!apiKey || !to) {
      // eslint-disable-next-line no-console
      console.info("[kontaktu] Mensajen resebido (email seidauk konfiguradu):", {
        name: input.name,
        email: input.email,
        subject: input.subject || "(la iha)",
      });
      return NextResponse.json(
        {
          ok: true,
          configured: false,
          message:
            "Obrigadu! O-nia mensajen simu ona. Sistema email seidauk la konfiguradu — hau kontaktu o direktamente liuhusi email ka WhatsApp.",
        },
        { status: 200 }
      );
    }

    const text = [
      `Naran: ${input.name}`,
      `Email: ${input.email}`,
      `Asuntu: ${input.subject || "(la iha)"}`,
      "",
      "Mensajen:",
      input.message,
    ].join("\n");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: `[Portfolio] ${input.subject || "Novu kontaktu"} — husi ${input.name}`,
        text,
      }),
    });

    if (!res.ok) {
      // eslint-disable-next-line no-console
      console.error("[kontaktu] Resend erro:", res.status, await res.text());
      return NextResponse.json(
        {
          ok: false,
          error:
            "Hau na'in la bele haruka o-nia mensajen agora. Havoa fila mais tarde ka kontaktu hau direktamente liuhusi email.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        ok: true,
        configured: true,
        message:
          "Obrigadu, " +
          input.name.split(" ")[0] +
          "! Hau simu o-nia mensajen no halo oin hau responde iha 24 oras.",
      },
      { status: 200 }
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("[kontaktu] Erro:", error);
    return NextResponse.json(
      {
        ok: false,
        error: "Hau na'in iha problema. Havoa hatama fila mais tarde.",
      },
      { status: 500 }
    );
  }
}
