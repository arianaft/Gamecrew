interface ButtonProps {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary' | 'danger'
  disabled?: boolean
}

export default function Button({ label, onClick, variant = 'primary', disabled = false }: ButtonProps) {
  const styles = {
    primary: 'text-white font-semibold tracking-wider',
    secondary: 'text-gray-300 font-semibold tracking-wider',
    danger: 'text-white font-semibold tracking-wider',
  }

  const backgrounds = {
    primary: 'linear-gradient(135deg, #7c3aed, #a855f7)',
    secondary: 'rgba(255,255,255,0.08)',
    danger: 'linear-gradient(135deg, #dc2626, #ef4444)',
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-5 py-2 rounded-lg transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed ${styles[variant]}`}
      style={{
        background: disabled ? 'rgba(255,255,255,0.05)' : backgrounds[variant],
        border: '1px solid rgba(139,92,246,0.4)',
        boxShadow: variant === 'primary' && !disabled ? '0 0 15px rgba(168,85,247,0.3)' : 'none'
      }}
    >
      {label}
    </button>
  )
}