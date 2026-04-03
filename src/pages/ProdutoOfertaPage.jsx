import SectionHeading from '../components/ui/SectionHeading'

const offerBlocks = [
  {
    eyebrow: 'Produto principal',
    title: 'ART SUITE',
    text: 'O ART SUITE é o principal produto da SAGA: uma formação modular e completa, composta por quatro grandes áreas criativas — Design, Video, 3D e Game. Cada Suite tem duração de 6 meses e pode ser contratada separadamente ou em composição de trilha mais ampla.',
  },
  {
    eyebrow: 'Modelo',
    title: 'Formação modular com progressão clara',
    text: 'A lógica de produto facilita a personalização da jornada. O aluno pode iniciar por uma frente específica e expandir depois, o que ajuda o comercial a adaptar a proposta ao momento, objetivo e orçamento de cada perfil.',
  },
  {
    eyebrow: 'Mercado',
    title: 'Produto alinhado à prática profissional',
    text: 'A apresentação posiciona o curso como formação conectada ao mercado real, com repertório criativo, ferramentas profissionais, portfólio, acompanhamento ao vivo e uso prático de IA como apoio de produtividade.',
  },
]

const suiteCards = [
  {
    eyebrow: 'Suite 01',
    title: 'Design',
    text: 'Foco em design gráfico, identidade visual, composição, narrativa visual, UX/UI, branding e portfólio. Ferramentas destacadas: Illustrator, Photoshop, Figma e apoio de IA.',
    image: 'https://cdn.saga.com.br/files01/Apresentacao/design.png',
  },
  {
    eyebrow: 'Suite 02',
    title: 'Video',
    text: 'Abrange edição de vídeo, storytelling, motion graphics, conteúdo para redes sociais e uso de IA no audiovisual. Ferramentas destacadas: Premiere Pro e After Effects.',
    image: 'https://cdn.saga.com.br/files01/Apresentacao/ONDEMAND2.jpeg',
  },
  {
    eyebrow: 'Suite 03',
    title: '3D',
    text: 'Formação em modelagem, texturização, escultura digital, visualização e portfólio 3D. Ferramentas destacadas: Blender, ZBrush, Substance Painter e engines real time.',
    image: 'https://cdn.saga.com.br/files01/Apresentacao/3d.png',
  },
  {
    eyebrow: 'Suite 04',
    title: 'Game',
    text: 'Foco em game design, UI/UX para games, programação aplicada, publicação e mercado. Ferramentas destacadas: Unity, Unreal Engine e recursos de IA para desenvolvimento.',
    image: 'https://cdn.saga.com.br/files01/Apresentacao/game.png',
  },
]

const differentiators = [
  {
    eyebrow: 'Diferencial',
    title: 'Aulas 100% ao vivo',
    text: 'As suítes são apresentadas com aulas ao vivo, professor titular e auxiliar em sala, reforçando proximidade, interação, dúvidas em tempo real e evolução acompanhada.',
  },
  {
    eyebrow: 'Diferencial',
    title: 'Uso de IA com visão de mercado',
    text: 'A IA aparece como ferramenta de apoio para geração de ideias, referências, automação de tarefas e ganho de produtividade, sem substituir o pensamento criativo do aluno.',
  },
  {
    eyebrow: 'Diferencial',
    title: 'Portfólio e empregabilidade',
    text: 'A construção de portfólio e a conexão com funções reais de mercado aparecem como parte central da oferta, ajudando o comercial a vender evolução profissional e não apenas curso.',
  },
]

const supportOffers = [
  {
    eyebrow: 'Benefício',
    title: 'Adobe Pass SAGA',
    text: 'Parceria exclusiva entre SAGA e Adobe para alunos elegíveis. A apresentação destaca valor de R$ 80/mês, sem aumento no segundo ano, sem multa e com acesso ao padrão de mercado desde o início.',
    href: 'https://hub.saga.com.br/adobepass',
  },
  {
    eyebrow: 'Ecossistema',
    title: 'HUB SAGA',
    text: 'Plataforma educacional proprietária com acompanhamento, comunidade, cursos extras, dados e experiência digital do aluno. É um forte argumento de valor complementar à oferta principal.',
    href: 'https://hub.saga.com.br',
  },
  {
    eyebrow: 'Conteúdo extra',
    title: 'Cursos On-Demand',
    text: 'A apresentação também destaca mais de 30 cursos on-demand no ecossistema do HUB, com lançamentos ao longo do ano e conteúdos atualizados em tecnologia, criação e mercado.',
    href: 'https://hub.saga.com.br/cursos/ondemand',
  },
]

function SuiteVisualCard({ eyebrow, title, text, image }) {
  return (
    <article className="module-card">
      <div
        style={{
          width: '100%',
          height: '220px',
          borderRadius: '18px',
          overflow: 'hidden',
          marginBottom: '18px',
          border: '1px solid rgba(255,255,255,0.08)',
          background: '#111',
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      <span className="module-card__eyebrow">{eyebrow}</span>
      <h3 className="module-card__title">{title}</h3>
      <p className="module-card__text">{text}</p>
    </article>
  )
}

export default function ProdutoOfertaPage() {
  return (
    <main className="page page--home">
      <section className="hero-block">
        <div className="hero-block__content">
          <span className="hero-block__eyebrow">Produto e Oferta</span>
          <h1 className="hero-block__title">Como apresentar valor real da SAGA</h1>
          <p className="hero-block__description">
            Esta página consolida os principais argumentos comerciais da
            apresentação institucional sobre produto: ART SUITE, trilhas
            criativas, aulas ao vivo, uso de IA, HUB SAGA e benefícios como o
            Adobe Pass. O objetivo é transformar conteúdo institucional em fala
            comercial mais forte, segura e bem estruturada.
          </p>

          <div className="hero-block__actions">
            <a
              href="https://hub.saga.com.br/adobepass"
              target="_blank"
              rel="noreferrer"
              className="button button--primary"
            >
              Ver Adobe Pass
            </a>

            <a
              href="https://hub.saga.com.br/cursos/ondemand"
              target="_blank"
              rel="noreferrer"
              className="button button--ghost"
            >
              Ver on-demand
            </a>
          </div>
        </div>

        <div className="hero-block__media">
          <div className="media-placeholder media-placeholder--large">
            <img
              src="https://cdn.saga.com.br/files01/Apresentacao/social-bg.png"
              alt="ART SUITE SAGA"
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
          title="Estrutura da oferta principal"
          description="A apresentação institucional posiciona o ART SUITE como produto principal da SAGA, apoiado por modularidade, repertório de mercado e argumentos claros de diferenciação."
        />

        <div className="module-grid module-grid--three">
          {offerBlocks.map((block) => (
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
          eyebrow="Suites"
          title="As quatro frentes centrais do ART SUITE"
          description="Essas trilhas ajudam o comercial a explicar o produto com mais clareza, conectando linguagem criativa, ferramentas e possibilidades de carreira."
        />

        <div className="module-grid module-grid--three">
          {suiteCards.map((card) => (
            <SuiteVisualCard
              key={card.title}
              eyebrow={card.eyebrow}
              title={card.title}
              text={card.text}
              image={card.image}
            />
          ))}
        </div>
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="Diferenciais"
          title="Argumentos que fortalecem a proposta"
          description="A apresentação não vende apenas conteúdo. Ela reforça modelo, acompanhamento, tecnologia, construção de portfólio e aderência ao mercado real."
        />

        <div className="module-grid module-grid--three">
          {differentiators.map((item) => (
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
          eyebrow="Complementos"
          title="Ofertas e benefícios que ampliam valor"
          description="Além do curso principal, a apresentação reforça benefícios e recursos complementares que ajudam a sustentar a percepção de valor da proposta."
        />

        <div className="module-grid module-grid--three">
          {supportOffers.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="module-card module-card--link"
            >
              <span className="module-card__eyebrow">{item.eyebrow}</span>
              <h3 className="module-card__title">{item.title}</h3>
              <p className="module-card__text">{item.text}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}