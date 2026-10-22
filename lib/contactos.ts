import { NOME } from "@/lib/marca";

// Os contactos do Vigia que aparecem na landing. Estão aqui valores de exemplo: trocar pelos verdadeiros.
// Com o WhatsApp vazio, o botão do WhatsApp não aparece.

export const CONTACTOS = {
  /** Para onde vão os pedidos de demonstração. example.com é um domínio reservado para exemplos. */
  email: "contacto@example.com",
  /** Número em formato internacional, só algarismos (ex.: 258841234567). */
  whatsapp: "",
  local: "Maputo, Moçambique",
  horario: "Segunda a sexta, 8h às 17h",
};

/**
 * Quem é responsável pelo site, para a política de privacidade e os termos de uso.
 * A rever: nome legal, NUIT, morada completa, prazo de conservação e tribunal.
 */
export const ENTIDADE = {
  nome: NOME,
  /** O nome legal da empresa dona do produto, se for diferente do nome comercial. */
  nomeLegal: NOME,
  morada: "Maputo, Moçambique",
  /** Quanto tempo se guardam os pedidos de contacto que não avançam. */
  conservacao: "12 meses depois do último contacto",
  tribunal: "Maputo",
  /** Data da última revisão das páginas legais. */
  actualizado: "22 de outubro de 2026",
};
