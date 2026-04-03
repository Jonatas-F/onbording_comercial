import SectionHeading from '../ui/SectionHeading'

function TextBlock({ eyebrow, title, text }) {
  return (
    <article className="module-card">
      <span className="module-card__eyebrow">{eyebrow}</span>
      <h3 className="module-card__title">{title}</h3>
      <p className="module-card__text">{text}</p>
    </article>
  )
}

export default function ModulePageTemplate({
  eyebrow,
  title,
  description,
  introLabel = 'Visão geral',
  introTitle = 'Resumo do módulo',
  introText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
  contentTitle = 'Conteúdo do módulo',
  contentDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis.',
  textBlocks = [],
  videoEyebrow = 'Vídeo',
  videoTitle = 'Vídeo do módulo',
  videoDescription = 'Espaço reservado para um vídeo explicativo relacionado a este conteúdo.',
  videoPlaceholderLabel = 'Área de vídeo',
}) {
  return (
    <main className="page page--home">
      <section className="hero-block">
        <div className="hero-block__content">
          <span className="hero-block__eyebrow">{eyebrow}</span>
          <h1 className="hero-block__title">{title}</h1>
          <p className="hero-block__description">{description}</p>
        </div>

        <div className="hero-block__media">
          <div className="media-placeholder media-placeholder--large">
            <span>{videoPlaceholderLabel}</span>
          </div>
        </div>
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow={introLabel}
          title={introTitle}
          description={introText}
        />
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="Conteúdo"
          title={contentTitle}
          description={contentDescription}
        />

        <div className="module-grid module-grid--three">
          {textBlocks.map((block) => (
            <TextBlock
              key={block.title}
              eyebrow={block.eyebrow}
              title={block.title}
              text={block.text}
            />
          ))}
        </div>
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow={videoEyebrow}
          title={videoTitle}
          description={videoDescription}
        />

        <div className="hero-block__media">
          <div className="media-placeholder media-placeholder--large">
            <span>{videoPlaceholderLabel}</span>
          </div>
        </div>
      </section>
    </main>
  )
}