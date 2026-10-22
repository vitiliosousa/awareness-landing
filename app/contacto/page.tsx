import type { Metadata } from "next";
import Link from "next/link";
import { Contacto } from "@/components/contacto";
import { NOME } from "@/lib/marca";

export const metadata: Metadata = {
  title: "Pedir demonstração",
  description: `Peça uma demonstração do ${NOME}: mostramos as duas apps por dentro e preparamos uma proposta para a sua empresa.`,
  alternates: { canonical: "/contacto" },
};

/** O formulário de demonstração numa página própria: todos os botões "Pedir demonstração" do site trazem aqui. */
export default function PaginaContacto() {
  return (
    <main className="pt-24 sm:pt-28">
      <Contacto />
      <section aria-label="Antes de decidir" className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-6 px-4 py-16 sm:px-6">
        <p className="text-lg text-suave">Ainda está a conhecer a plataforma?</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/plataforma" className="inline-flex h-12 items-center rounded-full bg-superficie px-6 font-semibold ring-1 ring-tinta/10 transition-colors hover:ring-tinta/30">
            Ver a plataforma
          </Link>
          <Link href="/perguntas" className="inline-flex h-12 items-center rounded-full bg-superficie px-6 font-semibold ring-1 ring-tinta/10 transition-colors hover:ring-tinta/30">
            Perguntas frequentes
          </Link>
        </div>
      </section>
    </main>
  );
}
