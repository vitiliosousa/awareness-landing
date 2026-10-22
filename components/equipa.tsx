import { HugeiconsIcon } from "@hugeicons/react";
import { Award01Icon, ChampionIcon, Fire03Icon, Medal01Icon } from "@hugeicons/core-free-icons";
import { Janela } from "@/components/janela";

// Os níveis, distintivos e o ranking são os da app do formando (lib/gamificacao no admin).
const pontos = [
  { icone: Medal01Icon, titulo: "Níveis", texto: "De Recruta a Sentinela, cada exercício conta para subir." },
  { icone: Award01Icon, titulo: "Distintivos", texto: "Por regularidade, por acertar tudo num desafio, por dominar um tema." },
  { icone: ChampionIcon, titulo: "Ranking", texto: "Pessoas e departamentos lado a lado, mês a mês." },
  { icone: Fire03Icon, titulo: "Dias seguidos", texto: "Pequenos hábitos, sem incentivar o uso excessivo." },
];

/** Porque a equipa participa: o treino reconhece o esforço, como um jogo sério. Com as capturas da app do formando. */
export function Equipa() {
  return (
    <section id="equipa" aria-labelledby="t-equipa" className="overflow-hidden py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
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

        {/* Os distintivos atrás, o ranking à frente, desencontrados. */}
        <div className="revelar relative pb-20 lg:pb-28">
          <Janela src="/capturas/formando-conquistas.png" alt="Os distintivos da app do formando, com a raridade de cada um" className="ml-auto w-[90%]" />
          <Janela src="/capturas/formando-ranking.png" alt="O ranking do mês na app do formando, com o pódio" className="absolute bottom-0 left-0 w-[64%]" sizes="(min-width: 1024px) 35vw, 60vw" />
        </div>
      </div>
    </section>
  );
}
