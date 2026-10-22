import { Apps } from "@/components/apps";
import { Beneficios } from "@/components/beneficios";
import { Cabecalho } from "@/components/cabecalho";
import { Contacto } from "@/components/contacto";
import { Equipa } from "@/components/equipa";
import { FaixaFinal } from "@/components/faixa-final";
import { Inicio } from "@/components/inicio";
import { Metodo } from "@/components/metodo";
import { Momento } from "@/components/momento";
import { ParaQuem } from "@/components/para-quem";
import { Perguntas } from "@/components/perguntas";
import { Portas } from "@/components/portas";
import { Rodape } from "@/components/rodape";
import { Temas } from "@/components/temas";

export default function Pagina() {
  return (
    <>
      <Cabecalho />
      <main>
        <Inicio />
        <Portas />
        <Momento />
        <Beneficios />
        <Metodo />
        <Apps />
        <Equipa />
        <ParaQuem />
        <Temas />
        <Perguntas />
        <FaixaFinal />
        <Contacto />
      </main>
      <Rodape />
    </>
  );
}
