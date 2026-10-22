"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, Menu01Icon } from "@hugeicons/core-free-icons";
import { Logo } from "@/components/logo";
import { NOME } from "@/lib/marca";

const ligacoes = [
  { href: "/#como-funciona", rotulo: "Como funciona" },
  { href: "/#temas", rotulo: "Temas" },
  { href: "/#para-quem", rotulo: "Para quem é" },
  { href: "/#perguntas", rotulo: "Perguntas" },
  { href: "/#contacto", rotulo: "Contacto" },
];

/** Uma barra que flutua por cima da página, como uma cápsula, e ganha fundo quando se rola. */
export function Cabecalho() {
  const [rolou, setRolou] = useState(false);
  const [aberto, setAberto] = useState(false);

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
        <Link href="/#topo" aria-label={`${NOME}, início`}>
          <Logo />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {ligacoes.map((l) => (
            <Link key={l.href} href={l.href} className="group relative text-[15px] font-medium text-tinta/75 transition-colors hover:text-tinta">
              {l.rotulo}
              <span aria-hidden="true" className="absolute -bottom-1 left-0 h-[3px] w-full origin-left scale-x-0 rounded-full bg-marcador transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/#contacto" className="botao-marcador hidden h-12 items-center rounded-full bg-tinta px-6 text-[15px] font-semibold text-white transition-colors hover:text-tinta sm:inline-flex">
            Pedir demonstração
          </Link>
          <button
            type="button"
            onClick={() => setAberto((v) => !v)}
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={aberto}
            className="grid h-12 w-12 place-items-center rounded-full text-tinta ring-1 ring-tinta/15 md:hidden"
          >
            <HugeiconsIcon icon={aberto ? Cancel01Icon : Menu01Icon} size={22} strokeWidth={1.8} />
          </button>
        </div>
      </div>

      {aberto && (
        <nav aria-label="Menu" className="mx-auto mt-2 max-w-[1240px] rounded-[24px] bg-papel/95 p-3 shadow-[0_16px_40px_-20px_rgba(22,33,58,0.45)] ring-1 ring-tinta/5 backdrop-blur-md md:hidden">
          {ligacoes.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setAberto(false)} className="block rounded-2xl px-4 py-3.5 text-lg font-medium hover:bg-tinta/5">
              {l.rotulo}
            </Link>
          ))}
          <Link href="/#contacto" onClick={() => setAberto(false)} className="mt-2 flex h-12 items-center justify-center rounded-full bg-tinta font-semibold text-white">
            Pedir demonstração
          </Link>
        </nav>
      )}
    </header>
  );
}
