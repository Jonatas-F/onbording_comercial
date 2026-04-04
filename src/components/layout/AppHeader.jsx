import { Link } from 'react-router-dom'

const navigationLinks = [
  { to: '/', label: 'Home' },
  { to: '/onboarding', label: 'Onboarding' },
  { to: '/processo-vendas', label: 'Funil Comercial' },
  { to: '/crm-sankhya', label: 'Sankhya' },
  { to: '/neppo', label: 'NEPPO' },
  { to: '/pos-venda', label: 'Pós-venda' },
  { to: '/boas-praticas-cases', label: 'Cases' },
  { to: '/hub', label: 'HUB' },
  { to: '/abordagem-scripts', label: 'Abordagem, scripts e objeções' },
  { to: '/produto-oferta', label: 'Produto e oferta' },
  { to: '/indicadores-metas', label: 'Indicadores e metas' },
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