import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { Janela } from "@/components/janela";

const passos = [
  { titulo: "Juntamos a equipa", texto: "Importamos a lista de colaboradores e cada pessoa recebe um link de acesso por email. Sem nada para instalar." },
  { titulo: "Um desafio por mês", texto: "Exercícios curtos, no computador do trabalho, com mensagens, chamadas e situações do dia a dia das empresas." },
  { titulo: "Quem gere acompanha", texto: "Participação e acerto por departamento e por tema, quem precisa de reforço e um relatório no fim de cada mês." },
];

/** Como funciona, em três passos, com as duas apps lado a lado. Fica na página da plataforma, antes do exercício. */
export function Resumo() {
  return (
    <section id="como-funciona" aria-labelledby="t-resumo" className="overflow-hidden py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <div>
          <p className="revelar text-xs font-semibold uppercase tracking-[0.16em] text-suave">Como funciona</p>
          <h2 id="t-resumo" className="revelar mt-3 text-[2.4rem] font-semibold leading-[1.05] sm:text-[3.2rem]">
            Três passos, <span className="font-extrabold">todos os meses.</span>
          </h2>
          <ol className="mt-10 space-y-7">
            {passos.map((p, i) => (
              <li key={p.titulo} className="revelar flex gap-5">
                <span aria-hidden="true" className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-tinta font-titulo text-lg font-bold text-white">
                  {i + 1}
                </span>
                <span>
                  <span className="block text-xl font-bold">{p.titulo}</span>
                  <span className="mt-1 block leading-relaxed text-suave">{p.texto}</span>
                </span>
              </li>
            ))}
          </ol>
          <a href="#exercicio" className="revelar group mt-10 inline-flex items-center gap-2 font-semibold text-tinta underline decoration-marcador decoration-[3px] underline-offset-[6px] hover:decoration-tinta">
            Ver um exercício por dentro
            <HugeiconsIcon icon={ArrowDown01Icon} size={18} strokeWidth={2} className="transition-transform group-hover:translate-y-0.5" />
          </a>
        </div>

        {/* As duas apps: a do gestor atrás, a do formando à frente, desencontradas. */}
        <div className="revelar relative pb-16 lg:pb-24">
          <Janela src="/capturas/gestor-inicio.png" alt="O início da app do gestor, com a participação e o acerto do mês" tapar className="w-[92%]" />
          <Janela src="/capturas/formando-inicio.png" alt="O início da app do formando, com o desafio do mês e o ranking" className="absolute bottom-0 right-0 w-[62%]" sizes="(min-width: 1024px) 35vw, 60vw" />
        </div>
      </div>
    </section>
  );
}
