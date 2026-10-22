// O nome da plataforma ainda pode mudar: está só aqui. A palavra gigante do início sai daqui também.
// Ao mudar o nome, falta só redesenhar o símbolo em components/logo.tsx (e app/icon.svg).

export const NOME = "Vigia";

/** A frase que acompanha o nome nos títulos e na partilha. */
export const SLOGAN = "Treino de cibersegurança para equipas";

/** A descrição que aparece no Google e quando se partilha o link. */
export const DESCRICAO = "Treino curto e mensal para as equipas das empresas moçambicanas reconhecerem emails falsos, burlas por SMS e WhatsApp e engenharia social antes de clicar. Com relatórios para quem gere.";

/**
 * O endereço público do site, para os links da partilha, do sitemap e do robots.
 * Definir NEXT_PUBLIC_SITE_URL quando houver domínio (por exemplo, https://vigia.co.mz).
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
