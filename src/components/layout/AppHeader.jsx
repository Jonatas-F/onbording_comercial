import { Link } from 'react-router-dom'

const navigationLinks = [
  { to: '/', label: 'Home' },
  { to: '/onboarding', label: 'Onboarding' },
  { to: '/processo-vendas', label: 'Processo de vendas' },
  { to: '/crm-sankhya', label: 'CRM Sankhya' },
  { to: '/abordagem-scripts', label: 'Abordagem e scripts' },
  { to: '/produto-oferta', label: 'Produto e oferta' },
  { to: '/tecnicas-venda', label: 'Técnicas de venda' },
  { to: '/indicadores-metas', label: 'Indicadores e metas' },
  { to: '/objecoes', label: 'Objeções' },
  { to: '/boas-praticas-cases', label: 'Boas práticas e cases' },
  { to: '/biblioteca', label: 'Biblioteca' },
]

export default function AppHeader() {
  return (
    <header className="topbar">
      <Link
        to="/"
        className="topbar__brand"
      >
        <span className="topbar__mark" />
        <span className="topbar__name">Portal Comercial</span>
      </Link>

      <nav className="topbar__nav">
        {navigationLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}