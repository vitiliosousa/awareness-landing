import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { Mail01Icon } from "@hugeicons/core-free-icons";
import { NOME } from "@/lib/marca";

/**
 * O momento antes de clicar: um telemóvel em cima da secretária acende com uma mensagem.
 * Faz o papel do vídeo do barco da Bonança. A fotografia aproxima-se ao rolar, o ecrã pulsa
 * e a notificação aparece com o pedido assinalado a marcador.
 */
export function Momento() {
  return (
    <section aria-labelledby="t-momento" className="px-3 sm:px-4">
      <div className="momento relative mx-auto max-w-[1440px] overflow-hidden rounded-[32px] bg-noite">
        <div className="relative aspect-[10/17] sm:aspect-[16/10] lg:aspect-[16/8.4] baixo:aspect-[16/7]">
          <Image src="/fotos/2.png" alt="Um telemóvel em cima de uma secretária, com o ecrã a acender" fill sizes="100vw" className="momento-foto object-cover object-[52%_62%]" />
          {/* O ecrã do telemóvel a acender. */}
          <div aria-hidden="true" className="momento-brilho pointer-events-none absolute left-[52%] top-[62%] h-[30%] w-[38%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[radial-gradient(closest-side,rgba(255,255,255,0.75),rgba(230,236,255,0.25)_55%,transparent)] mix-blend-screen" />
          {/* Véu por cima, para o título se ler sobre a fotografia. */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[62%] bg-gradient-to-b from-noite/90 via-noite/60 to-transparent" />

          <div className="absolute inset-x-0 top-0 px-6 pt-10 text-center sm:pt-14 lg:pt-16">
            <h2 id="t-momento" className="revelar mx-auto max-w-3xl text-[2rem] font-semibold leading-[1.08] text-white sm:text-[2.8rem] lg:text-[3.3rem]">
              Um minuto de atenção vale mais <span className="font-extrabold">do que qualquer antivírus.</span>
            </h2>
            <p className="revelar mx-auto mt-4 max-w-xl text-white/85 [text-shadow:0_1px_12px_rgba(22,33,58,0.6)] sm:text-lg">É neste instante, antes de clicar, que tudo se decide. É este instante que o {NOME} treina.</p>
          </div>

          {/* A notificação que acabou de chegar. */}
          <div className="momento-aviso absolute bottom-[6%] left-1/2 w-[min(21rem,86%)] -translate-x-1/2 sm:bottom-auto sm:left-[7%] sm:top-[50%] sm:translate-x-0">
            <div className="rounded-[20px] bg-superficie/95 p-4 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] ring-1 ring-black/5 backdrop-blur-sm">
              <p className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-suave">
                <span className="flex items-center gap-2">
                  <HugeiconsIcon icon={Mail01Icon} size={15} strokeWidth={1.8} /> Email · agora
                </span>
                <span className="h-2 w-2 rounded-full bg-risco" aria-hidden="true" />
              </p>
              <p className="mt-2 font-semibold leading-tight text-tinta">Fornecedor · Fatura de outubro</p>
              <p className="mt-1 text-[15px] leading-snug text-suave">
                Actualizámos os nossos dados bancários. Por favor, pague esta fatura para a <span className="marcado font-semibold text-tinta">nova conta</span> ainda hoje.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
