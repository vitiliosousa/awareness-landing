import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";

/** A faixa antes do contacto: uma frase grande e o pedido de demonstração, como no fim das páginas que funcionam. */
export function FaixaFinal() {
  return (
    <section aria-labelledby="t-faixa" className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1100px] px-4 text-center sm:px-6">
        <h2 id="t-faixa" className="revelar text-[2.4rem] font-semibold leading-[1.05] sm:text-[3.6rem] lg:text-[4.4rem]">
          A próxima mensagem falsa já vem a caminho.{" "}
          <span className="font-extrabold">
            A sua equipa vai <span className="marcado">reconhecê-la?</span>
          </span>
        </h2>
        <div className="revelar mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          <a href="#contacto" className="botao-marcador inline-flex h-14 items-center rounded-full bg-tinta px-8 text-base font-semibold text-white transition-colors hover:text-tinta">
            Pedir demonstração
          </a>
          <a href="#como-funciona" className="group inline-flex items-center gap-2 font-semibold text-tinta">
            Rever como funciona
            <HugeiconsIcon icon={ArrowDown01Icon} size={18} strokeWidth={2} className="rotate-180 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
