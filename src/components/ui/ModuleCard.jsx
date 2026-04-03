export default function ModuleCard({ eyebrow, title, text }) {
  return (
    <article className="module-card">
      <span className="module-card__eyebrow">{eyebrow}</span>
      <h3 className="module-card__title">{title}</h3>
      <p className="module-card__text">{text}</p>
    </article>
  )
}