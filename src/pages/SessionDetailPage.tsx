import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import * as api from '../api/client'
import type { Session } from '../types'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage from '../components/ErrorMessage'
import GameProposalForm from '../components/GameProposalForm'
import RatingStars from '../components/RatingStars'
import Button from '../components/Button'

export default function SessionDetailPage() {
  const { id } = useParams()
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [rating, setRating] = useState(0)
  const [ratingSuccess, setRatingSuccess] = useState(false)
  const [votedGameId, setVotedGameId] = useState<string | null>(null)

  useEffect(() => {
    const load = async () => {
      try {
        const data = await api.getSessionById(id!)
        setSession(data)
        if (data.rating) setRating(data.rating)
      } catch {
        setError('No se pudo cargar la sesión')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [id])

  const handleAddGame = async (gameName: string, proposedBy: string, image?: string) => {
    if (!session) return
    try {
      await api.addGame(session.id, gameName, proposedBy, image)
      const updated = await api.getSessionById(session.id)
      setSession(updated)
    } catch {
      setError('Error al añadir el juego')
    }
  }

  const handleVote = async (gameId: string, participantName: string) => {
    if (!session) return
    try {
      const updated = await api.voteForGame(session.id, gameId, participantName)
      setSession(updated)
      setVotedGameId(gameId)
    } catch {
      setError('Error al votar')
    }
  }

  const handleRate = async () => {
    if (!session || rating === 0) return
    try {
      const updated = await api.rateSession(session.id, rating)
      setSession(updated)
      setRatingSuccess(true)
    } catch {
      setError('Error al valorar la sesión')
    }
  }

  if (loading) return <LoadingSpinner />
  if (error) return <ErrorMessage message={error} />
  if (!session) return <ErrorMessage message="Sesión no encontrada" />

  const winningGame = session.games.length > 0
    ? session.games.reduce((a, b) => a.votes.length >= b.votes.length ? a : b)
    : null

  return (
    <div className="flex flex-col gap-6">

      <div>
        <h1 className="text-2xl font-bold text-white">{session.chosenGame || 'Sesión sin nombre'}</h1>
        <p className="text-gray-400 mt-1">{session.date}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {session.participants.map(p => (
            <span key={p.id} className="bg-purple-900 text-purple-200 text-xs px-3 py-1 rounded-full">
              {p.name}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-white mb-3">Proponer juego</h2>
        <GameProposalForm onSubmit={handleAddGame} />
      </div>

      {session.games.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-white mb-3">Juegos propuestos</h2>
          <div className="flex flex-col gap-3">
            {session.games.map(game => (
              <div
                key={game.id}
                className={`bg-gray-800 rounded-xl p-4 border ${winningGame?.id === game.id ? 'border-purple-500' : 'border-gray-700'}`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    {game.image && (
                      <img src={game.image} alt={game.name} className="w-16 h-12 object-cover rounded-lg" />
                    )}
                    <div>
                      <p className="text-white font-medium">{game.name}</p>
                      <p className="text-gray-400 text-sm">Propuesto por {game.proposedBy}</p>
                      <p className="text-purple-400 text-sm mt-1">
                        {game.votes.length} {game.votes.length === 1 ? 'voto' : 'votos'}
                      </p>
                    </div>
                  </div>
                  <Button
                    label={votedGameId === game.id ? '✓ Votado' : 'Votar'}
                    onClick={() => handleVote(game.id, session.participants[0]?.name || 'Anónimo')}
                    variant={votedGameId === game.id ? 'secondary' : 'primary'}
                    disabled={votedGameId !== null}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div>
        <h2 className="text-xl font-bold text-white mb-3">Valorar sesión</h2>
        <div className="bg-gray-800 rounded-xl p-4 flex flex-col gap-3">
          <RatingStars value={rating} onChange={setRating} />
          {ratingSuccess && (
            <p className="text-green-400 text-sm">¡Valoración guardada!</p>
          )}
          <Button label="Guardar valoración" onClick={handleRate} variant="primary" disabled={rating === 0} />
        </div>
      </div>

    </div>
  )
}