import { useState, useEffect } from 'react'
import { searchGames } from '../api/rawg'
import type { GameResult } from '../api/rawg'
import Button from './Button'

interface GameProposalFormProps {
  onSubmit: (gameName: string, proposedBy: string) => void
}

export default function GameProposalForm({ onSubmit }: GameProposalFormProps) {
  const [gameName, setGameName] = useState('')
  const [proposedBy, setProposedBy] = useState('')
  const [errors, setErrors] = useState<{ gameName?: string; proposedBy?: string }>({})
  const [suggestions, setSuggestions] = useState<GameResult[]>([])
  const [searching, setSearching] = useState(false)

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (gameName.length >= 2) {
        setSearching(true)
        const results = await searchGames(gameName)
        setSuggestions(results)
        setSearching(false)
      } else {
        setSuggestions([])
      }
    }, 500)
    return () => clearTimeout(timer)
  }, [gameName])

  const handleSelectGame = (game: GameResult) => {
    setGameName(game.name)
    setSuggestions([])
  }

  const validate = () => {
    const newErrors: { gameName?: string; proposedBy?: string } = {}
    if (!gameName.trim()) newErrors.gameName = 'El nombre del juego es obligatorio'
    if (!proposedBy.trim()) newErrors.proposedBy = 'Tu nombre es obligatorio'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = () => {
    if (!validate()) return
    onSubmit(gameName.trim(), proposedBy.trim())
    setGameName('')
    setProposedBy('')
    setSuggestions([])
    setErrors({})
  }

  return (
    <div className="rounded-xl p-4 flex flex-col gap-3"
      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(139,92,246,0.25)' }}>

      <div className="relative">
        <label className="text-gray-300 text-sm mb-1 block">Nombre del juego</label>
        <input
          type="text"
          value={gameName}
          onChange={e => setGameName(e.target.value)}
          placeholder="Busca un juego..."
          className="w-full text-white rounded-lg px-3 py-2 border border-gray-600 focus:outline-none focus:border-purple-500"
          style={{ background: 'rgba(255,255,255,0.05)' }}
        />
        {searching && (
          <p className="text-gray-400 text-xs mt-1">Buscando...</p>
        )}
        {errors.gameName && <p className="text-red-400 text-xs mt-1">{errors.gameName}</p>}

        {suggestions.length > 0 && (
          <div className="absolute z-10 w-full mt-1 rounded-lg overflow-hidden"
            style={{ background: '#1a1a2e', border: '1px solid rgba(139,92,246,0.4)' }}>
            {suggestions.map(game => (
              <div
                key={game.id}
                onClick={() => handleSelectGame(game)}
                className="flex items-center gap-3 p-2 cursor-pointer hover:bg-purple-900 transition-colors"
              >
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-12 h-8 object-cover rounded"
                />
                <div>
                  <p className="text-white text-sm font-medium">{game.name}</p>
                  <p className="text-gray-400 text-xs">{game.genres?.[0]?.name ?? ''}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <label className="text-gray-300 text-sm mb-1 block">Tu nombre</label>
        <input
          type="text"
          value={proposedBy}
          onChange={e => setProposedBy(e.target.value)}
          placeholder="¿Quién propone?"
          className="w-full text-white rounded-lg px-3 py-2 border border-gray-600 focus:outline-none focus:border-purple-500"
          style={{ background: 'rgba(255,255,255,0.05)' }}
        />
        {errors.proposedBy && <p className="text-red-400 text-xs mt-1">{errors.proposedBy}</p>}
      </div>

      <Button label="Proponer juego" onClick={handleSubmit} variant="primary" />
    </div>
  )
}