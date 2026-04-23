import type { Session } from '../types'
import { Link } from 'react-router-dom'

interface SessionCardProps {
  session: Session
}

export default function SessionCard({ session }: SessionCardProps) {
  return (
    <Link to={`/sesiones/${session.id}`}>
      <div className="rounded-xl p-5 hover:scale-[1.01] transition-all duration-200 cursor-pointer"
        style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(139,92,246,0.25)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.4)'
        }}>
        <div className="flex justify-between items-start mb-2">
          <p className="text-white font-bold text-lg tracking-wide">
            {session.chosenGame ?? 'Sin juego elegido'}
          </p>
          {session.rating && (
            <span className="text-yellow-400 text-sm">{'★'.repeat(session.rating)}</span>
          )}
        </div>
        <p className="text-gray-500 text-sm mb-3">{session.date}</p>
        <div className="flex flex-wrap gap-2">
          {session.participants.map(p => (
            <span key={p.id}
              className="text-xs px-3 py-1 rounded-full"
              style={{ background: 'rgba(139,92,246,0.2)', color: '#c4b5fd', border: '1px solid rgba(139,92,246,0.3)' }}>
              {p.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}