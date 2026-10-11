import {
  AppWindow,
  Award,
  BookOpen,
  Braces,
  Briefcase,
  Compass,
  Database,
  DatabaseZap,
  GitBranch,
  Globe2,
  GraduationCap,
  Lightbulb,
  Rocket,
  Server,
  Target,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

/* ============================================================
   INFORMAÇÃO PESSOAL — TROKA IHA NE'E!
   Substitui "[...]" ho naran, foto, email no link real.
   ============================================================ */
export const SITE = {
  name: "Hakerek Naran Kompletu", // ← o-nia naran kompletu
  role: "IT Professional | Web Developer | Informatics Engineer",
  roleShort: "IT Professional",
  location: "Timor-Leste",
  email: "kontaktu@exemplo.com", // ← o-nia email real
  phone: "+670 000 000", // ← o-nia telefone (opsional)
  github: "https://github.com/seu-usuario", // ← o-nia GitHub
  linkedin: "https://www.linkedin.com/in/seu-perfil", // ← o-nia LinkedIn
  facebook: "https://www.facebook.com/seu-perfil", // ← o-nia Facebook
  whatsapp: "https://wa.me/6700000000", // ← o-nia WhatsApp (kodigu pais + numero)
  avatar: "/avatar.svg", // ← troka ba foto real iha /public
  available: true, // hatudu "Disponível ba kolaborasaun" iha Hero
};

export const NAV_LINKS = [
  { label: "Inísio", href: "#inicio" },
  { label: "Kona-ba Hau", href: "#kona-ba-hau" },
  { label: "Kompeténsia", href: "#kompetensia" },
  { label: "Projetu", href: "#projetu" },
  { label: "Servisu", href: "#servisu" },
  { label: "Esperiénsia", href: "#esperiensia" },
  { label: "Teknolojia", href: "#teknolojia" },
  { label: "Kontaktu", href: "#kontaktu" },
];

/* ============================================================
   KONTA-BU HAU
   ============================================================ */
export const ABOUT = {
  paragraphs: [
    "Hau mak IT Professional ho base iha Engenharia Informátika, ho pasaun ba dezenvolvimentu software, website, aplikasaun web no sistema informasaun. Hau gosta rezolve problema real liuhusi teknolojia — kria solusaun ne'ebé útil, sekuru no fasil atu uza.",
    "Hau-nia foku mak dezenvolve sistema no website ne'ebé ajuda eskola, negósiu no organizasaun atu jera dadus no aumenta efisiénsia operasaun. Hau kontinua aprende teknolojia foun no mantein kapasidade profissional atual.",
    "Ba hau, teknolojia la'o de'it ferramenta — mak parte ba muda vidas no negósio. Kada projeto hatama iha hatene ne'ebé klarer, dezenvolve no deliver ho qualidade.",
  ],
  cards: [
    {
      icon: Target,
      title: "Foku Profisionál",
      text: "Rezolve problema real liuhusi kódigo klarer, dezenvolve sistema ne'ebé útil no fasil atu uza, no manten qualidade alta.",
      color: "#3b82f6",
    },
    {
      icon: Zap,
      title: "Abilidade Téknika",
      text: "Frontend, backend, database, programming no IT support — husi design tela ka'de'it ba deploy.",
      color: "#8b5cf6",
    },
    {
      icon: Compass,
      title: "Objetivu Karreira",
      text: "Kolabora ho equipa internasionál, aprende teknolojia foun, no kria solusaun dijitál ba edukasaon no negósio.",
      color: "#06b6d4",
    },
  ],
};

/* ============================================================
   KOMPETÉNSIA
   ============================================================ */
export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  skills: string[];
}

export const SKILLS: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Interface modernu, responsivu no fasil atu uza.",
    icon: Globe2,
    color: "#3b82f6",
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "React / Next.js"],
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Lógica servisu, API no autentikasaun.",
    icon: Server,
    color: "#8b5cf6",
    skills: ["PHP", "Laravel", "CodeIgniter", "REST API"],
  },
  {
    id: "database",
    title: "Database",
    description: "Estrutura dadus no operasaun seguru.",
    icon: Database,
    color: "#06b6d4",
    skills: ["MySQL", "Database Design", "CRUD Operations"],
  },
  {
    id: "programming",
    title: "Programming",
    description: "Lógica, algoritma no software de qualidade.",
    icon: Braces,
    color: "#f59e0b",
    skills: ["Python", "Object-Oriented Programming", "Software Development"],
  },
  {
    id: "support",
    title: "IT Support",
    description: "Suporte tékniku no manutensaun sistema.",
    icon: Wrench,
    color: "#10b981",
    skills: [
      "Instál software",
      "Manutensaun hardware",
      "Troubleshooting",
      "Konfigurasaun sistema",
    ],
  },
  {
    id: "tools",
    title: "Tools no Workflow",
    description: "Ferramenta ba produtividade no kontrolu versaun.",
    icon: GitBranch,
    color: "#ec4899",
    skills: ["Git no GitHub", "Visual Studio Code", "XAMPP", "Figma"],
  },
];

/* ============================================================
   PROJETU — troka screenshot (iha /public/projects), deskrisaun no link
   ============================================================ */
export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  tech: string[];
  demoUrl: string | null; // ← liga demo real iha disponivel
  githubUrl: string | null; // ← liga GitHub real iha disponivel
  isDemo: boolean; // true = projetu demonstrasaun
}

export const PROJECTS: Project[] = [
  {
    id: "sistema-eskola",
    title: "Sistema Informasaun Eskola",
    tagline: "Jestaun dadus eskola integradu",
    description:
      "Sistema informasaun ba eskola: registu estudante, kontrolu nota, presensa, jestesaun turma no relatoriu ba administradór. Interface klarer ho papel importante ba sekretaria no mestru.",
    image: "/projects/sistema-eskola.svg",
    tech: ["Next.js", "TypeScript", "MySQL"],
    demoUrl: null,
    githubUrl: null,
    isDemo: true,
  },
  {
    id: "portfolio",
    title: "Website Portfolio Profisionál",
    tagline: "Imajen profesional online",
    description:
      "Website portfolio modernu ho design responsivu, animasaun suave, dark/light mode, SEO otimizadu no prontu ba deploy. Hatudu identidade profesional, kompeténsia no projetu.",
    image: "/projects/portfolio.svg",
    tech: ["Next.js", "Tailwind CSS", "Lucide Icons"],
    demoUrl: null,
    githubUrl: null,
    isDemo: true,
  },
  {
    id: "jestesaun-estudante",
    title: "Sistema Jestaun Dadus Estudante",
    tagline: "Matrikula no historiku akademiku",
    description:
      "Plataforma ba jestesaun informasaun estudante: matrikula, dadus pessoal, historiku akademiku no busca raapida. Rola ba eskola ho numeru estudante barak.",
    image: "/projects/jestesaun-estudante.svg",
    tech: ["PHP", "Laravel", "MySQL"],
    demoUrl: null,
    githubUrl: null,
    isDemo: true,
  },
  {
    id: "jestesaun-despeza",
    title: "Sistema Jestaun Despeza",
    tagline: "Kontrolu finansas pessoal no negósio",
    description:
      "Aplikasaun ba monitoramentu despeza: rejistra transasaun, kategoria, anexu no grafiku relatoriu ne'ebé bele hatudu pattern gastu iha tempo.",
    image: "/projects/jestesaun-despeza.svg",
    tech: ["React", "REST API", "MySQL"],
    demoUrl: null,
    githubUrl: null,
    isDemo: true,
  },
  {
    id: "website-restaurante",
    title: "Website Negósiu no Restaurante",
    tagline: "Presénsia online ba negósio",
    description:
      "Website promosional ba restaurante: karta menu, galeria foto, informasaun kontaktu no formuláriu reserva. Design responsivu ba smartphone no desktop.",
    image: "/projects/website-restaurante.svg",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    demoUrl: null,
    githubUrl: null,
    isDemo: true,
  },
  {
    id: "katalogu-produtu",
    title: "Sistema Katalógu Produtu",
    tagline: "Katalógu digital ho filtra no peskisa",
    description:
      "Sistema katalógu produtukliente ho filtra kategoria, peskisa raapida no painel administrasaun ba gestão produsitu (CRUD).",
    image: "/projects/katalogu-produtu.svg",
    tech: ["PHP", "CodeIgniter", "MySQL"],
    demoUrl: null,
    githubUrl: null,
    isDemo: true,
  },
];

/* ============================================================
   SERVISU
   ============================================================ */
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export const SERVICES: Service[] = [
  {
    id: "website",
    title: "Website Development",
    description:
      "Kria website profissional, responsivu no otimizadu ba empresa, organizasaun, eskola no negósio.",
    icon: Globe2,
    color: "#3b82f6",
  },
  {
    id: "sistema",
    title: "Sistema Informasaun",
    description:
      "Dezenvolve sistema ba jestesaun dadus estudante, funsionáriu no operasaun negósio.",
    icon: Database,
    color: "#8b5cf6",
  },
  {
    id: "aplikasaun",
    title: "Aplikasaun Web",
    description: "Kria aplikasaun web ne'ebé responsivu, sekuru no fasil atu uza.",
    icon: AppWindow,
    color: "#06b6d4",
  },
  {
    id: "support",
    title: "IT Support",
    description:
      "Ajuda iha instalasaun software, manutensaun hardware no rezolve problema tékniku.",
    icon: Wrench,
    color: "#10b981",
  },
  {
    id: "database",
    title: "Database Management",
    description: "Planeamentu, dezenvolvimentu no jestesaun database ne'ebé efisiente no sekuru.",
    icon: DatabaseZap,
    color: "#f59e0b",
  },
  {
    id: "konsultoria",
    title: "Konsultoria Teknolojia",
    description: "Fó orientasaun kona-ba solusaun dijitál tuir nesesidade kliente.",
    icon: Lightbulb,
    color: "#ec4899",
  },
];

/* ============================================================
   ESPERIÉNSIA NO EDUKASAUN — placeholder ([...]) troka ho dadus real
   ============================================================ */
export type TimelineType =
  | "education"
  | "work"
  | "project"
  | "course"
  | "certification";

export interface TimelineItem {
  type: TimelineType;
  title: string;
  org: string;
  period: string;
  description: string;
  items?: string[];
  placeholder?: boolean; // true = dadus provizóriu, troka depois
}

export const TIMELINE: TimelineItem[] = [
  {
    type: "education",
    title: "Bacharelatu iha Engenharia Informátika",
    org: "[Naran Instituisaun]",
    period: "20XX – 20XX",
    description:
      "Foku iha dezenvolvimentu software, rede komputador, database no segurança informasaun.",
    items: [
      "Programação Web no Mobile",
      "Database no Sistema Informasaun",
      "Rede no Segurança Network",
    ],
    placeholder: true,
  },
  {
    type: "work",
    title: "IT Support / Web Developer",
    org: "[Naran Empresa]",
    period: "20XX – Agora",
    description:
      "Suporte tékniku, instalasaun software, manutensaun hardware no dezenvolvimentu website no sistema internu.",
    items: [
      "Rezolve ticket suporte tekniku",
      "Dezenvolve website institusionál",
      "Manutensaun servidor no backup",
    ],
    placeholder: true,
  },
  {
    type: "project",
    title: "Sistema Informasaun Eskola",
    org: "Projetu akademiku",
    period: "20XX",
    description:
      "Dezenvolve sistema jestesaun dadus eskola ho equipa 3 pessoa — husi analize requisitu ka'de'it ba deploy.",
    items: ["Analize requisitu", "Design database", "Deploy no treinu usuáriu"],
    placeholder: true,
  },
  {
    type: "course",
    title: "Kursu Web Development",
    org: "[Naran Plataforma / Instituisaun]",
    period: "20XX",
    description: "Treinamentu praktiku iha HTML, CSS, JavaScript, PHP no MySQL.",
    placeholder: true,
  },
  {
    type: "certification",
    title: "Sertifikadu [Naran Sertifikadu]",
    org: "[Instituisaun Emissor]",
    period: "20XX",
    description: "Sertifikadu iha área teknolojia — hatama iha ne'e bainhira disponivel.",
    placeholder: true,
  },
];

export const TIMELINE_ICONS: Record<TimelineType, LucideIcon> = {
  education: GraduationCap,
  work: Briefcase,
  project: Rocket,
  course: BookOpen,
  certification: Award,
};

/* ============================================================
   TEKNOLOJIA NE'EBE HAU UZA (chip marquee)
   ============================================================ */
export interface Tech {
  name: string;
  abbr: string;
  color: string;
}

export const TECH_STACK: Tech[] = [
  { name: "HTML5", abbr: "H5", color: "#e34f26" },
  { name: "CSS3", abbr: "C3", color: "#264de4" },
  { name: "JavaScript", abbr: "JS", color: "#d9c309" },
  { name: "PHP", abbr: "PHP", color: "#777bb4" },
  { name: "Python", abbr: "PY", color: "#3776ab" },
  { name: "Laravel", abbr: "LV", color: "#ff2d20" },
  { name: "CodeIgniter", abbr: "CI", color: "#e8572a" },
  { name: "Next.js", abbr: "N▲", color: "#3b82f6" },
  { name: "React", abbr: "R", color: "#61dafb" },
  { name: "Bootstrap", abbr: "BS", color: "#7952b3" },
  { name: "MySQL", abbr: "SQL", color: "#4479a1" },
  { name: "Git", abbr: "GIT", color: "#f05033" },
  { name: "GitHub", abbr: "GH", color: "#8b949e" },
  { name: "VS Code", abbr: "VS", color: "#007acc" },
  { name: "Figma", abbr: "FG", color: "#a259ff" },
];

/* ============================================================
   SOCIAL
   ============================================================ */
export const SOCIALS = [
  { label: "GitHub", href: SITE.github },
  { label: "LinkedIn", href: SITE.linkedin },
  { label: "Facebook", href: SITE.facebook },
  { label: "Email", href: `mailto:${SITE.email}` },
];
