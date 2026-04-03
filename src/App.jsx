import { Route, Routes } from 'react-router-dom'
import AppHeader from './components/layout/AppHeader'
import { appRoutes } from './routes/appRoutes'

export default function App() {
  return (
    <div className="app-shell">
      <AppHeader />

      <Routes>
        {appRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </div>
  )
}