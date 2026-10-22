import { IlustracaoChamada, IlustracaoEmail, IlustracaoMensagem } from "@/components/ilustracoes";
import { NOME } from "@/lib/marca";

type Porta = {
  canal: string;
  titulo: React.ReactNode;
  texto: React.ReactNode;
  Ilustracao: (p: { fundo: string }) => React.ReactNode;
  /** Cor do cartão e cor que as ilustrações usam por dentro (o "papel" das formas). */
  cartao: string;
  fundo: string;
  escuro?: boolean;
};

const portas: Porta[] = [
  {
    canal: "Email",
    titulo: (
      <>
        A fatura que <strong className="font-extrabold">não é do fornecedor.</strong>
      </>
    ),
    texto: (
      <>
        Um email igual ao de sempre pede para pagar numa conta nova. A equipa aprende a <strong className="font-semibold text-tinta">confirmar por outro canal</strong> antes de pagar.
      </>
    ),
    Ilustracao: IlustracaoEmail,
    cartao: "bg-nevoa",
    fundo: "var(--nevoa)",
  },
  {
    canal: "SMS e WhatsApp",
    titulo: (
      <>
        O director que <strong className="font-extrabold">pede um favor urgente.</strong>
      </>
    ),
    texto: (
      <>
        Um número novo, com a foto do chefe, pede um pagamento ou um código. Treinamos a <strong className="font-semibold text-tinta">parar e ligar para o número que já conhecem</strong>.
      </>
    ),
    Ilustracao: IlustracaoMensagem,
    cartao: "bg-superficie ring-1 ring-tinta/[0.06]",
    fundo: "var(--superficie)",
  },
  {
    canal: "Telefone e porta",
    titulo: (
      <>
        O técnico que <strong className="font-extrabold">ninguém chamou.</strong>
      </>
    ),
    texto: (
      <>
        Alguém do &laquo;banco&raquo; ou da &laquo;informática&raquo; pede dados ou acesso. A equipa aprende a <strong className="font-semibold text-white">pedir identificação</strong>, sem constrangimento.
      </>
    ),
    Ilustracao: IlustracaoChamada,
    cartao: "bg-noite text-white",
    fundo: "var(--noite)",
    escuro: true,
  },
];

/** As três portas por onde os ataques costumam entrar numa empresa. */
export function Portas() {
  return (
    <section id="ataques" aria-labelledby="t-portas" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-end">
          <h2 id="t-portas" className="revelar text-[2.1rem] font-semibold leading-[1.08] sm:text-[2.8rem]">
            Os ataques não entram pelo servidor.{" "}
            <span className="font-extrabold">
              Entram por uma <span className="marcado">pessoa</span> com pressa.
            </span>
          </h2>
          <p className="revelar max-w-md text-lg leading-relaxed text-suave lg:justify-self-end">
            Quase todos os ataques a empresas começam com uma mensagem a pedir urgência. São estas três portas que o {NOME} ensina a fechar.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {portas.map((p, i) => (
            <li key={p.canal} className="revelar" style={{ animationRange: `entry ${i * 8}% entry ${40 + i * 8}%` }}>
              <article className={`cartao-porta group flex h-full flex-col rounded-[28px] p-7 sm:p-8 ${p.cartao}`}>
                <p className={`text-xs font-semibold uppercase tracking-[0.14em] ${p.escuro ? "text-white/55" : "text-suave"}`}>{p.canal}</p>
                <h3 className="mt-3 text-[1.55rem] font-medium leading-[1.15]">{p.titulo}</h3>
                <div className={`my-8 aspect-[11/8] w-full ${p.escuro ? "text-white" : "text-tinta"}`}>
                  <p.Ilustracao fundo={p.fundo} />
                </div>
                <p className={`mt-auto leading-relaxed ${p.escuro ? "text-white/70" : "text-suave"}`}>{p.texto}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
