import { NOME } from "@/lib/marca";

/** O logótipo, igual ao das apps: o símbolo com o traço de marcador e o nome. */
export function Logo({ claro = false }: { claro?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg width="30" height="30" viewBox="0 0 28 28" aria-hidden="true">
        <rect width="28" height="28" rx="7" fill={claro ? "#ffffff" : "var(--noite)"} />
        <path d="M5 16.5 L23 11" stroke="var(--marcador)" strokeWidth="6" strokeLinecap="round" />
        <path d="M8 8 L14 20 L20 8" fill="none" stroke={claro ? "var(--noite)" : "#ffffff"} strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
      <span className={`font-titulo text-[1.35rem] font-bold tracking-tight ${claro ? "text-white" : "text-tinta"}`}>{NOME}</span>
    </span>
  );
}
