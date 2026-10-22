import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import { CartaoArtigo } from "@/components/cartao-artigo";
import { FaixaFinal } from "@/components/faixa-final";
import { artigos, dataPorExtenso, type Artigo, type Bloco } from "@/lib/blog";
import { NOME, SITE_URL } from "@/lib/marca";

function Corpo({ blocos }: { blocos: Bloco[] }) {
  return (
    <div className="space-y-6 text-[18px] leading-[1.75] text-tinta/85">
      {blocos.map((b, i) => {
        if (b.t === "h2") return <h2 key={i} className="pt-6 text-[1.7rem] font-bold leading-tight text-tinta">{b.texto}</h2>;
        if (b.t === "lista")
          return (
            <ul key={i} className="space-y-3">
              {b.itens.map((it) => (
                <li key={it} className="flex gap-4">
                  <span aria-hidden="true" className="mt-[0.7em] h-1.5 w-4 shrink-0 rounded-full bg-marcador" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          );
        if (b.t === "destaque")
          return (
            <p key={i} className="rounded-[20px] bg-noite px-7 py-6 font-titulo text-[1.35rem] font-semibold leading-snug text-white">
              {b.texto}
            </p>
          );
        return <p key={i}>{b.texto}</p>;
      })}
    </div>
  );
}

/** Um artigo do blog: título, data, fotografia, o texto e mais artigos no fim. */
export function ArtigoCompleto({ a }: { a: Artigo }) {
  const outros = artigos.filter((x) => x.slug !== a.slug).slice(0, 3);
  // Dados estruturados de artigo, para o Google mostrar a data e o autor.
  const estruturado = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: a.titulo,
    description: a.resumo,
    datePublished: a.data,
    image: `${SITE_URL}${a.capa}`,
    author: { "@type": "Organization", name: `Equipa ${NOME}` },
    publisher: { "@type": "Organization", name: NOME },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(estruturado).replace(/</g, "\\u003c") }} />
      <article className="pt-32 sm:pt-40">
        <header className="mx-auto max-w-[820px] px-4 sm:px-6">
          <Link href="/blog" className="subir inline-flex items-center gap-1.5 text-sm font-semibold text-suave transition-colors hover:text-tinta">
            <HugeiconsIcon icon={ArrowLeft01Icon} size={16} strokeWidth={2} /> Blog
          </Link>
          <p className="subir mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-suave">
            <span className="rounded-full bg-marcador-claro px-3 py-1 text-xs font-semibold uppercase tracking-wide text-tinta">{a.categoria}</span>
            <time dateTime={a.data}>{dataPorExtenso(a.data)}</time>
            <span aria-hidden="true">·</span>
            <span>{a.leitura} min de leitura</span>
          </p>
          <h1 className="subir mt-5 text-[2.3rem] font-bold leading-[1.08] sm:text-[3.2rem]" style={{ animationDelay: "80ms" }}>
            {a.titulo}
          </h1>
          <p className="subir mt-5 text-xl leading-relaxed text-suave" style={{ animationDelay: "160ms" }}>
            {a.resumo}
          </p>
          <p className="subir mt-6 text-sm text-suave" style={{ animationDelay: "200ms" }}>
            Por <span className="font-semibold text-tinta">Equipa {NOME}</span>
          </p>
        </header>

        <div className="subir mx-auto mt-10 max-w-[1100px] px-4 sm:px-6" style={{ animationDelay: "240ms" }}>
          <div className="relative aspect-[16/8] overflow-hidden rounded-[28px] baixo:aspect-[16/6]">
            <Image src={a.capa} alt={a.capaAlt} fill loading="eager" sizes="(min-width: 1100px) 1100px, 100vw" className="object-cover" />
          </div>
        </div>

        <div className="mx-auto max-w-[720px] px-4 py-14 sm:px-6 sm:py-20">
          <Corpo blocos={a.corpo} />
        </div>
      </article>

      <section aria-labelledby="t-mais" className="border-t border-tinta/10 py-20">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
          <h2 id="t-mais" className="text-2xl font-bold">Mais artigos</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {outros.map((o) => (
              <li key={o.slug}>
                <CartaoArtigo a={o} />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <FaixaFinal />
    </main>
  );
}
