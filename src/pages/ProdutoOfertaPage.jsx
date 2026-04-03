import SectionHeading from '../components/ui/SectionHeading'

const suiteCards = [
  {
    eyebrow: 'Trilha 01',
    title: 'Design',
    text: 'Trilha com 6 meses de duração, voltada para criação visual, identidade, composição, comunicação gráfica e ferramentas muito utilizadas no mercado criativo.',
  },
  {
    eyebrow: 'Trilha 02',
    title: 'Audiovisual',
    text: 'Trilha com 6 meses de duração, focada em edição, motion, narrativa visual, criação de conteúdo e desenvolvimento técnico no universo audiovisual.',
  },
  {
    eyebrow: 'Trilha 03',
    title: '3D',
    text: 'Trilha com 6 meses de duração, pensada para modelagem, construção tridimensional, visualização e desenvolvimento técnico em 3D.',
  },
  {
    eyebrow: 'Trilha 04',
    title: 'Game',
    text: 'Trilha com 6 meses de duração, conectada à criação de jogos, lógica aplicada, desenvolvimento e visão de mercado para quem quer atuar nesse segmento.',
  },
]

const pricingCards = [
  {
    eyebrow: 'Oferta avulsa',
    title: '1 trilha',
    text: 'Valor cheio: R$ 679,90. Com desconto aplicado pelo vendedor: R$ 459,90. Essa condição vale para quem opta por adquirir apenas uma trilha.',
  },
  {
    eyebrow: 'Pacote',
    title: '2, 3 ou 4 trilhas',
    text: 'Valor cheio por trilha no pacote: R$ 419,90. Com desconto aplicado pelo vendedor: R$ 329,90 por trilha. Essa condição vale para quem fecha um pacote com duas, três ou quatro trilhas de uma vez.',
  },
  {
    eyebrow: 'Regra comercial',
    title: 'Matrícula e mensalidade têm o mesmo valor',
    text: 'O valor pago na matrícula é o mesmo valor das mensalidades. Exemplo: se a condição aplicada for R$ 459,90, as mensalidades também serão R$ 459,90. Se a condição for R$ 329,90, as mensalidades seguem em R$ 329,90.',
  },
]

const durationCards = [
  {
    eyebrow: 'Duração',
    title: '1 trilha = 6 meses',
    text: 'Quando o aluno compra apenas uma trilha, ele terá uma jornada de 6 meses.',
  },
  {
    eyebrow: 'Duração',
    title: '2 trilhas = 12 meses',
    text: 'Se o aluno fechar duas trilhas, a jornada total passa a ser de 12 meses.',
  },
  {
    eyebrow: 'Duração',
    title: '3 trilhas = 18 meses',
    text: 'Ao contratar três trilhas, o aluno passa a ter 18 meses de formação.',
  },
  {
    eyebrow: 'Duração',
    title: '4 trilhas = 24 meses',
    text: 'Quando o aluno fecha o percurso completo com quatro trilhas, a formação totaliza 24 meses.',
  },
]

const commercialRules = [
  {
    eyebrow: 'Pagamento',
    title: 'Vencimento padrão entre dia 5 e dia 8',
    text: 'Como regra padrão da operação, o vencimento das mensalidades deve ficar entre o dia 5 e o dia 8 do mês.',
  },
  {
    eyebrow: 'Posicionamento',
    title: 'Falar de valor com contexto',
    text: 'O preço deve ser apresentado depois de explicar a estrutura da trilha, a duração, o formato ao vivo, a proposta de formação e os diferenciais da SAGA.',
  },
  {
    eyebrow: 'Condução',
    title: 'Mostrar lógica da jornada',
    text: 'Mais importante do que falar só o preço é mostrar que o aluno pode começar com uma trilha específica ou montar um pacote maior, conforme o objetivo e o momento dele.',
  },
]

const argumentCards = [
  {
    eyebrow: 'Argumento',
    title: 'Entrada mais acessível por uma trilha',
    text: 'Para leads que querem começar de forma mais leve, a possibilidade de fechar apenas uma trilha ajuda a reduzir barreira de entrada e facilita a decisão inicial.',
  },
  {
    eyebrow: 'Argumento',
    title: 'Pacote gera melhor percepção de custo-benefício',
    text: 'Quando o aluno já demonstra interesse maior na área, o pacote com duas, três ou quatro trilhas aumenta a percepção de continuidade, profundidade e economia por trilha.',
  },
  {
    eyebrow: 'Argumento',
    title: 'Mensalidade previsível facilita a venda',
    text: 'A regra de matrícula com o mesmo valor da mensalidade ajuda muito na clareza comercial, porque o aluno entende com facilidade quanto vai pagar ao longo da jornada.',
  },
]

export default function ProdutoOfertaPage() {
  return (
    <main className="page page--home">
      <section className="hero-block">
        <div className="hero-block__content">
          <span className="hero-block__eyebrow">Produto e oferta</span>
          <h1 className="hero-block__title">Trilhas, pacotes e lógica comercial da oferta</h1>
          <p className="hero-block__description">
            Esta página organiza a estrutura comercial das quatro trilhas da
            SAGA, mostrando duração, valores, lógica de pacote, regra de
            mensalidade e pontos que o vendedor precisa dominar para apresentar
            a proposta com clareza e segurança.
          </p>

          <div className="hero-block__actions">
            <a
              href="#precos"
              className="button button--primary"
            >
              Ver preços
            </a>

            <a
              href="#argumentos"
              className="button button--ghost"
            >
              Ver argumentos
            </a>
          </div>
        </div>

        <div className="hero-block__media">
          <div className="media-placeholder media-placeholder--large">
            <span>Trilhas, duração, matrícula e mensalidades</span>
          </div>
        </div>
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="Trilhas"
          title="As quatro frentes principais da oferta"
          description="Cada trilha possui 6 meses de duração e pode ser vendida separadamente ou em composição de pacote com duas, três ou quatro trilhas."
        />

        <div className="module-grid module-grid--three">
          {suiteCards.map((item) => (
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
        id="precos"
        className="content-section"
      >
        <SectionHeading
          eyebrow="Preços"
          title="Valores autorizados para apresentação comercial"
          description="Os valores abaixo resumem a regra comercial informada para uma trilha avulsa e para pacotes com duas, três ou quatro trilhas."
        />

        <div className="module-grid module-grid--three">
          {pricingCards.map((item) => (
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
          eyebrow="Duração"
          title="Tempo total de jornada conforme o pacote"
          description="Como cada trilha dura 6 meses, o vendedor pode traduzir facilmente o impacto de cada combinação na jornada total do aluno."
        />

        <div className="module-grid module-grid--four">
          {durationCards.map((item) => (
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
          eyebrow="Regras"
          title="Pontos comerciais que precisam ficar claros"
          description="Além do preço, o vendedor precisa dominar a lógica de vencimento, previsibilidade de pagamento e construção de proposta."
        />

        <div className="module-grid module-grid--three">
          {commercialRules.map((item) => (
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
        id="argumentos"
        className="content-section"
      >
        <SectionHeading
          eyebrow="Argumentação"
          title="Como vender melhor a estrutura da oferta"
          description="Esses pontos ajudam o vendedor a não transformar o preço em assunto isolado, mas sim em parte de uma proposta maior de valor."
        />

        <div className="module-grid module-grid--three">
          {argumentCards.map((item) => (
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