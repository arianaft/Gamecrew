import type { Session, GameProposal } from './types'
import { sessions } from '../config/data'

export function getAllSessions(): Session[] {
  return sessions
}

export function getSessionById(id: string): Session | undefined {
  return sessions.find(s => s.id === id)
}

export function createSession(data: Omit<Session, 'id' | 'games' | 'isPlayed'>): Session {
  const newSession: Session = {
    ...data,
    id: String(Date.now()),
    games: [],
    isPlayed: false
  }
  sessions.push(newSession)
  return newSession
}

export function addGameToSession(sessionId: string, name: string, proposedBy: string): GameProposal | null {
  const session = sessions.find(s => s.id === sessionId)
  if (!session) return null
  const game: GameProposal = {
    id: String(Date.now()),
    name,
    proposedBy,
    votes: []
  }
  session.games.push(game)
  return game
}

export function voteForGame(sessionId: string, gameId: string, participantId: string): Session | null {
  const session = sessions.find(s => s.id === sessionId)
  if (!session) return null
  const game = session.games.find(g => g.id === gameId)
  if (!game) return null
  if (!game.votes.includes(participantId)) {
    game.votes.push(participantId)
  }
  return session
}

export function rateSession(sessionId: string, rating: number): Session | null {
  const session = sessions.find(s => s.id === sessionId)
  if (!session) return null
  session.rating = rating
  session.isPlayed = true
  return session
}