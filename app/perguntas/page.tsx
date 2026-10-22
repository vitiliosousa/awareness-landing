import type { Metadata } from "next";
import { FaixaFinal } from "@/components/faixa-final";
import { Perguntas } from "@/components/perguntas";
import { TopoPagina } from "@/components/topo-pagina";
import { NOME } from "@/lib/marca";
import { grupos } from "@/lib/perguntas";

export const metadata: Metadata = {
  title: "Perguntas frequentes",
  description: `Como funciona o ${NOME}, o que vê quem gere, quanto tempo leva e como os dados ficam protegidos.`,
  alternates: { canonical: "/perguntas" },
};

// As perguntas também vão em dados estruturados (FAQPage), para o Google as poder mostrar nos resultados.
const estruturado = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: grupos.flatMap((g) => g.perguntas).map((q) => ({ "@type": "Question", name: q.p, acceptedAnswer: { "@type": "Answer", text: q.r } })),
};

export default function PaginaPerguntas() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(estruturado).replace(/</g, "\\u003c") }} />
      <TopoPagina etiqueta="Perguntas frequentes" titulo="O que costumam" forte="perguntar-nos." texto="Sobre como se começa, o que a equipa faz, o que vê quem gere e como tratamos os dados." />
      <Perguntas />
      <FaixaFinal />
    </main>
  );
}
