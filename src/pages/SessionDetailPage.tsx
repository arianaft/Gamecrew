import { useParams } from 'react-router-dom'

export default function SessionDetailPage() {
  const { id } = useParams()
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white">Detalle de sesión {id}</h1>
    </div>
  )
}