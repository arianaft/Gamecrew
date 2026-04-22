import { useSessionContext } from '../context/SessionContext'
import SessionCard from '../components/SessionCard'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage from '../components/ErrorMessage'
import { Link } from 'react-router-dom'

export default function SessionsPage() {
  const { sessions, loading, error } = useSessionContext()

  if (loading) return <LoadingSpinner />
  if (error) return <ErrorMessage message={error} />

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Historial de sesiones</h1>
        <Link
          to="/sesiones/nueva"
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Nueva sesión
        </Link>
      </div>
      {sessions.length === 0 ? (
        <p className="text-gray-400">No hay sesiones todavía.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {sessions.map(session => (
            <SessionCard key={session.id} session={session} />
          ))}
        </div>
      )}
    </div>
  )
}