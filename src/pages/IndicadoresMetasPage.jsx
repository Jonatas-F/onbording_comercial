import SectionHeading from '../components/ui/SectionHeading'

const overviewCards = [
  {
    eyebrow: 'Estrutura',
    title: 'Como a operação funciona',
    text: 'O time comercial trabalha com leads recebidos diariamente, agendas realizadas pela SDR e também bases complementares para prospecção. O vendedor não depende apenas do lead novo: ele também pode converter ex-alunos, bases antigas, eventos e contatos vindos de outras unidades ou operações encerradas.',
  },
  {
    eyebrow: 'Meta',
    title: 'Matrícula é o principal resultado',
    text: 'O indicador central da operação é a matrícula realizada. No primeiro mês, a meta sugerida é de 10 matrículas. A partir da adaptação inicial, a meta padrão passa a ser 20 matrículas mensais como mínimo esperado de performance.',
  },
  {
    eyebrow: 'Qualidade',
    title: 'Meta líquida, não apenas bruta',
    text: 'Não basta apenas matricular. Se o cliente pedir devolução antes de iniciar o curso, essa devolução reduz o resultado líquido do vendedor e afeta diretamente sua entrega. Por isso, a meta precisa ser acompanhada com foco em matrícula líquida.',
  },
]

const marketReferenceCards = [
  {
    eyebrow: 'Referência',
    title: 'Conversão por atendimento realizado',
    text: 'Para vendas online consultivas, uma referência operacional saudável é converter entre 20% e 30% dos atendimentos realmente realizados. Abaixo de 15% indica alerta. Entre 30% e 35% já representa performance forte.',
  },
  {
    eyebrow: 'Referência',
    title: 'Conversão por lead recebido',
    text: 'Quando o vendedor recebe leads para trabalhar ao longo do mês, uma faixa prática de referência para lead recebido até matrícula costuma ficar entre 4% e 8%, dependendo da qualidade da base, da atuação da SDR, do comparecimento e da maturidade do vendedor.',
  },
  {
    eyebrow: 'Leitura',
    title: 'Como interpretar essas taxas',
    text: 'Se a conversão por atendimento está boa, mas a matrícula total está baixa, o problema pode estar em volume, agenda ou comparecimento. Se há bastante atendimento e pouca venda, o ponto de atenção passa a ser condução comercial, proposta e fechamento.',
  },
]

const practicalGoalCards = [
  {
    eyebrow: 'Meta inicial',
    title: '10 matrículas no primeiro mês',
    text: 'Com conversão de 20% por atendimento, são necessários cerca de 50 atendimentos realizados. Com 25%, cerca de 40 atendimentos. Com 30%, cerca de 34 atendimentos.',
  },
  {
    eyebrow: 'Meta padrão',
    title: '20 matrículas como mínimo esperado',
    text: 'Com conversão de 20% por atendimento, a referência é cerca de 100 atendimentos realizados no mês. Com 25%, cerca de 80 atendimentos. Com 30%, cerca de 67 atendimentos.',
  },
  {
    eyebrow: 'Base diária',
    title: 'Leitura da operação atual',
    text: 'Com aproximadamente 60 leads por dia para um time de cerca de 6 vendedores, existe volume suficiente para trabalhar agenda, reaproveitamento de base e prospecção complementar. O resultado depende da qualidade da distribuição, do comparecimento e da execução comercial.',
  },
]

const indicatorCards = [
  {
    eyebrow: 'Indicador 01',
    title: 'Matrículas brutas',
    text: 'É o total de vendas fechadas no período, antes de considerar devoluções. Esse número mostra produção comercial, mas não representa sozinho o resultado final.',
  },
  {
    eyebrow: 'Indicador 02',
    title: 'Devoluções',
    text: 'Toda devolução antes do início do curso reduz a entrega líquida do vendedor. Por isso, devolução não é só pós-venda: ela também impacta meta, previsibilidade e qualidade da matrícula realizada.',
  },
  {
    eyebrow: 'Indicador 03',
    title: 'Matrículas líquidas',
    text: 'É o principal indicador final: matrículas brutas menos devoluções. Esse é o número que melhor representa resultado sustentável e qualidade de fechamento.',
  },
  {
    eyebrow: 'Indicador 04',
    title: 'Conversão por atendimento',
    text: 'Fórmula: matrículas brutas ÷ atendimentos realizados. Esse indicador mostra o poder de fechamento do vendedor quando ele efetivamente senta para atender.',
  },
  {
    eyebrow: 'Indicador 05',
    title: 'Conversão por lead recebido',
    text: 'Fórmula: matrículas brutas ÷ leads recebidos. Esse número ajuda a entender eficiência total do funil, desde recebimento de base até venda.',
  },
  {
    eyebrow: 'Indicador 06',
    title: 'Aproveitamento de base extra',
    text: 'Também deve ser acompanhado o quanto o vendedor consegue converter bases adicionais, como ex-alunos, eventos, contatos antigos, bases de unidades encerradas e oportunidades não fechadas anteriormente.',
  },
]

const sourceCards = [
  {
    eyebrow: 'Origem 01',
    title: 'Leads da SDR',
    text: 'São os leads novos e os agendamentos organizados pela SDR. Essa é a base principal da operação do dia a dia e tende a concentrar o fluxo mais imediato de atendimento.',
  },
  {
    eyebrow: 'Origem 02',
    title: 'Ex-alunos e bases reativadas',
    text: 'Ex-alunos, contatos antigos e oportunidades não fechadas podem gerar resultado importante. Esse trabalho exige constância, boa abordagem e leitura de timing.',
  },
  {
    eyebrow: 'Origem 03',
    title: 'Eventos e bases de unidades',
    text: 'Bases vindas de eventos, operações encerradas ou carteiras antigas podem ser excelentes fontes de recuperação. Mesmo quando não têm urgência imediata, ampliam o potencial de meta do vendedor.',
  },
]

const formulaCards = [
  {
    eyebrow: 'Fórmula',
    title: 'Matrícula líquida',
    text: 'Matrículas líquidas = matrículas brutas - devoluções',
  },
  {
    eyebrow: 'Fórmula',
    title: 'Conversão por atendimento',
    text: 'Conversão por atendimento = matrículas brutas ÷ atendimentos realizados × 100',
  },
  {
    eyebrow: 'Fórmula',
    title: 'Conversão por lead recebido',
    text: 'Conversão por lead = matrículas brutas ÷ leads recebidos × 100',
  },
]

export default function IndicadoresMetasPage() {
  return (
    <main className="page page--home">
      <section className="hero-block">
        <div className="hero-block__content">
          <span className="hero-block__eyebrow">Indicadores e metas</span>
          <h1 className="hero-block__title">Como medir performance comercial no dia a dia</h1>
          <p className="hero-block__description">
            Esta página foi criada para orientar novos vendedores sobre o que
            realmente importa na operação: volume trabalhado, atendimentos
            realizados, conversão, matrículas, devoluções e aproveitamento de
            bases extras. O foco aqui não é preço de curso, e sim leitura de
            resultado comercial.
          </p>

          <div className="hero-block__actions">
            <a
              href="#metas"
              className="button button--primary"
            >
              Ver metas
            </a>

            <a
              href="#indicadores"
              className="button button--ghost"
            >
              Ver indicadores
            </a>
          </div>
        </div>

        <div className="hero-block__media">
          <div className="media-placeholder media-placeholder--large">
            <span>Metas, conversão, matrículas e devoluções</span>
          </div>
        </div>
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="Panorama"
          title="O que define a entrega de um vendedor"
          description="Na prática, o vendedor é medido pela capacidade de transformar atendimento em matrícula e manter esse resultado com qualidade, reduzindo perdas e aproveitando bem todas as fontes de oportunidade."
        />

        <div className="module-grid module-grid--three">
          {overviewCards.map((item) => (
            <article
              key={item.title}
              className="module-card"
            >
              <span className="module-card__eyebrow">{item.eyebrow}</span>
              <h3 className="module-card__title">{item.title}</h3>
              <p className="module-card__text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="metas"
        className="content-section"
      >
        <SectionHeading
          eyebrow="Conversão"
          title="Faixas práticas de referência para operação online"
          description="As faixas abaixo servem como régua inicial de treinamento. Depois, o ideal é recalibrar com os dados históricos reais da sua operação."
        />

        <div className="module-grid module-grid--three">
          {marketReferenceCards.map((item) => (
            <article
              key={item.title}
              className="module-card"
            >
              <span className="module-card__eyebrow">{item.eyebrow}</span>
              <h3 className="module-card__title">{item.title}</h3>
              <p className="module-card__text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="Metas"
          title="Meta inicial e meta padrão"
          description="A leitura da meta deve sempre considerar matrícula líquida e o volume de atendimento necessário para chegar ao resultado esperado."
        />

        <div className="module-grid module-grid--three">
          {practicalGoalCards.map((item) => (
            <article
              key={item.title}
              className="module-card"
            >
              <span className="module-card__eyebrow">{item.eyebrow}</span>
              <h3 className="module-card__title">{item.title}</h3>
              <p className="module-card__text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="indicadores"
        className="content-section"
      >
        <SectionHeading
          eyebrow="Indicadores"
          title="Números que precisam ser acompanhados"
          description="O acompanhamento da performance não deve olhar só para venda fechada. Ele precisa considerar qualidade do fechamento, perdas e eficiência real do funil."
        />

        <div className="module-grid module-grid--three">
          {indicatorCards.map((item) => (
            <article
              key={item.title}
              className="module-card"
            >
              <span className="module-card__eyebrow">{item.eyebrow}</span>
              <h3 className="module-card__title">{item.title}</h3>
              <p className="module-card__text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="Bases"
          title="O vendedor não depende só da agenda da SDR"
          description="Além dos leads novos, também faz parte da rotina comercial trabalhar bases complementares com potencial de recuperação e matrícula."
        />

        <div className="module-grid module-grid--three">
          {sourceCards.map((item) => (
            <article
              key={item.title}
              className="module-card"
            >
              <span className="module-card__eyebrow">{item.eyebrow}</span>
              <h3 className="module-card__title">{item.title}</h3>
              <p className="module-card__text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="Cálculos"
          title="Fórmulas simples para acompanhar resultado"
          description="Essas contas ajudam o vendedor e a liderança a manter clareza sobre performance e resultado líquido."
        />

        <div className="module-grid module-grid--three">
          {formulaCards.map((item) => (
            <article
              key={item.title}
              className="module-card"
            >
              <span className="module-card__eyebrow">{item.eyebrow}</span>
              <h3 className="module-card__title">{item.title}</h3>
              <p className="module-card__text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}