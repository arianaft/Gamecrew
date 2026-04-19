import { useState } from 'react'

interface RatingStarsProps {
  value: number
  onChange: (rating: number) => void
}

export default function RatingStars({ value, onChange }: RatingStarsProps) {
  const [hovered, setHovered] = useState(0)

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map(star => (
        <button
          key={star}
          onClick={() => onChange(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          className="text-2xl transition-colors"
        >
          <span className={(hovered || value) >= star ? 'text-yellow-400' : 'text-gray-600'}>
            ★
          </span>
        </button>
      ))}
    </div>
  )
}