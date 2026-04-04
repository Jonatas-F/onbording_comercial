import { Link } from 'react-router-dom'
import SectionHeading from '../components/ui/SectionHeading'

const crmOverviewBlocks = [
  {
    eyebrow: 'Visão geral',
    title: 'Central de relacionamento',
    text: 'O CRM é a base de acompanhamento do lead ao longo da jornada comercial. É nele que a equipe localiza contatos, visualiza dados do interessado, acompanha movimentações e centraliza o histórico do atendimento.',
  },
  {
    eyebrow: 'Organização',
    title: 'Leitura rápida das informações',
    text: 'A operação depende de localizar o lead com rapidez por telefone, nome ou identificador, interpretar corretamente os campos da ficha e usar filtros para navegar entre status, responsáveis e oportunidades em andamento.',
  },
  {
    eyebrow: 'Execução',
    title: 'Ações dentro do funil',
    text: 'Além do acompanhamento comercial, o CRM também serve de ponto de partida para ações práticas como matrícula e agendamento de oficinas. Por isso, o domínio da navegação impacta diretamente a produtividade e a conversão.',
  },
]

const crmTrainingCards = [
  {
    eyebrow: 'Treinamento 01',
    title: 'Visão geral do CRM',
    text: 'Aprenda a navegar pela Central de Relacionamento, localizar leads, interpretar filtros e entender os dados principais da operação comercial.',
    href: '/crm-sankhya/visao-geral',
  },
  {
    eyebrow: 'Treinamento 02',
    title: 'Matrículas',
    text: 'Veja o fluxo de matrícula dentro do CRM: orçamento, turma, forma de pagamento, contrato, link de assinatura e envio para secretaria.',
    href: '/crm-sankhya/matriculas',
  },
  {
    eyebrow: 'Treinamento 03',
    title: 'Agendamento de oficinas',
    text: 'Entenda como localizar o lead, acessar a aba de oficinas, escolher workshop e turma, concluir o agendamento e validar os envios automáticos.',
    href: '/crm-sankhya/agendamento-oficinas',
  },
]

function SankhyaTrainingCard({ card }) {
  return (
    <Link
      to={card.href}
      className="module-card module-card--link"
      style={{
        borderColor: 'rgba(78, 201, 140, 0.22)',
        background:
          'radial-gradient(circle at top left, rgba(60, 179, 113, 0.22), transparent 38%), linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(14, 42, 28, 0.42) 100%)',
        boxShadow:
          'inset 0 1px 0 rgba(255,255,255,0.04), 0 18px 40px rgba(6, 38, 22, 0.34)',
      }}
    >
      <span
        className="module-card__eyebrow"
        style={{
          borderColor: 'rgba(116, 224, 172, 0.28)',
          background: 'rgba(44, 122, 78, 0.16)',
          color: '#d9ffea',
        }}
      >
        {card.eyebrow}
      </span>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          marginTop: '18px',
        }}
      >
        <h3
          className="module-card__title"
          style={{
            margin: 0,
          }}
        >
          {card.title}
        </h3>

        <div
          aria-hidden="true"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '52px',
            height: '52px',
            minWidth: '52px',
            borderRadius: '16px',
            border: '1px solid rgba(116, 224, 172, 0.24)',
            background: 'rgba(44, 122, 78, 0.16)',
            color: '#d9ffea',
            fontSize: '1.15rem',
            lineHeight: 1,
          }}
        >
          ▶
        </div>
      </div>

      <p
        className="module-card__text"
        style={{
          marginTop: '18px',
        }}
      >
        {card.text}
      </p>

      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          marginTop: '22px',
          padding: '12px 14px',
          width: 'fit-content',
          borderRadius: '999px',
          border: '1px solid rgba(116, 224, 172, 0.24)',
          background: 'rgba(44, 122, 78, 0.16)',
          color: '#e7fff1',
          fontSize: '0.92rem',
          fontWeight: 600,
          letterSpacing: '0.01em',
        }}
      >
        <span
          aria-hidden="true"
          style={{
            fontSize: '0.95rem',
          }}
        >
          🎥
        </span>
        Clique aqui para visualizar o vídeo
      </div>
    </Link>
  )
}

export default function CrmSankhyaPage() {
  return (
    <main className="page page--home">
      <section className="hero-block">
        <div className="hero-block__content">
          <span className="hero-block__eyebrow">CRM Sankhya</span>
          <h1 className="hero-block__title">Treinamentos do CRM comercial</h1>
          <p className="hero-block__description">
            Esta área reúne os treinamentos práticos do CRM utilizados no
            onboarding comercial. Aqui você encontra a visão geral da operação,
            o fluxo de matrículas e o processo de agendamento de oficinas, cada
            um com conteúdo textual e vídeo de apoio.
          </p>

          <div className="hero-block__actions">
            <Link
              to="/crm-sankhya/visao-geral"
              className="button button--primary"
            >
              Ver visão geral
            </Link>

            <Link
              to="/crm-sankhya/matriculas"
              className="button button--ghost"
            >
              Ir para matrículas
            </Link>

            <Link
              to="/crm-sankhya/agendamento-oficinas"
              className="button button--ghost"
            >
              Ir para oficinas
            </Link>
          </div>
        </div>

        <div className="hero-block__media">
          <div className="media-placeholder media-placeholder--large">
            <span>Trilha de treinamento do CRM</span>
          </div>
        </div>
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="Panorama"
          title="O que você vai encontrar neste módulo"
          description="O objetivo desta trilha é acelerar a adaptação ao CRM, padronizar a operação comercial e facilitar a consulta dos fluxos mais usados no dia a dia."
        />

        <div className="module-grid module-grid--three">
          {crmOverviewBlocks.map((block) => (
            <article
              key={block.title}
              className="module-card"
            >
              <span className="module-card__eyebrow">{block.eyebrow}</span>
              <h3 className="module-card__title">{block.title}</h3>
              <p className="module-card__text">{block.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="Treinamentos"
          title="Acesse os conteúdos específicos"
          description="Cada treinamento abaixo reúne um vídeo e um resumo estruturado do processo para consulta rápida da equipe."
        />

        <div className="module-grid module-grid--three">
          {crmTrainingCards.map((card) => (
            <SankhyaTrainingCard
              key={card.title}
              card={card}
            />
          ))}
        </div>
      </section>
    </main>
  )
}