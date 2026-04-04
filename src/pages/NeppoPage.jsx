import SectionHeading from '../components/ui/SectionHeading'

const HERO_IMAGE_URL = 'https://cdn.saga.com.br/files01/comercial_treinamento/Assets/neppo.png'
const VIDEO_INTRO_URL = 'https://cdn.saga.com.br/files01/comercial_treinamento/neppo/01_Introducao.mp4'
const VIDEO_CHAT_URL = 'https://cdn.saga.com.br/files01/comercial_treinamento/neppo/02_chat.mp4'
const VIDEO_REPORTS_URL = 'https://cdn.saga.com.br/files01/comercial_treinamento/neppo/03_relatorios.mp4'
const VIDEO_TEMPLATE_URL = 'https://cdn.saga.com.br/files01/comercial_treinamento/neppo/04_disparo_ativo.mp4'

const overviewCards = [
  {
    eyebrow: 'Plataforma',
    title: 'O que é o NEPPO',
    text: 'O NEPPO é uma plataforma omnichannel homologada pela Meta, utilizada para conversar diretamente com clientes via WhatsApp com mais segurança operacional e aderência às políticas do WhatsApp Business.',
  },
  {
    eyebrow: 'Operação',
    title: 'Canal central de relacionamento e comercial',
    text: 'O NEPPO é usado para tratativas comerciais, relacionamento com alunos, envio de links de pagamento, comunicação recorrente e acompanhamento de atendimentos ao longo da jornada do cliente.',
  },
  {
    eyebrow: 'Custo',
    title: 'Uso responsável dos disparos ativos',
    text: 'Cada mensagem ativa enviada ao cliente gera custo aproximado de R$ 0,45, valor que pode variar conforme o dólar. Por isso, os disparos devem ser usados com responsabilidade e critério.',
  },
]

const leadFlowCards = [
  {
    eyebrow: 'Fluxo 01',
    title: 'Entrada dos leads via Sankhya',
    text: 'Os leads que caem no CRM Sankhya podem ser acionados a partir de ofertas, oficinas e outras tratativas comerciais. A partir disso, o contato pode ser iniciado dentro do NEPPO.',
  },
  {
    eyebrow: 'Fluxo 02',
    title: 'Triagem inicial com IA',
    text: 'Antes de chegar ao vendedor ou SDR, o lead passa por uma triagem com inteligência artificial, que identifica zona de interesse, posse de computador e dúvidas iniciais sobre curso, softwares e funcionamento.',
  },
  {
    eyebrow: 'Fluxo 03',
    title: 'Lead mais aquecido para SDR ou closer',
    text: 'Essa triagem ajuda o lead a chegar mais aquecido para o SDR, que pode fazer o agendamento, ou diretamente para o vendedor/closer, que conduz a continuidade comercial.',
  },
]

const capabilityCards = [
  {
    eyebrow: 'Recurso',
    title: 'Transferência entre agentes',
    text: 'Os atendimentos podem ser transferidos entre agentes conforme a necessidade da operação, mantendo continuidade e visibilidade do histórico da conversa.',
  },
  {
    eyebrow: 'Recurso',
    title: 'Monitoramento em tempo real',
    text: 'O supervisor consegue monitorar conversas em tempo real, o que ajuda no acompanhamento da qualidade, correção de rota e apoio à operação.',
  },
  {
    eyebrow: 'Recurso',
    title: 'Anexos de documentos e arquivos',
    text: 'Dentro do NEPPO é possível anexar arquivos e documentos, facilitando o envio de materiais, comprovantes, orientações e outros conteúdos relevantes ao cliente.',
  },
  {
    eyebrow: 'Recurso',
    title: 'Tags para classificar atendimentos',
    text: 'As tags ajudam a organizar o atendimento, classificar temas, separar contextos e facilitar a leitura operacional de cada conversa.',
  },
  {
    eyebrow: 'Recurso',
    title: 'Comentários internos',
    text: 'Também é possível adicionar comentários internos para registrar contexto, orientar o próximo agente ou documentar pontos importantes sem expor isso ao cliente.',
  },
  {
    eyebrow: 'Recurso',
    title: 'Mensagens ativas e retomada de contato',
    text: 'Caso necessário, é possível iniciar uma nova conversa com mensagem ativa, lembrando que isso deve ser feito com critério, pois gera custo e segue regras específicas da Meta.',
  },
]

const policyCards = [
  {
    eyebrow: 'Política',
    title: 'Janela de 24 horas',
    text: 'As conversas seguem a lógica da janela de 24 horas do WhatsApp Business. Depois que a conversa é iniciada, o ideal é trabalhar para concluir o atendimento dentro desse prazo.',
  },
  {
    eyebrow: 'Política',
    title: 'Evitar desperdício de lead',
    text: 'Como o reinício da conversa após a janela exige novo disparo ativo e pode gerar custo, é importante valorizar cada oportunidade e conduzir o lead com atenção e eficiência.',
  },
  {
    eyebrow: 'Política',
    title: 'Alternativa de continuidade',
    text: 'Se o atendimento for se prolongar por muitos momentos, dias ou horas, o vendedor pode salvar o número e seguir o relacionamento por um WhatsApp pessoal para estreitar contato e apoiar o fechamento.',
  },
]

const serviceQualityCards = [
  {
    eyebrow: 'Indicador',
    title: 'TME',
    text: 'O TME é o tempo médio de espera. Quanto mais o cliente fica aguardando retorno, maior o risco de frustração, queda de interesse e perda de qualidade na conversa.',
  },
  {
    eyebrow: 'Indicador',
    title: 'TMA',
    text: 'O TMA é o tempo médio de atendimento. Ele ajuda a entender a eficiência da interação e a capacidade de conduzir a conversa com objetividade e boa experiência.',
  },
  {
    eyebrow: 'Indicador',
    title: 'CSAT',
    text: 'O CSAT é o indicador de satisfação do cliente em relação ao atendimento recebido. Para que o cliente possa avaliar corretamente, é importante encerrar a conversa no sistema quando ela realmente terminar.',
  },
]

const bestPractices = [
  {
    eyebrow: 'Boa prática',
    title: 'Não deixe o cliente esperando',
    text: 'Tempo de espera impacta diretamente a percepção de qualidade. Responder com agilidade melhora a experiência e aumenta a chance de avanço da conversa.',
  },
  {
    eyebrow: 'Boa prática',
    title: 'Encerre a conversa ao final do atendimento',
    text: 'Assim que a conversa for encerrada, é importante finalizá-la dentro do próprio NEPPO. Isso contribui para organização, leitura correta da fila e também para a avaliação do atendimento.',
  },
  {
    eyebrow: 'Boa prática',
    title: 'Valorize cada lead que chega',
    text: 'O usuário deve buscar o melhor atendimento possível, porque cada lead que entra na plataforma representa oportunidade real de relacionamento e venda.',
  },
]

const trainingVideos = [
  {
    eyebrow: 'Vídeo 01',
    title: 'Introdução e funcionamento da plataforma',
    text: 'Visão inicial do NEPPO, navegação geral, lógica da operação e entendimento de como a plataforma funciona no dia a dia.',
    href: VIDEO_INTRO_URL,
  },
  {
    eyebrow: 'Vídeo 02',
    title: 'Funcionamento do chat e conversa com o cliente',
    text: 'Como conversar com o cliente dentro do NEPPO, leitura do histórico, condução da conversa e continuidade do atendimento.',
    href: VIDEO_CHAT_URL,
  },
  {
    eyebrow: 'Vídeo 03',
    title: 'Relatórios e acompanhamento de desempenho',
    text: 'Como acessar relatórios, acompanhar desempenho, interpretar indicadores e usar essas informações na gestão da rotina.',
    href: VIDEO_REPORTS_URL,
  },
  {
    eyebrow: 'Vídeo 04',
    title: 'Disparo ativo com uso de template',
    text: 'Como fazer um disparo ativo para acionar o cliente utilizando um dos templates disponíveis dentro da plataforma.',
    href: VIDEO_TEMPLATE_URL,
  },
]

function VideoTrainingCard({ card }) {
  return (
    <a
      href={card.href}
      target="_blank"
      rel="noreferrer"
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
        <span aria-hidden="true" style={{ fontSize: '0.95rem' }}>
          🎥
        </span>
        Clique aqui para visualizar o vídeo
      </div>
    </a>
  )
}

export default function NeppoPage() {
  return (
    <main className="page page--home">
      <section className="hero-block">
        <div className="hero-block__content">
          <span className="hero-block__eyebrow">NEPPO</span>
          <h1 className="hero-block__title">NEPPO e operação de atendimento no WhatsApp</h1>
          <p className="hero-block__description">
            Esta página organiza a visão operacional do NEPPO, plataforma
            omnichannel homologada pela Meta utilizada para relacionamento,
            tratativas comerciais, comunicação com clientes e acompanhamento da
            jornada via WhatsApp com mais controle, contexto e segurança.
          </p>
        </div>

        <div className="hero-block__media">
          <div className="media-placeholder media-placeholder--large">
            <img
              src={HERO_IMAGE_URL}
              alt="NEPPO"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '20px',
                opacity: 0.96,
              }}
            />
          </div>
        </div>
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="Panorama"
          title="O que é o NEPPO na operação"
          description="O NEPPO é uma ferramenta central da rotina comercial e de relacionamento, conectando atendimento, contexto, histórico e comunicação ativa com os clientes."
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
          eyebrow="Fluxo comercial"
          title="Como o lead chega ao vendedor ou SDR"
          description="O NEPPO se conecta à operação comercial a partir dos leads que entram no Sankhya, passam pela IA e chegam mais aquecidos para continuidade do atendimento."
        />

        <div className="module-grid module-grid--three">
          {leadFlowCards.map((item) => (
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
          eyebrow="Recursos"
          title="O que a plataforma permite fazer"
          description="Além da conversa direta com o cliente, o NEPPO oferece recursos importantes para organização, continuidade do atendimento e supervisão operacional."
        />

        <div className="module-grid module-grid--three">
          {capabilityCards.map((item) => (
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
          eyebrow="Políticas"
          title="Regras importantes de uso da plataforma"
          description="Como a operação depende das políticas do WhatsApp Business e da Meta, é essencial entender limites, custos e boas decisões operacionais."
        />

        <div className="module-grid module-grid--three">
          {policyCards.map((item) => (
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
          eyebrow="Indicadores"
          title="TME, TMA e CSAT"
          description="O bom uso do NEPPO também depende da qualidade do atendimento, da agilidade da conversa e da percepção do cliente sobre a experiência recebida."
        />

        <div className="module-grid module-grid--three">
          {serviceQualityCards.map((item) => (
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
          eyebrow="Boas práticas"
          title="Como manter uma conversa melhor e mais eficiente"
          description="A qualidade do atendimento dentro do NEPPO depende de velocidade, contexto, conclusão correta da conversa e valorização real do lead."
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

      <section className="content-section">
        <SectionHeading
          eyebrow="Treinamentos"
          title="Vídeos da operação no NEPPO"
          description="Os botões abaixo foram configurados com os vídeos correspondentes de cada etapa do treinamento."
        />

        <div className="module-grid module-grid--four">
          {trainingVideos.map((card) => (
            <VideoTrainingCard key={card.title} card={card} />
          ))}
        </div>
      </section>
    </main>
  )
}