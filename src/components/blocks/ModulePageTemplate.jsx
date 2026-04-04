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

function VideoPlayer({ src, title }) {
  if (!src) {
    return (
      <div className="media-placeholder media-placeholder--large">
        <span>{title || 'Área de vídeo'}</span>
      </div>
    )
  }

  return (
    <div className="video-frame">
      <video
        className="video-frame__player"
        controls
        preload="metadata"
      >
        <source
          src={src}
          type="video/mp4"
        />
        Seu navegador não suporta vídeo em HTML5.
      </video>
    </div>
  )
}

function HeroMedia({ heroImageUrl, heroImageAlt, heroVideoUrl, videoPlaceholderLabel }) {
  if (heroImageUrl) {
    return (
      <div className="media-placeholder media-placeholder--large">
        <img
          src={heroImageUrl}
          alt={heroImageAlt || 'Imagem de capa do módulo'}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '20px',
            opacity: 0.96,
          }}
        />
      </div>
    )
  }

  return (
    <VideoPlayer
      src={heroVideoUrl}
      title={videoPlaceholderLabel}
    />
  )
}

export default function ModulePageTemplate({
  eyebrow,
  title,
  description,
  introLabel = 'Visão geral',
  introTitle = 'Resumo do módulo',
  introText = 'Resumo introdutório do conteúdo.',
  contentTitle = 'Conteúdo do módulo',
  contentDescription = 'Principais pontos abordados nesta etapa.',
  textBlocks = [],
  videoEyebrow = 'Vídeo',
  videoTitle = 'Vídeo do módulo',
  videoDescription = 'Assista ao vídeo de apoio deste conteúdo.',
  videoPlaceholderLabel = 'Área de vídeo',
  heroVideoUrl = '',
  sectionVideoUrl = '',
  heroImageUrl = '',
  heroImageAlt = '',
}) {
  const heroVideoSource = heroVideoUrl || sectionVideoUrl
  const sectionVideoSource = sectionVideoUrl || heroVideoUrl

  return (
    <main className="page page--home">
      <section className="hero-block">
        <div className="hero-block__content">
          <span className="hero-block__eyebrow">{eyebrow}</span>
          <h1 className="hero-block__title">{title}</h1>
          <p className="hero-block__description">{description}</p>
        </div>

        <div className="hero-block__media">
          <HeroMedia
            heroImageUrl={heroImageUrl}
            heroImageAlt={heroImageAlt}
            heroVideoUrl={heroVideoSource}
            videoPlaceholderLabel={videoPlaceholderLabel}
          />
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
          <VideoPlayer
            src={sectionVideoSource}
            title={videoPlaceholderLabel}
          />
        </div>
      </section>
    </main>
  )
}