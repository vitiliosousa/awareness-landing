"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, Menu01Icon } from "@hugeicons/core-free-icons";
import { Logo } from "@/components/logo";
import { NOME } from "@/lib/marca";

const ligacoes = [
  { href: "/plataforma", rotulo: "Plataforma" },
  { href: "/solucoes", rotulo: "Para quem é" },
  { href: "/blog", rotulo: "Blog" },
  { href: "/perguntas", rotulo: "Perguntas" },
];

/** Uma barra que flutua por cima da página, como uma cápsula, e ganha fundo quando se rola. Marca a página em que se está. */
export function Cabecalho() {
  const caminho = usePathname();
  const [rolou, setRolou] = useState(false);
  const [aberto, setAberto] = useState(false);
  const activa = (href: string) => caminho === href || caminho.startsWith(`${href}/`);

  useEffect(() => {
    const ver = () => setRolou(window.scrollY > 12);
    ver();
    window.addEventListener("scroll", ver, { passive: true });
    return () => window.removeEventListener("scroll", ver);
  }, []);

  useEffect(() => {
    if (!aberto) return;
    const tecla = (e: KeyboardEvent) => e.key === "Escape" && setAberto(false);
    document.addEventListener("keydown", tecla);
    return () => document.removeEventListener("keydown", tecla);
  }, [aberto]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4">
      <div
        className={`mx-auto flex h-16 max-w-[1240px] items-center justify-between rounded-full pl-5 pr-2 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
          rolou || aberto ? "bg-papel/85 shadow-[0_8px_30px_-16px_rgba(22,33,58,0.35)] ring-1 ring-tinta/5 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <Link href="/" aria-label={`${NOME}, início`}>
          <Logo />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {ligacoes.map((l) => (
            <Link key={l.href} href={l.href} aria-current={activa(l.href) ? "page" : undefined} className={`group relative text-[15px] font-medium transition-colors hover:text-tinta ${activa(l.href) ? "text-tinta" : "text-tinta/75"}`}>
              {l.rotulo}
              <span aria-hidden="true" className={`absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full bg-marcador transition-transform duration-300 group-hover:scale-x-100 ${activa(l.href) ? "scale-x-100" : "scale-x-0"}`} />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contacto" className="botao-marcador hidden h-12 items-center rounded-full bg-tinta px-6 text-[15px] font-semibold text-white transition-colors hover:text-tinta sm:inline-flex">
            Pedir demonstração
          </Link>
          <button
            type="button"
            onClick={() => setAberto((v) => !v)}
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={aberto}
            className="relative grid h-12 w-12 place-items-center rounded-full text-tinta ring-1 ring-tinta/15 md:hidden"
          >
            {/* Os dois ícones ficam sobrepostos e trocam com uma rotação, em vez de saltarem. */}
            <span aria-hidden="true" className={`absolute transition-[opacity,transform] duration-300 motion-reduce:transition-none ${aberto ? "rotate-90 scale-75 opacity-0" : "rotate-0 scale-100 opacity-100"}`}>
              <HugeiconsIcon icon={Menu01Icon} size={22} strokeWidth={1.8} />
            </span>
            <span aria-hidden="true" className={`absolute transition-[opacity,transform] duration-300 motion-reduce:transition-none ${aberto ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-75 opacity-0"}`}>
              <HugeiconsIcon icon={Cancel01Icon} size={22} strokeWidth={1.8} />
            </span>
          </button>
        </div>
      </div>

      {/*
        O menu do telemóvel fica sempre no DOM para poder animar: desce e aparece ao abrir, sobe e desaparece ao fechar,
        e os itens entram um a um. Fechado, fica inerte (nem o rato nem o teclado lhe chegam).
      */}
      <nav
        aria-label="Menu"
        inert={!aberto}
        className={`mx-auto mt-2 max-w-[1240px] origin-top rounded-[24px] bg-papel/95 p-3 shadow-[0_16px_40px_-20px_rgba(22,33,58,0.45)] ring-1 ring-tinta/5 backdrop-blur-md transition-[opacity,transform,visibility] duration-300 ease-out motion-reduce:transition-none md:hidden ${
          aberto ? "visible translate-y-0 scale-100 opacity-100" : "invisible -translate-y-3 scale-[0.98] opacity-0"
        }`}
      >
        {ligacoes.map((l, i) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setAberto(false)}
            aria-current={activa(l.href) ? "page" : undefined}
            style={{ transitionDelay: aberto ? `${80 + i * 45}ms` : "0ms" }}
            className={`block rounded-2xl px-4 py-3.5 text-lg font-medium transition-[opacity,transform,background-color] duration-300 hover:bg-tinta/5 motion-reduce:transition-none aria-[current=page]:bg-tinta/5 ${aberto ? "translate-y-0 opacity-100" : "-translate-y-1.5 opacity-0"}`}
          >
            {l.rotulo}
          </Link>
        ))}
        <Link
          href="/contacto"
          onClick={() => setAberto(false)}
          style={{ transitionDelay: aberto ? `${80 + ligacoes.length * 45}ms` : "0ms" }}
          className={`botao-marcador mt-2 flex h-12 items-center justify-center rounded-full bg-tinta font-semibold text-white transition-[opacity,transform,color] duration-300 hover:text-tinta motion-reduce:transition-none ${aberto ? "translate-y-0 opacity-100" : "-translate-y-1.5 opacity-0"}`}
        >
          Pedir demonstração
        </Link>
      </nav>
    </header>
  );
}
