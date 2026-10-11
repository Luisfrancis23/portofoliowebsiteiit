# Portfolio IT Profisionál

Website portfolio profesional ba **IT Professional | Web Developer | Informatics Engineer**, dezenvolvidu ho kontéudu iha **Tetun**. Design modernu, elegante, responsivu (desktop / tablet / smartphone), ho dark/light mode, animasaun suave no SEO otimizadu.

## ✨ Karakterístika

- **Stack modernu:** Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + Lucide Icons
- **Tetun** hanesan lian prinsipál
- **Dark / Light mode** ho persisténsia (localStorage)
- **Animasaun suave** bainha scroll (IntersectionObserver) — la hamenus velocidade
- **Projetu sira** ho modal detallu, teknolojia no link demo/GitHub
- **Formuláriu kontaktu** ho validasaun (frontend + backend), rate limiting no proteksaun spam (honeypot)
- **SEO:** meta, Open Graph, favicon, sitemap.xml, robots.txt
- **Aksesibilidade:** HTML semantiku, aria labels, kontraste kor di'ak, skip link
- **Prontu ba deploy** iha Vercel / Netlify / Node server

## 📁 Estrutura

```
├── app/
│   ├── layout.tsx          # Layout prinsipal + metadata (SEO, OG)
│   ├── page.tsx            # Pájina inicial (seksaun hotu)
│   ├── globals.css         # Tailwind v4 + tema semantiku
│   ├── sitemap.ts          # Sitemap otomátiku
│   ├── robots.ts           # robots.txt
│   └── api/contact/        # API formuláriu kontaktu
├── components/             # Komponente reutilizável
│   ├── Navbar.tsx          # Navigation bar (mobile + desktop)
│   ├── Hero.tsx            # Seksaun inísio
│   ├── About.tsx           # Kona-ba Hau
│   ├── Skills.tsx          # Kompeténsia téknika
│   ├── Projects.tsx        # Projetu sira (+ modal)
│   ├── Services.tsx        # Servisu
│   ├── Experience.tsx      # Esperiénsia no edukasaun (timeline)
│   ├── TechStack.tsx       # Teknolojia ne'ebé hau uza (marquee)
│   ├── Contact.tsx         # Formuláriu kontaktu
│   └── Footer.tsx          # Footer
├── lib/
│   ├── data.ts             # ← DADUS HOTU IHA NE'E (troka iha ne'e!)
│   └── validations.ts      # Validasaun formuláriu
└── public/                 # Favicon, avatar, OG image, screenshot projetu
```

## 🚀 Instalasaun no uzu lokal

Presiza **Node.js 18.18+** (rekomendadu 20+).

```bash
# 1. Kopia ficheiru
git clone <o-nia-repositorio>
cd portfolio-it-profissional

# 2. Instala dependénsia
npm install

# 3. Halao ficheiru ambiente (opsional — formuláriu still funsiona senão)
cp .env.example .env.local

# 4. Hahú iha mode dezenvolvimentu
npm run dev
```

Abre browser iha **http://localhost:3000**.

## 🔧 Atualiza dadus (naran, foto, projetu, link)

**Dadu hotu iha `lib/data.ts`** — la presiza halo troca iha komponente.

| Ne'ebé troka | Iha ne'e |
|---|---|
| Naran, email, telefone, lokalizasaun | `SITE` iha `lib/data.ts` |
| Link GitHub / LinkedIn / Facebook / WhatsApp | `SITE` iha `lib/data.ts` |
| Foto/avatar | troka `public/avatar.svg` (ka muda `SITE.avatar`) |
| Projetu (naran, deskrisaun, teknolojia) | `PROJECTS` iha `lib/data.ts` |
| Screenshot projetu | troka ficheiru iha `public/projects/` |
| Link demo / GitHub proyektu | `demoUrl` / `githubUrl` iha `PROJECTS` |
| Kompeténsia | `SKILLS` iha `lib/data.ts` |
| Servisu | `SERVICES` iha `lib/data.ts` |
| Esperiénsia / edukasaun / sertifikadu | `TIMELINE` iha `lib/data.ts` |
| Teknolojia (marquee) | `TECH_STACK` iha `lib/data.ts` |

> ⚠️ Troka placeholder `[ ... ]` ho informasaun real antes publika.

## 📧 Formuláriu kontaktu (email)

Formuláriu **sempre funsiona** (valida no simu mensajen), maibé ba **haruka email** presiza konfigura Resend (grátis, 3.000 email/fulan):

1. Kria konta iha [resend.com](https://resend.com) no verifica o-nia dominio (ka uza dominio Resend).
2. Kopia `.env.example` ba `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
3. Hatama iha `.env.local`:
   ```
   CONTACT_TO_EMAIL=o-nia@email.com
   RESEND_API_KEY=re_...
   RESEND_FROM=Portfolio <o-nia@o-nia-dominio.com>
   NEXT_PUBLIC_SITE_URL=https://o-nia-dominio.com
   ```
4. Deploy fali.

Se `RESEND_API_KEY` la iha, website hatudu mensajen klaru: *"Sistema email seidauk la konfiguradu"* — la'u dehan mensajen haruka ona.

**Nota:** rate limiting atualmente in-memory. Ba serverless (Vercel), substitui ho Redis/Upstash ba limitu konsistente.

## 🌐 Deploy online (Vercel — rekomendadu)

1. Push kódigo ba **GitHub**.
2. Iha [vercel.com](https://vercel.com), klik **Add New → Project** no importa o-nia repositorio.
3. Iha **Environment Variables**, hatama:
   - `CONTACT_TO_EMAIL`
   - `RESEND_API_KEY` (opsional)
   - `RESEND_FROM` (opsional)
   - `NEXT_PUBLIC_SITE_URL` = URL publika (ex.: `https://portfolio.vercel.app`)
4. Klik **Deploy**. Vercel dá **HTTPS/SSL otomátiku**.

**Domínio rasik:** iha Vercel → Settings → Domains → hatama o-nia dominio (ex.: `seunaran.com`) no konfigura DNS (A rekord `76.76.21.21` ka CNAME `cname.vercel-dns.com`). SSL automatis.

**Netlify:** `npm run build` gera `.next/`; uza Next.js runtime (`@netlify/next`) ba funsaun API, ka deploy statika (formuláriu la funsiona tanpa server).

## 🧪 Teste antes entrega

```bash
npm install     # instala dependénsia
npm run dev     # hahú dev server (http://localhost:3000)
npm run build   # build produisaun (verifika erru)
npm run start   # hahú build produisaun lokalmente
```

Teste lista:
- [x] `npm install` no `npm run dev` bele hahú
- [x] `npm run build` bele build
- [ ] Link no navigation hotu funsiona (testa iha browser)
- [ ] Formuláriu kontaktu (testa; configura Resend ba email real)
- [ ] Desktop no smartphone (resize browser / devtools)
- [ ] Imagen no icon la broken

## 🔒 Seguransa

- Validasaun input frontend + backend
- Honeypot anti-bot + rate limiting (5 requisaun/ora por IP)
- La tau segredo iha frontend — uza `.env.local` (ignoradu ho Git)
- La iha API key iha kódigo

## 📄 Lisensa

MIT — liberdade atu uza, modifica no distribuí.

---

*Dezenvolvidu ho dedikasaun no teknolojia.* 🇹🇱
