import { Link } from 'react-router-dom'
import SectionHeading from '../components/ui/SectionHeading'
import ModuleCard from '../components/ui/ModuleCard'

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
            <ModuleCard
              key={card.title}
              eyebrow={card.eyebrow}
              title={card.title}
              text={card.text}
              href={card.href}
            />
          ))}
        </div>
      </section>
    </main>
  )
}