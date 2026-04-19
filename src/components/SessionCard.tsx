import type { Session } from '../types'
import { Link } from 'react-router-dom'

interface SessionCardProps {
  session: Session
}

export default function SessionCard({ session }: SessionCardProps) {
  return (
    <Link to={`/sesiones/${session.id}`}>
      <div className="bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition-colors cursor-pointer border border-gray-700">
        <div className="flex justify-between items-start mb-2">
          <p className="text-white font-medium">
            {session.chosenGame ?? 'Sin juego elegido'}
          </p>
          {session.rating && (
            <span className="text-yellow-400 text-sm">
              {'★'.repeat(session.rating)}
            </span>
          )}
        </div>
        <p className="text-gray-400 text-sm mb-3">{session.date}</p>
        <div className="flex flex-wrap gap-2">
          {session.participants.map(p => (
            <span key={p.id} className="bg-purple-900 text-purple-200 text-xs px-2 py-1 rounded-full">
              {p.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}