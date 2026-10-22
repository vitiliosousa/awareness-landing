import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { Fire03Icon, Tick02Icon } from "@hugeicons/core-free-icons";
import { Logo } from "@/components/logo";

// Pré-visualizações das apps desenhadas em código, com as mesmas cores das apps verdadeiras.
// Usam unidades do contentor (cqw) para crescerem e encolherem sem perder nitidez.
// Quando houver uma conta de demonstração, podem dar lugar a capturas reais.

/** A app do formando, no ecrã do telemóvel que a mão segura (fotografia 3, com o ecrã verde tapado). */
export function MaoComApp() {
  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      <Image src="/fotos/3-recorte.png" alt="" width={1024} height={1536} sizes="(min-width: 1024px) 460px, 90vw" className="h-auto w-full" />
      {/* O ecrã: posição medida nos píxeis verdes do recorte, com uma margem pequena para não sobrar verde. */}
      <div className="absolute left-[37.5%] top-[8.9%] h-[55.3%] w-[38.9%] overflow-hidden rounded-[13%/7%] bg-papel [container-type:inline-size]">
        <span aria-hidden="true" className="absolute left-1/2 top-0 h-[7cqw] w-[40%] -translate-x-1/2 rounded-b-[4cqw] bg-[#14161c]" />
        <div className="flex h-full flex-col px-[7cqw] pt-[13cqw] text-tinta">
          <p className="text-[5cqw] text-suave">Olá, Ana</p>
          <p className="font-titulo text-[8.4cqw] font-bold leading-[1.1]">Desafio de outubro</p>
          <div className="mt-[4cqw] flex gap-[2.5cqw]">
            <span className="flex items-center gap-[1.2cqw] rounded-full bg-marcador-claro px-[3cqw] py-[1.2cqw] text-[4.2cqw] font-semibold">
              <HugeiconsIcon icon={Fire03Icon} size="1em" strokeWidth={2} /> 6 dias
            </span>
            <span className="rounded-full bg-nevoa px-[3cqw] py-[1.2cqw] text-[4.2cqw] font-semibold">540 XP</span>
          </div>
          <div className="mt-[5cqw] rounded-[5cqw] bg-superficie p-[5cqw] shadow-[0_1px_2px_rgba(22,33,58,0.08)]">
            <p className="text-[4.2cqw] text-suave">3 de 4 partes</p>
            <div className="mt-[2.5cqw] h-[2.2cqw] overflow-hidden rounded-full bg-linha">
              <div className="h-full w-3/4 rounded-full bg-[#0f7f63]" />
            </div>
            <ul className="mt-[4cqw] space-y-[2.6cqw] text-[4.4cqw]">
              {["Emails que pedem pressa", "A conta nova do fornecedor", "O link trocado"].map((t) => (
                <li key={t} className="flex items-center gap-[2.5cqw]">
                  <span className="grid h-[5.4cqw] w-[5.4cqw] shrink-0 place-items-center rounded-full bg-marcador text-noite">
                    <HugeiconsIcon icon={Tick02Icon} size="0.8em" strokeWidth={3} />
                  </span>
                  <span className="truncate">{t}</span>
                </li>
              ))}
              <li className="flex items-center gap-[2.5cqw] text-suave">
                <span className="h-[5.4cqw] w-[5.4cqw] shrink-0 rounded-full border border-linha" />
                <span className="truncate">Quem pede o código?</span>
              </li>
            </ul>
          </div>
          <div className="mt-auto mb-[8cqw] rounded-[4cqw] bg-[#2f3fb8] py-[3.6cqw] text-center text-[4.8cqw] font-semibold text-white">Continuar</div>
        </div>
      </div>
    </div>
  );
}

const kpis = [
  { rotulo: "Participação", valor: "82%", nota: "28 de 34" },
  { rotulo: "Acerto médio", valor: "74%", nota: "+5 pontos" },
  { rotulo: "Activos", valor: "30", nota: "de 34" },
  { rotulo: "Atenção", valor: "4", nota: "pessoas" },
];

const departamentos = [
  { nome: "Comercial", valor: 92 },
  { nome: "Operações", valor: 86 },
  { nome: "Financeiro", valor: 78 },
  { nome: "Recursos Humanos", valor: 71 },
  { nome: "TI", valor: 38 },
];

/** A app do gestor, numa janela de browser: a barra lateral escura e o início com os números do mês. */
export function JanelaGestor() {
  return (
    <div className="w-full overflow-hidden rounded-[14px] bg-superficie shadow-[0_40px_80px_-40px_rgba(0,0,0,0.65)] ring-1 ring-black/10 [container-type:inline-size]">
      <div className="flex items-center gap-[0.8cqw] border-b border-linha bg-papel px-[2cqw] py-[1.4cqw]" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-[1.2cqw] w-[1.2cqw] rounded-full bg-tinta/15" />
        ))}
        <span className="ml-[2cqw] h-[2.6cqw] flex-1 rounded-full bg-superficie" />
      </div>
      <div className="flex text-tinta" aria-hidden="true">
        {/* Barra lateral. */}
        <div className="w-[22cqw] shrink-0 bg-noite px-[2cqw] py-[2.4cqw] text-white">
          <div className="origin-left scale-[0.8] [&_span]:text-[2.4cqw]">
            <Logo claro />
          </div>
          <div className="mt-[2.4cqw] rounded-[1.2cqw] bg-white/5 p-[1.4cqw]">
            <p className="text-[1.5cqw] font-semibold">Sotavento Logística</p>
            <p className="text-[1.2cqw] text-white/55">Plano Profissional</p>
          </div>
          <ul className="mt-[2.6cqw] space-y-[1.1cqw] text-[1.45cqw]">
            {["Início", "Colaboradores", "Departamentos", "Desafios", "Temas", "Relatórios"].map((l, i) => (
              <li key={l} className={`rounded-[0.8cqw] px-[1.2cqw] py-[0.8cqw] ${i === 0 ? "bg-white/10 text-white" : "text-white/70"}`}>
                {l}
              </li>
            ))}
          </ul>
        </div>
        {/* Início. */}
        <div className="min-w-0 flex-1 bg-papel p-[2.6cqw]">
          <p className="font-titulo text-[3cqw] font-bold">Olá, Hélder</p>
          <p className="text-[1.4cqw] text-suave">Como está a equipa no treino deste mês.</p>
          <div className="mt-[2cqw] grid grid-cols-4 gap-[1.2cqw]">
            {kpis.map((k) => (
              <div key={k.rotulo} className="rounded-[1.2cqw] border border-linha bg-superficie p-[1.4cqw]">
                <p className="text-[1.25cqw] text-suave">{k.rotulo}</p>
                <p className="mt-[0.6cqw] font-titulo text-[3cqw] font-extrabold leading-none">{k.valor}</p>
                <p className="mt-[0.6cqw] text-[1.15cqw] text-suave">{k.nota}</p>
              </div>
            ))}
          </div>
          <div className="mt-[1.6cqw] rounded-[1.2cqw] border border-linha bg-superficie p-[1.8cqw]">
            <p className="text-[1.7cqw] font-bold">Participação por departamento</p>
            <ul className="mt-[1.4cqw] space-y-[1cqw]">
              {departamentos.map((d) => (
                <li key={d.nome} className="grid grid-cols-[14cqw_minmax(0,1fr)_4cqw] items-center gap-[1.2cqw] text-[1.3cqw]">
                  <span className="truncate">{d.nome}</span>
                  <span className="h-[1.1cqw] overflow-hidden rounded-full bg-linha">
                    <span className="block h-full rounded-full" style={{ width: `${d.valor}%`, background: d.valor < 40 ? "var(--risco)" : "var(--marcador)" }} />
                  </span>
                  <span className="text-right font-semibold">{d.valor}%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
