import { useMemo } from 'react'
import type { Session } from '../types'

export function useStats(sessions: Session[]) {
  const mostVotedGame = useMemo(() => {
    const voteCounts: Record<string, number> = {}
    sessions.forEach(session => {
      session.games.forEach(game => {
        voteCounts[game.name] = (voteCounts[game.name] || 0) + game.votes.length
      })
    })
    return Object.entries(voteCounts).sort((a, b) => b[1] - a[1])[0]?.[0] ?? 'Sin datos'
  }, [sessions])

  const mostActiveParticipant = useMemo(() => {
    const counts: Record<string, number> = {}
    sessions.forEach(session => {
      session.participants.forEach(p => {
        counts[p.name] = (counts[p.name] || 0) + 1
      })
    })
    return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] ?? 'Sin datos'
  }, [sessions])

  const bestRatedSession = useMemo(() => {
    return sessions
      .filter(s => s.rating !== undefined)
      .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))[0] ?? null
  }, [sessions])

  const totalSessions = useMemo(() => sessions.length, [sessions])

  return { mostVotedGame, mostActiveParticipant, bestRatedSession, totalSessions }
}