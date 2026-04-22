# Testing — GameCrew

## Pruebas manuales realizadas

### Navegación
- Todos los links del Navbar funcionan correctamente
- La página 404 aparece al acceder a una URL inexistente
- El botón "Volver al inicio" del 404 funciona

### Historial de sesiones
- Se muestran todas las sesiones cargadas desde el backend
- Cada tarjeta muestra el juego, la fecha, los participantes y la valoración

### Nueva sesión
- El formulario muestra errores en rojo si se envía vacío
- No se puede enviar con menos de 2 participantes
- Al crear una sesión correctamente redirige a /sesiones
- La nueva sesión aparece en el historial inmediatamente

### Estadísticas
- Se muestran correctamente el total de sesiones
- El juego más votado se calcula correctamente
- El participante más activo se calcula correctamente
- La mejor sesión valorada muestra el nombre y las estrellas

### Responsive
- La app se adapta a pantallas pequeñas
- El navbar se mantiene visible en móvil

### Consola
- No hay errores en rojo en la consola del navegador

## Bugs encontrados y corregidos

- El formulario de nueva sesión no tenía campo de nombre de sesión — corregido
- Las estrellas en estadísticas aparecían en la misma línea que el nombre — corregido
- El index.html mostraba el CSS de Tailwind como texto — corregido
- El tsconfig del servidor necesitaba moduleResolution node10 — corregido

## Mejoras pendientes para el futuro

- Página de detalle de sesión con propuestas, votación y valoración
- Responsive mejorado en el navbar para móvil
- Animaciones en las transiciones entre páginas