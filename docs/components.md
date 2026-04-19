# Componentes — GameCrew

## Button

Botón genérico reutilizable con tres variantes visuales.

**Props:**
- `label: string` — texto que muestra el botón
- `onClick: () => void` — función que se ejecuta al pulsar
- `variant?: 'primary' | 'secondary' | 'danger'` — estilo del botón (por defecto `primary`)
- `disabled?: boolean` — desactiva el botón (por defecto `false`)

**Uso:**
```tsx
<Button label="Crear sesión" onClick={handleCreate} variant="primary" />
```

---

## Navbar

Barra de navegación presente en todas las páginas. Contiene el logo y los
links principales usando `Link` de React Router para navegar sin recargar la página.

**No recibe props** — es un componente estático.

---

## SessionCard

Tarjeta que muestra el resumen de una sesión. Al hacer clic navega al detalle
de esa sesión. Es el componente principal del historial.

**Props:**
- `session: Session` — objeto sesión completo con participantes, juego elegido y valoración

**Uso:**
```tsx
<SessionCard session={session} />
```

---

## RatingStars

Componente interactivo de valoración del 1 al 5. Muestra las estrellas con
efecto hover y llama a `onChange` cuando el usuario selecciona una valoración.

**Props:**
- `value: number` — valoración actual
- `onChange: (rating: number) => void` — función que recibe la nueva valoración

**Uso:**
```tsx
<RatingStars value={rating} onChange={setRating} />
```

---

## LoadingSpinner

Indicador visual de carga. Se muestra mientras la app espera una respuesta
de la API. No recibe props.

---

## ErrorMessage

Mensaje de error reutilizable que se muestra cuando falla una petición a la API.

**Props:**
- `message: string` — texto del error a mostrar

**Uso:**
```tsx
<ErrorMessage message="No se pudo cargar las sesiones" />
```