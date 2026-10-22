import { Janela } from "@/components/janela";

// As capturas vêm da pré-visualização do admin: cortamos a barra de cima, que não faz parte do que o formando vê.
const CORTE = 8;

/** Como é um exercício: a mensagem com os sinais por encontrar e, a seguir, a explicação de cada um. */
export function Exercicio() {
  return (
    <section id="exercicio" aria-labelledby="t-exercicio" className="bg-noite py-24 text-white sm:py-32">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-end">
          <div>
            <p className="revelar text-xs font-semibold uppercase tracking-[0.16em] text-marcador">Por dentro de um exercício</p>
            <h2 id="t-exercicio" className="revelar mt-3 text-[2.4rem] font-semibold leading-[1.05] sm:text-[3.2rem]">
              Encontrar o sinal, <span className="font-extrabold">e perceber porquê.</span>
            </h2>
          </div>
          <p className="revelar max-w-md text-lg leading-relaxed text-white/70 lg:justify-self-end">
            Cada exercício mostra uma situação real, como um email de um falso fornecedor. A pessoa assinala o que lhe parece suspeito e, a seguir, vê a explicação de cada sinal, os que encontrou e os que lhe escaparam.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10">
          <figure className="revelar">
            <Janela src="/capturas/formando-exercicio.png" alt="Um exercício: um email de um falso fornecedor, com duas partes assinaladas" cortarTopo={CORTE} sizes="(min-width: 1024px) 45vw, 100vw" className="ring-white/10" />
            <figcaption className="mt-5 flex gap-4">
              <span aria-hidden="true" className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-marcador font-titulo font-bold text-tinta">1</span>
              <span className="leading-relaxed text-white/75">
                <span className="font-semibold text-white">Assinalar o que parece suspeito.</span> O endereço, o pedido, a pressa: a pessoa clica nas partes da mensagem que a fazem desconfiar.
              </span>
            </figcaption>
          </figure>
          <figure className="revelar">
            <Janela src="/capturas/formando-resposta.png" alt="A resposta ao exercício: a explicação de cada um dos quatro sinais" cortarTopo={CORTE} sizes="(min-width: 1024px) 45vw, 100vw" className="ring-white/10" />
            <figcaption className="mt-5 flex gap-4">
              <span aria-hidden="true" className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-marcador font-titulo font-bold text-tinta">2</span>
              <span className="leading-relaxed text-white/75">
                <span className="font-semibold text-white">Ver a explicação de cada sinal.</span> Os que encontrou e os que lhe escaparam, com o porquê. É assim que o reflexo se forma.
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
