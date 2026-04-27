const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api/v1'

export interface GameResult {
  id: number
  name: string
  image: string
  genres: { value: string; name: string }[]
}

export async function searchGames(query: string): Promise<GameResult[]> {
  if (!query || query.length < 2) return []
  try {
    const res = await fetch(`${BASE_URL}/sessions/games/search?q=${encodeURIComponent(query)}`)
    if (!res.ok) return []
    return await res.json()
  } catch {
    return []
  }
}