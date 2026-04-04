import ModuleSection from '../components/blocks/ModuleSection'
import { highlightsSection, modulesSection } from '../data/homePageData'

export default function HomePage() {
  return (
    <main className="page page--home">
      <ModuleSection
        id="destaques"
        eyebrow={highlightsSection.eyebrow}
        title={highlightsSection.title}
        description={highlightsSection.description}
        cards={highlightsSection.cards}
        columns="three"
      />

      <ModuleSection
        id="modulos"
        eyebrow={modulesSection.eyebrow}
        title={modulesSection.title}
        cards={modulesSection.cards}
        columns="four"
      />
    </main>
  )
}