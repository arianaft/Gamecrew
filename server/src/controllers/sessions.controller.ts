import { Request, Response } from 'express'
import * as service from '../services/sessions.service'
import * as gamebrain from '../services/gamebrain.service'

export function getAllSessions(req: Request, res: Response): void {
  const data = service.getAllSessions()
  res.status(200).json(data)
}

export function getSessionById(req: Request, res: Response): void {
  const session = service.getSessionById(req.params.id as string)
  if (!session) {
    res.status(404).json({ error: 'Sesión no encontrada' })
    return
  }
  res.status(200).json(session)
}

export function createSession(req: Request, res: Response): void {
  const { date, participants } = req.body
  if (!date || !participants || participants.length < 2) {
    res.status(400).json({ error: 'Datos incorrectos' })
    return
  }
  const session = service.createSession(req.body)
  res.status(201).json(session)
}

export function addGame(req: Request, res: Response): void {
  const { name, proposedBy, image } = req.body
  if (!name || !proposedBy) {
    res.status(400).json({ error: 'Nombre del juego y participante son obligatorios' })
    return
  }
  const game = service.addGameToSession(req.params.id as string, name, proposedBy, image)
  if (!game) {
    res.status(404).json({ error: 'Sesión no encontrada' })
    return
  }
  res.status(201).json(game)
}

export function vote(req: Request, res: Response): void {
  const { gameId, participantId } = req.body
  if (!gameId || !participantId) {
    res.status(400).json({ error: 'gameId y participantId son obligatorios' })
    return
  }
  const session = service.voteForGame(req.params.id as string, gameId, participantId)
  if (!session) {
    res.status(404).json({ error: 'Sesión o juego no encontrado' })
    return
  }
  res.status(200).json(session)
}

export function rateSession(req: Request, res: Response): void {
  const { rating } = req.body
  if (!rating || rating < 1 || rating > 5) {
    res.status(400).json({ error: 'La valoración debe ser entre 1 y 5' })
    return
  }
  const session = service.rateSession(req.params.id as string, rating)
  if (!session) {
    res.status(404).json({ error: 'Sesión no encontrada' })
    return
  }
  res.status(200).json(session)
}

export async function searchGames(req: Request, res: Response): Promise<void> {
  const { q } = req.query
  if (!q || typeof q !== 'string') {
    res.status(400).json({ error: 'Parámetro q es obligatorio' })
    return
  }
  const results = await gamebrain.searchGames(q)
  res.status(200).json(results)
}