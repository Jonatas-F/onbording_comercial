function ModuleCard({ eyebrow, title, text }) {
  return (
    <article className="module-card">
      <span className="module-card__eyebrow">{eyebrow}</span>
      <h3 className="module-card__title">{title}</h3>
      <p className="module-card__text">{text}</p>
    </article>
  )
}

export default function HomePage() {
  return (
    <main className="page page--home">
      <section className="hero-block">
        <div className="hero-block__content">
          <span className="hero-block__eyebrow">Portal Comercial</span>
          <h1 className="hero-block__title">
            Plataforma modular com visual dark para conteúdo comercial
          </h1>
          <p className="hero-block__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
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

      <section
        id="destaques"
        className="content-section"
      >
        <div className="section-heading">
          <span className="section-heading__eyebrow">Destaques</span>
          <h2 className="section-heading__title">Blocos reorganizáveis</h2>
          <p className="section-heading__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </div>

        <div className="module-grid module-grid--three">
          <ModuleCard
            eyebrow="Texto"
            title="Conteúdo em módulos"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
          />
          <ModuleCard
            eyebrow="Imagem"
            title="Cards visuais independentes"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum."
          />
          <ModuleCard
            eyebrow="Vídeo"
            title="Blocos flexíveis por resolução"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur."
          />
        </div>
      </section>

      <section
        id="modulos"
        className="content-section"
      >
        <div className="section-heading">
          <span className="section-heading__eyebrow">Estrutura</span>
          <h2 className="section-heading__title">Módulos do portal</h2>
        </div>

        <div className="module-grid module-grid--four">
          <ModuleCard
            eyebrow="01"
            title="Onboarding"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ModuleCard
            eyebrow="02"
            title="Processo de vendas"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ModuleCard
            eyebrow="03"
            title="CRM Sankhya"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ModuleCard
            eyebrow="04"
            title="Técnicas de venda"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ModuleCard
            eyebrow="05"
            title="Objeções"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ModuleCard
            eyebrow="06"
            title="Indicadores e metas"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ModuleCard
            eyebrow="07"
            title="Boas práticas"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ModuleCard
            eyebrow="08"
            title="Biblioteca"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </section>
    </main>
  )
}