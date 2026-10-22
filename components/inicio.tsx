import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon, Mail01Icon } from "@hugeicons/core-free-icons";
import { NOME } from "@/lib/marca";

const letras = NOME.toUpperCase().split("");
const rostos = ["/fotos/17.png", "/fotos/18.png", "/fotos/19.png", "/fotos/20.png"];
const temas = ["Emails falsos", "Burlas por SMS e WhatsApp", "Engenharia social", "Palavras-passe e acessos", "Protecção de dados", "Segurança física", "Telemóveis e apps", "E muitos outros"];

/** Um email falso como os que a equipa treina a reconhecer, com o sinal assinalado a marcador. */
function CartaoMensagem({ className = "" }: { className?: string }) {
  return (
    <div className={`w-[17.5rem] rounded-[18px] bg-superficie p-4 shadow-[0_24px_50px_-24px_rgba(22,33,58,0.45)] ring-1 ring-tinta/5 ${className}`}>
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-suave">
        <HugeiconsIcon icon={Mail01Icon} size={15} strokeWidth={1.8} /> Email · agora
      </p>
      <p className="mt-2 text-[15px] leading-snug text-tinta">
        <span className="font-semibold">Informática:</span> a sua palavra-passe expira hoje. Renove-a em{" "}
        <span className="marcado marcado-anim font-semibold" style={{ animationDelay: "1500ms" }}>
          portal-renovar.co
        </span>{" "}
        até às 18h.
      </p>
      <p className="mt-3 flex items-center gap-2 border-t border-linha pt-3 text-[13px] text-suave">
        <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-risco" />
        Um endereço que não é o da empresa, e pressa.
      </p>
    </div>
  );
}

/** O que o gestor vê no fim do mês, em pequeno. */
function CartaoRelatorio({ className = "" }: { className?: string }) {
  return (
    <div className={`w-60 rounded-[18px] bg-noite p-4 text-white shadow-[0_24px_50px_-24px_rgba(22,33,58,0.6)] ${className}`}>
      <p className="text-xs font-semibold uppercase tracking-wide text-white/60">Desafio de outubro</p>
      <div className="mt-3 flex items-end justify-between">
        <div>
          <p className="font-titulo text-3xl font-extrabold leading-none">82%</p>
          <p className="mt-1 text-[13px] text-white/60">da equipa concluiu</p>
        </div>
        <div className="text-right">
          <p className="font-titulo text-xl font-bold leading-none">74%</p>
          <p className="mt-1 text-[13px] text-white/60">de acerto</p>
        </div>
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/15">
        <div className="h-full w-[82%] rounded-full bg-marcador" />
      </div>
    </div>
  );
}

/** Uma linha tracejada que atravessa o início da página, com o marcador a percorrê-la devagar. */
function Linha() {
  return (
    <svg aria-hidden="true" viewBox="0 0 1440 420" preserveAspectRatio="xMidYMid slice" className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[420px] w-full lg:block">
      <path id="linha-inicio" d="M-20 300 C 220 250, 420 380, 640 330 S 1000 160, 1180 210 S 1400 300, 1470 250" fill="none" stroke="var(--tinta)" strokeOpacity="0.18" strokeWidth="1.5" strokeDasharray="2 7" strokeLinecap="round" />
      <g className="anda-na-linha">
        <rect x="-11" y="-3.5" width="22" height="7" rx="3.5" fill="var(--marcador)">
          <animateMotion dur="16s" repeatCount="indefinite" rotate="auto">
            <mpath href="#linha-inicio" />
          </animateMotion>
        </rect>
      </g>
    </svg>
  );
}

export function Inicio() {
  return (
    <section id="topo" className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-[5.5rem]">
      {/* O disco e os anéis por trás da equipa: o raio de vigia, sem alarmes. */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-[12vw] top-[16vw] hidden aspect-square w-[64vw] max-w-[900px] rounded-full bg-nevoa lg:block" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-[22vw] top-[6vw] hidden aspect-square w-[84vw] max-w-[1180px] rounded-full border border-tinta/[0.07] lg:block" />
      <Linha />

      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6">
        <p aria-hidden="true" className="flex select-none justify-center overflow-hidden font-titulo text-[25vw] font-black leading-[0.82] tracking-[-0.06em] lg:text-[min(18vw,17rem)]">
          {letras.map((l, i) => (
            <span key={i} className="emergir inline-block bg-gradient-to-b from-[#bcc4d1] to-[#d9dee5] bg-clip-text text-transparent" style={{ animationDelay: `${120 + i * 70}ms` }}>
              {l}
            </span>
          ))}
        </p>

        {/* No telemóvel: a equipa vem logo a seguir à palavra, ao alto. */}
        <div className="relative -mt-[11vw] lg:hidden">
          <Image src="/fotos/1b-recorte.png" alt="Quatro colegas de uma empresa a ver mensagens no telemóvel" width={1024} height={1536} fetchPriority="high" sizes="100vw" className="subir mx-auto aspect-[0.84] w-full max-w-md object-cover object-bottom" style={{ animationDelay: "250ms" }} />
          <CartaoMensagem className="pairar absolute -bottom-4 left-0 scale-[0.86] origin-bottom-left sm:left-6 sm:scale-100" />
        </div>

        <div className="relative z-10 grid gap-10 pb-16 pt-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:pb-16 lg:pt-2">
          <div className="max-w-xl lg:max-w-[33rem]">
            <h1 className="subir text-[2.4rem] font-semibold leading-[1.04] sm:text-5xl lg:text-[3.3rem]" style={{ animationDelay: "350ms" }}>
              O ataque chega por mensagem.{" "}
              <span className="font-extrabold">
                A defesa{" "}
                <span className="marcado marcado-anim" style={{ animationDelay: "1000ms" }}>
                  também.
                </span>
              </span>
            </h1>
            <p className="subir mt-5 max-w-lg text-lg leading-relaxed text-suave" style={{ animationDelay: "480ms" }}>
              Treino curto e mensal de cibersegurança para as equipas das empresas moçambicanas. Cada pessoa aprende a <span className="font-semibold text-tinta">reconhecer o sinal antes de clicar</span>, e quem gere vê quem treinou e onde a equipa ainda falha.
            </p>
            <div className="subir mt-8 flex flex-wrap items-center gap-x-6 gap-y-4" style={{ animationDelay: "600ms" }}>
              <a href="#contacto" className="botao-marcador inline-flex h-14 items-center rounded-full bg-tinta px-8 text-base font-semibold text-white transition-colors hover:text-tinta">
                Pedir demonstração
              </a>
              <a href="#como-funciona" className="group inline-flex items-center gap-2 font-semibold text-tinta">
                Como funciona
                <HugeiconsIcon icon={ArrowDown01Icon} size={18} strokeWidth={2} className="transition-transform group-hover:translate-y-0.5" />
              </a>
            </div>
            <div className="subir mt-8 flex items-center gap-4" style={{ animationDelay: "720ms" }}>
              <div className="flex -space-x-3">
                {rostos.map((src) => (
                  <Image key={src} src={src} alt="" width={96} height={96} className="h-11 w-11 rounded-full object-cover ring-[3px] ring-papel" />
                ))}
              </div>
              <p className="text-sm leading-snug text-suave">
                Um desafio por mês, em português,
                <br />
                no computador do trabalho ou no telemóvel.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* No computador: a equipa à direita, à frente da palavra gigante, que pode ficar parcialmente tapada. */}
      <div className="pointer-events-none absolute bottom-[3.25rem] right-[max(0px,calc((100vw-1240px)/2-2rem))] z-0 hidden w-[min(58vw,840px)] lg:block">
        <Image src="/fotos/1-recorte.png" alt="Quatro colegas de uma empresa a ver mensagens no telemóvel" width={1536} height={1024} fetchPriority="high" sizes="(min-width: 1024px) 58vw, 0px" className="subir h-auto w-full" style={{ animationDelay: "250ms" }} />
        <div className="pointer-events-auto absolute -top-[30%] left-[-4%]">
          <CartaoMensagem className="pairar" />
        </div>
        <CartaoRelatorio className="subir pointer-events-auto absolute right-[-5%] top-[-22%]" />
      </div>

      {/* Os temas a passar devagar no fundo da secção. */}
      <div className="relative z-10 border-y border-tinta/10 bg-papel/80 py-3.5 backdrop-blur-sm">
        <div className="flex w-max animate-[deslizar_60s_linear_infinite] motion-reduce:animate-none">
          {[0, 1].map((copia) => (
            <ul key={copia} aria-hidden={copia === 1 || undefined} className="flex shrink-0 items-center">
              {temas.map((t) => (
                <li key={t} className="flex items-center whitespace-nowrap px-6 text-[15px] font-medium text-tinta/70">
                  <span aria-hidden="true" className="mr-6 h-1.5 w-4 rounded-full bg-marcador" />
                  {t}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
