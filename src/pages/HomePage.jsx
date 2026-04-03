import HeroSection from '../components/blocks/HeroSection'
import ModuleCard from '../components/ui/ModuleCard'
import SectionHeading from '../components/ui/SectionHeading'
import { highlightsSection, modulesSection } from '../data/homePageData'

export default function HomePage() {
  return (
    <main className="page page--home">
      <HeroSection />

      <section
        id="destaques"
        className="content-section"
      >
        <SectionHeading
          eyebrow={highlightsSection.eyebrow}
          title={highlightsSection.title}
          description={highlightsSection.description}
        />

        <div className="module-grid module-grid--three">
          {highlightsSection.cards.map((card) => (
            <ModuleCard
              key={card.title}
              eyebrow={card.eyebrow}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </section>

      <section
        id="modulos"
        className="content-section"
      >
        <SectionHeading
          eyebrow={modulesSection.eyebrow}
          title={modulesSection.title}
        />

        <div className="module-grid module-grid--four">
          {modulesSection.cards.map((card) => (
            <ModuleCard
              key={card.title}
              eyebrow={card.eyebrow}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </section>
    </main>
  )
}