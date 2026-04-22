import { useState } from 'react'
import type { Session } from '../types'
import Button from './Button'

interface NewSessionFormProps {
  onSubmit: (session: Omit<Session, 'id' | 'games' | 'isPlayed'>) => void
}

export default function NewSessionForm({ onSubmit }: NewSessionFormProps) {
  const [sessionName, setSessionName] = useState('')
  const [date, setDate] = useState('')
  const [participantInput, setParticipantInput] = useState('')
  const [participants, setParticipants] = useState<string[]>([])
  const [errors, setErrors] = useState<{
    sessionName?: string
    date?: string
    participants?: string
  }>({})

  const validate = () => {
    const newErrors: { sessionName?: string; date?: string; participants?: string } = {}
    if (!sessionName.trim()) newErrors.sessionName = 'El nombre de la sesión es obligatorio'
    if (!date) newErrors.date = 'La fecha es obligatoria'
    if (participants.length < 2) newErrors.participants = 'Añade al menos 2 participantes'
    if (participants.length > 6) newErrors.participants = 'Máximo 6 participantes'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleAddParticipant = () => {
    const name = participantInput.trim()
    if (!name) return
    if (participants.includes(name)) return
    if (participants.length >= 6) return
    setParticipants(prev => [...prev, name])
    setParticipantInput('')
  }

  const handleRemoveParticipant = (name: string) => {
    setParticipants(prev => prev.filter(p => p !== name))
  }

  const handleSubmit = () => {
    if (!validate()) return
    onSubmit({
      date,
      participants: participants.map((name, i) => ({ id: String(i), name })),
      rating: undefined,
      chosenGame: sessionName,
    })
  }

  return (
    <div className="bg-gray-800 rounded-xl p-6 flex flex-col gap-4">

      <div>
        <label className="text-gray-300 text-sm mb-1 block">Nombre de la sesión</label>
        <input
          type="text"
          value={sessionName}
          onChange={e => setSessionName(e.target.value)}
          placeholder="Ej: Viernes de juegos"
          className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 border border-gray-600 focus:outline-none focus:border-purple-500"
        />
        {errors.sessionName && <p className="text-red-400 text-xs mt-1">{errors.sessionName}</p>}
      </div>

      <div>
        <label className="text-gray-300 text-sm mb-1 block">Fecha de la sesión</label>
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 border border-gray-600 focus:outline-none focus:border-purple-500"
        />
        {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date}</p>}
      </div>

      <div>
        <label className="text-gray-300 text-sm mb-1 block">
          Participantes ({participants.length}/6)
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={participantInput}
            onChange={e => setParticipantInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleAddParticipant()}
            placeholder="Nombre del participante"
            className="flex-1 bg-gray-700 text-white rounded-lg px-3 py-2 border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <Button label="Añadir" onClick={handleAddParticipant} variant="secondary" />
        </div>
        {errors.participants && (
          <p className="text-red-400 text-xs mt-1">{errors.participants}</p>
        )}
        <div className="flex flex-wrap gap-2 mt-2">
          {participants.map(name => (
            <span
              key={name}
              onClick={() => handleRemoveParticipant(name)}
              className="bg-purple-900 text-purple-200 text-xs px-3 py-1 rounded-full cursor-pointer hover:bg-red-900 hover:text-red-200 transition-colors"
            >
              {name} ✕
            </span>
          ))}
        </div>
      </div>

      <Button label="Crear sesión" onClick={handleSubmit} variant="primary" />
    </div>
  )
}