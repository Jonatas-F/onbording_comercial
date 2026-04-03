import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <main className="page page--not-found">
      <section className="not-found-block">
        <span className="not-found-block__eyebrow">404</span>
        <h1 className="not-found-block__title">Página não encontrada</h1>
        <p className="not-found-block__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id elit
          non mi porta gravida at eget metus.
        </p>

        <Link
          to="/"
          className="button button--primary"
        >
          Voltar para a home
        </Link>
      </section>
    </main>
  )
}