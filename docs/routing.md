# Rutas y navegación — GameCrew

## Configuración

Las rutas están configuradas con React Router v6 en `src/App.tsx`.
El componente `BrowserRouter` está en `main.tsx` envolviendo toda la app,
y `Routes` con `Route` definen qué componente se muestra en cada URL.

## Estructura de rutas

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | `HomePage` | Página principal con bienvenida |
| `/sesiones` | `SessionsPage` | Historial de sesiones |
| `/sesiones/nueva` | `NewSessionPage` | Formulario para crear sesión |
| `/sesiones/:id` | `SessionDetailPage` | Detalle de una sesión concreta |
| `/estadisticas` | `StatsPage` | Estadísticas del grupo |
| `*` | `NotFoundPage` | Página 404 para rutas inexistentes |

## Navegación

La navegación entre páginas se hace con el componente `Link` de React Router
en lugar de etiquetas `<a>` normales. La diferencia es que `Link` no recarga
la página completa, solo cambia el componente que se muestra, haciendo la
navegación instantánea.

## Parámetros dinámicos

La ruta `/sesiones/:id` usa un parámetro dinámico. El componente
`SessionDetailPage` lo recoge con el hook `useParams`:

```tsx
const { id } = useParams()
```

Esto permite mostrar el detalle de cualquier sesión usando su id en la URL.