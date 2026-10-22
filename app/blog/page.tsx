import type { Metadata } from "next";
import { CartaoArtigo } from "@/components/cartao-artigo";
import { FaixaFinal } from "@/components/faixa-final";
import { TopoPagina } from "@/components/topo-pagina";
import { artigos } from "@/lib/blog";
import { NOME } from "@/lib/marca";

export const metadata: Metadata = {
  title: "Blog",
  description: `Conselhos práticos de cibersegurança para as equipas das empresas moçambicanas, da equipa do ${NOME}.`,
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  const [primeiro, ...resto] = [...artigos].sort((a, b) => b.data.localeCompare(a.data));
  return (
    <main>
      <TopoPagina etiqueta="Blog" titulo="Conselhos curtos" forte="para não cair na próxima." texto="Como reconhecer os ataques mais comuns, o que fazer quando algo corre mal e como preparar a equipa. Em português, com situações do dia a dia em Moçambique." />
      <section aria-label="Artigos" className="pb-8 pt-14 sm:pt-16">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
          <div className="revelar">
            <CartaoArtigo a={primeiro} destaque />
          </div>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resto.map((a) => (
              <li key={a.slug} className="revelar">
                <CartaoArtigo a={a} />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <FaixaFinal />
    </main>
  );
}
