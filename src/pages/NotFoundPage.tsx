import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-6xl font-bold text-purple-400">404</h1>
      <p className="text-gray-400 mt-4 text-xl">Página no encontrada</p>
      <Link to="/" className="mt-6 text-purple-400 hover:text-purple-300 underline">
        Volver al inicio
      </Link>
    </div>
  )
}