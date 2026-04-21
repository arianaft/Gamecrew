# Context API — GameCrew

## ¿Qué es Context API y cuándo usarla?

Context API es la solución de React para compartir datos entre componentes
sin tener que pasarlos manualmente de padre a hijo a través de props. Es
útil cuando varios componentes necesitan acceder a los mismos datos y están
en distintos niveles del árbol de componentes.

En GameCrew la usamos para compartir la lista de sesiones, el estado de
carga y el error entre todas las páginas sin duplicar lógica.

Sin Context el flujo sería así:
App → SessionsPage → SessionCard → (necesita sessions)
App → StatsPage → (necesita sessions)
App → HomePage → (necesita sessions)

Con Context cualquier componente accede directamente sin que nadie
se los pase como prop.

---

## Implementación

### SessionContext

Definimos la forma del contexto con una interface de TypeScript:

```ts
interface SessionContextType {
  sessions: Session[]
  loading: boolean
  error: string | null
  fetchSessions: () => Promise<void>
  addSession: (session: Omit<Session, 'id' | 'games' | 'isPlayed'>) => Promise<void>
}
```

### SessionProvider

El Provider es el componente que envuelve la app y proporciona los datos
a todos sus hijos. Contiene toda la lógica de estado: cargar sesiones,
crear nuevas y gestionar loading y error.

### useSessionContext

Un hook personalizado que consume el contexto. Incluye una comprobación
para evitar usarlo fuera del Provider y lanza un error claro si ocurre.

```ts
export function useSessionContext() {
  const context = useContext(SessionContext)
  if (!context) throw new Error('useSessionContext debe usarse dentro de SessionProvider')
  return context
}
```

---

## Cómo consumirlo en un componente

```tsx
import { useSessionContext } from '../context/SessionContext'

export default function SessionsPage() {
  const { sessions, loading, error } = useSessionContext()

  if (loading) return <LoadingSpinner />
  if (error) return <ErrorMessage message={error} />

  return (
    <div>
      {sessions.map(session => (
        <SessionCard key={session.id} session={session} />
      ))}
    </div>
  )
}
```

---

## Cuándo NO usar Context

Context no es la solución para todo. Si un dato solo lo necesita un
componente o sus hijos directos, es mejor usar props. Context añade
complejidad y solo merece la pena cuando el dato es verdaderamente global.