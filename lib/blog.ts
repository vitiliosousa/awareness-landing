// Os artigos do blog, por agora escritos aqui, até haver backend. São conselhos gerais e verdadeiros,
// sem estatísticas nem casos inventados. Quando o blog passar para a API, estes dados saem daqui.

export type Bloco = { t: "p"; texto: string } | { t: "h2"; texto: string } | { t: "lista"; itens: string[] } | { t: "destaque"; texto: string };

export type Artigo = {
  slug: string;
  titulo: string;
  resumo: string;
  categoria: string;
  /** AAAA-MM-DD */
  data: string;
  /** Minutos de leitura. */
  leitura: number;
  capa: string;
  capaAlt: string;
  corpo: Bloco[];
};

export const artigos: Artigo[] = [
  {
    slug: "fatura-de-falso-fornecedor",
    titulo: "Fatura com conta nova? Os cinco sinais de um falso fornecedor",
    resumo: "Um email igual ao de sempre, a pedir o pagamento numa conta nova. Pode custar muito dinheiro a uma empresa, e quase sempre tem os mesmos sinais.",
    categoria: "Emails falsos",
    data: "2026-10-20",
    leitura: 5,
    capa: "/fotos/4.png",
    capaAlt: "Uma funcionária analisa um email suspeito no portátil",
    corpo: [
      { t: "p", texto: "O email chega de um fornecedor com quem a empresa trabalha há anos. O logótipo é o mesmo, a assinatura também. A diferença está num pormenor: os dados bancários mudaram, e a fatura deve ser paga na conta nova, de preferência hoje." },
      { t: "p", texto: "Esta burla funciona porque não parece uma burla. Não há erros grosseiros nem pedidos estranhos: é um pagamento normal, para alguém conhecido. Por isso, mais do que desconfiar de tudo, vale a pena conhecer os sinais que se repetem." },
      { t: "h2", texto: "Os cinco sinais" },
      { t: "lista", itens: ["O endereço não é exactamente o de sempre: uma letra a mais, um domínio que termina em .co em vez de .co.mz.", "Há uma mudança de conta bancária comunicada só por email.", "Há pressa: o pagamento tem de sair hoje, ou o fornecimento é suspenso.", "Pedem segredo ou que não liguem: «estamos em auditoria, não liguem para o escritório».", "O anexo não é um PDF, mas um ficheiro comprimido ou uma ligação para descarregar."] },
      { t: "h2", texto: "O que fazer" },
      { t: "p", texto: "A regra mais simples é também a mais eficaz: qualquer mudança de conta bancária confirma-se por telefone, para o número que a empresa já tinha, e nunca para o número que vem no próprio email." },
      { t: "destaque", texto: "Uma mudança de conta bancária nunca se confirma pelo mesmo canal por onde chegou." },
      { t: "p", texto: "Vale a pena que esta regra esteja escrita e que toda a gente das finanças a conheça. Assim, ninguém tem de decidir sozinho, sob pressão, se aquele email é ou não verdadeiro." },
    ],
  },
  {
    slug: "sms-com-prazo-curto",
    titulo: "Burlas por SMS: porque é que um prazo curto é sempre um alarme",
    resumo: "«O seu cartão foi bloqueado. Confirme os seus dados nas próximas duas horas.» A pressa não é um pormenor: é a peça principal da burla.",
    categoria: "SMS e WhatsApp",
    data: "2026-10-13",
    leitura: 4,
    capa: "/fotos/5.png",
    capaAlt: "Um homem lê uma mensagem no telemóvel com desconfiança",
    corpo: [
      { t: "p", texto: "Quase todas as mensagens de burla têm um prazo. Duas horas para desbloquear o cartão, até ao fim do dia para receber um prémio, agora mesmo para evitar uma multa. O objectivo é sempre o mesmo: que a pessoa aja antes de pensar." },
      { t: "p", texto: "Quando estamos com pressa, saltamos os passos que normalmente nos protegem: ligar para confirmar, perguntar a um colega, abrir a aplicação oficial em vez do link." },
      { t: "h2", texto: "Os sinais mais comuns" },
      { t: "lista", itens: ["Começa com um susto: conta suspensa, cartão bloqueado, encomenda retida.", "Pede dados que o banco ou a operadora já têm, ou códigos que nunca se partilham.", "Tem um link com um endereço parecido com o verdadeiro, mas diferente.", "Impõe um prazo curto e uma consequência grave."] },
      { t: "destaque", texto: "Nenhum banco pede o seu PIN ou códigos de confirmação por SMS." },
      { t: "h2", texto: "O que fazer" },
      { t: "p", texto: "Não responda nem clique. Se a mensagem o deixou preocupado, abra a aplicação oficial ou ligue para o número que está no seu cartão. Se for verdade, o problema continua lá quando ligar. Se for mentira, acabou de evitar uma burla." },
    ],
  },
  {
    slug: "tecnico-que-ninguem-chamou",
    titulo: "O técnico que ninguém chamou: engenharia social ao telefone e à porta",
    resumo: "Alguém liga da «informática» a pedir a palavra-passe, ou aparece à porta para «verificar a rede». O ataque não precisa de tecnologia: precisa de confiança.",
    categoria: "Engenharia social",
    data: "2026-10-06",
    leitura: 5,
    capa: "/fotos/6.png",
    capaAlt: "Uma recepcionista ao telefone toma notas com atenção",
    corpo: [
      { t: "p", texto: "Engenharia social é convencer alguém a fazer o que não devia: dar uma palavra-passe, abrir uma porta, instalar um programa. Quem ataca não força nada; pede com educação e com uma boa história." },
      { t: "p", texto: "As histórias repetem-se: o técnico da informática que precisa de aceder ao computador, o colega de outra delegação que perdeu o acesso, o cliente importante que não pode esperar." },
      { t: "h2", texto: "Como se reconhece" },
      { t: "lista", itens: ["Alguém que não conhece pede informação ou acesso que não devia precisar.", "Usa nomes de pessoas da empresa para parecer de dentro.", "Insiste na urgência ou na importância de quem está a pedir.", "Fica incomodado quando lhe pedem identificação ou para ligar de volta."] },
      { t: "h2", texto: "O que fazer" },
      { t: "p", texto: "Pedir identificação e confirmar por outro canal não é falta de educação: é o procedimento. Desligue e ligue de volta para o número interno que conhece. À porta, acompanhe a pessoa à recepção e confirme a visita com quem a terá chamado." },
      { t: "destaque", texto: "Ninguém da informática precisa da sua palavra-passe. Nunca." },
    ],
  },
  {
    slug: "frases-passe",
    titulo: "Frases-passe: palavras-passe que se lembram e aguentam",
    resumo: "Trocar letras por números já não chega. Uma frase longa, só sua, é mais fácil de lembrar e muito mais difícil de adivinhar.",
    categoria: "Palavras-passe",
    data: "2026-09-29",
    leitura: 4,
    capa: "/fotos/7.png",
    capaAlt: "Uma funcionária passa o cartão de acesso à entrada do escritório",
    corpo: [
      { t: "p", texto: "Durante anos aprendemos a criar palavras-passe curtas e complicadas, cheias de símbolos. O resultado são palavras-passe difíceis de lembrar, que acabam escritas num papel ou repetidas em todas as contas." },
      { t: "p", texto: "Uma alternativa melhor é a frase-passe: várias palavras juntas, que formam uma frase que só faz sentido para si. O comprimento protege mais do que os símbolos." },
      { t: "h2", texto: "Como criar uma boa frase-passe" },
      { t: "lista", itens: ["Junte quatro ou mais palavras que não costumam andar juntas.", "Evite frases conhecidas, letras de músicas e dados pessoais.", "Use uma frase diferente para cada conta importante.", "Active a confirmação em dois passos sempre que a conta o permitir."] },
      { t: "destaque", texto: "A mesma palavra-passe em várias contas faz com que uma fuga abra todas as portas." },
      { t: "p", texto: "Para guardar tantas frases diferentes, um gestor de palavras-passe é a solução mais segura. Se a empresa tiver um, use-o; se não tiver, vale a pena perguntar a quem trata da informática." },
    ],
  },
  {
    slug: "cliquei-num-link-e-agora",
    titulo: "Cliquei num link suspeito. E agora?",
    resumo: "Acontece a toda a gente. O que conta é o que se faz nos minutos seguintes, e avisar depressa faz mais diferença do que qualquer outra coisa.",
    categoria: "O que fazer",
    data: "2026-09-22",
    leitura: 4,
    capa: "/fotos/13.png",
    capaAlt: "Dois colegas analisam juntos uma mensagem no telemóvel",
    corpo: [
      { t: "p", texto: "Clicou e só depois reparou no endereço estranho. Ou preencheu os seus dados numa página que, afinal, não era a do banco. A primeira reacção é muitas vezes a vergonha, e é justamente essa reacção que mais ajuda quem ataca." },
      { t: "p", texto: "Quanto mais depressa a empresa souber, mais fácil é limitar o estrago. Esconder o erro dá tempo a quem ataca." },
      { t: "h2", texto: "Os primeiros passos" },
      { t: "lista", itens: ["Avise logo quem trata da segurança ou da informática, sem esperar.", "Se escreveu uma palavra-passe, mude-a, a começar pelo email.", "Se deu dados bancários, ligue ao banco pelo número do cartão.", "Não apague a mensagem: ajuda a perceber o que aconteceu e a avisar os colegas."] },
      { t: "destaque", texto: "Avisar não é admitir culpa. É a forma mais rápida de proteger a empresa e os colegas." },
      { t: "p", texto: "Nas empresas onde errar não é castigado, as pessoas avisam mais cedo. Vale a pena que isso fique claro para toda a equipa, antes de ser preciso." },
    ],
  },
  {
    slug: "preparar-a-equipa-para-o-primeiro-desafio",
    titulo: "Como preparar a equipa para o primeiro desafio",
    resumo: "Um bom arranque faz a diferença na participação dos meses seguintes. Três coisas simples que ajudam a equipa a entrar com vontade.",
    categoria: "Na empresa",
    data: "2026-09-15",
    leitura: 3,
    capa: "/fotos/15.png",
    capaAlt: "Uma equipa numa sala de reuniões ouve um colega",
    corpo: [
      { t: "p", texto: "Quando o treino chega sem explicação, há quem o veja como mais uma obrigação ou até como um teste para apanhar quem erra. Uma mensagem curta da direcção, antes do primeiro desafio, muda essa leitura." },
      { t: "h2", texto: "O que ajuda" },
      { t: "lista", itens: ["Explicar o porquê: os ataques entram por pessoas, e o treino protege a empresa e cada um, também fora do trabalho.", "Deixar claro que errar nos exercícios é normal e que ninguém é castigado por isso.", "Dizer quanto tempo leva e até quando se pode fazer o desafio do mês."] },
      { t: "destaque", texto: "O objectivo não é apanhar quem erra. É que, no dia em que a mensagem falsa for verdadeira, alguém a reconheça." },
      { t: "p", texto: "Ao longo do mês, o painel do gestor mostra quem já fez e quem falta. Um lembrete simpático a meio do mês, e um reconhecimento a quem chegou ao topo do ranking, costumam ser suficientes para manter o ritmo." },
    ],
  },
];

export const artigo = (slug: string) => artigos.find((a) => a.slug === slug);

const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
/** "2026-10-20" -> "20 de outubro de 2026" */
export function dataPorExtenso(iso: string) {
  const [a, m, d] = iso.split("-").map(Number);
  return `${d} de ${meses[m - 1]} de ${a}`;
}
