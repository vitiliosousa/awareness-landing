"use client";

import Link from "next/link";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Clock01Icon, Location01Icon, Mail01Icon, Tick02Icon, WhatsappIcon } from "@hugeicons/core-free-icons";
import { CONTACTOS } from "@/lib/contactos";
import { NOME } from "@/lib/marca";

const tamanhos = ["Até 20 pessoas", "21 a 50 pessoas", "51 a 200 pessoas", "Mais de 200 pessoas"];

const campo =
  "h-12 w-full rounded-[12px] border border-linha bg-papel px-4 text-[16px] text-tinta outline-none transition-colors placeholder:text-suave/70 focus:border-tinta/40 focus:bg-superficie focus:ring-2 focus:ring-marcador/40";

/**
 * O pedido de demonstração. Ainda não há servidor: o envio abre o email de quem preenche,
 * com o pedido já escrito para a nossa equipa. Assim nada se perde e ninguém julga que enviou o que não enviou.
 */
export function Contacto() {
  const [enviado, setEnviado] = useState(false);

  function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();
    const linhas = [
      `Nome: ${v("nome")}`,
      `Empresa: ${v("empresa")}`,
      `Email: ${v("email")}`,
      v("telefone") && `Telefone: ${v("telefone")}`,
      `Tamanho da equipa: ${v("tamanho")}`,
      v("mensagem") && `\n${v("mensagem")}`,
    ].filter(Boolean);
    const assunto = `Pedido de demonstração do ${NOME}: ${v("empresa")}`;
    window.location.href = `mailto:${CONTACTOS.email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(linhas.join("\n"))}`;
    setEnviado(true);
  }

  return (
    <section id="contacto" aria-labelledby="t-contacto" className="px-3 pb-3 sm:px-4 sm:pb-4">
      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[32px] bg-noite text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full border border-white/[0.06]" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-[380px] w-[380px] rounded-full border border-white/[0.06]" />

        <div className="relative mx-auto grid max-w-[1240px] gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16 lg:py-24">
          <div>
            <p className="revelar text-xs font-semibold uppercase tracking-[0.16em] text-marcador">Contacto</p>
            <h2 id="t-contacto" className="revelar mt-3 text-[2.4rem] font-semibold leading-[1.05] sm:text-[3.2rem]">
              {/* Em fundo escuro o marcador cobre a palavra toda e vem já desenhado: o texto escuro nunca fica sobre o azul-tinta. */}
              Veja como seria{" "}
              <span className="font-extrabold">
                na sua{" "}
                <span className="marcado text-tinta" style={{ animation: "none", backgroundSize: "100% 96%", backgroundPosition: "0 60%" }}>
                  empresa.
                </span>
              </span>
            </h2>
            <p className="revelar mt-5 max-w-md text-lg leading-relaxed text-white/70">
              Mostramos as duas apps por dentro, explicamos como corre um mês de treino e respondemos às suas perguntas. Sem compromisso.
            </p>

            <ul className="revelar mt-10 space-y-4">
              <li>
                <a href={`mailto:${CONTACTOS.email}`} className="group flex items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/[0.08] transition-colors group-hover:bg-marcador group-hover:text-tinta">
                    <HugeiconsIcon icon={Mail01Icon} size={19} strokeWidth={1.8} />
                  </span>
                  <span>
                    <span className="block text-sm text-white/55">Email</span>
                    <span className="font-semibold">{CONTACTOS.email}</span>
                  </span>
                </a>
              </li>
              {CONTACTOS.whatsapp && (
                <li>
                  <a href={`https://wa.me/${CONTACTOS.whatsapp}`} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/[0.08] transition-colors group-hover:bg-marcador group-hover:text-tinta">
                      <HugeiconsIcon icon={WhatsappIcon} size={19} strokeWidth={1.8} />
                    </span>
                    <span>
                      <span className="block text-sm text-white/55">WhatsApp</span>
                      <span className="font-semibold">+{CONTACTOS.whatsapp}</span>
                    </span>
                  </a>
                </li>
              )}
              <li className="flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/[0.08]">
                  <HugeiconsIcon icon={Location01Icon} size={19} strokeWidth={1.8} />
                </span>
                <span>
                  <span className="block text-sm text-white/55">Onde estamos</span>
                  <span className="font-semibold">{CONTACTOS.local}</span>
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/[0.08]">
                  <HugeiconsIcon icon={Clock01Icon} size={19} strokeWidth={1.8} />
                </span>
                <span>
                  <span className="block text-sm text-white/55">Horário</span>
                  <span className="font-semibold">{CONTACTOS.horario}</span>
                </span>
              </li>
            </ul>
          </div>

          <div className="revelar rounded-[24px] bg-superficie p-6 text-tinta shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)] sm:p-8">
            {enviado ? (
              <div role="status" className="sinal-aparece flex min-h-[420px] flex-col items-start justify-center">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-marcador">
                  <HugeiconsIcon icon={Tick02Icon} size={22} strokeWidth={2.4} />
                </span>
                <p className="mt-5 font-titulo text-2xl font-bold">Abrimos o seu email com o pedido.</p>
                <p className="mt-2 max-w-sm leading-relaxed text-suave">
                  Só falta carregar em enviar. Se o email não abriu, escreva-nos para <a href={`mailto:${CONTACTOS.email}`} className="font-semibold text-tinta underline underline-offset-2">{CONTACTOS.email}</a>.
                </p>
                <button type="button" onClick={() => setEnviado(false)} className="mt-6 text-sm font-semibold underline underline-offset-4 hover:no-underline">
                  Voltar ao formulário
                </button>
              </div>
            ) : (
              <form onSubmit={enviar} className="space-y-4">
                <p className="font-titulo text-xl font-bold">Pedir demonstração</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-medium">Nome</span>
                    <input name="nome" required autoComplete="name" className={campo} />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-medium">Empresa</span>
                    <input name="empresa" required autoComplete="organization" className={campo} />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-medium">Email</span>
                    <input name="email" type="email" required autoComplete="email" className={campo} />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-medium">
                      Telefone <span className="font-normal text-suave">(opcional)</span>
                    </span>
                    <input name="telefone" type="tel" autoComplete="tel" className={campo} />
                  </label>
                </div>
                <fieldset>
                  <legend className="mb-1.5 text-sm font-medium">Quantas pessoas vão treinar?</legend>
                  <div className="grid grid-cols-2 gap-2">
                    {tamanhos.map((t, i) => (
                      <label key={t} className="relative">
                        <input type="radio" name="tamanho" value={t} required defaultChecked={i === 1} className="peer sr-only" />
                        <span className="flex h-11 cursor-pointer items-center justify-center rounded-[12px] border border-linha px-3 text-center text-sm font-medium transition-colors peer-checked:border-tinta peer-checked:bg-tinta peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-marcador hover:border-tinta/40">
                          {t}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium">
                    Mensagem <span className="font-normal text-suave">(opcional)</span>
                  </span>
                  <textarea name="mensagem" rows={3} className={`${campo} h-auto resize-none py-3`} />
                </label>
                <button type="submit" className="botao-marcador inline-flex h-14 w-full items-center justify-center rounded-full bg-tinta text-base font-semibold text-white transition-colors hover:text-tinta">
                  Pedir demonstração
                </button>
                <p className="text-center text-sm text-suave">
                  Abre o seu email com o pedido já escrito, para enviar a {CONTACTOS.email}. Veja como tratamos os seus dados na{" "}
                  <Link href="/privacidade" className="font-semibold text-tinta underline underline-offset-2 hover:no-underline">
                    política de privacidade
                  </Link>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
