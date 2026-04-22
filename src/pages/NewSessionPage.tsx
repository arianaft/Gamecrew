import { useSessionContext } from '../context/SessionContext'
import NewSessionForm from '../components/NewSessionForm'
import { useNavigate } from 'react-router-dom'
import type { Session } from '../types'

export default function NewSessionPage() {
  const { addSession } = useSessionContext()
  const navigate = useNavigate()

  const handleSubmit = async (data: Omit<Session, 'id' | 'games' | 'isPlayed'>) => {
    await addSession(data)
    navigate('/sesiones')
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6">Nueva sesión</h1>
      <NewSessionForm onSubmit={handleSubmit} />
    </div>
  )
}