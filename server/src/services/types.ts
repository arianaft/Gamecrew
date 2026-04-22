export interface Participant {
  id: string
  name: string
}

export interface GameProposal {
  id: string
  name: string
  proposedBy: string
  votes: string[]
}

export interface Session {
  id: string
  date: string
  participants: Participant[]
  games: GameProposal[]
  chosenGame?: string
  rating?: number
  isPlayed: boolean
}