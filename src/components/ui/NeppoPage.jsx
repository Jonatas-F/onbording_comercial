import SectionHeading from '..componentsuiSectionHeading'

const overviewCards = [
  {
    eyebrow 'Plataforma',
    title 'O que é o NEPPO',
    text 'O NEPPO é a plataforma omnichannel utilizada pela operação para centralizar atendimentos, acompanhar conversas e dar continuidade à jornada do lead dentro do fluxo comercial.',
  },
  {
    eyebrow 'Uso diário',
    title 'Canal central do atendimento',
    text 'É dentro do NEPPO que o time acessa histórico de conversa, mensagens trocadas, contexto do lead e informações úteis para seguir o atendimento com mais clareza.',
  },
  {
    eyebrow 'Objetivo',
    title 'Organizar e dar continuidade ao contato',
    text 'A função da plataforma não é apenas mostrar mensagens. Ela ajuda a sustentar continuidade, leitura de contexto e visão mais organizada da jornada do cliente.',
  },
]

const featureCards = [
  {
    eyebrow 'Função 01',
    title 'Leitura do histórico',
    text 'O atendente consegue visualizar o que já aconteceu antes do contato atual, incluindo falas anteriores, triagens e registros importantes da conversa.',
  },
  {
    eyebrow 'Função 02',
    title 'Continuidade do atendimento',
    text 'O NEPPO ajuda a evitar que o contato recomece do zero toda vez. Isso melhora a experiência do lead e permite abordagens mais contextualizadas.',
  },
  {
    eyebrow 'Função 03',
    title 'Centralização da operação',
    text 'A plataforma concentra o atendimento em um só ambiente, reduzindo dispersão entre canais e melhorando a organização da rotina comercial.',
  },
  {
    eyebrow 'Função 04',
    title 'Apoio à leitura comercial',
    text 'Com o histórico disponível, o vendedor ou SDR consegue identificar interesse, momento da conversa, dúvidas anteriores e possíveis objeções já sinalizadas.',
  },
  {
    eyebrow 'Função 05',
    title 'Registro do contexto',
    text 'Além da conversa em si, a plataforma ajuda a manter visível o contexto necessário para que outras pessoas do time consigam assumir ou continuar o contato.',
  },
  {
    eyebrow 'Função 06',
    title 'Base para decisões mais rápidas',
    text 'Com mais informação organizada, o atendente consegue decidir melhor o próximo passo, sem depender apenas de memória ou de repasses paralelos.',
  },
]

const bestPractices = [
  {
    eyebrow 'Boa prática',
    title 'Leia antes de responder',
    text 'Antes de enviar qualquer mensagem, é importante verificar o que já foi dito e quais informações o lead já compartilhou dentro da plataforma.',
  },
  {
    eyebrow 'Boa prática',
    title 'Evite repetir perguntas desnecessárias',
    text 'Quando o histórico já traz contexto, repetir tudo novamente passa sensação de desorganização e enfraquece a experiência do atendimento.',
  },
  {
    eyebrow 'Boa prática',
    title 'Use o histórico para conduzir melhor',
    text 'O valor do NEPPO está em permitir que o atendimento siga com mais contexto, mais personalização e mais inteligência comercial.',
  },
]

const operationalFlow = [
  {
    eyebrow 'Etapa 01',
    title 'Abrir o atendimento',
    text 'O primeiro passo é localizar o contato e entender em que ponto da jornada aquela pessoa está dentro da operação.',
  },
  {
    eyebrow 'Etapa 02',
    title 'Ler o histórico recente',
    text 'Antes de agir, o ideal é revisar mensagens e informações recentes para evitar ruído e continuar a conversa com contexto.',
  },
  {
    eyebrow 'Etapa 03',
    title 'Identificar o próximo objetivo',
    text 'Com o histórico em mãos, o atendente define se o próximo passo é agendar, qualificar, aprofundar, tratar objeção ou encaminhar.',
  },
  {
    eyebrow 'Etapa 04',
    title 'Conduzir com clareza',
    text 'A conversa deve seguir com naturalidade, aproveitando o que já foi construído e conduzindo o lead para um avanço claro.',
  },
  {
    eyebrow 'Etapa 05',
    title 'Registrar o que for importante',
    text 'Sempre que houver informação crítica, alinhamento relevante ou contexto sensível, isso deve ficar refletido no ambiente para futura continuidade.',
  },
  {
    eyebrow 'Etapa 06',
    title 'Facilitar a passagem para outra etapa',
    text 'Quando o contato precisar seguir para outra pessoa ou etapa da operação, o NEPPO deve ajudar essa passagem a acontecer com menos ruptura.',
  },
]

export default function NeppoPage() {
  return (
    main className=page page--home
      section className=hero-block
        div className=hero-block__content
          span className=hero-block__eyebrowNEPPOspan
          h1 className=hero-block__titleNEPPO e uso da plataforma no atendimentoh1
          p className=hero-block__description
            Esta página organiza uma visão introdutória sobre o NEPPO, a
            plataforma omnichannel utilizada pela operação comercial para
            leitura de histórico, continuidade do atendimento e organização da
            jornada do lead dentro do fluxo.
          p

          div className=hero-block__actions
            a href=#fluxo className=button button--primary
              Ver fluxo
            a
            a href=#boas-praticas className=button button--ghost
              Ver boas práticas
            a
          div
        div

        div className=hero-block__media
          div className=media-placeholder media-placeholder--large
            spanPlataforma omnichannel do atendimento comercialspan
          div
        div
      section

      section className=content-section
        SectionHeading
          eyebrow=Panorama
          title=Visão geral da plataforma
          description=O NEPPO é parte importante da operação comercial porque sustenta leitura de contexto, continuidade da conversa e organização do atendimento.
        

        div className=module-grid module-grid--three
          {overviewCards.map((item) = (
            article key={item.title} className=module-card
              span className=module-card__eyebrow{item.eyebrow}span
              h3 className=module-card__title{item.title}h3
              p className=module-card__text{item.text}p
            article
          ))}
        div
      section

      section className=content-section
        SectionHeading
          eyebrow=Recursos
          title=Como o NEPPO apoia a operação
          description=Esses pontos ajudam a explicar por que a plataforma é central na rotina de atendimento e continuidade comercial.
        

        div className=module-grid module-grid--three
          {featureCards.map((item) = (
            article key={item.title} className=module-card
              span className=module-card__eyebrow{item.eyebrow}span
              h3 className=module-card__title{item.title}h3
              p className=module-card__text{item.text}p
            article
          ))}
        div
      section

      section id=fluxo className=content-section
        SectionHeading
          eyebrow=Fluxo
          title=Lógica de uso no dia a dia
          description=O uso eficiente do NEPPO depende de leitura de histórico, continuidade do contexto e clareza sobre o próximo passo de cada lead.
        

        div className=module-grid module-grid--three
          {operationalFlow.map((item) = (
            article key={item.title} className=module-card
              span className=module-card__eyebrow{item.eyebrow}span
              h3 className=module-card__title{item.title}h3
              p className=module-card__text{item.text}p
            article
          ))}
        div
      section

      section id=boas-praticas className=content-section
        SectionHeading
          eyebrow=Boas práticas
          title=Como usar o NEPPO de forma mais inteligente
          description=O valor da plataforma aumenta quando o atendimento deixa de ser mecânico e passa a ser mais contextual, fluido e organizado.
        

        div className=module-grid module-grid--three
          {bestPractices.map((item) = (
            article key={item.title} className=module-card
              span className=module-card__eyebrow{item.eyebrow}span
              h3 className=module-card__title{item.title}h3
              p className=module-card__text{item.text}p
            article
          ))}
        div
      section
    main
  )
}