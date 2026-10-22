// Ilustrações em traço fino, no lugar dos desenhos da Bonança: sérias, com o marcador como único acento.
// Herdam a cor do texto (currentColor); o amarelo é sempre o sinal de alerta.

const traco = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" } as const;

/** Um email com uma fatura a sair, presa por um anzol. */
export function IlustracaoEmail({ fundo }: { fundo: string }) {
  return (
    <svg viewBox="0 0 220 160" className="h-full w-full" aria-hidden="true">
      <path d="M38 92c-6-34 22-62 62-66 38-4 78 10 84 44 7 38-20 66-62 70-44 4-78-12-84-48z" fill="currentColor" opacity="0.06" />
      {/* A fatura: o valor e a conta nova estão assinalados. */}
      <g className="ilustracao-sobe">
        <rect x="74" y="26" width="72" height="62" rx="5" {...traco} fill={fundo} />
        <path d="M86 40h30M86 50h48" {...traco} opacity="0.5" />
        <rect x="84" y="58" width="52" height="9" rx="4.5" fill="var(--marcador)" className="ilustracao-marca" />
        <path d="M88 62.5h44" {...traco} />
        {/* O anzol. */}
        <path d="M134 2v20a7 7 0 1 1-7 7" {...traco} />
      </g>
      <rect x="56" y="70" width="108" height="66" rx="8" {...traco} fill={fundo} />
      <path d="M58 74l52 34 52-34" {...traco} />
      <path d="M58 134l38-30M162 134l-38-30" {...traco} opacity="0.4" />
    </svg>
  );
}

/** Um telemóvel com uma mensagem de um número desconhecido, com o pedido assinalado. */
export function IlustracaoMensagem({ fundo }: { fundo: string }) {
  return (
    <svg viewBox="0 0 220 160" className="h-full w-full" aria-hidden="true">
      <path d="M44 84c-4-36 26-60 64-62 40-2 72 18 72 52 0 38-30 62-68 64-40 2-64-20-68-54z" fill="currentColor" opacity="0.06" />
      <rect x="72" y="10" width="76" height="140" rx="13" {...traco} fill={fundo} />
      <path d="M100 18h20" {...traco} opacity="0.5" />
      {/* Quem escreve: um número novo, com um ponto de interrogação no lugar da foto. */}
      <circle cx="90" cy="38" r="8" {...traco} />
      <path d="M88 35.5a2.5 2.5 0 1 1 3 2.4V40M90.2 42.6v.1" {...traco} strokeWidth="1.5" />
      <path d="M103 35h28M103 41h18" {...traco} opacity="0.45" />
      <rect x="80" y="56" width="52" height="16" rx="8" {...traco} opacity="0.55" />
      <g className="ilustracao-sobe">
        <rect x="80" y="80" width="60" height="34" rx="9" {...traco} fill={fundo} />
        <rect x="86" y="96" width="46" height="9" rx="4.5" fill="var(--marcador)" className="ilustracao-marca" />
        <path d="M88 89h34M90 100.5h38" {...traco} />
        <circle cx="140" cy="80" r="5" fill="var(--risco)" />
      </g>
      <rect x="96" y="124" width="36" height="14" rx="7" {...traco} opacity="0.35" />
    </svg>
  );
}

/** Um telefone a tocar e um cartão de identificação que ainda ninguém viu. */
export function IlustracaoChamada({ fundo }: { fundo: string }) {
  return (
    <svg viewBox="0 0 220 160" className="h-full w-full" aria-hidden="true">
      <path d="M40 88c-2-36 28-62 66-64 40-2 76 20 74 56-2 38-34 60-72 60-40 0-66-18-68-52z" fill="currentColor" opacity="0.08" />
      {/* O auscultador. */}
      <path d="M58 44c0-7 5-12 12-12h7l9 21-10 8c6 14 15 23 29 29l8-10 21 9v7c0 7-5 12-12 12-36 0-64-28-64-64z" {...traco} fill={fundo} />
      <g className="ilustracao-ondas">
        <path d="M110 30a22 22 0 0 1 22 22" {...traco} />
        <path d="M110 18a34 34 0 0 1 34 34" {...traco} opacity="0.5" />
      </g>
      {/* O cartão por mostrar. */}
      <g className="ilustracao-sobe">
        <rect x="124" y="84" width="64" height="42" rx="6" {...traco} fill={fundo} />
        <circle cx="142" cy="102" r="7" {...traco} />
        <path d="M134 118c2-5 5-7 8-7s6 2 8 7" {...traco} />
        <rect x="156" y="96" width="24" height="9" rx="4.5" fill="var(--marcador)" className="ilustracao-marca" />
        <path d="M159 100.5h18M158 112h20" {...traco} />
      </g>
    </svg>
  );
}
