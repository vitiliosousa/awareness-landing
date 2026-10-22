import type { Metadata } from "next";
import { PaginaLegal } from "@/components/pagina-legal";
import { CONTACTOS, ENTIDADE } from "@/lib/contactos";
import { NOME } from "@/lib/marca";

export const metadata: Metadata = {
  title: `Política de privacidade · ${NOME}`,
  description: `Que dados o site do ${NOME} recolhe, para quê e como pode pedir para os ver, corrigir ou apagar.`,
};

// Descreve o site tal como está: sem cookies, sem ferramentas de medição, e um formulário que abre o email de quem o preenche.
// Se o site passar a usar medição de visitas ou a enviar o formulário para um servidor, esta página tem de mudar.
const email = (
  <a href={`mailto:${CONTACTOS.email}`} className="font-semibold text-tinta underline decoration-marcador decoration-[3px] underline-offset-4">
    {CONTACTOS.email}
  </a>
);

export default function Privacidade() {
  return (
    <PaginaLegal
      titulo="Política de privacidade"
      resumo={`Explicamos que dados este site recolhe, para que os usamos e o que pode fazer com eles. Em resumo: o site não usa cookies, e só recebemos os dados que nos enviar por email.`}
      seccoes={[
        {
          id: "quem-somos",
          titulo: "Quem é responsável",
          corpo: (
            <>
              <p>
                Este site apresenta o {NOME}, uma plataforma de treino de cibersegurança com sede em {ENTIDADE.morada}. O {ENTIDADE.nomeLegal} é o responsável pelos dados pessoais recolhidos através deste site.
              </p>
              <p>Para qualquer questão sobre privacidade, escreva para {email}.</p>
            </>
          ),
        },
        {
          id: "dados",
          titulo: "Que dados recolhemos",
          corpo: (
            <>
              <p>Só recolhemos os dados que escreve no formulário de pedido de demonstração: nome, empresa, email, telefone (se o indicar), o número aproximado de pessoas a treinar e a mensagem que quiser deixar.</p>
              <p>
                O formulário não envia nada para os nossos servidores. Ao carregar em «Pedir demonstração», abre-se o seu programa de email com o pedido já escrito. Só recebemos os dados se decidir enviar esse email.
              </p>
              <p>Não recolhemos dados de forma automática enquanto navega no site.</p>
            </>
          ),
        },
        {
          id: "cookies",
          titulo: "Cookies e medição de visitas",
          corpo: (
            <>
              <p>Este site não usa cookies nem ferramentas de medição de visitas, de publicidade ou de redes sociais. Por isso não lhe pedimos autorização para cookies.</p>
              <p>Se um dia passarmos a usar alguma destas ferramentas, actualizamos esta página e pedimos a sua autorização antes de as activar.</p>
            </>
          ),
        },
        {
          id: "finalidade",
          titulo: "Para que usamos os dados",
          corpo: (
            <>
              <p>Usamos os dados que nos envia apenas para responder ao seu pedido: marcar e fazer a demonstração, esclarecer dúvidas e, se o pedir, enviar uma proposta para a sua empresa.</p>
              <p>Não vendemos os seus dados, não os partilhamos para publicidade e não os usamos para enviar campanhas sem o seu acordo.</p>
            </>
          ),
        },
        {
          id: "conservacao",
          titulo: "Durante quanto tempo os guardamos",
          corpo: (
            <p>
              Guardamos os dados enquanto for preciso para acompanhar o contacto. Se não avançarmos para um contrato, apagamo-los até {ENTIDADE.conservacao}, ou antes, se nos pedir. Se a sua empresa se tornar cliente, os dados passam a reger-se pelo contrato.
            </p>
          ),
        },
        {
          id: "partilha",
          titulo: "Com quem partilhamos",
          corpo: (
            <p>Os seus dados ficam com a equipa do {ENTIDADE.nome} que trata do seu pedido. Podem passar pelo serviço de email que usamos para receber mensagens, e só são entregues a autoridades quando a lei o obrigar.</p>
          ),
        },
        {
          id: "direitos",
          titulo: "Os seus direitos",
          corpo: (
            <>
              <p>Pode, a qualquer momento, pedir para saber que dados temos sobre si, corrigi-los, apagá-los ou opor-se a que os usemos.</p>
              <p>Basta escrever para {email}. Respondemos o mais depressa possível e, no máximo, no prazo previsto na lei.</p>
            </>
          ),
        },
        {
          id: "seguranca",
          titulo: "Segurança",
          corpo: <p>Tratamos os seus dados com o cuidado que ensinamos: acesso só a quem precisa, contas protegidas e cuidado com o que se partilha e por onde.</p>,
        },
        {
          id: "plataforma",
          titulo: "Os dados de quem usa a plataforma",
          corpo: (
            <p>
              Esta política aplica-se ao site. Os dados dos colaboradores que treinam na plataforma {NOME}, e os resultados que lá obtêm, são tratados nos termos do contrato entre o {ENTIDADE.nome} e a empresa cliente.
            </p>
          ),
        },
        {
          id: "alteracoes",
          titulo: "Alterações a esta política",
          corpo: <p>Podemos actualizar esta política quando o site ou a lei mudarem. A data da última actualização está no topo da página.</p>,
        },
      ]}
    />
  );
}
