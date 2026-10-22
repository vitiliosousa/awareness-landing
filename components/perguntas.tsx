"use client";

import Link from "next/link";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01Icon } from "@hugeicons/core-free-icons";
import { grupos } from "@/lib/perguntas";

/** As perguntas frequentes por assunto. À esquerda, os assuntos; à direita, as perguntas que abrem uma de cada vez. */
export function Perguntas() {
  const [aberta, setAberta] = useState<string | null>(`${grupos[0].id}-0`);

  return (
    <section aria-label="Perguntas" className="pb-8 pt-16 sm:pt-20">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1.45fr)] lg:gap-16">
        <nav aria-label="Assuntos" className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-suave">Assuntos</p>
          <ul className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:gap-1">
            {grupos.map((g) => (
              <li key={g.id}>
                <a href={`#${g.id}`} className="inline-flex rounded-full px-4 py-2 font-medium ring-1 ring-tinta/10 transition-colors hover:bg-superficie lg:flex lg:rounded-xl lg:px-3 lg:ring-0">
                  {g.titulo}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-suave">
            Tem outra dúvida?{" "}
            <Link href="/contacto" className="font-semibold text-tinta underline decoration-marcador decoration-[3px] underline-offset-4 hover:decoration-tinta">
              Fale connosco
            </Link>
            .
          </p>
        </nav>

        <div className="space-y-14">
          {grupos.map((g) => (
            <div key={g.id} id={g.id} className="scroll-mt-28">
              <h2 className="text-2xl font-bold">{g.titulo}</h2>
              <ul className="mt-4 border-t border-tinta/10">
                {g.perguntas.map((q, i) => {
                  const id = `${g.id}-${i}`;
                  const aberto = aberta === id;
                  return (
                    <li key={q.p} className="border-b border-tinta/10">
                      <h3>
                        <button
                          type="button"
                          aria-expanded={aberto}
                          aria-controls={`resposta-${id}`}
                          onClick={() => setAberta(aberto ? null : id)}
                          className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-semibold sm:text-xl"
                        >
                          {q.p}
                          <span aria-hidden="true" className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ring-1 transition-[background-color,transform,box-shadow] duration-300 ${aberto ? "rotate-45 bg-marcador ring-marcador" : "ring-tinta/25"}`}>
                            <HugeiconsIcon icon={Add01Icon} size={18} strokeWidth={2} />
                          </span>
                        </button>
                      </h3>
                      <div id={`resposta-${id}`} className={`tema-detalhe grid ${aberto ? "tema-detalhe-aberto" : ""}`}>
                        <div className="min-h-0 overflow-hidden">
                          <p className="max-w-2xl pb-6 pr-14 leading-relaxed text-suave">{q.r}</p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
