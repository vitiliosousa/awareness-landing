import Image from "next/image";

/**
 * Uma captura real das apps dentro de uma janela de browser simples, sem endereço (não mostramos os links das apps).
 * `cortarTopo` esconde a barra de pré-visualização do admin nas capturas de exercícios (em % da altura).
 * `tapar` cobre o indicador do Next que ficou no canto inferior esquerdo das capturas do gestor.
 */
export function Janela({
  src,
  alt,
  cortarTopo = 0,
  tapar = false,
  sizes = "(min-width: 1024px) 55vw, 100vw",
  className = "",
}: {
  src: string;
  alt: string;
  cortarTopo?: number;
  tapar?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <figure className={`overflow-hidden rounded-[14px] bg-superficie shadow-[0_40px_80px_-40px_rgba(22,33,58,0.55)] ring-1 ring-tinta/10 ${className}`}>
      <div aria-hidden="true" className="flex items-center gap-1.5 border-b border-linha bg-papel px-3.5 py-2.5">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-2.5 w-2.5 rounded-full bg-tinta/15" />
        ))}
      </div>
      {/* As capturas são 16:10; ao cortar o topo, a moldura fica mais baixa na mesma proporção. */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: `${16 / (10 * (1 - cortarTopo / 100))}` }}>
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover object-bottom" />
        {tapar && <span aria-hidden="true" className="absolute bottom-[1.8%] left-[1%] aspect-square w-[3.8%] rounded-full bg-[#16213a]" />}
      </div>
    </figure>
  );
}
