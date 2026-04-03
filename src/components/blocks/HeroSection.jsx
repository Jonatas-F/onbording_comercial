import { heroSection } from '../../data/homePageData'

export default function HeroSection() {
  return (
    <section className="hero-block">
      <div className="hero-block__content">
        <span className="hero-block__eyebrow">{heroSection.eyebrow}</span>
        <h1 className="hero-block__title">{heroSection.title}</h1>
        <p className="hero-block__description">{heroSection.description}</p>

        <div className="hero-block__actions">
          <a
            className="button button--primary"
            href={heroSection.primaryAction.href}
          >
            {heroSection.primaryAction.label}
          </a>
          <a
            className="button button--ghost"
            href={heroSection.secondaryAction.href}
          >
            {heroSection.secondaryAction.label}
          </a>
        </div>
      </div>

      <div className="hero-block__media">
        <div className="media-placeholder media-placeholder--large">
          <span>{heroSection.mediaLabel}</span>
        </div>
      </div>
    </section>
  )
}