import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import type { Session } from '../types'
import * as api from '../api/client'

interface SessionContextType {
  sessions: Session[]
  loading: boolean
  error: string | null
  fetchSessions: () => Promise<void>
  addSession: (session: Omit<Session, 'id' | 'games' | 'isPlayed'>) => Promise<void>
  updateSession: (updated: Session) => void
}

const SessionContext = createContext<SessionContextType | null>(null)

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [sessions, setSessions] = useState<Session[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchSessions = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await api.getSessions()
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

  const addSession = useCallback(async (
    newSession: Omit<Session, 'id' | 'games' | 'isPlayed'>
  ) => {
    setLoading(true)
    setError(null)
    try {
      const created = await api.createSession(newSession)
      setSessions(prev => [...prev, created])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido')
    } finally {
      setLoading(false)
    }
  }, [])

  const updateSession = useCallback((updated: Session) => {
    setSessions(prev => prev.map(s => s.id === updated.id ? updated : s))
  }, [])

  return (
    <SessionContext.Provider value={{ sessions, loading, error, fetchSessions, addSession, updateSession }}>
      {children}
    </SessionContext.Provider>
  )
}

export function useSessionContext() {
  const context = useContext(SessionContext)
  if (!context) throw new Error('useSessionContext debe usarse dentro de SessionProvider')
  return context
}