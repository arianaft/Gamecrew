import { useSessionContext } from '../context/SessionContext'
import { useStats } from '../hooks/useStats'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage from '../components/ErrorMessage'

export default function StatsPage() {
  const { sessions, loading, error } = useSessionContext()
  const { mostVotedGame, mostActiveParticipant, bestRatedSession, totalSessions } = useStats(sessions)

  if (loading) return <LoadingSpinner />
  if (error) return <ErrorMessage message={error} />

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-white">Estadísticas</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-800 rounded-xl p-4">
          <p className="text-gray-400 text-sm mb-1">Total de sesiones</p>
          <p className="text-white text-2xl font-bold">{totalSessions}</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-4">
          <p className="text-gray-400 text-sm mb-1">Juego más votado</p>
          <p className="text-white text-lg font-bold">{mostVotedGame}</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-4">
          <p className="text-gray-400 text-sm mb-1">Participante más activo</p>
          <p className="text-white text-lg font-bold">{mostActiveParticipant}</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-4">
  <p className="text-gray-400 text-sm mb-1">Mejor sesión valorada</p>
  {bestRatedSession ? (
    <>
      <p className="text-white text-lg font-bold">{bestRatedSession.chosenGame}</p>
      <p className="text-yellow-400 text-sm mt-1">{'★'.repeat(bestRatedSession.rating ?? 0)}</p>
    </>
  ) : (
    <p className="text-white text-lg font-bold">Sin datos</p>
  )}
</div>
      </div>
    </div>
  )
}