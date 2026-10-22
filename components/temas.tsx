"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import { Add01Icon, BubbleChatIcon, Database01Icon, DoorClosedIcon, Key01Icon, MailWarningIcon, SmartPhone01Icon, UserQuestion01Icon } from "@hugeicons/core-free-icons";

type Tema = { id: string; icone: IconSvgElement; foto: string; alt: string; leve: string; forte: string; resumo: string; exemplos: string[] };

// Alguns dos temas das apps (há mais na plataforma, e o admin pode criar novos). As fotografias são as 4 a 10.
const temas: Tema[] = [
  { id: "phishing", icone: MailWarningIcon, foto: "/fotos/4.png", alt: "Uma mulher hesita antes de clicar num email no portátil", leve: "Emails", forte: "falsos", resumo: "Faturas, entregas e avisos do banco que parecem verdadeiros.", exemplos: ["O fornecedor que mudou de conta", "O link que imita o banco", "O anexo que não é PDF"] },
  { id: "mensagens", icone: BubbleChatIcon, foto: "/fotos/5.png", alt: "Um homem lê uma mensagem no telemóvel com desconfiança", leve: "Burlas por", forte: "SMS e WhatsApp", resumo: "Pedidos urgentes de números novos, prémios e códigos.", exemplos: ["O chefe com número novo", "O código que «chegou por engano»", "O prémio que pede uma taxa"] },
  { id: "engenharia", icone: UserQuestion01Icon, foto: "/fotos/6.png", alt: "Uma recepcionista ao telefone toma notas com atenção", leve: "Engenharia", forte: "social", resumo: "Quem se faz passar por outra pessoa para conseguir dados ou acesso.", exemplos: ["O técnico da «informática»", "O cliente com muita pressa", "A chamada do «banco»"] },
  { id: "senhas", icone: Key01Icon, foto: "/fotos/7.png", alt: "Uma funcionária passa o cartão de acesso à entrada do escritório", leve: "Palavras-passe", forte: "e acessos", resumo: "Criar, guardar e partilhar acessos sem abrir portas.", exemplos: ["A palavra-passe no papel", "A conta partilhada da equipa", "A confirmação em dois passos"] },
  { id: "dados", icone: Database01Icon, foto: "/fotos/8.png", alt: "Um funcionário destrói documentos na trituradora", leve: "Protecção", forte: "de dados", resumo: "O que se pode partilhar, com quem e por onde.", exemplos: ["A lista de clientes por email", "Documentos esquecidos na impressora", "Fotos de ecrãs com dados"] },
  { id: "fisica", icone: DoorClosedIcon, foto: "/fotos/9.png", alt: "Um funcionário pede identificação a um estafeta à entrada", leve: "Segurança", forte: "física", resumo: "Visitas, entregas e portas que ficam abertas.", exemplos: ["O estafeta que quer entrar", "A porta segura para um desconhecido", "O computador desbloqueado"] },
  { id: "moveis", icone: SmartPhone01Icon, foto: "/fotos/10.png", alt: "Uma mulher hesita antes de ligar o telemóvel a um carregador público", leve: "Telemóveis", forte: "e apps", resumo: "Apps, permissões e redes fora do escritório.", exemplos: ["A app que pede tudo", "O Wi-Fi gratuito do café", "O carregador público"] },
];

/**
 * Os temas que a equipa treina, como a lista de tratamentos da Bonança: cada linha abre
 * ao passar o rato (ou ao tocar, no telemóvel), com a fotografia maior e exemplos concretos.
 */
export function Temas() {
  const [aberto, setAberto] = useState<string | null>(null);
  // Só se abre ao passar o rato em ecrãs com rato; no toque, abre e fecha com o dedo.
  const [comRato, setComRato] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(hover: hover) and (pointer: fine)");
    const ver = () => setComRato(m.matches);
    ver();
    m.addEventListener("change", ver);
    return () => m.removeEventListener("change", ver);
  }, []);

  return (
    <section id="temas" aria-labelledby="t-temas" className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-end">
          <div>
            <p className="revelar text-xs font-semibold uppercase tracking-[0.16em] text-suave">Os temas</p>
            <h2 id="t-temas" className="revelar mt-3 text-[2.4rem] font-semibold leading-[1.05] sm:text-[3.2rem]">
              Do email falso <span className="font-extrabold">à porta aberta.</span>
            </h2>
          </div>
          <p className="revelar max-w-md text-lg leading-relaxed text-suave lg:justify-self-end">
            Estes são alguns dos temas que a plataforma treina. Os desafios vão passando por eles ao longo do ano e insistem mais onde a sua equipa acerta menos.
          </p>
        </div>

        <ul className="mt-14 border-t border-tinta/10" onMouseLeave={() => comRato && setAberto(null)}>
          {temas.map((t) => {
            const estaAberto = aberto === t.id;
            return (
              <li key={t.id} className="revelar border-b border-tinta/10" onMouseEnter={() => comRato && setAberto(t.id)}>
                <button
                  type="button"
                  aria-expanded={estaAberto}
                  aria-controls={`tema-${t.id}`}
                  onClick={(e) => {
                    // Com rato a linha já abriu ao passar por cima: o clique não a fecha. Teclado (detail 0) e toque alternam.
                    if (comRato && e.detail > 0) setAberto(t.id);
                    else setAberto(estaAberto ? null : t.id);
                  }}
                  className="group grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-x-4 py-5 text-left sm:grid-cols-[2.5rem_auto_minmax(0,1fr)_auto] sm:gap-x-6"
                >
                  <span aria-hidden="true" className="hidden pt-1 text-tinta/70 sm:block">
                    <HugeiconsIcon icon={t.icone} size={22} strokeWidth={1.7} />
                  </span>
                  <span className={`tema-foto relative block overflow-hidden rounded-[16px] bg-nevoa ${estaAberto ? "tema-foto-aberta" : ""}`}>
                    <Image src={t.foto} alt={t.alt} fill sizes="(min-width: 640px) 320px, 40vw" className="object-cover" />
                  </span>
                  <span className="min-w-0 self-center">
                    <span className={`block font-titulo text-[1.45rem] leading-tight transition-colors sm:text-[1.9rem] ${estaAberto ? "text-tinta" : "text-tinta/60 group-hover:text-tinta"}`}>
                      {t.leve} <strong className="font-extrabold">{t.forte}</strong>
                    </span>
                    <span className="mt-1 block text-suave">{t.resumo}</span>
                    <span id={`tema-${t.id}`} className={`tema-detalhe grid ${estaAberto ? "tema-detalhe-aberto" : ""}`}>
                      <span className="min-h-0 overflow-hidden">
                        <span className="block pt-4 text-sm font-semibold text-tinta">O que a equipa treina:</span>
                        <span className="mt-2 flex flex-wrap gap-2">
                          {t.exemplos.map((e) => (
                            <span key={e} className="rounded-full bg-superficie px-3.5 py-1.5 text-sm ring-1 ring-tinta/10">
                              {e}
                            </span>
                          ))}
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={`mt-1 grid h-10 w-10 place-items-center rounded-full ring-1 transition-[background-color,transform,box-shadow] duration-300 sm:h-11 sm:w-11 ${estaAberto ? "rotate-45 bg-marcador ring-marcador" : "ring-tinta/25"}`}
                  >
                    <HugeiconsIcon icon={Add01Icon} size={18} strokeWidth={2} />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
        <p className="revelar mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-lg text-suave">
          <span aria-hidden="true" className="h-1.5 w-5 rounded-full bg-marcador" />
          <span>
            <span className="font-semibold text-tinta">E muitos outros.</span> A MozCyber acrescenta temas novos sempre que aparece um tipo de ataque diferente.
          </span>
        </p>
      </div>
    </section>
  );
}
