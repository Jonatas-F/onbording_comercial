import { Link } from 'react-router-dom'

export default function ModuleCard({ eyebrow, title, text, href }) {
  const content = (
    <>
      <span className="module-card__eyebrow">{eyebrow}</span>
      <h3 className="module-card__title">{title}</h3>
      <p className="module-card__text">{text}</p>
    </>
  )

  if (href) {
    return (
      <Link
        to={href}
        className="module-card module-card--link"
      >
        {content}
      </Link>
    )
  }

  return <article className="module-card">{content}</article>
}