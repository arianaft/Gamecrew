interface ErrorMessageProps {
  message: string
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="bg-red-900 border border-red-700 text-red-200 px-4 py-3 rounded-lg">
      <p className="font-medium">Algo salió mal</p>
      <p className="text-sm mt-1">{message}</p>
    </div>
  )
}