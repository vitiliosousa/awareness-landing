import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ArtigoCompleto } from "@/components/artigo-completo";
import { artigo, artigos } from "@/lib/blog";

export function generateStaticParams() {
  return artigos.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const a = artigo((await params).slug);
  if (!a) return {};
  return {
    title: a.titulo,
    description: a.resumo,
    alternates: { canonical: `/blog/${a.slug}` },
    openGraph: { type: "article", title: a.titulo, description: a.resumo, publishedTime: a.data, images: [{ url: a.capa, alt: a.capaAlt }] },
  };
}

// Os params ficam dentro de Suspense, como nas outras páginas com parâmetros (Cache Components).
export default function PaginaArtigo({ params }: PageProps<"/blog/[slug]">) {
  return (
    <Suspense fallback={null}>
      <Conteudo params={params} />
    </Suspense>
  );
}

async function Conteudo({ params }: { params: PageProps<"/blog/[slug]">["params"] }) {
  const a = artigo((await params).slug);
  if (!a) notFound();
  return <ArtigoCompleto a={a} />;
}
