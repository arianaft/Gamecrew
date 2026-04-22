import type { Session, GameProposal } from '../types'

const BASE_URL = 'http://localhost:3001/api/v1'

async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.error || 'Error en la petición')
  }
  return res.json()
}

export async function getSessions(): Promise<Session[]> {
  const res = await fetch(`${BASE_URL}/sessions`)
  return handleResponse<Session[]>(res)
}

export async function getSessionById(id: string): Promise<Session> {
  const res = await fetch(`${BASE_URL}/sessions/${id}`)
  return handleResponse<Session>(res)
}

export async function createSession(
  data: Omit<Session, 'id' | 'games' | 'isPlayed'>
): Promise<Session> {
  const res = await fetch(`${BASE_URL}/sessions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  return handleResponse<Session>(res)
}

export async function addGame(
  sessionId: string,
  name: string,
  proposedBy: string
): Promise<GameProposal> {
  const res = await fetch(`${BASE_URL}/sessions/${sessionId}/games`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, proposedBy })
  })
  return handleResponse<GameProposal>(res)
}

export async function voteForGame(
  sessionId: string,
  gameId: string,
  participantId: string
): Promise<Session> {
  const res = await fetch(`${BASE_URL}/sessions/${sessionId}/vote`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ gameId, participantId })
  })
  return handleResponse<Session>(res)
}

export async function rateSession(
  sessionId: string,
  rating: number
): Promise<Session> {
  const res = await fetch(`${BASE_URL}/sessions/${sessionId}/rating`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ rating })
  })
  return handleResponse<Session>(res)
}