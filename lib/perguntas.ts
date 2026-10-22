import { NOME } from "@/lib/marca";

// As perguntas frequentes, por assunto. As respostas descrevem só o que a plataforma já faz.
// Sem preços no site: a pergunta do custo leva a um pedido de proposta. O tempo por mês está por confirmar.

export type Pergunta = { p: string; r: string };
export type Grupo = { id: string; titulo: string; perguntas: Pergunta[] };

export const grupos: Grupo[] = [
  {
    id: "comecar",
    titulo: "Começar",
    perguntas: [
      { p: "É preciso instalar alguma coisa?", r: "Não. Cada pessoa entra por um link enviado por email, no navegador do computador do trabalho. Também funciona no telemóvel, para quem preferir." },
      { p: "Como chegam os colaboradores à plataforma?", r: "Importamos a lista da sua equipa, por exemplo a partir de um ficheiro Excel, e enviamos os convites. Quem ainda não entrou recebe lembretes." },
      { p: "Quanto tempo demora a arrancar?", r: "Depois de recebermos a lista da equipa, os convites podem sair logo. O primeiro desafio começa no início do mês seguinte, ou mais cedo, se combinarmos." },
      { p: "Podemos ver a plataforma antes de decidir?", r: "Sim. Peça uma demonstração e mostramos as duas apps por dentro, com uma empresa de exemplo." },
    ],
  },
  {
    id: "equipa",
    titulo: "Para a equipa",
    perguntas: [
      { p: "Quanto tempo leva por mês?", r: "Pouco. Os exercícios são curtos e cada pessoa faz o desafio do mês ao seu ritmo, sem ter de parar o trabalho." },
      { p: "Que temas são treinados?", r: "Emails falsos, burlas por SMS e WhatsApp, engenharia social, palavras-passe, protecção de dados, segurança física, telemóveis e muitos outros. Os desafios insistem mais onde a sua equipa acerta menos." },
      { p: "Os exercícios são sempre os mesmos?", r: "Não. Todos os meses há um desafio novo, e os temas vão rodando ao longo do ano." },
      { p: "Há certificado?", r: "Sim. Quem atinge o acerto mínimo num desafio recebe o certificado por email, sem ninguém ter de o pedir." },
      { p: "Está tudo em português?", r: `Sim. Todo o conteúdo do ${NOME} é em português, com situações do dia a dia em Moçambique.` },
    ],
  },
  {
    id: "gestao",
    titulo: "Para quem gere",
    perguntas: [
      { p: "O que vê quem gere a empresa?", r: "A participação e o acerto por departamento e por tema, quem precisa de acompanhamento e um relatório mensal por email. Pode lembrar quem ainda não fez e exportar as listas para o Excel." },
      { p: "O gestor vê as respostas de cada pessoa?", r: "Vê se cada pessoa concluiu cada desafio e com que percentagem de acerto, no total e por tema. É o suficiente para saber quem precisa de apoio, sem expor cada resposta." },
      { p: "Os relatórios servem para auditorias?", r: "Servem. Cada relatório mensal mostra a participação e o acerto da empresa, e fica guardado. O histórico de cada pessoa também se pode exportar." },
    ],
  },
  {
    id: "dados",
    titulo: "Dados e contratação",
    perguntas: [
      { p: "Os resultados de cada pessoa ficam protegidos?", r: "Cada empresa vê apenas os seus dados. Os resultados individuais são vistos pelo gestor da própria empresa e pela nossa equipa, que acompanha o treino." },
      { p: "Quanto custa?", r: "Depende do número de pessoas que vão treinar. Peça uma demonstração e preparamos uma proposta à medida da sua empresa." },
    ],
  },
];
