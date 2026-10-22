import type { Metadata } from "next";
import { IBM_Plex_Sans, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import { NOME } from "@/lib/marca";

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

export const metadata: Metadata = {
  title: `${NOME} · Treino de cibersegurança para equipas`,
  description: "Treino curto e mensal para as equipas das empresas moçambicanas reconhecerem burlas, emails falsos e engenharia social antes de clicar.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-MZ" className={`${schibsted.variable} ${plexSans.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
