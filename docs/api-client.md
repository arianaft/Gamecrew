# Cliente API y capa de red — GameCrew

## Cliente API tipado (src/api/client.ts)

Todas las llamadas al backend pasan por este archivo. Cada función
usa fetch, devuelve datos tipados con TypeScript y lanza un error
si la respuesta no es correcta.

La función `handleResponse<T>` centraliza el manejo de errores —
si el servidor devuelve un código de error extrae el mensaje y lanza
una excepción que el contexto captura.

## Tipos alineados con el backend

Las interfaces `Session`, `Participant` y `GameProposal` están
definidas en `src/types/index.ts` y son las mismas que usa el
backend en `server/src/services/types.ts`. Esto garantiza que
los datos que envía el servidor coinciden exactamente con lo que
espera el frontend.

## Gestión de los tres estados de red

En `SessionContext.tsx` cada petición gestiona tres estados:

- **loading** — se activa antes de la petición y se desactiva al terminar
- **error** — se guarda el mensaje si la petición falla
- **datos** — se actualiza el estado global si la petición tiene éxito

Los componentes consumen estos tres estados y muestran
`LoadingSpinner`, `ErrorMessage` o los datos según corresponda.

## Fuente de verdad

Los datos de sesiones viven únicamente en el backend. El frontend
no usa localStorage para sesiones — todo viene de la API y el
contexto global mantiene una copia en memoria sincronizada con
el servidor.