import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar03Icon, Tick02Icon } from "@hugeicons/core-free-icons";
import { JanelaGestor, MaoComApp } from "@/components/ecras";
import { NOME } from "@/lib/marca";

type Painel = {
  id: string;
  quem: string;
  titulo: React.ReactNode;
  texto: string;
  pontos: string[];
  visual: React.ReactNode;
  escuro?: boolean;
  fundo: string;
};

const paineis: Painel[] = [
  {
    id: "app-equipa",
    quem: "Para a equipa",
    titulo: (
      <>
        Treino curto, <strong className="font-extrabold">no computador de cada um.</strong>
      </>
    ),
    texto: "Cada pessoa recebe o desafio do mês por email e entra com um link, sem palavra-passe para esquecer. Funciona no computador do trabalho e também no telemóvel, com situações reais, em português.",
    pontos: ["Emails, mensagens, chamadas e visitas do dia a dia", "A resposta certa explicada logo a seguir", "Níveis e distintivos para manter o ritmo"],
    visual: <MaoComApp />,
    fundo: "bg-nevoa",
  },
  {
    id: "app-gestor",
    quem: "Para o gestor",
    titulo: (
      <>
        Sabe quem treinou <strong className="font-extrabold">e onde a equipa ainda falha.</strong>
      </>
    ),
    texto: "Um painel só para a sua empresa, com a participação e o acerto de cada departamento e de cada tema, e quem precisa de acompanhamento.",
    pontos: ["Lembrete a quem ainda não fez, num clique", "Relatório mensal por email, pronto a partilhar", "Listas para exportar para o Excel"],
    visual: <JanelaGestor />,
    escuro: true,
    fundo: "bg-noite text-white",
  },
  {
    id: "app-servico",
    quem: "A nossa equipa trata do resto",
    titulo: (
      <>
        Sem trabalho extra <strong className="font-extrabold">para a sua equipa de TI.</strong>
      </>
    ),
    texto: "Todos os meses, a nossa equipa prepara um desafio novo, envia os convites e os lembretes, e entrega o relatório. A empresa só tem de dizer quem treina.",
    pontos: ["Um desafio novo por mês, pensado para ataques reais", "Convites e lembretes enviados por nós", "Certificado para quem chega ao acerto mínimo"],
    visual: (
      <div className="relative mx-auto w-full max-w-[460px]">
        <Image src="/fotos/16.png" alt="Um especialista de apoio com auscultadores, numa secretária" width={1024} height={1536} sizes="(min-width: 1024px) 460px, 90vw" className="aspect-[4/5] w-full rounded-[28px] object-cover object-top" />
        <div className="absolute -left-4 bottom-8 rounded-[18px] bg-superficie p-4 text-tinta shadow-[0_24px_50px_-24px_rgba(22,33,58,0.5)] ring-1 ring-tinta/5 sm:-left-8">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-suave">
            <HugeiconsIcon icon={Calendar03Icon} size={15} strokeWidth={1.8} /> Próximo desafio
          </p>
          <p className="mt-1.5 font-semibold">Contas partilhadas</p>
          <p className="text-sm text-suave">Sai a 2 de novembro, para toda a equipa.</p>
        </div>
      </div>
    ),
    fundo: "bg-superficie ring-1 ring-tinta/[0.06]",
  },
];

/**
 * Como funciona: a app da equipa, a app do gestor e o trabalho da nossa equipa.
 * No computador a secção fica parada e os três painéis passam na horizontal enquanto se rola,
 * com a linha do marcador a mostrar onde se está (como as especialidades da Bonança).
 * No telemóvel, ou sem suporte de animações ligadas ao scroll, os painéis ficam uns por baixo dos outros.
 */
export function Apps() {
  return (
    <section id="como-funciona" aria-labelledby="t-apps" className="pt-24 sm:pt-32">
      <div className="mx-auto grid max-w-[1240px] gap-6 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-end">
        <div>
          <p className="revelar text-xs font-semibold uppercase tracking-[0.16em] text-suave">Como funciona</p>
          <h2 id="t-apps" className="revelar mt-3 text-[2.4rem] font-semibold leading-[1.05] sm:text-[3.2rem]">
            Duas apps <span className="font-extrabold">e uma equipa por trás.</span>
          </h2>
        </div>
        <p className="revelar max-w-md text-lg leading-relaxed text-suave lg:justify-self-end">
          O {NOME} junta o treino de cada pessoa, a visão de quem gere e o trabalho da nossa equipa, que prepara tudo, todos os meses.
        </p>
      </div>

      <div className="apps-trilho relative mt-12">
        <div className="apps-palco lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-center lg:overflow-hidden">
          <ol className="apps-faixa flex flex-col gap-5 px-4 sm:px-6">
            {paineis.map((p) => (
              <li key={p.id} id={p.id} className="apps-painel revelar shrink-0">
                <article className={`grid h-full items-center gap-10 rounded-[32px] p-7 sm:p-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12 lg:p-14 ${p.fundo}`}>
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-[0.16em] ${p.escuro ? "text-marcador" : "text-suave"}`}>{p.quem}</p>
                    <h3 className="mt-3 text-[1.9rem] font-medium leading-[1.1] sm:text-[2.4rem]">{p.titulo}</h3>
                    <p className={`mt-5 text-lg leading-relaxed ${p.escuro ? "text-white/70" : "text-suave"}`}>{p.texto}</p>
                    <ul className="mt-7 space-y-3">
                      {p.pontos.map((t) => (
                        <li key={t} className="flex items-start gap-3">
                          <span aria-hidden="true" className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-marcador text-noite">
                            <HugeiconsIcon icon={Tick02Icon} size={14} strokeWidth={2.6} />
                          </span>
                          <span className={p.escuro ? "text-white/90" : ""}>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>{p.visual}</div>
                </article>
              </li>
            ))}
          </ol>

          {/* Onde se está: os três nomes e a linha do marcador por baixo. Só no computador. */}
          <div aria-hidden="true" className="mx-auto mt-8 hidden w-full max-w-[1240px] px-6 lg:block">
            <div className="relative h-[5px] rounded-full bg-tinta/10">
              <div className="apps-linha absolute inset-0 origin-left rounded-full bg-marcador" />
            </div>
            <div className="mt-3 grid grid-cols-3 text-sm font-medium text-suave">
              <span>A equipa</span>
              <span className="text-center">O gestor</span>
              <span className="text-right">A nossa equipa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
