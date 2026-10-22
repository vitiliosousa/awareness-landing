import { ENTIDADE } from "@/lib/contactos";

/** O molde das páginas legais: título, data de revisão, índice e o texto em secções numeradas. */
export function PaginaLegal({ titulo, resumo, seccoes }: { titulo: string; resumo: string; seccoes: { id: string; titulo: string; corpo: React.ReactNode }[] }) {
  return (
    <main className="pt-32 sm:pt-40">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-suave">Última actualização: {ENTIDADE.actualizado}</p>
          <h1 className="mt-3 text-[2.6rem] font-extrabold leading-[1.05] sm:text-[3.6rem]">{titulo}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-suave">{resumo}</p>

          <div className="mt-14 grid gap-12 pb-24 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-16 sm:pb-32">
            <nav aria-label="Nesta página" className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-suave">Nesta página</p>
              <ol className="mt-4 space-y-2.5 text-[15px]">
                {seccoes.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="flex gap-2 text-tinta/75 transition-colors hover:text-tinta">
                      <span className="tabular-nums text-suave">{i + 1}.</span> {s.titulo}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <article className="max-w-3xl space-y-12">
              {seccoes.map((s, i) => (
                <section key={s.id} id={s.id} aria-labelledby={`t-${s.id}`} className="scroll-mt-28">
                  <h2 id={`t-${s.id}`} className="flex items-baseline gap-3 text-2xl font-bold">
                    <span className="font-titulo text-lg tabular-nums text-suave">{String(i + 1).padStart(2, "0")}</span>
                    {s.titulo}
                  </h2>
                  <div className="mt-4 space-y-4 text-[17px] leading-relaxed text-tinta/85">{s.corpo}</div>
                </section>
              ))}
            </article>
          </div>
        </div>
    </main>
  );
}
