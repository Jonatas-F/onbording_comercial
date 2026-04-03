import ModuleCard from '../ui/ModuleCard'
import SectionHeading from '../ui/SectionHeading'

export default function ModuleSection({
  id,
  eyebrow,
  title,
  description,
  cards = [],
  columns = 'three',
}) {
  const gridClassName =
    columns === 'four'
      ? 'module-grid module-grid--four'
      : 'module-grid module-grid--three'

  return (
    <section
      id={id}
      className="content-section"
    >
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      <div className={gridClassName}>
        {cards.map((card) => (
          <ModuleCard
            key={card.title}
            eyebrow={card.eyebrow}
            title={card.title}
            text={card.text}
          />
        ))}
      </div>
    </section>
  )
}