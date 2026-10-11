import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — ${SITE.role}`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Portfolio profesional IT Professional no Informatics Engineer — dezenvolve website, aplikasaun web, sistema informasaun no solusaun teknolojia ba empresa, eskola no organizasaun.",
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  keywords: [
    "IT Professional",
    "Informatics Engineer",
    "Web Developer",
    "Portfolio",
    "Timor-Leste",
    "Next.js",
    "React",
    "Laravel",
    "MySQL",
    "Python",
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    type: "website",
    title: `${SITE.name} — ${SITE.role}`,
    description:
      "Portfolio profesional IT Professional no Informatics Engineer. Projetu, kompeténsia no servisu teknolojia.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.role}`,
    description:
      "Portfolio profesional IT Professional no Informatics Engineer. Projetu, kompeténsia no servisu teknolojia.",
    images: ["/og-image.svg"],
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tet" suppressHydrationWarning>
      <head>
        {/* Font Inter — la blokeia build (carrega iha browser) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Inisializa tema antes paint (evita flash) */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`try{var t=localStorage.getItem("theme");if(t==="light"){document.documentElement.classList.remove("dark")}else{document.documentElement.classList.add("dark")}}catch(e){document.documentElement.classList.add("dark")}`}
        </Script>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Bai ba kontéudu prinsipal
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <ScrollTop />
      </body>
    </html>
  );
}
