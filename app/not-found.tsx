import Link from "next/link";

export const metadata = { title: "Página não encontrada" };

/** A página 404, no estilo do site: com uma ponta de humor sobre links que não são o que parecem. */
export default function NaoEncontrada() {
  return (
    <main className="flex min-h-[80vh] items-center pt-28 baixo:min-h-0">
        <div className="mx-auto w-full max-w-[1240px] px-4 py-24 sm:px-6 baixo:py-10">
          <p aria-hidden="true" className="select-none font-titulo text-[clamp(7rem,22vw,16rem)] baixo:text-[min(22vw,32svh)] font-black leading-[0.8] tracking-[-0.06em] text-[#d9dee5]">
            404
          </p>
          <h1 className="mt-8 max-w-2xl baixo:mt-6 text-[2.2rem] font-semibold leading-[1.08] sm:text-[3rem]">
            Este link não leva a lado nenhum. <span className="font-extrabold">Ainda bem que <span className="marcado">desconfiou.</span></span>
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-suave">A página que procura não existe ou mudou de sítio. Volte ao início, onde tudo é o que parece.</p>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link href="/" className="botao-marcador inline-flex h-14 items-center rounded-full bg-tinta px-8 text-base font-semibold text-white transition-colors hover:text-tinta">
              Voltar ao início
            </Link>
            <Link href="/contacto" className="font-semibold text-tinta underline decoration-marcador decoration-[3px] underline-offset-4 hover:decoration-tinta">
              Falar connosco
            </Link>
          </div>
        </div>
    </main>
  );
}
