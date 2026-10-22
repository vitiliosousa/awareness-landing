import type { Metadata } from "next";
import { IBM_Plex_Sans, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import { Cabecalho } from "@/components/cabecalho";
import { Rodape } from "@/components/rodape";
import { DESCRICAO, NOME, SITE_URL, SLOGAN } from "@/lib/marca";

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// A imagem de partilha vem de app/opengraph-image.tsx e o ícone de app/icon.svg; o Next junta-os aqui sozinho.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${NOME} · ${SLOGAN}`, template: `%s · ${NOME}` },
  description: DESCRICAO,
  applicationName: NOME,
  keywords: ["cibersegurança", "awareness", "phishing", "formação em segurança", "engenharia social", "Moçambique", "empresas", "treino de equipas"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "pt_MZ", siteName: NOME, title: `${NOME} · ${SLOGAN}`, description: DESCRICAO, url: "/" },
  twitter: { card: "summary_large_image", title: `${NOME} · ${SLOGAN}`, description: DESCRICAO },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-MZ" className={`${schibsted.variable} ${plexSans.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Cabecalho />
        {children}
        <Rodape />
      </body>
    </html>
  );
}
