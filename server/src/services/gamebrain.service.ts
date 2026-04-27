const API_KEY = process.env.GAMEBRAIN_API_KEY || ''
const BASE_URL = 'https://api.gamebrain.co/v1'

export interface GameResult {
  id: number
  name: string
  image: string
  genres: { value: string; name: string }[]
}

export async function searchGames(query: string): Promise<GameResult[]> {
  if (!query || query.length < 2) return []
  const res = await fetch(
    `${BASE_URL}/games?query=${encodeURIComponent(query)}&api-key=${API_KEY}`
  )
  if (!res.ok) return []
  const data = await res.json()
return (Array.isArray(data) ? data : data.games ?? data.results ?? []).slice(0, 5)
}