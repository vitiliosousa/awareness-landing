import { Apps } from "@/components/apps";
import { Beneficios } from "@/components/beneficios";
import { FaixaFinal } from "@/components/faixa-final";
import { Inicio } from "@/components/inicio";
import { Metodo } from "@/components/metodo";
import { Momento } from "@/components/momento";
import { Portas } from "@/components/portas";
import { Temas } from "@/components/temas";

// O início conta a história de forma visual: os ataques, o método, as duas apps e os temas.
// O funcionamento (passos, exercício e a equipa envolvida) está em /plataforma; os perfis em /solucoes.
export default function Pagina() {
  return (
    <main>
      <Inicio />
      <Portas />
      <Momento />
      <Beneficios />
      <Metodo />
      <Apps />
      <Temas />
      <FaixaFinal />
    </main>
  );
}
