"use client";

import Image from "next/image";
import { useState } from "react";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import { Building03Icon, Certificate01Icon, ComputerIcon, Tick02Icon, UserGroupIcon } from "@hugeicons/core-free-icons";

type Perfil = { id: string; rotulo: string; icone: IconSvgElement; titulo: string; pontos: string[]; foto: string; alt: string };

// Como as páginas da KnowBe4: a mesma plataforma, explicada a cada pessoa que a decide.
const perfis: Perfil[] = [
  {
    id: "direccao",
    rotulo: "Direcção",
    icone: Building03Icon,
    titulo: "Saber se a empresa está protegida, sem relatórios técnicos.",
    pontos: ["Um resumo mensal numa página, por email", "A evolução da participação e do acerto, mês a mês", "Os departamentos lado a lado, para decidir onde agir"],
    foto: "/fotos/12.png",
    alt: "Uma gestora analisa resultados no portátil",
  },
  {
    id: "ti",
    rotulo: "TI e segurança",
    icone: ComputerIcon,
    titulo: "Uma camada humana por cima das ferramentas que já tem.",
    pontos: ["Temas alinhados com os ataques que chegam à empresa", "Quem precisa de reforço, por tema e por pessoa", "Nada para instalar, configurar ou manter"],
    foto: "/fotos/4.png",
    alt: "Uma funcionária analisa um email suspeito no portátil",
  },
  {
    id: "rh",
    rotulo: "Recursos Humanos",
    icone: UserGroupIcon,
    titulo: "O treino passa a fazer parte da vida da equipa.",
    pontos: ["Quem entra na empresa começa com um link, sem formação presencial", "Lembretes automáticos a quem ainda não fez", "Níveis, distintivos e certificados que reconhecem o esforço"],
    foto: "/fotos/13.png",
    alt: "Dois colegas analisam juntos uma mensagem",
  },
  {
    id: "conformidade",
    rotulo: "Conformidade",
    icone: Certificate01Icon,
    titulo: "As provas de formação sempre à mão, para qualquer auditoria.",
    pontos: ["O histórico de cada pessoa, desafio a desafio", "Relatórios mensais em PDF, prontos a anexar", "Listas para exportar para o Excel"],
    foto: "/fotos/8.png",
    alt: "Um funcionário destrói documentos na trituradora",
  },
];

/** Para quem é: separadores por função, cada um com o que ganha e uma fotografia. */
export function ParaQuem() {
  const [activo, setActivo] = useState(perfis[0].id);
  const perfil = perfis.find((p) => p.id === activo)!;

  function teclas(e: React.KeyboardEvent, i: number) {
    const delta = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 0;
    if (!delta) return;
    e.preventDefault();
    const proximo = perfis[(i + delta + perfis.length) % perfis.length];
    setActivo(proximo.id);
    document.getElementById(`perfil-${proximo.id}`)?.focus();
  }

  return (
    <section id="para-quem" aria-labelledby="t-para-quem" className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <p className="revelar text-xs font-semibold uppercase tracking-[0.16em] text-suave">Para quem é</p>
        <h2 id="t-para-quem" className="revelar mt-3 max-w-3xl text-[2.4rem] font-semibold leading-[1.05] sm:text-[3.2rem]">
          Uma plataforma, <span className="font-extrabold">e cada um vê o que precisa.</span>
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-12">
          <div role="tablist" aria-label="Funções" aria-orientation="vertical" className="revelar flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
            {perfis.map((p, i) => {
              const ligado = p.id === activo;
              return (
                <button
                  key={p.id}
                  id={`perfil-${p.id}`}
                  type="button"
                  role="tab"
                  aria-selected={ligado}
                  aria-controls="perfil-painel"
                  tabIndex={ligado ? 0 : -1}
                  onClick={() => setActivo(p.id)}
                  onKeyDown={(e) => teclas(e, i)}
                  className={`group flex shrink-0 items-center gap-4 rounded-[18px] px-5 py-4 text-left transition-colors duration-300 lg:w-full ${ligado ? "bg-noite text-white" : "bg-superficie ring-1 ring-tinta/[0.06] hover:ring-tinta/20"}`}
                >
                  <span aria-hidden="true" className={`grid h-10 w-10 shrink-0 place-items-center rounded-full transition-colors duration-300 ${ligado ? "bg-marcador text-tinta" : "bg-nevoa text-tinta"}`}>
                    <HugeiconsIcon icon={p.icone} size={19} strokeWidth={1.8} />
                  </span>
                  <span className="whitespace-nowrap text-lg font-semibold">{p.rotulo}</span>
                </button>
              );
            })}
          </div>

          <div id="perfil-painel" role="tabpanel" aria-labelledby={`perfil-${perfil.id}`} className="revelar grid overflow-hidden rounded-[28px] bg-superficie ring-1 ring-tinta/[0.06] md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
            <div key={perfil.id} className="sinal-aparece p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-suave">{perfil.rotulo}</p>
              <h3 className="mt-3 text-[1.6rem] font-semibold leading-[1.15]">{perfil.titulo}</h3>
              <ul className="mt-6 space-y-3">
                {perfil.pontos.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span aria-hidden="true" className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-marcador text-noite">
                      <HugeiconsIcon icon={Tick02Icon} size={14} strokeWidth={2.6} />
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative min-h-64">
              {perfis.map((p) => (
                <Image key={p.id} src={p.foto} alt={p.id === activo ? p.alt : ""} fill sizes="(min-width: 1024px) 30vw, 100vw" className={`object-cover transition-opacity duration-500 ${p.id === activo ? "opacity-100" : "opacity-0"}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
