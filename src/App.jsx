import { Route, Routes } from 'react-router-dom'
import AppHeader from './components/layout/AppHeader'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <div className="app-shell">
      <AppHeader />

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