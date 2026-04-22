import { useState } from 'react'
import Button from './Button'

interface GameProposalFormProps {
  onSubmit: (gameName: string, proposedBy: string) => void
}

export default function GameProposalForm({ onSubmit }: GameProposalFormProps) {
  const [gameName, setGameName] = useState('')
  const [proposedBy, setProposedBy] = useState('')
  const [errors, setErrors] = useState<{ gameName?: string; proposedBy?: string }>({})

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
    setErrors({})
  }

  return (
    <div className="bg-gray-800 rounded-xl p-4 flex flex-col gap-3">
      <div>
        <label className="text-gray-300 text-sm mb-1 block">Nombre del juego</label>
        <input
          type="text"
          value={gameName}
          onChange={e => setGameName(e.target.value)}
          placeholder="Ej: Minecraft, Fortnite..."
          className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 border border-gray-600 focus:outline-none focus:border-purple-500"
        />
        {errors.gameName && <p className="text-red-400 text-xs mt-1">{errors.gameName}</p>}
      </div>

      <div>
        <label className="text-gray-300 text-sm mb-1 block">Tu nombre</label>
        <input
          type="text"
          value={proposedBy}
          onChange={e => setProposedBy(e.target.value)}
          placeholder="¿Quién propone?"
          className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 border border-gray-600 focus:outline-none focus:border-purple-500"
        />
        {errors.proposedBy && <p className="text-red-400 text-xs mt-1">{errors.proposedBy}</p>}
      </div>

      <Button label="Proponer juego" onClick={handleSubmit} variant="primary" />
    </div>
  )
}