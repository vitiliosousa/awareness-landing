import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { NOME } from "@/lib/marca";

// A imagem que aparece quando o link é partilhado (WhatsApp, LinkedIn, email): o título do início,
// com o marcador, e a equipa recortada. Gera-se uma vez, no build: as leituras são síncronas de propósito,
// porque uma leitura assíncrona de ficheiros faria o Next gerá-la a cada pedido (Cache Components).
export const alt = `${NOME}: treino de cibersegurança para as equipas das empresas moçambicanas`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function ImagemPartilha() {
  const medio = readFileSync(join(process.cwd(), "assets/fontes/schibsted-grotesk-500.woff"));
  const forte = readFileSync(join(process.cwd(), "assets/fontes/schibsted-grotesk-800.woff"));
  const equipa = readFileSync(join(process.cwd(), "public/fotos/1-recorte.png"), "base64");

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#f4f5f1", fontFamily: "Schibsted", color: "#16213a", position: "relative" }}>
        {/* O nome em grande, por trás da equipa. */}
        <div style={{ position: "absolute", right: -20, top: 40, fontSize: 300, fontWeight: 800, letterSpacing: -18, color: "#dde1e7", lineHeight: 1 }}>{NOME.toUpperCase()}</div>

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 0 64px 72px", width: 620, position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <svg width="56" height="56" viewBox="0 0 28 28">
              <rect width="28" height="28" rx="7" fill="#16213a" />
              <path d="M5 16.5 L23 11" stroke="#f2b233" strokeWidth="6" strokeLinecap="round" />
              <path d="M8 8 L14 20 L20 8" fill="none" stroke="#ffffff" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
            <span style={{ fontSize: 40, fontWeight: 800, letterSpacing: -1 }}>{NOME}</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", fontSize: 64, lineHeight: 1.05, letterSpacing: -2 }}>
            <span style={{ fontWeight: 500 }}>O ataque chega</span>
            <span style={{ fontWeight: 500 }}>por mensagem.</span>
            <span style={{ display: "flex", fontWeight: 800 }}>
              A defesa&nbsp;
              <span style={{ display: "flex", padding: "0 6px", backgroundImage: "linear-gradient(transparent 55%, #f2b233 55%, #f2b233 95%, transparent 95%)" }}>também.</span>
            </span>
          </div>

          <span style={{ fontSize: 26, fontWeight: 500, color: "#5a6275" }}>Treino de cibersegurança para equipas</span>
        </div>

        <img src={`data:image/png;base64,${equipa}`} alt="" width={720} height={480} style={{ position: "absolute", right: -60, bottom: 0 }} />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Schibsted", data: medio, weight: 500, style: "normal" },
        { name: "Schibsted", data: forte, weight: 800, style: "normal" },
      ],
    },
  );
}
