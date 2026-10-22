import type { Metadata } from "next";
import { Equipa } from "@/components/equipa";
import { Exercicio } from "@/components/exercicio";
import { FaixaFinal } from "@/components/faixa-final";
import { Resumo } from "@/components/resumo";
import { TopoPagina } from "@/components/topo-pagina";
import { NOME } from "@/lib/marca";

export const metadata: Metadata = {
  title: "Plataforma",
  description: `Como funciona o ${NOME}, passo a passo, como é um exercício por dentro e porque é que a equipa participa: níveis, distintivos e ranking.`,
  alternates: { canonical: "/plataforma" },
};

export default function Plataforma() {
  return (
    <main>
      <TopoPagina
        etiqueta="A plataforma"
        titulo="Treino que a equipa faz."
        forte="Resultados que quem gere vê."
        texto="Um desafio por mês, feito no computador do trabalho, e um painel para acompanhar a empresa. Por trás, a nossa equipa prepara tudo."
      />
      <Resumo />
      <Exercicio />
      <Equipa />
      <FaixaFinal outra={{ href: "/solucoes", rotulo: "Ver para quem é" }} />
    </main>
  );
}
