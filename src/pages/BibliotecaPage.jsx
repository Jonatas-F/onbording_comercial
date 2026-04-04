import SectionHeading from '../components/ui/SectionHeading'

const hubOverview = [
  {
    eyebrow: 'Plataforma',
    title: 'O que é o HUB SAGA',
    text: 'O HUB SAGA é uma plataforma educacional proprietária, desenvolvida pela própria SAGA, que centraliza aprendizado, acompanhamento, comunidade e experiência do aluno em um único ecossistema digital.',
  },
  {
    eyebrow: 'Tecnologia',
    title: 'Estrutura autoral e escalável',
    text: 'A apresentação destaca o HUB como tecnologia própria, validada com mais de 100 mil usuários ativos, preparada para escala e evolução contínua a partir de dados reais de uso.',
  },
  {
    eyebrow: 'Valor',
    title: 'Diferencial institucional relevante',
    text: 'Para o comercial, o HUB funciona como argumento forte de valor, porque mostra que a SAGA entrega mais do que aula: entrega tecnologia, acompanhamento, recursos extras, comunidade e continuidade de jornada.',
  },
]

const hubFeatures = [
  {
    eyebrow: 'IA',
    title: 'Assistente pessoal de Inteligência Artificial',
    text: 'Cada aluno conta com apoio de IA ao longo da jornada para planejamento de estudos, organização de entregas, feedback contínuo e evolução técnica e criativa.',
  },
  {
    eyebrow: 'Dados',
    title: 'Acompanhamento por relatórios',
    text: 'O HUB permite leitura de desempenho, identificação de alunos em destaque, sinalização de baixa performance e apoio a intervenções mais rápidas pela gestão acadêmica.',
  },
  {
    eyebrow: 'Segurança',
    title: 'Governança e conformidade',
    text: 'A apresentação reforça ambiente seguro, moderação ativa, políticas claras de conduta e conformidade com LGPD, o que é especialmente importante para o público jovem.',
  },
  {
    eyebrow: 'Engajamento',
    title: 'Experiências contínuas',
    text: 'A plataforma sustenta relacionamento prolongado com o aluno por meio de acesso recorrente, notificações, comunidade, conteúdos extras e interação com o ecossistema da marca.',
  },
  {
    eyebrow: 'On-demand',
    title: 'Mais de 30 cursos extras',
    text: 'O HUB oferece mais de 30 cursos on-demand, com novos lançamentos ao longo do ano, ampliando repertório e percepção de valor além do curso principal contratado.',
  },
  {
    eyebrow: 'Gamificação',
    title: 'Engajamento e progressão',
    text: 'A lógica da plataforma favorece motivação, constância e pertencimento, conectando experiência digital, evolução do aluno e acompanhamento da jornada.',
  },
]

const quickLinks = [
  {
    eyebrow: 'Acesso',
    title: 'HUB SAGA',
    text: 'Plataforma principal de experiência e acompanhamento do aluno.',
    href: 'https://hub.saga.com.br',
    tone: 'default',
  },
  {
    eyebrow: 'Cursos',
    title: 'On-demand',
    text: 'Hub de cursos extras disponível no ecossistema da plataforma.',
    href: 'https://hub.saga.com.br/cursos/ondemand',
    tone: 'hub',
  },
  {
    eyebrow: 'Benefício',
    title: 'Adobe Pass SAGA',
    text: 'Parceria exclusiva com a Adobe para alunos elegíveis da SAGA.',
    href: 'https://hub.saga.com.br/adobepass',
    tone: 'adobe',
  },
]

const adobePassHighlights = [
  {
    eyebrow: 'Parceria',
    title: 'Benefício exclusivo para alunos SAGA',
    text: 'O Adobe Pass SAGA foi apresentado como uma parceria exclusiva que permite a alunos elegíveis assinarem o Creative Cloud com condições diferenciadas, não disponíveis ao público geral.',
  },
  {
    eyebrow: 'Comparativo',
    title: 'R$ 80 por mês fixos',
    text: 'A apresentação destaca o valor de R$ 80 por mês, sem aumento no segundo ano e sem multa de cancelamento, em contraste com o plano estudante tradicional da Adobe.',
  },
  {
    eyebrow: 'Integração',
    title: 'Mesmo e-mail do HUB',
    text: 'O acesso ao Adobe Pass é integrado ao ecossistema SAGA: o aluno utiliza o mesmo e-mail do HUB para ativação e uso do Adobe Creative Cloud.',
  },
]

export default function BibliotecaPage() {
  return (
    <main className="page page--home">
      <section className="hero-block">
        <div className="hero-block__content">
          <span className="hero-block__eyebrow">HUB SAGA</span>
          <h1 className="hero-block__title">Recursos digitais que ampliam a experiência do aluno</h1>
          <p className="hero-block__description">
            Esta página concentra os argumentos institucionais sobre o HUB SAGA
            em um espaço de apoio digital. Aqui ficam organizados os destaques
            de tecnologia, acompanhamento, cursos extras, IA, governança e
            benefícios complementares como o Adobe Pass.
          </p>

          <div className="hero-block__actions">
            <a
              href="https://hub.saga.com.br"
              target="_blank"
              rel="noreferrer"
              className="button button--primary"
            >
              Acessar HUB
            </a>

            <a
              href="https://hub.saga.com.br/cursos/ondemand"
              target="_blank"
              rel="noreferrer"
              className="button button--ghost"
            >
              Ver on-demand
            </a>

            <a
              href="https://hub.saga.com.br/adobepass"
              target="_blank"
              rel="noreferrer"
              className="button button--ghost"
            >
              Ver Adobe Pass
            </a>
          </div>
        </div>

        <div className="hero-block__media">
          <div className="media-placeholder media-placeholder--large">
            <img
              src="https://hub.saga.com.br/_next/image?url=%2Flp%2Fmari%2Fhero-right.webp&w=1920&q=75"
              alt="HUB SAGA"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '20px',
                opacity: 0.92,
              }}
            />
          </div>
        </div>
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="Panorama"
          title="Por que o HUB fortalece a oferta comercial"
          description="O HUB não é apenas uma plataforma de apoio. Ele funciona como prova de estrutura, tecnologia e continuidade, ajudando a mostrar que a experiência do aluno vai muito além da aula."
        />

        <div className="module-grid module-grid--three">
          {hubOverview.map((item) => (
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
          eyebrow="Recursos"
          title="Principais diferenciais do ecossistema digital"
          description="A apresentação destaca tecnologia própria, acompanhamento, IA, cursos extras e segurança como elementos centrais do HUB SAGA."
        />

        <div className="module-grid module-grid--three">
          {hubFeatures.map((item) => (
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
          eyebrow="Links"
          title="Acessos rápidos do ecossistema SAGA"
          description="Esses links ajudam a compor uma navegação útil dentro do portal e agora já ficam preparados para receber variações visuais de destaque."
        />

        <div className="module-grid module-grid--three">
          {quickLinks.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className={`module-card module-card--link module-card--${item.tone}`}
            >
              <span className="module-card__eyebrow">{item.eyebrow}</span>
              <h3 className="module-card__title">{item.title}</h3>
              <p className="module-card__text">{item.text}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="Adobe Pass"
          title="Benefício complementar que reforça valor"
          description="A apresentação separa o Adobe Pass como benefício importante, porque ele conecta a escola ao padrão de mercado e aumenta a percepção de vantagem prática para o aluno."
        />

        <div className="module-grid module-grid--three">
          {adobePassHighlights.map((item) => (
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