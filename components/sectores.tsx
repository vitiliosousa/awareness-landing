// Os sectores das empresas que o admin já conhece, cada um com os ataques que lhe são mais típicos.
const sectores = [
  { nome: "Banca e seguros", texto: "SMS e chamadas em nome do banco, a pedir códigos e dados de cartões." },
  { nome: "Logística e transportes", texto: "Faturas de falsos fornecedores e pedidos de mudança de conta bancária." },
  { nome: "Saúde", texto: "Dados de pacientes, recepções movimentadas e visitas que ninguém confirma." },
  { nome: "Comércio", texto: "Comprovativos de pagamento falsos e encomendas que nunca existiram." },
  { nome: "Educação", texto: "Contas partilhadas, dados de alunos e emails que imitam a direcção." },
  { nome: "Energia e telecomunicações", texto: "Acesso a sistemas críticos e técnicos que ninguém chamou." },
];

/** Para empresas de vários sectores: o mesmo treino, com os casos que mais lhes acontecem. */
export function Sectores() {
  return (
    <section aria-labelledby="t-sectores" className="bg-noite py-24 text-white sm:py-32">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-end">
          <h2 id="t-sectores" className="revelar text-[2.4rem] font-semibold leading-[1.05] sm:text-[3.2rem]">
            Cada sector tem os seus ataques. <span className="font-extrabold">O treino acompanha.</span>
          </h2>
          <p className="revelar max-w-md text-lg leading-relaxed text-white/70 lg:justify-self-end">Os desafios usam situações que fazem sentido para a sua área, e insistem nos temas em que a sua equipa acerta menos.</p>
        </div>
        <ul className="mt-14 grid gap-px overflow-hidden rounded-[28px] bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {sectores.map((s) => (
            <li key={s.nome} className="revelar bg-noite p-7 transition-colors duration-300 hover:bg-tinta-2 sm:p-8">
              <span aria-hidden="true" className="block h-1.5 w-6 rounded-full bg-marcador" />
              <h3 className="mt-5 text-xl font-bold">{s.nome}</h3>
              <p className="mt-2 leading-relaxed text-white/70">{s.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
