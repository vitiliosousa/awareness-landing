import { ImageResponse } from "next/og";

// Ícone para o ecrã principal do iPhone/iPad: o símbolo em PNG, igual ao da app do formando.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#16213a" }}>
        <svg width="180" height="180" viewBox="0 0 28 28">
          <path d="M5 16.5 L23 11" stroke="#f2b233" strokeWidth="6" strokeLinecap="round" />
          <path d="M8 8 L14 20 L20 8" fill="none" stroke="#ffffff" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      </div>
    ),
    size,
  );
}
