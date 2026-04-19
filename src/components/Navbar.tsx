import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold text-purple-400">
        GameCrew
      </Link>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-purple-400 transition-colors">Inicio</Link>
        <Link to="/sesiones" className="hover:text-purple-400 transition-colors">Sesiones</Link>
        <Link to="/estadisticas" className="hover:text-purple-400 transition-colors">Estadísticas</Link>
      </div>
    </nav>
  )
}