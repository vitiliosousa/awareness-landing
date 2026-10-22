import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { Award01Icon, ChampionIcon, Fire03Icon, Medal01Icon } from "@hugeicons/core-free-icons";

// Os níveis, distintivos e o ranking são os da app do formando (lib/gamificacao no admin).
const niveis = ["Recruta", "Atento", "Vigilante", "Guardião", "Sentinela"];

const pontos = [
  { icone: Medal01Icon, titulo: "Níveis", texto: "De Recruta a Sentinela, cada exercício conta para subir." },
  { icone: Award01Icon, titulo: "Distintivos", texto: "Por regularidade, por acertar tudo num desafio, por dominar um tema." },
  { icone: ChampionIcon, titulo: "Ranking", texto: "Pessoas e departamentos lado a lado, mês a mês." },
  { icone: Fire03Icon, titulo: "Dias seguidos", texto: "Pequenos hábitos, sem incentivar o uso excessivo." },
];

/** Porque a equipa participa: o treino reconhece o esforço, como um jogo sério. */
export function Equipa() {
  return (
    <section id="equipa" aria-labelledby="t-equipa" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
        <div>
          <p className="revelar text-xs font-semibold uppercase tracking-[0.16em] text-suave">A equipa participa</p>
          <h2 id="t-equipa" className="revelar mt-3 text-[2.4rem] font-semibold leading-[1.05] sm:text-[3.2rem]">
            Não é mais uma formação <span className="font-extrabold">que ninguém termina.</span>
          </h2>
          <p className="revelar mt-5 max-w-lg text-lg leading-relaxed text-suave">
            Cada exercício dá experiência, cada mês traz um desafio novo, e o esforço fica à vista. É por isso que as pessoas voltam, sem ninguém ter de insistir.
          </p>
          <ul className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {pontos.map((p) => (
              <li key={p.titulo} className="revelar flex gap-4">
                <span aria-hidden="true" className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-nevoa text-tinta">
                  <HugeiconsIcon icon={p.icone} size={20} strokeWidth={1.8} />
                </span>
                <span>
                  <span className="block font-bold">{p.titulo}</span>
                  <span className="mt-0.5 block leading-relaxed text-suave">{p.texto}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* A fotografia com o que a pessoa vê na app: o nível, um distintivo novo e o ranking do mês. */}
        <div className="revelar relative mx-auto w-full max-w-[560px] pb-10 pl-6 sm:pl-10">
          <Image src="/fotos/15.png" alt="Uma equipa numa sala de reuniões ouve um colega" width={1024} height={1536} sizes="(min-width: 1024px) 520px, 90vw" className="aspect-[4/5] w-full rounded-[28px] object-cover" />

          <div className="pairar absolute -left-2 top-8 w-60 rounded-[18px] bg-superficie p-4 shadow-[0_24px_50px_-24px_rgba(22,33,58,0.5)] ring-1 ring-tinta/5 sm:-left-6">
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold">Nível Vigilante</span>
              <span className="text-suave">1 340 XP</span>
            </div>
            <div className="mt-2.5 flex gap-1" aria-hidden="true">
              {niveis.map((n, i) => (
                <span key={n} className={`h-1.5 flex-1 rounded-full ${i < 2 ? "bg-marcador" : i === 2 ? "bg-marcador/50" : "bg-linha"}`} />
              ))}
            </div>
            <p className="mt-2 text-[13px] text-suave">Faltam 1 160 XP para Guardião</p>
          </div>

          <div className="absolute -right-2 top-[44%] w-56 rounded-[18px] bg-noite p-4 text-white shadow-[0_24px_50px_-24px_rgba(22,33,58,0.6)] sm:-right-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-marcador">Distintivo novo · raro</p>
            <div className="mt-2 flex items-center gap-3">
              <span aria-hidden="true" className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-marcador text-tinta">
                <HugeiconsIcon icon={Award01Icon} size={21} strokeWidth={1.8} />
              </span>
              <div>
                <p className="font-semibold leading-tight">Faro de Raposa</p>
                <p className="text-[13px] text-white/60">15 respostas certas em engenharia social</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-64 rounded-[18px] bg-superficie p-4 shadow-[0_24px_50px_-24px_rgba(22,33,58,0.5)] ring-1 ring-tinta/5">
            <p className="text-xs font-semibold uppercase tracking-wide text-suave">Ranking de outubro</p>
            <ol className="mt-2 space-y-1.5 text-sm">
              {[
                { nome: "Comercial", xp: "4 820" },
                { nome: "Operações", xp: "4 310" },
                { nome: "Financeiro", xp: "3 960" },
              ].map((d, i) => (
                <li key={d.nome} className="flex items-center gap-2.5">
                  <span className={`grid h-5 w-5 place-items-center rounded-full text-[11px] font-bold ${i === 0 ? "bg-marcador text-tinta" : "bg-nevoa"}`}>{i + 1}</span>
                  <span className="flex-1">{d.nome}</span>
                  <span className="font-semibold tabular-nums">{d.xp} XP</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
