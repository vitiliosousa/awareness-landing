import Link from "next/link";
import { Logo } from "@/components/logo";
import { CONTACTOS } from "@/lib/contactos";
import { NOME } from "@/lib/marca";

const ligacoes = [
  { href: "/plataforma", rotulo: "Plataforma" },
  { href: "/#metodo", rotulo: "O método VIGIA" },
  { href: "/solucoes", rotulo: "Para quem é" },
  { href: "/blog", rotulo: "Blog" },
  { href: "/perguntas", rotulo: "Perguntas frequentes" },
  { href: "/contacto", rotulo: "Pedir demonstração" },
];

/** O rodapé: o resumo, as ligações, o contacto e o nome em grande, como o "BONANÇA" no fim da Bonança. */
export function Rodape() {
  return (
    <footer className="relative mt-3 overflow-hidden bg-noite text-white sm:mt-4">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-6 pb-10 pt-16 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1fr)] lg:pt-20">
        <div>
          <Logo claro />
          <p className="mt-5 max-w-xs leading-relaxed text-white/65">Treino de cibersegurança para as equipas das empresas moçambicanas, com um desafio novo todos os meses.</p>
        </div>
        <nav aria-label="Rodapé">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/60">Explorar</p>
          <ul className="mt-4 space-y-2.5">
            {ligacoes.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/80 transition-colors hover:text-marcador">
                  {l.rotulo}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/60">Contacto</p>
          <ul className="mt-4 space-y-2.5 text-white/80">
            <li>
              <a href={`mailto:${CONTACTOS.email}`} className="break-all transition-colors hover:text-marcador">
                {CONTACTOS.email}
              </a>
            </li>
            {CONTACTOS.whatsapp && (
              <li>
                <a href={`https://wa.me/${CONTACTOS.whatsapp}`} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-marcador">
                  WhatsApp +{CONTACTOS.whatsapp}
                </a>
              </li>
            )}
            <li>{CONTACTOS.local}</li>
            <li>{CONTACTOS.horario}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-3 border-t border-white/10 px-6 py-6 text-sm text-white/60">
        <p>
          {NOME} · Treino de cibersegurança para equipas
        </p>
        <span className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <Link href="/privacidade" className="transition-colors hover:text-white">
            Política de privacidade
          </Link>
          <Link href="/termos" className="transition-colors hover:text-white">
            Termos de uso
          </Link>
          <a href="#" className="transition-colors hover:text-white">
            Voltar ao topo ↑
          </a>
        </span>
      </div>

      {/* O nome em grande, a sair pelo fundo. */}
      <p aria-hidden="true" className="pointer-events-none -mb-[0.22em] select-none text-center font-titulo text-[24vw] font-black leading-[0.8] tracking-[-0.06em] text-white/[0.06]">
        {NOME.toUpperCase()}
      </p>
    </footer>
  );
}
