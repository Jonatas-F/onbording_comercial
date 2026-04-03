import SectionHeading from '../components/ui/SectionHeading'

const impactBlocks = [
  {
    eyebrow: 'Credibilidade',
    title: 'Casos que validam a proposta',
    text: 'Os cases de sucesso ajudam a transformar discurso em prova concreta. Eles mostram que a formação da SAGA está conectada a carreiras reais em empresas relevantes do mercado criativo, tech e entretenimento.',
  },
  {
    eyebrow: 'Aspiração',
    title: 'Portfólio, mercado e trajetória',
    text: 'A apresentação institucional usa portfólios e trajetórias profissionais para demonstrar evolução prática. Isso fortalece a percepção de valor da escola e aproxima a conversa comercial do futuro que o aluno deseja construir.',
  },
  {
    eyebrow: 'Argumentação',
    title: 'Venda orientada por prova',
    text: 'Quando bem usados, os cases não servem só para impressionar. Eles ajudam a contextualizar áreas, mostrar amplitude de atuação e reforçar que a formação pode abrir caminhos em design, audiovisual, 3D, games e produto digital.',
  },
]

const portfolioWorks = [
  {
    name: 'Lucas Silva',
    thumbnail: '/cases/case-01-lucas-silva.png',
    url: 'https://www.artstation.com/lucasemsilva',
    note: 'Portfólio artístico apresentado no material institucional.',
  },
  {
    name: 'Atila Salviano',
    thumbnail: '/cases/case-02-atila-salviano.png',
    url: 'https://www.atilasalvianoart.com/bio',
    note: 'Referência de portfólio com presença autoral forte.',
  },
  {
    name: 'Pedro Caraca',
    thumbnail: '/cases/case-03-pedro-caraca.png',
    url: 'https://www.artstation.com/pedrocaraca',
    note: 'Case visual usado para reforçar repertório de mercado.',
  },
  {
    name: 'Thiago Vilarinho',
    thumbnail: '/cases/case-04-thiago-vilarinho.png',
    url: 'https://thiagovilarinho.com',
    note: 'Trabalho apresentado como referência de evolução profissional.',
  },
  {
    name: 'Raul Sales',
    thumbnail: '/cases/case-05-raul-sales.png',
    url: 'https://www.artstation.com/raulsales',
    note: 'Exemplo de portfolio visual ligado ao mercado criativo.',
  },
  {
    name: 'Daniel Sanches',
    thumbnail: '/cases/case-06-daniel-sanches.png',
    url: 'https://www.artstation.com/daniboy',
    note: 'Thumbnail institucional vinculada a portfólio externo.',
  },
  {
    name: 'Guilherme Rambelli',
    thumbnail: '/cases/case-07-guilherme-rambelli.png',
    url: 'https://www.artstation.com/grambelli',
    note: 'Portfólio destacado na apresentação como referência de mercado.',
  },
  {
    name: 'Leticia Gillett',
    thumbnail: '/cases/case-08-leticia-gillett.png',
    url: 'https://www.artstation.com/leticiarg',
    note: 'Portfólio apresentado como exemplo de qualidade e carreira.',
  },
]

const successCases = [
  {
    name: 'Josue Vilela',
    company: 'Ubisoft',
    role: 'Associate Technical Director (Characters)',
    area: '3D / Game',
    profileUrl: 'https://ca.linkedin.com/in/josuevilela',
  },
  {
    name: 'Leticia Gillett',
    company: 'Walt Disney Animation Studios',
    role: 'Character Modeler / 3D',
    area: '3D / Audiovisual',
    profileUrl: 'https://www.linkedin.com/in/leticiagillett',
  },
  {
    name: 'Frederico Miyasaki',
    company: 'Riot Games',
    role: 'Editor de Vídeo / Conteúdo',
    area: 'Audiovisual',
    profileUrl: 'https://br.linkedin.com/in/fredmiyasaki',
  },
  {
    name: 'Guilherme Rambelli',
    company: 'Treyarch (Activision)',
    role: 'Art Lead',
    area: '3D / Game',
    profileUrl: 'https://www.linkedin.com/in/guilherme-rambelli-28b92745',
  },
  {
    name: 'Monica Formiga Vezzali',
    company: 'Microsoft',
    role: 'Experience Design',
    area: 'Design / Produto',
    profileUrl: 'https://br.linkedin.com/in/monica-vezzali/en',
  },
  {
    name: 'Raphael Rosa',
    company: 'Riot Games',
    role: 'Software Engineer',
    area: 'Game',
    profileUrl: 'https://br.linkedin.com/in/rosaraphael',
  },
  {
    name: 'Guilherme Palhari',
    company: 'Epic Games',
    role: 'Technical Artist / Tech UI Designer',
    area: 'Game / Design',
    profileUrl: 'https://br.linkedin.com/in/guilherme-palhari/en',
  },
  {
    name: 'Thiago Vilarinho',
    company: 'Epic Games',
    role: 'Artista Técnico',
    area: 'Game / 3D',
    profileUrl: 'https://br.linkedin.com/in/thiagovilarinho',
  },
  {
    name: 'Douglas Brilha',
    company: 'Epic Games',
    role: 'Game Programmer / Tech UI Designer',
    area: 'Game',
    profileUrl: 'https://br.linkedin.com/in/douglas-brilha-936083b8',
  },
  {
    name: 'Bruna Lanzarini',
    company: 'Microsoft',
    role: 'Design / Digital',
    area: 'Design / Digital',
    profileUrl: 'https://br.linkedin.com/in/brunadl',
  },
  {
    name: 'Bruno Groper Morbin',
    company: 'Shopee',
    role: 'Design / Digital',
    area: 'Design / Digital',
    profileUrl: 'https://br.linkedin.com/in/bruno-groper-morbin',
  },
  {
    name: 'Larissa Fregni',
    company: 'Cheil Brasil',
    role: 'Design / Audiovisual',
    area: 'Design / Audiovisual',
    profileUrl: 'https://br.linkedin.com/in/larissa-fregni',
  },
  {
    name: 'Fernanda Soares Pinho',
    company: 'Cheil Brasil',
    role: 'Design',
    area: 'Design',
    profileUrl: 'https://br.linkedin.com/in/spinho-fe',
  },
  {
    name: 'Lucas Ribeiro',
    company: 'Mercado Livre',
    role: 'Design / Digital',
    area: 'Design / Digital',
    profileUrl: 'https://br.linkedin.com/in/lucas-pedrosa/pt',
  },
  {
    name: 'Erik Junior',
    company: 'Mercado Livre Brasil',
    role: 'Design / Digital',
    area: 'Design / Digital',
    profileUrl: 'https://br.linkedin.com/in/erik-junior-public94',
  },
  {
    name: 'Michel de Melo',
    company: 'Mercado Livre',
    role: 'UX/UI Designer',
    area: 'Design / Produto',
    profileUrl: 'https://br.linkedin.com/in/michel-de-melo-9b9b9961',
  },
  {
    name: 'Francisco Olvera',
    company: 'Mercado Livre',
    role: 'Senior',
    area: 'Game / Tech',
    profileUrl: 'https://br.linkedin.com/in/francisco-olvera-relirk',
  },
  {
    name: 'Soraia Golfin de Sousa',
    company: 'LOUD',
    role: 'Esports Manager',
    area: 'Game',
    profileUrl: 'https://br.linkedin.com/in/soraiars',
  },
  {
    name: 'Vitória Morais',
    company: 'Riot Games (Projetos)',
    role: 'Design / Audiovisual',
    area: 'Design / Audiovisual',
    profileUrl: 'https://br.linkedin.com/in/vicksmorais',
  },
  {
    name: 'Peter Vicente Casale',
    company: 'Netflix (Produções)',
    role: 'Video Editor / Audiovisual Producer',
    area: 'Audiovisual',
    profileUrl: 'https://br.linkedin.com/in/petervicentecasale/en',
  },
]

function PortfolioThumbnailCard({ item }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      className="module-card module-card--link"
    >
      <div
        style={{
          width: '100%',
          height: '220px',
          borderRadius: '18px',
          overflow: 'hidden',
          marginBottom: '18px',
          border: '1px solid rgba(255,255,255,0.08)',
          backgroundColor: '#111',
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.28) 100%), url(${item.thumbnail})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <span className="module-card__eyebrow">Thumbnail</span>
      <h3 className="module-card__title">{item.name}</h3>
      <p className="module-card__text">{item.note}</p>
    </a>
  )
}

function CareerCaseCard({ item }) {
  return (
    <a
      href={item.profileUrl}
      target="_blank"
      rel="noreferrer"
      className="module-card module-card--link"
    >
      <span className="module-card__eyebrow">{item.area}</span>
      <h3 className="module-card__title">{item.name}</h3>
      <p className="module-card__text">
        <strong style={{ color: 'var(--text-primary)' }}>{item.company}</strong>
        <br />
        {item.role}
      </p>
    </a>
  )
}

export default function BoasPraticasCasesPage() {
  return (
    <main className="page page--home">
      <section className="hero-block">
        <div className="hero-block__content">
          <span className="hero-block__eyebrow">Cases de sucesso</span>
          <h1 className="hero-block__title">Provas reais de evolução e mercado</h1>
          <p className="hero-block__description">
            Esta página reúne os cases profissionais e os portfólios visuais
            presentes na apresentação institucional da SAGA. O objetivo é dar
            ao time comercial material concreto para sustentar argumento de
            valor, aspiração de carreira e credibilidade da formação.
          </p>

          <div className="hero-block__actions">
            <a
              href="https://www.artstation.com/lucasemsilva"
              target="_blank"
              rel="noreferrer"
              className="button button--primary"
            >
              Ver portfólios
            </a>

            <a
              href="https://www.linkedin.com/in/leticiagillett"
              target="_blank"
              rel="noreferrer"
              className="button button--ghost"
            >
              Ver case profissional
            </a>
          </div>
        </div>

        <div className="hero-block__media">
          <div
            className="media-placeholder media-placeholder--large"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(8,8,8,0.15) 0%, rgba(8,8,8,0.38) 100%), url('/cases/case-08-leticia-gillett.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <span>Thumbnails e trajetórias reais da apresentação</span>
          </div>
        </div>
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="Panorama"
          title="Por que esta página importa para a venda"
          description="A apresentação institucional usa prova visual e trajetória profissional para reforçar o valor da formação. Esse tipo de conteúdo é especialmente útil quando o comercial precisa sair do discurso genérico e mostrar resultado concreto."
        />

        <div className="module-grid module-grid--three">
          {impactBlocks.map((block) => (
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
          eyebrow="Portfólios"
          title="Thumbnails e links de trabalhos apresentados"
          description="Os cards abaixo aproveitam as imagens da apresentação como porta de entrada para portfólios e referências visuais externas."
        />

        <div className="module-grid module-grid--three">
          {portfolioWorks.map((item) => (
            <PortfolioThumbnailCard
              key={item.name}
              item={item}
            />
          ))}
        </div>
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="Trajetórias"
          title="Profissionais e empresas citados na apresentação"
          description="Esses cases ajudam a mostrar amplitude de atuação da SAGA em empresas de games, audiovisual, design, tecnologia e produto digital."
        />

        <div className="module-grid module-grid--three">
          {successCases.map((item) => (
            <CareerCaseCard
              key={`${item.name}-${item.company}`}
              item={item}
            />
          ))}
        </div>
      </section>
    </main>
  )
}