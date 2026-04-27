import { Router } from 'express'
import * as controller from '../controllers/sessions.controller'

const router = Router()

router.get('/games/search', controller.searchGames)
router.get('/', controller.getAllSessions)
router.get('/:id', controller.getSessionById)
router.post('/', controller.createSession)
router.post('/:id/games', controller.addGame)
router.post('/:id/vote', controller.vote)
router.patch('/:id/rating', controller.rateSession)

export default router