# Hooks — GameCrew

## useState

Guarda valores que pueden cambiar en el tiempo. Cuando el valor cambia,
React actualiza automáticamente la pantalla. En GameCrew lo usamos en
`useSessions` para guardar tres estados:

- `sessions` — la lista de sesiones cargadas del servidor
- `loading` — booleano que indica si hay una petición en curso
- `error` — mensaje de error si algo falla

```ts
const [sessions, setSessions] = useState<Session[]>([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState<string | null>(null)
```

---

## useEffect

Ejecuta código como consecuencia de algo — cuando el componente aparece
en pantalla, cuando cambia un valor, o cuando desaparece. En GameCrew
lo usamos para cargar las sesiones del servidor automáticamente cuando
la app arranca, sin que el usuario tenga que hacer nada.

```ts
useEffect(() => {
  fetchSessions()
}, [fetchSessions])
```

El array `[fetchSessions]` le dice a React que solo ejecute el efecto
cuando `fetchSessions` cambie, evitando bucles infinitos.

---

## useMemo

Memoriza el resultado de un cálculo para no repetirlo en cada render.
Solo recalcula cuando cambian los datos de los que depende. En GameCrew
lo usamos en `useStats` para calcular estadísticas sobre las sesiones
sin recalcularlas constantemente.

```ts
const mostVotedGame = useMemo(() => {
  // cálculo costoso sobre sessions
}, [sessions])
```

Sin `useMemo` este cálculo se repetiría en cada render aunque las
sesiones no hayan cambiado.

---

## useCallback

Memoriza una función para que no se recree en cada render. Es útil
cuando pasas funciones como props a componentes hijos, evitando que
se rendericen innecesariamente. En GameCrew lo usamos para memorizar
`fetchSessions` y `addSession`.

```ts
const fetchSessions = useCallback(async () => {
  // lógica de fetch
}, [])
```

El array vacío `[]` significa que la función nunca cambia — se crea
una vez y se reutiliza siempre.

---

## Custom hooks

### useSessions

Encapsula toda la lógica relacionada con las sesiones: cargarlas del
servidor, crear una nueva y gestionar los estados de carga y error.
Al ser un hook reutilizable, cualquier componente o página puede
usarlo sin duplicar código.

```ts
const { sessions, loading, error, addSession } = useSessions()
```

### useStats

Recibe la lista de sesiones y devuelve las estadísticas calculadas
con `useMemo`. Separa la lógica de cálculo de la interfaz, haciendo
los componentes más limpios y fáciles de mantener.

```ts
const { mostVotedGame, mostActiveParticipant, totalSessions } = useStats(sessions)
```