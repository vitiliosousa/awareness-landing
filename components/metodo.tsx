import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { CallIcon, Cancel01Icon, Megaphone01Icon, PauseIcon } from "@hugeicons/core-free-icons";

// O método não depende do nome da plataforma: P-A-R-E fica, mesmo que o nome mude.
const passos = [
  { letra: "P", resto: "arar", icone: PauseIcon, texto: "Olhar com calma: quem envia, o que pede e com que pressa. A maior parte dos ataques denuncia-se aqui." },
  { letra: "A", resto: "veriguar", icone: CallIcon, texto: "Confirmar por outro canal: ligar para o número que já conhece, abrir a aplicação oficial." },
  { letra: "R", resto: "ecusar", icone: Cancel01Icon, texto: "Não clicar, não pagar, não partilhar códigos nem palavras-passe enquanto houver dúvida." },
  { letra: "E", resto: "ncaminhar", icone: Megaphone01Icon, texto: "Avisar quem trata da segurança. Se já clicou, avisar logo, sem vergonha: cada minuto conta." },
];

/**
 * O método P-A-R-E: quatro passos para qualquer mensagem suspeita, como o "APOIO" da Bonança.
 * No computador a secção fica parada enquanto se rola, e os passos acendem um a um com o marcador
 * a avançar na linha. Sem suporte de animações ligadas ao scroll, os passos aparecem todos acesos.
 */
export function Metodo() {
  return (
    <section id="metodo" aria-labelledby="t-metodo" className="pt-24 sm:pt-32">
      <div className="mx-auto grid max-w-[1240px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16">
        <div>
          <p className="revelar text-xs font-semibold uppercase tracking-[0.16em] text-suave">O método</p>
          <h2 id="t-metodo" className="revelar mt-3 text-[2.4rem] font-semibold leading-[1.05] sm:text-[3.2rem]">
            Quatro passos. <span className="font-extrabold">Uma palavra: <span className="marcado">PARE.</span></span>
          </h2>
          <p className="revelar mt-5 max-w-lg text-lg leading-relaxed text-suave">
            Os mesmos quatro passos servem para qualquer mensagem suspeita: um email, um SMS, uma chamada, alguém à porta. <span className="font-semibold text-tinta">Cada exercício treina um deles</span>, até se tornarem um reflexo.
          </p>
        </div>
        <div className="revelar relative overflow-hidden rounded-[28px]">
          <Image src="/fotos/13.png" alt="Dois colegas a analisar uma mensagem suspeita no telemóvel" width={1024} height={1536} sizes="(min-width: 1024px) 45vw, 100vw" className="aspect-[4/3] w-full object-cover object-[50%_38%]" />
        </div>
      </div>

      {/* O trilho: alto no computador, para os passos acenderem enquanto a secção está parada. */}
      <div className="metodo-trilho relative mt-16 lg:mt-8">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-center">
          <p className="mb-4 hidden font-titulo text-2xl font-semibold lg:block">
            Perante qualquer mensagem suspeita, <span className="font-extrabold">pela ordem:</span>
          </p>
          <div aria-hidden="true" className="relative mb-8 hidden h-6 lg:block">
            <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-tinta/20" />
            <div className="metodo-linha absolute left-0 top-1/2 h-[5px] w-full -translate-y-1/2 origin-left rounded-full bg-marcador" />
          </div>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {passos.map((p, i) => (
              <li key={i} className="metodo-passo revelar" style={{ ["--i" as string]: i }}>
                <article className={`flex h-full flex-col rounded-[24px] p-6 ${i % 2 === 0 ? "bg-superficie ring-1 ring-tinta/[0.06]" : "bg-nevoa"}`}>
                  {/* No telemóvel o ícone fica ao lado da letra; no computador, por baixo. */}
                  <div className="flex items-center justify-between gap-4 lg:block">
                    <h3 className="flex items-baseline leading-none">
                      <span className="metodo-letra font-titulo text-[3.4rem] font-black tracking-tight lg:text-[4.2rem]">{p.letra}</span>
                      <span className="ml-0.5 text-xl font-semibold">{p.resto}</span>
                    </h3>
                    <span aria-hidden="true" className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-tinta text-white lg:mt-6 lg:h-12 lg:w-12">
                      <HugeiconsIcon icon={p.icone} size={21} strokeWidth={1.8} />
                    </span>
                  </div>
                  <p className="mt-4 leading-relaxed text-suave lg:mt-5">{p.texto}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
