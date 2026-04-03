import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <div className="app-shell">
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

      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </div>
  )
}