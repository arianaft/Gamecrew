import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{ background: 'rgba(15,10,30,0.95)', borderBottom: '1px solid rgba(139,92,246,0.3)' }}
      className="px-6 py-4 flex items-center justify-between sticky top-0 z-50 backdrop-blur-sm">
      <Link to="/" className="logo text-2xl font-bold tracking-widest"
        style={{ color: '#a855f7', textShadow: '0 0 20px rgba(168,85,247,0.5)' }}>
        GAME<span className="text-white">CREW</span>
      </Link>
      <div className="flex gap-8">
        <Link to="/" className="text-gray-300 hover:text-purple-400 transition-colors tracking-wider text-sm font-medium">INICIO</Link>
        <Link to="/sesiones" className="text-gray-300 hover:text-purple-400 transition-colors tracking-wider text-sm font-medium">SESIONES</Link>
        <Link to="/estadisticas" className="text-gray-300 hover:text-purple-400 transition-colors tracking-wider text-sm font-medium">ESTADÍSTICAS</Link>
      </div>
    </nav>
  )
}