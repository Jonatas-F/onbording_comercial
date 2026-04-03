import SectionHeading from '../components/ui/SectionHeading'

const contextCards = [
  {
    eyebrow: 'Triagem inicial',
    title: 'O lead pode chegar pré-qualificado pelo WhatsApp',
    text: 'Antes de cair no atendimento humano, muitos leads passam por uma triagem inicial no WhatsApp. Nessa etapa, já podem ser identificados pontos como área de interesse, objetivo inicial, se possui computador, se conhece a SAGA e outros contextos úteis para a continuação da conversa.',
  },
  {
    eyebrow: 'NEPPO',
    title: 'O atendimento acontece dentro do NEPPO',
    text: 'Quando esse lead chega ao time, a conversa fica visível no NEPPO, que é a plataforma omnichannel utilizada pela operação. Ali, o atendente já consegue ler parte do histórico e aproveitar informações levantadas antes do contato humano.',
  },
  {
    eyebrow: 'Direcionamento',
    title: 'Na maioria dos casos o lead vai primeiro para a SDR',
    text: 'Geralmente, o lead triado segue primeiro para a SDR, que tenta realizar agenda e organizar o próximo passo. Dependendo do contexto, ele também pode ser direcionado ao vendedor, que deve assumir a conversa com continuidade e não como se fosse um primeiro contato frio.',
  },
]

const neppeReadingCards = [
  {
    eyebrow: 'Leitura 01',
    title: 'Área de interesse',
    text: 'Em muitos casos, o lead já chega com uma zona de interesse mapeada, como Design, Audiovisual, 3D ou Game. Isso ajuda o vendedor a começar com mais assertividade e menos tentativa e erro.',
  },
  {
    eyebrow: 'Leitura 02',
    title: 'Conhecimento prévio sobre a SAGA',
    text: 'Também pode vir sinalizado se o lead já conhecia a SAGA ou se está tendo o primeiro contato com a marca. Esse detalhe muda a forma de apresentar a escola e o nível de contexto que precisa ser construído na conversa.',
  },
  {
    eyebrow: 'Leitura 03',
    title: 'Estrutura mínima para estudar',
    text: 'A triagem inicial também pode mostrar se o lead possui computador e, em alguns casos, onde mora. Isso ajuda o vendedor a entender rapidamente se o formato online faz sentido ou se existe contexto para outra alternativa de atendimento.',
  },
]

const conductionCards = [
  {
    eyebrow: 'Condução 01',
    title: 'Não repita tudo o que a IA já perguntou',
    text: 'Se a triagem já trouxe informações úteis, o vendedor deve evitar repetir tudo de forma mecânica. O ideal é validar com naturalidade e aprofundar apenas o que realmente ajuda a avançar a conversa.',
  },
  {
    eyebrow: 'Condução 02',
    title: 'Continue a conversa, não reinicie',
    text: 'A postura correta é assumir que o lead já começou uma jornada. Em vez de reiniciar a abordagem, o vendedor deve mostrar que entendeu o contexto e que agora vai ajudar a direcionar a melhor opção para aquele momento.',
  },
  {
    eyebrow: 'Condução 03',
    title: 'Use o histórico para aquecer melhor',
    text: 'Quando o histórico mostra a área de interesse, o conhecimento sobre a SAGA e a estrutura do lead, isso encurta caminho. O vendedor consegue aquecer com mais qualidade, construir valor mais rápido e reduzir ruído no atendimento.',
  },
]

const aiDirectionCards = [
  {
    eyebrow: 'Direcionamento da IA',
    title: 'Identificação da área principal',
    text: 'A IA tende a descobrir logo no início qual área mais chama atenção do lead. Isso já orienta a continuação da conversa comercial e ajuda o vendedor a conectar melhor a trilha certa com o objetivo da pessoa.',
  },
  {
    eyebrow: 'Direcionamento da IA',
    title: 'Validação de interesse real',
    text: 'Além da área, a IA busca entender se existe interesse real em estudar, se o lead está apenas pesquisando ou se já demonstra intenção de evoluir na jornada.',
  },
  {
    eyebrow: 'Direcionamento da IA',
    title: 'Leitura de contexto antes do humano',
    text: 'A IA também pode levantar se o lead já conhecia a SAGA, se veio por oficina gratuita ou por curso, e se possui estrutura mínima para acompanhar as aulas. Isso ajuda o humano a entrar com mais contexto e menos atrito.',
  },
]

const scriptCards = [
  {
    eyebrow: 'Script 01',
    title: 'Abertura para lead já triado',
    text: 'Oi! Vi que você demonstrou interesse em uma das áreas da SAGA. Quero entender rapidinho melhor seu momento para te direcionar da forma mais assertiva possível.',
  },
  {
    eyebrow: 'Script 02',
    title: 'Aprofundamento com base no histórico',
    text: 'Vi que você já teve um primeiro contato com a nossa triagem. Então, em vez de começar tudo do zero, quero aprofundar só o que faz mais sentido para te indicar o melhor caminho.',
  },
  {
    eyebrow: 'Script 03',
    title: 'Validação de objetivo',
    text: 'Hoje você está olhando para essa área mais pensando em carreira, portfólio, mudança de área ou para começar a aprender com mais estrutura?',
  },
  {
    eyebrow: 'Script 04',
    title: 'Construção de valor',
    text: 'O que faz a SAGA ser diferente é que a formação não fica só em conteúdo solto. Você entra em uma jornada com aulas ao vivo, professores com vivência de mercado, prática, comunidade, HUB e uma proposta pensada para evolução real.',
  },
  {
    eyebrow: 'Script 05',
    title: 'Transição para próximo passo',
    text: 'Pelo que você me contou, faz sentido eu te mostrar a trilha que mais conversa com seu momento e com o tipo de resultado que você quer construir agora.',
  },
  {
    eyebrow: 'Script 06',
    title: 'Encaminhamento natural',
    text: 'Com esse contexto, consigo te direcionar melhor e seguir com você no próximo passo, seja agenda, oficina, proposta ou avanço para matrícula.',
  },
]

const sellerGuidelines = [
  {
    eyebrow: 'Diretriz',
    title: 'Soe humano e contextual',
    text: 'Como o lead pode já ter falado com a IA, a etapa humana precisa ser mais natural, personalizada e segura. O valor do vendedor está justamente em aprofundar, interpretar e conduzir com mais sensibilidade.',
  },
  {
    eyebrow: 'Diretriz',
    title: 'Leia o que já veio no NEPPO',
    text: 'Antes de responder, vale sempre observar o histórico e os sinais que já vieram filtrados. Isso evita retrabalho e melhora a experiência do lead.',
  },
  {
    eyebrow: 'Diretriz',
    title: 'Conclua sempre com um próximo passo claro',
    text: 'Toda boa abordagem precisa terminar com direção: agenda, oficina, retorno com responsável, proposta, matrícula ou continuidade do atendimento comercial.',
  },
]

export default function AbordagemScriptsPage() {
  return (
    <main className="page page--home">
      <section className="hero-block">
        <div className="hero-block__content">
          <span className="hero-block__eyebrow">Abordagem e scripts</span>
          <h1 className="hero-block__title">Dicas de abordagem comercial</h1>
          <p className="hero-block__description">
            Esta página ajuda o vendedor a entender como conduzir um lead que já
            passou por uma triagem inicial no WhatsApp e chegou ao atendimento
            humano dentro do NEPPO. O foco aqui é aproveitar o histórico,
            entender melhor o contexto e transformar interesse em conversa
            comercial mais assertiva.
          </p>

          <div className="hero-block__actions">
            <a href="#scripts" className="button button--primary">
              Ver scripts
            </a>
            <a href="#diretrizes" className="button button--ghost">
              Ver diretrizes
            </a>
          </div>
        </div>

        <div className="hero-block__media">
          <div className="media-placeholder media-placeholder--large">
            <span>Triagem no WhatsApp, NEPPO e condução comercial</span>
          </div>
        </div>
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="Panorama"
          title="Como esse lead normalmente chega para o time"
          description="Antes de falar com SDR ou vendedor, muitos leads já passaram por uma triagem inicial. Isso muda a forma correta de abordar e exige mais leitura de contexto do que repetição de perguntas."
        />

        <div className="module-grid module-grid--three">
          {contextCards.map((item) => (
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
          eyebrow="Leitura do lead"
          title="O que normalmente já pode estar filtrado no NEPPO"
          description="Ao abrir a conversa, o vendedor pode já encontrar pistas relevantes deixadas pela triagem inicial. Isso ajuda a tornar a abordagem mais inteligente e menos repetitiva."
        />

        <div className="module-grid module-grid--three">
          {neppeReadingCards.map((item) => (
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
          eyebrow="IA no WhatsApp"
          title="Como a triagem inicial já ajuda o vendedor"
          description="A IA já entra com uma lógica de filtragem que economiza tempo e ajuda a deixar o atendimento humano mais objetivo e mais comercial."
        />

        <div className="module-grid module-grid--three">
          {aiDirectionCards.map((item) => (
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
          eyebrow="Condução"
          title="Como continuar a conversa sem parecer repetitivo"
          description="O vendedor deve assumir que a jornada do lead já começou. O objetivo agora é aprofundar, aquecer e conduzir para o próximo passo comercial."
        />

        <div className="module-grid module-grid--three">
          {conductionCards.map((item) => (
            <article key={item.title} className="module-card">
              <span className="module-card__eyebrow">{item.eyebrow}</span>
              <h3 className="module-card__title">{item.title}</h3>
              <p className="module-card__text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="scripts" className="content-section">
        <SectionHeading
          eyebrow="Scripts"
          title="Exemplos de fala para leads já pré-triados"
          description="Esses exemplos servem como apoio para o vendedor construir uma fala mais natural, humana e contextual."
        />

        <div className="module-grid module-grid--three">
          {scriptCards.map((item) => (
            <article key={item.title} className="module-card">
              <span className="module-card__eyebrow">{item.eyebrow}</span>
              <h3 className="module-card__title">{item.title}</h3>
              <p className="module-card__text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="diretrizes" className="content-section">
        <SectionHeading
          eyebrow="Diretrizes"
          title="Boas práticas para o atendimento humano"
          description="O valor do atendimento humano está em interpretar melhor o contexto, construir segurança e conduzir com clareza."
        />

        <div className="module-grid module-grid--three">
          {sellerGuidelines.map((item) => (
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