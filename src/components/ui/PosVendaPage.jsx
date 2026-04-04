import SectionHeading from '../components/ui/SectionHeading'

const overviewCards = [
  {
    eyebrow: 'Objetivo',
    title: 'Garantir continuidade sem ruptura',
    text: 'O pós-venda existe para que o cliente saia da etapa comercial com clareza e entre na próxima fase com contexto, segurança e direcionamento. O foco é evitar ruído, retrabalho e sensação de abandono após o fechamento.',
  },
  {
    eyebrow: 'Momento',
    title: 'A transição começa após confirmação comercial',
    text: 'Depois da conclusão da venda, o cliente precisa ser encaminhado corretamente para a próxima etapa. Isso inclui alinhar expectativa, registrar informações importantes e deixar claro quem assume o relacionamento a partir dali.',
  },
  {
    eyebrow: 'Resultado',
    title: 'Experiência mais organizada para o cliente',
    text: 'Quando a transição é bem feita, o cliente percebe continuidade no atendimento, entende os próximos passos e inicia a jornada com mais confiança na estrutura da escola.',
  },
]

const requiredInfoCards = [
  {
    eyebrow: 'Informação 01',
    title: 'Dados principais do cliente',
    text: 'Nome completo, telefone, e-mail, curso contratado, modalidade e demais dados essenciais precisam estar corretos para que a próxima etapa consiga seguir sem retrabalho.',
  },
  {
    eyebrow: 'Informação 02',
    title: 'Contexto da venda',
    text: 'É importante registrar tudo o que influencia a entrada do cliente: objeções tratadas, expectativas alinhadas, combinados feitos, prazos, condições e qualquer ponto sensível mencionado durante o fechamento.',
  },
  {
    eyebrow: 'Informação 03',
    title: 'Pendências ou observações',
    text: 'Se existir documentação pendente, condição especial, dúvida recorrente ou necessidade de atenção diferenciada, isso precisa ser repassado com clareza ao time responsável pela continuidade.',
  },
]

const transitionSteps = [
  {
    eyebrow: 'Etapa 01',
    title: 'Confirmar fechamento e próximos passos',
    text: 'Antes de transferir, o comercial deve deixar claro para o cliente o que acontece a seguir, quem fará o próximo contato e qual é a lógica da sequência de atendimento.',
  },
  {
    eyebrow: 'Etapa 02',
    title: 'Registrar informações com clareza',
    text: 'A passagem não pode depender só da memória ou de recados soltos. O ideal é registrar o contexto de forma objetiva, organizada e acessível para quem vai assumir.',
  },
  {
    eyebrow: 'Etapa 03',
    title: 'Formalizar o repasse',
    text: 'O time seguinte precisa receber o bastão com visibilidade suficiente para seguir a jornada sem ter que reconstruir toda a história do cliente.',
  },
  {
    eyebrow: 'Etapa 04',
    title: 'Evitar quebra de expectativa',
    text: 'Se o comercial prometeu algo, explicou algum prazo ou alinhou determinada dinâmica, isso precisa estar refletido no repasse para evitar desalinhamento na nova etapa.',
  },
  {
    eyebrow: 'Etapa 05',
    title: 'Manter o cliente orientado',
    text: 'Mesmo após a transferência, o cliente deve sentir que existe continuidade na jornada. O importante é que ele saiba quem fala com ele agora e o que esperar do pós-venda.',
  },
  {
    eyebrow: 'Etapa 06',
    title: 'Tratar o repasse como parte da venda',
    text: 'A experiência não termina no fechamento. Um bom pós-venda fortalece a percepção de organização, cuidado e profissionalismo da operação comercial.',
  },
]

const bestPractices = [
  {
    eyebrow: 'Boa prática',
    title: 'Nunca repasse sem contexto',
    text: 'Transferir apenas o nome do cliente não basta. Quem assume a próxima etapa precisa entender o cenário para continuar o atendimento com qualidade.',
  },
  {
    eyebrow: 'Boa prática',
    title: 'Seja objetivo, mas completo',
    text: 'O melhor repasse é claro, direto e útil. Nem excesso de texto solto, nem falta de informação crítica.',
  },
  {
    eyebrow: 'Boa prática',
    title: 'Pense na experiência do cliente',
    text: 'Toda passagem deve ser feita com a lógica de preservar continuidade, confiança e sensação de acompanhamento.',
  },
]

export default function PosVendaPage() {
  return (
    <main className="page page--home">
      <section className="hero-block">
        <div className="hero-block__content">
          <span className="hero-block__eyebrow">Pós-venda</span>
          <h1 className="hero-block__title">Pós-venda e transição do cliente</h1>
          <p className="hero-block__description">
            Esta página organiza a lógica de transição entre o fechamento
            comercial e a entrada do cliente na próxima etapa da jornada. O
            objetivo é garantir continuidade, preservar contexto e melhorar a
            experiência do cliente após a venda.
          </p>

          <div className="hero-block__actions">
            <a href="#etapas" className="button button--primary">
              Ver etapas
            </a>
            <a href="#boas-praticas" className="button button--ghost">
              Ver boas práticas
            </a>
          </div>
        </div>

        <div className="hero-block__media">
          <div className="media-placeholder media-placeholder--large">
            <span>Transição comercial e continuidade da jornada</span>
          </div>
        </div>
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="Panorama"
          title="Por que o pós-venda é crítico na jornada"
          description="A transição bem feita evita ruído interno, melhora a leitura do contexto do cliente e reduz falhas na experiência logo após o fechamento."
        />

        <div className="module-grid module-grid--three">
          {overviewCards.map((item) => (
            <article key={item.title} className="module-card">
              <span className="module-card__eyebrow">{item.eyebrow}</span>
              <h3 className="module-card__title">{item.title}</h3>
              <p className="module-card__text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="Informações"
          title="O que precisa acompanhar o bastão"
          description="O repasse precisa carregar não apenas os dados básicos, mas também o contexto comercial necessário para continuidade do atendimento."
        />

        <div className="module-grid module-grid--three">
          {requiredInfoCards.map((item) => (
            <article key={item.title} className="module-card">
              <span className="module-card__eyebrow">{item.eyebrow}</span>
              <h3 className="module-card__title">{item.title}</h3>
              <p className="module-card__text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="etapas" className="content-section">
        <SectionHeading
          eyebrow="Fluxo"
          title="Etapas do pós-venda"
          description="Esses blocos ajudam a estruturar a lógica da transferência entre comercial e próxima etapa da jornada de forma mais segura e previsível."
        />

        <div className="module-grid module-grid--three">
          {transitionSteps.map((item) => (
            <article key={item.title} className="module-card">
              <span className="module-card__eyebrow">{item.eyebrow}</span>
              <h3 className="module-card__title">{item.title}</h3>
              <p className="module-card__text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="boas-praticas" className="content-section">
        <SectionHeading
          eyebrow="Boas práticas"
          title="Como fazer um repasse melhor"
          description="A qualidade da transição impacta diretamente a percepção do cliente e a eficiência do time que assume a próxima etapa."
        />

        <div className="module-grid module-grid--three">
          {bestPractices.map((item) => (
            <article key={item.title} className="module-card">
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