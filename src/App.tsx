import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import SessionsPage from './pages/SessionsPage'
import SessionDetailPage from './pages/SessionDetailPage'
import NewSessionPage from './pages/NewSessionPage'
import StatsPage from './pages/StatsPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <div style={{ background: '#0a0a0f', minHeight: '100vh' }}>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sesiones" element={<SessionsPage />} />
          <Route path="/sesiones/nueva" element={<NewSessionPage />} />
          <Route path="/sesiones/:id" element={<SessionDetailPage />} />
          <Route path="/estadisticas" element={<StatsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  )
}