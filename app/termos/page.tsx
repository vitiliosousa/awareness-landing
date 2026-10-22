import type { Metadata } from "next";
import Link from "next/link";
import { PaginaLegal } from "@/components/pagina-legal";
import { CONTACTOS, ENTIDADE } from "@/lib/contactos";
import { NOME } from "@/lib/marca";

export const metadata: Metadata = {
  title: `Termos de uso · ${NOME}`,
  description: `As regras de utilização do site do ${NOME}.`,
};

// Termos do site, não do serviço: o uso da plataforma pelos clientes rege-se pelo contrato.
const ligacao = "font-semibold text-tinta underline decoration-marcador decoration-[3px] underline-offset-4";

export default function Termos() {
  return (
    <PaginaLegal
      titulo="Termos de uso"
      resumo={`As regras para usar este site. Aplicam-se a quem o visita; a utilização da plataforma ${NOME} pelas empresas clientes rege-se pelo respectivo contrato.`}
      seccoes={[
        {
          id: "aceitacao",
          titulo: "Sobre estes termos",
          corpo: (
            <p>
              Este site pertence ao {ENTIDADE.nomeLegal}, com sede em {ENTIDADE.morada}. Ao usá-lo, aceita estes termos. Se não concordar com eles, por favor não use o site.
            </p>
          ),
        },
        {
          id: "finalidade",
          titulo: "O que é este site",
          corpo: (
            <p>
              O site apresenta a plataforma {NOME} e permite pedir uma demonstração. A informação que contém é geral e não constitui uma proposta comercial: as condições, os preços e o que está incluído constam da proposta que enviamos a cada empresa.
            </p>
          ),
        },
        {
          id: "exemplos",
          titulo: "Exemplos e imagens ilustrativas",
          corpo: (
            <>
              <p>As mensagens falsas, os nomes de pessoas e de empresas, os números e os resultados mostrados no site são exemplos fictícios, criados para explicar como a plataforma funciona.</p>
              <p>As fotografias de pessoas são imagens ilustrativas e não representam clientes, colaboradores nem situações reais.</p>
            </>
          ),
        },
        {
          id: "uso",
          titulo: "Uso aceitável",
          corpo: (
            <>
              <p>Ao usar o site, compromete-se a não:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>tentar aceder a partes do site ou dos sistemas a que não tem acesso;</li>
                <li>interferir com o funcionamento do site ou sobrecarregá-lo de propósito;</li>
                <li>copiar o conteúdo em massa, de forma automática;</li>
                <li>usar os exemplos de mensagens falsas para enganar alguém.</li>
              </ul>
            </>
          ),
        },
        {
          id: "propriedade",
          titulo: "Propriedade intelectual",
          corpo: (
            <p>
              Os textos, as ilustrações, a marca {NOME}, o logótipo e o restante conteúdo do site pertencem ao {ENTIDADE.nome} ou são usados com autorização. Pode consultá-los e partilhar ligações para o site, mas não os pode reproduzir ou usar comercialmente sem a nossa autorização por escrito.
            </p>
          ),
        },
        {
          id: "terceiros",
          titulo: "Ligações para outros serviços",
          corpo: <p>Algumas ligações abrem serviços de terceiros, como o seu programa de email ou o WhatsApp. Não somos responsáveis pelo conteúdo nem pelas regras de privacidade desses serviços.</p>,
        },
        {
          id: "responsabilidade",
          titulo: "Disponibilidade e responsabilidade",
          corpo: (
            <>
              <p>Fazemos o possível para que o site esteja sempre disponível e correcto, mas não o podemos garantir. Podemos alterar, suspender ou retirar o site, no todo ou em parte, sem aviso.</p>
              <p>Os conselhos de segurança do site são gerais e educativos. Não substituem uma avaliação feita para a realidade da sua empresa.</p>
            </>
          ),
        },
        {
          id: "privacidade",
          titulo: "Privacidade",
          corpo: (
            <p>
              A forma como tratamos os dados que nos envia está explicada na{" "}
              <Link href="/privacidade" className={ligacao}>
                política de privacidade
              </Link>
              .
            </p>
          ),
        },
        {
          id: "alteracoes",
          titulo: "Alterações a estes termos",
          corpo: <p>Podemos actualizar estes termos. A versão em vigor é sempre a publicada nesta página, com a data no topo.</p>,
        },
        {
          id: "lei",
          titulo: "Lei aplicável",
          corpo: <p>Estes termos regem-se pela lei da República de Moçambique. Qualquer litígio é resolvido nos tribunais de {ENTIDADE.tribunal}.</p>,
        },
        {
          id: "contacto",
          titulo: "Contacto",
          corpo: (
            <p>
              Para qualquer questão sobre estes termos, escreva para{" "}
              <a href={`mailto:${CONTACTOS.email}`} className={ligacao}>
                {CONTACTOS.email}
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
