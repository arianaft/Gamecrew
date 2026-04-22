import { useSessionContext } from '../context/SessionContext'
import SessionCard from '../components/SessionCard'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage from '../components/ErrorMessage'
import { Link } from 'react-router-dom'

export default function HomePage() {
  const { sessions, loading, error } = useSessionContext()

  const activeSession = sessions.find(s => !s.isPlayed)
  const lastSession = sessions.filter(s => s.isPlayed).at(-1)

  if (loading) return <LoadingSpinner />
  if (error) return <ErrorMessage message={error} />

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">GameCrew</h1>
        <p className="text-gray-400">Organiza tus sesiones de juego con amigos.</p>
      </div>

      {activeSession ? (
        <div>
          <h2 className="text-xl font-bold text-white mb-3">Sesión activa</h2>
          <SessionCard session={activeSession} />
        </div>
      ) : (
        <div className="bg-gray-800 rounded-xl p-6 text-center">
          <p className="text-gray-400 mb-4">No hay ninguna sesión activa.</p>
          <Link
            to="/sesiones/nueva"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Crear sesión
          </Link>
        </div>
      )}

      {lastSession && (
        <div>
          <h2 className="text-xl font-bold text-white mb-3">Última sesión jugada</h2>
          <SessionCard session={lastSession} />
        </div>
      )}
    </div>
  )
}