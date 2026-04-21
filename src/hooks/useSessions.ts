import { useState, useEffect, useCallback } from 'react'
import type { Session } from '../types'

export function useSessions() {
  const [sessions, setSessions] = useState<Session[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchSessions = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/v1/sessions')
      if (!res.ok) throw new Error('Error al cargar las sesiones')
      const data = await res.json()
      setSessions(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchSessions()
  }, [fetchSessions])

  const addSession = useCallback(async (newSession: Omit<Session, 'id' | 'games' | 'isPlayed'>) => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/v1/sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newSession)
      })
      if (!res.ok) throw new Error('Error al crear la sesión')
      const created = await res.json()
      setSessions(prev => [...prev, created])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido')
    } finally {
      setLoading(false)
    }
  }, [])

  return { sessions, loading, error, fetchSessions, addSession }
}