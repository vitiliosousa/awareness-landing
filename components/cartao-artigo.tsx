import Image from "next/image";
import Link from "next/link";
import { dataPorExtenso, type Artigo } from "@/lib/blog";

/** Um artigo na lista do blog: a fotografia, a categoria, o título e o resumo. Em destaque, ocupa a largura toda. */
export function CartaoArtigo({ a, destaque = false }: { a: Artigo; destaque?: boolean }) {
  return (
    <article className={`group relative grid overflow-hidden rounded-[28px] bg-superficie ring-1 ring-tinta/[0.06] transition-shadow duration-500 hover:shadow-[0_30px_60px_-36px_rgba(22,33,58,0.5)] ${destaque ? "lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]" : ""}`}>
      <div className={`relative overflow-hidden ${destaque ? "aspect-[16/10] lg:aspect-auto lg:min-h-[420px]" : "aspect-[16/10]"}`}>
        <Image src={a.capa} alt={a.capaAlt} fill sizes={destaque ? "(min-width: 1024px) 55vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"} className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
      </div>
      <div className={`flex flex-col ${destaque ? "p-8 sm:p-10 lg:justify-center" : "p-6 sm:p-7"}`}>
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-suave">
          <span className="rounded-full bg-marcador-claro px-3 py-1 text-xs font-semibold uppercase tracking-wide text-tinta">{a.categoria}</span>
          <span>{dataPorExtenso(a.data)}</span>
          <span aria-hidden="true">·</span>
          <span>{a.leitura} min de leitura</span>
        </p>
        <h2 className={`mt-4 font-semibold leading-tight ${destaque ? "text-[2rem] sm:text-[2.4rem]" : "text-xl"}`}>
          <Link href={`/blog/${a.slug}`} className="after:absolute after:inset-0">
            {a.titulo}
          </Link>
        </h2>
        <p className={`mt-3 leading-relaxed text-suave ${destaque ? "text-lg" : ""}`}>{a.resumo}</p>
        <p className="mt-5 font-semibold text-tinta underline decoration-marcador decoration-[3px] underline-offset-[6px] transition-colors group-hover:decoration-tinta">Ler o artigo</p>
      </div>
    </article>
  );
}
