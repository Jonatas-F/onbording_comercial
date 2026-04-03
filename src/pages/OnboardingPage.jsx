import { Link } from 'react-router-dom'
import SectionHeading from '../components/ui/SectionHeading'

const overviewCards = [
  {
    eyebrow: 'Origem',
    title: '25 anos de história',
    text: 'A SAGA nasceu para formar criadores, inovadores e mentes inquietas que transformam ideias em experiências. Ao longo de 25 anos, evoluiu para se tornar referência em design, arte digital, games, animação e pós-produção no Brasil.',
  },
  {
    eyebrow: 'Missão',
    title: 'Educação, comunidade e tecnologia',
    text: 'Auxiliar a jornada de jovens por meio de educação, comunidade e tecnologia, impulsionando o mercado brasileiro de arte e games com profissionalismo, responsabilidade e visão de futuro.',
  },
  {
    eyebrow: 'Visão',
    title: 'Referência global em educação criativa',
    text: 'Ser referência global em educação criativa, guiada por pioneirismo e qualidade, atuando como catalisadora de novos talentos e construtora da maior comunidade criativa do mundo.',
  },
]

const values = [
  'Coragem',
  'Paixão',
  'Transformação',
  'Evolução',
  'Criatividade',
  'Verdade & Transparência',
  'Reciprocidade',
]

const ecosystemCards = [
  {
    eyebrow: 'Pioneirismo',
    title: 'Democratização da educação criativa',
    text: 'Desde o início, a SAGA foi pioneira em tornar acessíveis conteúdos que antes existiam apenas no exterior ou em formatos pouco acessíveis, abrindo portas para milhares de alunos iniciarem suas carreiras.',
  },
  {
    eyebrow: 'Impacto',
    title: 'Números que sustentam a marca',
    text: '+300 mil alunos formados, +100 mil usuários ativos no HUB, presença nacional e digital e uma comunidade criativa em crescimento contínuo.',
  },
  {
    eyebrow: 'HUB SAGA',
    title: 'Portal do aluno e ecossistema digital',
    text: 'O HUB centraliza experiência, aprendizado e acompanhamento do aluno, com mais de 30 cursos on-demand, lançamentos frequentes e conteúdos alinhados ao que há de mais moderno em tecnologia e criação.',
  },
  {
    eyebrow: 'Comunidade',
    title: 'Discord, lives e desafios',
    text: 'A comunidade da SAGA vai além da sala de aula, com servidor ativo no Discord, lives semanais, desafios criativos, conteúdos interativos e espaços para aprender, trocar e evoluir em conjunto.',
  },
  {
    eyebrow: 'Mercado',
    title: 'Ensino vivo e conectado à prática',
    text: 'Cada curso, projeto e desafio aproxima o aluno daquilo que realmente importa: mercado, prática e futuro. A proposta da escola é formar com repertório, execução e visão profissional.',
  },
  {
    eyebrow: 'Contatos',
    title: 'Canais principais',
    text: 'Relacionamento (WhatsApp): +55 11 4306-1076 | Time Comercial: +55 11 3791-4701',
  },
]

export default function OnboardingPage() {
  return (
    <main className="page page--home">
      <section className="hero-block">
        <div className="hero-block__content">
          <span className="hero-block__eyebrow">Quem Somos</span>
          <h1 className="hero-block__title">SAGA 25 anos formando criadores do futuro</h1>
          <p className="hero-block__description">
            Esta página reúne a base institucional da SAGA para apoiar a
            construção de repertório do time comercial: origem da escola,
            missão, visão, valores, impacto, ecossistema digital e os
            diferenciais que conectam educação criativa, tecnologia e mercado
            real.
          </p>

          <div className="hero-block__actions">
            <a
              href="https://saga.com.br"
              target="_blank"
              rel="noreferrer"
              className="button button--primary"
            >
              Acessar site da SAGA
            </a>

            <a
              href="https://hub.saga.com.br"
              target="_blank"
              rel="noreferrer"
              className="button button--ghost"
            >
              Acessar HUB SAGA
            </a>

            <a
              href="https://discord.gg/vkhPGJ292j"
              target="_blank"
              rel="noreferrer"
              className="button button--ghost"
            >
              Comunidade no Discord
            </a>
          </div>
        </div>

        <div className="hero-block__media">
          <div className="media-placeholder media-placeholder--large">
            <img
              src="https://saga.com.br/images/logo-saga-branco.svg"
              alt="Logo SAGA"
              style={{
                width: '70%',
                maxWidth: '320px',
                objectFit: 'contain',
                margin: 'auto',
                opacity: 0.95,
              }}
            />
          </div>
        </div>
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="Panorama"
          title="A base institucional que sustenta a marca"
          description="O conteúdo abaixo resume os pilares de posicionamento da SAGA e ajuda a transformar discurso comercial em argumento mais consistente, seguro e conectado ao valor real da escola."
        />

        <div className="module-grid module-grid--three">
          {overviewCards.map((card) => (
            <article
              key={card.title}
              className="module-card"
            >
              <span className="module-card__eyebrow">{card.eyebrow}</span>
              <h3 className="module-card__title">{card.title}</h3>
              <p className="module-card__text">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="Valores"
          title="Princípios que orientam a escola"
          description="Esses valores ajudam a sustentar o tom institucional, a tomada de decisão e a forma como a marca se apresenta para alunos, responsáveis e parceiros."
        />

        <div
          className="module-card"
          style={{
            minHeight: 'unset',
            display: 'flex',
            gap: '16px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            {values.map((value) => (
              <span
                key={value}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '10px 14px',
                  borderRadius: '999px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  background: 'rgba(255,255,255,0.05)',
                  color: 'var(--text-primary)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                }}
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="Ecossistema"
          title="História, impacto e diferenciais da experiência SAGA"
          description="Além da formação, a apresentação institucional destaca pioneirismo, números, comunidade, HUB e canais que reforçam a proposta de valor da escola."
        />

        <div className="module-grid module-grid--three">
          {ecosystemCards.map((card) => (
            <article
              key={card.title}
              className="module-card"
            >
              <span className="module-card__eyebrow">{card.eyebrow}</span>
              <h3 className="module-card__title">{card.title}</h3>
              <p className="module-card__text">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="Acessos rápidos"
          title="Links institucionais da apresentação"
          description="Os links abaixo vieram da apresentação institucional e podem ser usados na navegação de apoio do time."
        />

        <div className="module-grid module-grid--three">
          <a
            href="https://saga.com.br"
            target="_blank"
            rel="noreferrer"
            className="module-card module-card--link"
          >
            <span className="module-card__eyebrow">Site</span>
            <h3 className="module-card__title">saga.com.br</h3>
            <p className="module-card__text">
              Site institucional principal da SAGA.
            </p>
          </a>

          <a
            href="https://hub.saga.com.br"
            target="_blank"
            rel="noreferrer"
            className="module-card module-card--link"
          >
            <span className="module-card__eyebrow">HUB</span>
            <h3 className="module-card__title">hub.saga.com.br</h3>
            <p className="module-card__text">
              Portal do aluno e ecossistema digital da SAGA.
            </p>
          </a>

          <a
            href="https://discord.gg/vkhPGJ292j"
            target="_blank"
            rel="noreferrer"
            className="module-card module-card--link"
          >
            <span className="module-card__eyebrow">Comunidade</span>
            <h3 className="module-card__title">Discord oficial</h3>
            <p className="module-card__text">
              Canal da comunidade ativa mencionada na apresentação.
            </p>
          </a>
        </div>
      </section>
    </main>
  )
}