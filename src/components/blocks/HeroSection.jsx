export default function HeroSection() {
  return (
    <section className="hero-block">
      <div className="hero-block__content">
        <span className="hero-block__eyebrow">Portal Comercial</span>
        <h1 className="hero-block__title">
          Plataforma modular com visual dark para conteúdo comercial
        </h1>
        <p className="hero-block__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="hero-block__actions">
          <a
            className="button button--primary"
            href="#modulos"
          >
            Explorar módulos
          </a>
          <a
            className="button button--ghost"
            href="#destaques"
          >
            Ver destaques
          </a>
        </div>
      </div>

      <div className="hero-block__media">
        <div className="media-placeholder media-placeholder--large">
          <span>Imagem / vídeo principal</span>
        </div>
      </div>
    </section>
  )
}