import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import { AnalyticsUpIcon, Certificate01Icon, Clock01Icon, LanguageCircleIcon, Notification01Icon, Rocket01Icon } from "@hugeicons/core-free-icons";

type Beneficio = { icone: IconSvgElement; titulo: string; texto: string };

// Só o que a plataforma já faz: convites por link, importação por Excel, relatórios em PDF,
// certificados automáticos, lembretes, conteúdo em português com casos locais.
const beneficios: Beneficio[] = [
  { icone: Rocket01Icon, titulo: "Arranca sem projecto de TI", texto: "Não há nada para instalar. Importamos a lista da sua equipa, até a partir de um Excel, e cada pessoa entra por um link." },
  { icone: Certificate01Icon, titulo: "Provas para auditorias", texto: "Relatórios mensais em PDF e um certificado para cada pessoa que atinge o acerto mínimo. Fica tudo guardado, mês a mês." },
  { icone: AnalyticsUpIcon, titulo: "Evolução que se vê", texto: "Participação e acerto por departamento e por tema, comparados com os meses anteriores. Sabe onde agir primeiro." },
  { icone: LanguageCircleIcon, titulo: "Na língua da equipa", texto: "Tudo em português, com situações do dia a dia em Moçambique: o falso fornecedor, o SMS da carteira móvel, a chamada do «banco»." },
  { icone: Clock01Icon, titulo: "Pouco tempo de cada um", texto: "Exercícios curtos, uma vez por mês, ao ritmo de cada pessoa. O treino cabe no dia de trabalho sem o interromper." },
  { icone: Notification01Icon, titulo: "Ninguém fica para trás", texto: "Quem ainda não fez o desafio recebe lembretes por email. O gestor vê quem falta e pode lembrar a equipa num clique." },
];

/** O que a empresa ganha, em blocos curtos, como as páginas de awareness que funcionam. */
export function Beneficios() {
  return (
    <section id="beneficios" aria-labelledby="t-beneficios" className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-end">
          <div>
            <p className="revelar text-xs font-semibold uppercase tracking-[0.16em] text-suave">O que a empresa ganha</p>
            <h2 id="t-beneficios" className="revelar mt-3 text-[2.4rem] font-semibold leading-[1.05] sm:text-[3.2rem]">
              Menos risco, <span className="font-extrabold">sem trabalho extra.</span>
            </h2>
          </div>
          <p className="revelar max-w-md text-lg leading-relaxed text-suave lg:justify-self-end">
            A segurança de uma empresa depende de cada pessoa que abre um email. O treino trata disso, sem pesar a quem gere nem a quem treina.
          </p>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-[28px] bg-tinta/10 ring-1 ring-tinta/10 sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map((b, i) => (
            <li key={b.titulo} className="revelar group bg-papel p-7 transition-colors duration-300 hover:bg-superficie sm:p-8" style={{ animationRange: `entry ${(i % 3) * 8}% entry ${40 + (i % 3) * 8}%` }}>
              <span aria-hidden="true" className="grid h-12 w-12 place-items-center rounded-full bg-tinta text-white transition-colors duration-300 group-hover:bg-marcador group-hover:text-tinta">
                <HugeiconsIcon icon={b.icone} size={22} strokeWidth={1.8} />
              </span>
              <h3 className="mt-6 text-xl font-bold">{b.titulo}</h3>
              <p className="mt-2 leading-relaxed text-suave">{b.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
