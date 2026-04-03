export default function AppHeader() {
  return (
    <header className="topbar">
      <div className="topbar__brand">
        <span className="topbar__mark" />
        <span className="topbar__name">Portal Comercial</span>
      </div>

      <nav className="topbar__nav">
        <a href="#destaques">Destaques</a>
        <a href="#modulos">Módulos</a>
      </nav>
    </header>
  )
}