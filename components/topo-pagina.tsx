/** O topo das páginas interiores: etiqueta, título com uma parte a negrito e uma frase. Mais baixo do que o início. */
export function TopoPagina({ etiqueta, titulo, forte, texto, children }: { etiqueta: string; titulo: string; forte: string; texto: string; children?: React.ReactNode }) {
  return (
    <section className="pt-36 sm:pt-44">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <p className="subir text-xs font-semibold uppercase tracking-[0.16em] text-suave">{etiqueta}</p>
        <h1 className="subir mt-4 max-w-4xl text-[2.6rem] font-semibold leading-[1.04] sm:text-[3.6rem] lg:text-[4.2rem]" style={{ animationDelay: "80ms" }}>
          {titulo} <span className="font-extrabold">{forte}</span>
        </h1>
        <p className="subir mt-6 max-w-2xl text-lg leading-relaxed text-suave sm:text-xl" style={{ animationDelay: "160ms" }}>
          {texto}
        </p>
        {children && (
          <div className="subir mt-9" style={{ animationDelay: "240ms" }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
