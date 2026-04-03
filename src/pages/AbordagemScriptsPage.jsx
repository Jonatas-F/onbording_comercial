import SectionHeading from '../components/ui/SectionHeading'

const contextCards = [
  {
    eyebrow: 'Contexto',
    title: 'O lead muitas vezes já passou por triagem',
    text: 'Antes de chegar ao SDR ou ao vendedor, muitos leads já passaram pelo WhatsApp da SAGA. Isso significa que parte das informações básicas já pode ter sido validada, como área de interesse, objetivo inicial, conhecimento da marca e necessidade de ter computador para estudar no formato online.',
  },
  {
    eyebrow: 'Postura',
    title: 'Não recomece a conversa do zero',
    text: 'O vendedor não deve soar repetitivo ou mecânico. Em vez de recomeçar toda a triagem, o ideal é assumir uma postura de continuidade: confirmar rapidamente o que faz sentido, aprofundar contexto e transformar interesse em conversa comercial mais madura.',
  },
  {
    eyebrow: 'Objetivo',
    title: 'Aprofundar, aquecer e conduzir',
    text: 'O papel do vendedor é pegar um lead já aquecido e levar a conversa para o próximo nível: diagnóstico mais refinado, construção de valor, conexão com a trilha ideal e direção clara para agenda, oficina, proposta ou matrícula.',
  },
]

const flowCards = [
  {
    eyebrow: 'Fluxo 01',
    title: 'Confirmar sem parecer interrogatório',
    text: 'Comece reconhecendo o interesse já demonstrado pelo lead e valide de forma leve o ponto principal. Exemplo: vi que você tem interesse em Game, quero só te entender melhor para te direcionar da melhor forma.',
  },
  {
    eyebrow: 'Fluxo 02',
    title: 'Aprofundar objetivo e momento',
    text: 'Depois da confirmação inicial, aprofunde o objetivo real: hobby, carreira, entrada no mercado, transição profissional, fortalecimento de portfólio ou especialização.',
  },
  {
    eyebrow: 'Fluxo 03',
    title: 'Construir valor antes de falar de preço',
    text: 'A conversa deve conectar o objetivo do lead com a trilha ideal, os diferenciais da SAGA, a metodologia ao vivo, o ecossistema HUB, os cases e a lógica da formação antes de entrar em condição comercial.',
  },
]

const leadTypeCards = [
  {
    eyebrow: 'Lead de curso',
    title: 'Mantenha o foco em formação',
    text: 'Se o lead já demonstra interesse claro em curso, não desvie a conversa para oficina gratuita. O foco deve ser aprofundar o interesse, mostrar aderência da trilha e conduzir para agenda, proposta ou matrícula.',
  },
  {
    eyebrow: 'Lead de oficina',
    title: 'Use a oficina como ponte',
    text: 'Quando o lead vier por oficina gratuita, a oficina deve ser tratada como amostra da área. A função do vendedor é usar isso como ponte para despertar interesse na formação completa.',
  },
  {
    eyebrow: 'Lead pós-bot',
    title: 'Aqueça com base no que já veio filtrado',
    text: 'Se o lead chegou após a triagem do WhatsApp, parta do princípio de que já existe um nível inicial de interesse. A abordagem deve ser mais consultiva e menos exploratória do que no primeiro contato frio.',
  },
]

const scriptCards = [
  {
    eyebrow: 'Script 01',
    title: 'Abertura para lead já triado',
    text: 'Oi! Vi que você demonstrou interesse na área de Design. Quero entender rapidinho seu momento para te direcionar da forma mais assertiva possível.',
  },
  {
    eyebrow: 'Script 02',
    title: 'Confirmação de objetivo',
    text: 'Hoje você está olhando para essa área mais com foco em carreira, portfólio ou porque quer começar a aprender com mais estrutura?',
  },
  {
    eyebrow: 'Script 03',
    title: 'Aprofundamento sem repetir o bot',
    text: 'Como você já teve um primeiro contato com a nossa triagem, eu quero aprofundar só o que faz mais sentido para te mostrar a melhor trilha e o melhor formato para o seu momento.',
  },
  {
    eyebrow: 'Script 04',
    title: 'Construção de valor',
    text: 'O que faz a SAGA ser diferente é que você não entra só em um curso solto. Você entra em uma jornada com aulas ao vivo, professores com vivência de mercado, prática, comunidade, HUB e uma formação pensada para evolução real.',
  },
  {
    eyebrow: 'Script 05',
    title: 'Transição para proposta',
    text: 'Pelo que você me contou, faz sentido te apresentar essa trilha porque ela conversa diretamente com o que você quer construir agora e com o nível em que você está hoje.',
  },
  {
    eyebrow: 'Script 06',
    title: 'Condução para próximo passo',
    text: 'Posso seguir te mostrando a melhor opção dentro dessa área e te explicar como funciona a estrutura da formação para o seu caso?',
  },
]

const objectionCards = [
  {
    eyebrow: 'Objeção',
    title: '“Ainda estou só pesquisando”',
    text: 'Sem problema. O ideal aqui é justamente te dar clareza para você entender o que faz mais sentido para o seu momento, sem te empurrar nada. A ideia é te ajudar a avaliar com mais segurança.',
  },
  {
    eyebrow: 'Objeção',
    title: '“Quero entender melhor a área primeiro”',
    text: 'Perfeito. Nesse caso, eu posso te mostrar como essa trilha funciona, o que você aprende, qual tipo de projeto desenvolve e como ela se conecta com mercado e portfólio.',
  },
  {
    eyebrow: 'Objeção',
    title: '“Vi a oficina gratuita”',
    text: 'Ótimo ponto. A oficina funciona como uma amostra prática da área, mas a formação completa acontece dentro da trilha. O mais importante é entender se essa área realmente conversa com o que você quer construir.',
  },
]

const sellerGuidelines = [
  {
    eyebrow: 'Diretriz',
    title: 'Soe humano, não robotizado',
    text: 'Como o lead já pode ter passado por uma etapa automatizada, o vendedor precisa compensar isso com naturalidade, personalização e leitura fina do contexto.',
  },
  {
    eyebrow: 'Diretriz',
    title: 'Evite repetir perguntas já respondidas',
    text: 'Se a informação já vier no histórico, use isso a seu favor. Repetir tudo de forma mecânica reduz fluidez e pode enfraquecer a experiência do lead.',
  },
  {
    eyebrow: 'Diretriz',
    title: 'Conduza com direção clara',
    text: 'Toda conversa deve terminar com um próximo passo bem definido: agenda, oficina, retorno com responsável, proposta, matrícula ou continuidade do atendimento comercial.',
  },
]

export default function AbordagemScriptsPage() {
  return (
    <main className="page page--home">
      <section className="hero-block">
        <div className="hero-block__content">
          <span className="hero-block__eyebrow">Abordagem e scripts</span>
          <h1 className="hero-block__title">Como vender depois da triagem do WhatsApp</h1>
          <p className="hero-block__description">
            Esta página foi pensada para o vendedor que recebe leads já
            impactados pela triagem inicial do WhatsApp. O foco aqui não é
            refazer o trabalho do bot, e sim aprofundar contexto, construir
            valor e conduzir o lead com mais naturalidade até o próximo passo
            comercial.
          </p>

          <div className="hero-block__actions">
            <a
              href="#scripts"
              className="button button--primary"
            >
              Ver scripts
            </a>

            <a
              href="#diretrizes"
              className="button button--ghost"
            >
              Ver diretrizes
            </a>
          </div>
        </div>

        <div className="hero-block__media">
          <div className="media-placeholder media-placeholder--large">
            <span>Lead triado, aquecimento e condução consultiva</span>
          </div>
        </div>
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="Panorama"
          title="O papel do vendedor depois da triagem"
          description="O agente comercial do WhatsApp já cumpre uma função inicial de qualificação e aquecimento. A partir daí, o vendedor entra para aprofundar, personalizar e converter."
        />

        <div className="module-grid module-grid--three">
          {contextCards.map((item) => (
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
          eyebrow="Fluxo"
          title="Como conduzir sem soar repetitivo"
          description="A lógica abaixo ajuda o vendedor a manter fluidez, aproveitar o histórico e transformar triagem em conversa comercial de verdade."
        />

        <div className="module-grid module-grid--three">
          {flowCards.map((item) => (
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
          eyebrow="Tipos de lead"
          title="Como adaptar a fala conforme a origem"
          description="Nem todo lead chega no mesmo estágio. O vendedor precisa reconhecer a origem e ajustar a condução sem perder foco comercial."
        />

        <div className="module-grid module-grid--three">
          {leadTypeCards.map((item) => (
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
        id="scripts"
        className="content-section"
      >
        <SectionHeading
          eyebrow="Scripts"
          title="Exemplos de fala para leads já aquecidos"
          description="Esses exemplos servem como base para conversas naturais. A ideia não é decorar, e sim entender a lógica da condução."
        />

        <div className="module-grid module-grid--three">
          {scriptCards.map((item) => (
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
          eyebrow="Objeções"
          title="Respostas curtas para situações comuns"
          description="Como muitos leads chegam ainda em fase de avaliação, o vendedor precisa responder de forma leve, segura e sem pressionar demais."
        />

        <div className="module-grid module-grid--three">
          {objectionCards.map((item) => (
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
        id="diretrizes"
        className="content-section"
      >
        <SectionHeading
          eyebrow="Diretrizes"
          title="Boas práticas para o vendedor humano"
          description="A etapa humana precisa ser mais consultiva, mais contextual e mais convincente do que a etapa automatizada."
        />

        <div className="module-grid module-grid--three">
          {sellerGuidelines.map((item) => (
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