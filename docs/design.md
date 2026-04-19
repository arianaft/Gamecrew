# Arquitectura de la aplicación — GameCrew

## Estructura de componentes principales

La aplicación se divide en páginas y componentes reutilizables.

### Páginas (src/pages/)

- **HomePage** — muestra la sesión activa actual y acceso rápido a crear una nueva
- **SessionsPage** — historial de todas las sesiones pasadas
- **SessionDetailPage** — detalle de una sesión: propuestas, votos y valoración
- **NewSessionPage** — formulario para crear una sesión nueva
- **StatsPage** — estadísticas globales del grupo
- **NotFoundPage** — página 404

### Componentes reutilizables (src/components/)

- **SessionCard** — tarjeta que muestra el resumen de una sesión (juego, fecha, participantes, valoración)
- **GameProposal** — input para proponer un juego a la sesión
- **VoteCard** — tarjeta de un juego propuesto con botón de voto y contador
- **RatingStars** — componente de valoración del 1 al 5
- **Button** — botón genérico reutilizable con variantes
- **Navbar** — barra de navegación presente en todas las páginas
- **LoadingSpinner** — indicador de carga para estados de red
- **ErrorMessage** — mensaje de error reutilizable

## Gestión del estado

El estado de la aplicación se divide en dos niveles:

- **Estado global (Context API)**: datos que necesitan múltiples componentes como
  la lista de sesiones, la sesión activa y el estado de carga general.
- **Estado local (useState)**: datos propios de cada componente como los valores
  de un formulario o si un modal está abierto.

El contexto principal es `SessionContext` que expone:
- `sessions` — lista de todas las sesiones
- `activeSession` — sesión actual en curso
- `loading` — estado de carga
- `error` — mensaje de error si falla la API
- Funciones: `createSession`, `addGame`, `vote`, `rateSession`

## Diseño del backend y API REST

Base URL: `/api/v1`

### Sesiones

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/v1/sessions` | Obtener todas las sesiones |
| GET | `/api/v1/sessions/:id` | Obtener una sesión por id |
| POST | `/api/v1/sessions` | Crear una sesión nueva |
| PATCH | `/api/v1/sessions/:id/rating` | Valorar una sesión |

### Juegos propuestos

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/api/v1/sessions/:id/games` | Proponer un juego a la sesión |
| POST | `/api/v1/sessions/:id/vote` | Votar por un juego propuesto |

### Códigos HTTP

- `200` — éxito en GET y PATCH
- `201` — éxito en POST (recurso creado)
- `400` — datos incorrectos o faltantes
- `404` — recurso no encontrado
- `500` — error interno del servidor

## Datos en el servidor vs en el cliente

| Dato | Dónde vive |
|------|-----------|
| Lista de sesiones | Servidor (Express) |
| Detalle de cada sesión | Servidor (Express) |
| Juegos propuestos y votos | Servidor (Express) |
| Valoraciones | Servidor (Express) |
| Estado del formulario | Cliente (useState) |
| Estado de carga y error | Cliente (useState/Context) |

## Flujo de datos

```
Usuario interactúa con un componente React
        ↓
Componente llama a una función del Context
        ↓
Context llama al cliente API (src/api/client.ts)
        ↓
Cliente API hace fetch al backend Express
        ↓
Express procesa la petición (ruta → controlador → servicio)
        ↓
Devuelve JSON al cliente API
        ↓
Context actualiza el estado global
        ↓
React re-renderiza los componentes afectados
```