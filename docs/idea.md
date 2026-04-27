# Gamecrew — Organizador de sesiones de juego

## Descripción general

Gamecrew es una aplicación web que ayuda a grupos de amigos a organizar sus sesiones de juego.
El problema que resuelve es simple: cuando varios amigos de un grupo quieren juagar, siempre surge la misma pregunta ¿a qué jugamos esta noche? 
y se pierde tiempo decidiendo entre todos. Gamecrew centraliza las propuestas, las votaciones y el historial de sesiones en un solo lugar.

## Problema que resuelve

Cuando un grupo de amigos quiere organizar una sesión de juego, todo suele ser un poco caótico: uno escribe por WhatsApp, otro propone otra cosa, nadie termina de decidirse y al final se improvisa sobre la marcha. Además, no queda ningún registro de qué se jugó, quién participó o si realmente gustó.

Gamecrew viene a poner orden en todo eso, convirtiendo ese caos en algo mucho más sencillo y organizado: proponer → votar → jugar → valorar.

## Usuario objetivo

Grupos de amigos (2-6 personas) que quedan regularmente para jugar videojuegos en línea o en persona y quieren organizarse mejor sin usar herramientas genéricas como encuestas de WhatsApp o Google Forms.

## Funcionalidades principales

- **Crear una sesión**: define fecha, hora y participantes de la noche de juego.
- **Proponer juegos**: cualquier participante puede añadir juegos a la lista de candidatos para esa sesión.
- **Votación**: cada participante vota por su juego preferido de los propuestos. Se muestra el resultado en tiempo real.
- **Historial de sesiones**: registro de todas las sesiones pasadas con el juego elegido, participantes y fecha.
- **Valoración post-sesión**: después de jugar, los participantes pueden puntuar la sesión (del 1 al 5).
- **Estadísticas básicas**: juego más votado de la historia, participante más activo, sesión mejor valorada.

## Funcionalidades opcionales

- Buscar juegos usando la GameBrain para completar el nombre y mostrar la portada del juego.
- Notificación visual (badge) cuando hay una sesión programada próximamente.
- Filtrar el historial por participante o por juego.
- Modo "ruleta": si hay empate, el sistema elige un ganador al azar.
- Comentarios breves en cada sesión ("fue muy divertido", "la próxima vez menos horas").

## Mejoras futuras

- Autenticación real con cuentas de usuario.
- Soporte para múltiples grupos (no solo uno).
- Integración con Discord para notificar al canal cuando hay sesión nueva.
- Recomendación de juegos basada en el historial del grupo usando IA.
- Vista de calendario para ver sesiones pasadas y futuras.

## Stack tecnológico

| Capa | Tecnología |
|---|---|
| Frontend | React + TypeScript + Vite |
| Estilos | Tailwind CSS |
| Navegación | React Router v6 |
| Estado global | Context API |
| Backend | Node.js + Express |
| Persistencia | JSON en servidor (sin base de datos) |
| API externa | GameBrain (opcional, para portadas de juegos) |
| Gestión de tareas | Trello |

## Estructura de rutas prevista

```
/               → Página principal: próxima sesión activa + botón crear
/sesiones       → Historial de todas las sesiones
/sesiones/:id   → Detalle de una sesión: propuestas, votos y valoración
/sesiones/nueva → Formulario para crear una sesión nueva
/estadisticas   → Estadísticas globales del grupo
*               → Página 404
```

## Flujo principal de uso

1. Un usuario entra y crea una sesión nueva con fecha y lista de participantes.
2. Cada participante propone uno o varios juegos para esa sesión.
3. Se abre la votación: cada participante vota por su favorito.
4. El juego con más votos se marca como "elegido".
5. Después de jugar, los participantes valoran la sesión.
6. La sesión pasa al historial y las estadísticas se actualizan.
