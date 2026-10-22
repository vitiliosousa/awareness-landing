import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import { Building03Icon, Certificate01Icon, ComputerIcon, Tick02Icon, UserGroupIcon } from "@hugeicons/core-free-icons";
import { Janela } from "@/components/janela";

type Perfil = { id: string; rotulo: string; icone: IconSvgElement; titulo: string; texto: string; pontos: string[]; captura: string; alt: string };

// Como as páginas da KnowBe4: a mesma plataforma, explicada a cada pessoa que a decide. Cada perfil com a captura do gestor que lhe interessa.
const perfis: Perfil[] = [
  {
    id: "direccao",
    rotulo: "Direcção",
    icone: Building03Icon,
    titulo: "Saber se a empresa está protegida, sem relatórios técnicos.",
    texto: "Os números que interessam numa só página: quanto da equipa treinou, quanto acerta e o que precisa de atenção este mês.",
    pontos: ["Um resumo mensal por email", "A evolução da participação e do acerto, mês a mês", "Os departamentos lado a lado, para decidir onde agir"],
    captura: "/capturas/gestor-inicio.png",
    alt: "O início da app do gestor, com os números do mês",
    },
  {
    id: "ti",
    rotulo: "TI e segurança",
    icone: ComputerIcon,
    titulo: "Uma camada humana por cima das ferramentas que já tem.",
    texto: "As ferramentas param muita coisa, mas não param uma pessoa a quem pediram pressa. O treino trata dessa parte, e mostra onde a equipa ainda falha.",
    pontos: ["Temas alinhados com os ataques que chegam à empresa", "Quem concluiu, quem está a meio e quem falta, por desafio", "Nada para instalar, configurar ou manter"],
    captura: "/capturas/gestor-desafio.png",
    alt: "O detalhe de um desafio na app do gestor, com quem concluiu e quem falta",
    },
  {
    id: "rh",
    rotulo: "Recursos Humanos",
    icone: UserGroupIcon,
    titulo: "O treino passa a fazer parte da vida da equipa.",
    texto: "Quem entra na empresa começa com um link, quem fica para trás recebe um lembrete, e quem precisa de acompanhamento aparece numa lista.",
    pontos: ["Novos colaboradores entram sem formação presencial", "Lembretes automáticos a quem ainda não fez", "Níveis, distintivos e certificados que reconhecem o esforço"],
    captura: "/capturas/gestor-colaboradores.png",
    alt: "A lista de colaboradores na app do gestor, filtrada por quem precisa de atenção",
    },
  {
    id: "conformidade",
    rotulo: "Conformidade e auditoria",
    icone: Certificate01Icon,
    titulo: "As provas de formação sempre à mão.",
    texto: "Cada mês fica registado: quem participou, com que acerto e em que temas. Pronto a mostrar numa auditoria ou a um cliente que o peça.",
    pontos: ["O histórico de cada pessoa, desafio a desafio", "Relatórios mensais em PDF, prontos a anexar", "Listas para exportar para o Excel"],
    captura: "/capturas/gestor-relatorio.png",
    alt: "Um relatório mensal na app do gestor, com a participação por departamento e por tema",
    },
];

/** Os quatro perfis, em linhas alternadas: texto de um lado, a captura do gestor do outro. */
export function Perfis() {
  return (
    <section aria-label="Por função" className="py-16 sm:py-24">
      <div className="mx-auto max-w-[1240px] space-y-24 px-4 sm:space-y-32 sm:px-6">
        {perfis.map((p, i) => (
          <article key={p.id} id={p.id} className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className={i % 2 ? "lg:order-2" : ""}>
              <p className="revelar flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-suave">
                <span aria-hidden="true" className="grid h-10 w-10 place-items-center rounded-full bg-marcador text-tinta">
                  <HugeiconsIcon icon={p.icone} size={19} strokeWidth={1.8} />
                </span>
                {p.rotulo}
              </p>
              <h2 className="revelar mt-5 text-[2rem] font-semibold leading-[1.1] sm:text-[2.5rem]">{p.titulo}</h2>
              <p className="revelar mt-4 text-lg leading-relaxed text-suave">{p.texto}</p>
              <ul className="mt-7 space-y-3">
                {p.pontos.map((t) => (
                  <li key={t} className="revelar flex items-start gap-3">
                    <span aria-hidden="true" className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-tinta text-white">
                      <HugeiconsIcon icon={Tick02Icon} size={14} strokeWidth={2.6} />
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`revelar ${i % 2 ? "lg:order-1" : ""}`}>
              <Janela src={p.captura} alt={p.alt} tapar />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
