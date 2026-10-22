import type { Metadata } from "next";
import Link from "next/link";
import { FaixaFinal } from "@/components/faixa-final";
import { Perfis } from "@/components/perfis";
import { Sectores } from "@/components/sectores";
import { TopoPagina } from "@/components/topo-pagina";
import { NOME } from "@/lib/marca";

export const metadata: Metadata = {
  title: "Para quem é",
  description: `O ${NOME} para a direcção, TI e segurança, recursos humanos e conformidade: o que cada um vê e o que ganha.`,
  alternates: { canonical: "/solucoes" },
};

const atalhos = [
  { href: "#direccao", rotulo: "Direcção" },
  { href: "#ti", rotulo: "TI e segurança" },
  { href: "#rh", rotulo: "Recursos Humanos" },
  { href: "#conformidade", rotulo: "Conformidade" },
];

export default function Solucoes() {
  return (
    <main>
      <TopoPagina etiqueta="Para quem é" titulo="Uma plataforma," forte="e cada um vê o que precisa." texto="A mesma informação, arrumada para quem decide, para quem protege os sistemas, para quem cuida das pessoas e para quem responde a auditorias.">
        <ul className="flex flex-wrap gap-2">
          {atalhos.map((a) => (
            <li key={a.href}>
              <Link href={a.href} className="inline-flex h-11 items-center rounded-full bg-superficie px-5 font-semibold ring-1 ring-tinta/10 transition-colors hover:ring-tinta/30">
                {a.rotulo}
              </Link>
            </li>
          ))}
        </ul>
      </TopoPagina>
      <Perfis />
      <Sectores />
      <FaixaFinal outra={{ href: "/perguntas", rotulo: "Ver as perguntas frequentes" }} />
    </main>
  );
}
