"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01Icon } from "@hugeicons/core-free-icons";
import { NOME } from "@/lib/marca";

// As respostas descrevem só o que a plataforma já faz. Tempo por mês e preço ficam por confirmar com a MozCyber.
const perguntas = [
  { p: "É preciso instalar alguma coisa?", r: "Não. Cada pessoa entra por um link enviado por email, no navegador do computador do trabalho. Também funciona no telemóvel, para quem preferir." },
  { p: "Como chegam os colaboradores à plataforma?", r: "A MozCyber importa a lista da sua equipa, por exemplo a partir de um ficheiro Excel, e envia os convites. Quem ainda não entrou recebe lembretes." },
  { p: "Quanto tempo leva por mês?", r: "Pouco. Os exercícios são curtos e cada pessoa faz o desafio do mês ao seu ritmo, sem ter de parar o trabalho." },
  { p: "Que temas são treinados?", r: "Emails falsos, burlas por SMS e WhatsApp, engenharia social, palavras-passe, protecção de dados, segurança física, telemóveis e muitos outros. Os desafios insistem mais onde a sua equipa acerta menos." },
  { p: "O que vê quem gere a empresa?", r: "A participação e o acerto por departamento e por tema, quem precisa de acompanhamento e um relatório mensal por email. Pode lembrar quem ainda não fez e exportar as listas para o Excel." },
  { p: "Os resultados de cada pessoa ficam protegidos?", r: "Cada empresa vê apenas os seus dados. Os resultados individuais são vistos pelo gestor da própria empresa e pela equipa da MozCyber que acompanha o treino." },
  { p: "Está tudo em português?", r: `Sim. Todo o conteúdo do ${NOME} é em português, com situações do dia a dia em Moçambique.` },
  { p: "Quanto custa?", r: "Depende do número de pessoas que vão treinar. Peça uma demonstração e enviamos uma proposta para a sua empresa." },
];

/** Perguntas frequentes, que abrem uma de cada vez. */
export function Perguntas() {
  const [aberta, setAberta] = useState<number | null>(0);

  return (
    <section id="perguntas" aria-labelledby="t-perguntas" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="revelar text-xs font-semibold uppercase tracking-[0.16em] text-suave">Perguntas frequentes</p>
          <h2 id="t-perguntas" className="revelar mt-3 text-[2.4rem] font-semibold leading-[1.05] sm:text-[3.2rem]">
            O que costumam <span className="font-extrabold">perguntar-nos.</span>
          </h2>
          <p className="revelar mt-5 max-w-sm text-lg leading-relaxed text-suave">
            Tem outra dúvida?{" "}
            <a href="#contacto" className="font-semibold text-tinta underline decoration-marcador decoration-[3px] underline-offset-4 hover:decoration-tinta">
              Fale connosco
            </a>
            .
          </p>
        </div>

        <ul className="border-t border-tinta/10">
          {perguntas.map((q, i) => {
            const aberto = aberta === i;
            return (
              <li key={q.p} className="revelar border-b border-tinta/10">
                <h3>
                  <button
                    type="button"
                    aria-expanded={aberto}
                    aria-controls={`resposta-${i}`}
                    onClick={() => setAberta(aberto ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-semibold sm:text-xl"
                  >
                    {q.p}
                    <span aria-hidden="true" className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ring-1 transition-[background-color,transform,box-shadow] duration-300 ${aberto ? "rotate-45 bg-marcador ring-marcador" : "ring-tinta/25"}`}>
                      <HugeiconsIcon icon={Add01Icon} size={18} strokeWidth={2} />
                    </span>
                  </button>
                </h3>
                <div id={`resposta-${i}`} className={`tema-detalhe grid ${aberto ? "tema-detalhe-aberto" : ""}`}>
                  <div className="min-h-0 overflow-hidden">
                    <p className="max-w-2xl pb-6 pr-14 leading-relaxed text-suave">{q.r}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
