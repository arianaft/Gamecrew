import type { Session } from '../services/types'

export let sessions: Session[] = [
  {
    id: '1',
    date: '2024-04-10',
    participants: [
      { id: '1', name: 'Ariana' },
      { id: '2', name: 'Carlos' },
      { id: '3', name: 'Marta' }
    ],
    games: [
      { id: '1', name: 'Minecraft', proposedBy: 'Ariana', votes: ['2', '3'] },
      { id: '2', name: 'Fortnite', proposedBy: 'Carlos', votes: ['1'] }
    ],
    chosenGame: 'Minecraft',
    rating: 4,
    isPlayed: true
  }
]