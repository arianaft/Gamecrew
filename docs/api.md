# API REST — GameCrew

Base URL: `http://localhost:3001/api/v1`

## Sesiones

### GET /sessions
Devuelve todas las sesiones.

**Response 200:**
```json
[
  {
    "id": "1",
    "date": "2024-04-10",
    "participants": [
      { "id": "1", "name": "Ariana" }
    ],
    "games": [],
    "chosenGame": "Minecraft",
    "rating": 4,
    "isPlayed": true
  }
]
```

### GET /sessions/:id
Devuelve una sesión por id.

**Response 200:** objeto sesión  
**Response 404:** `{ "error": "Sesión no encontrada" }`

### POST /sessions
Crea una sesión nueva.

**Body:**
```json
{
  "date": "2024-04-20",
  "participants": [
    { "id": "1", "name": "Ariana" },
    { "id": "2", "name": "Carlos" }
  ]
}
```
**Response 201:** sesión creada  
**Response 400:** `{ "error": "Datos incorrectos" }`

### POST /sessions/:id/games
Propone un juego a una sesión. El campo `image` es opcional y se obtiene automáticamente desde GameBrain API al seleccionar un juego del autocompletado.

**Body:**
```json
{ "name": "Minecraft", "proposedBy": "Ariana", "image": "https://img.gamebrain.co/..." }
```
**Response 201:** juego creado  
**Response 404:** `{ "error": "Sesión no encontrada" }`

### POST /sessions/:id/vote
Vota por un juego.

**Body:**
```json
{ "gameId": "1", "participantId": "2" }
```
**Response 200:** sesión actualizada  
**Response 404:** `{ "error": "Sesión o juego no encontrado" }`

### PATCH /sessions/:id/rating
Valora una sesión del 1 al 5.

**Body:**
```json
{ "rating": 4 }
```
**Response 200:** sesión actualizada  
**Response 400:** `{ "error": "La valoración debe ser entre 1 y 5" }`

### GET /sessions/games/search?q=:query
Busca juegos usando GameBrain API como proxy seguro. La API key nunca se expone al frontend.

**Ejemplo:** `GET /sessions/games/search?q=zelda`

**Response 200:**
```json
[
  {
    "id": 1234,
    "name": "The Legend of Zelda: Tears of the Kingdom",
    "image": "https://img.gamebrain.co/games/zelda.jpg",
    "genres": [{ "value": "action-adventure", "name": "Action-Adventure" }]
  }
]
```
**Response 400:** `{ "error": "Parámetro q es obligatorio" }`

---

## API Externa — GameBrain

GameCrew integra [GameBrain API](https://gamebrain.co) para el autocompletado de juegos al proponer uno en una sesión.

- Las búsquedas se realizan a través del servidor Express como proxy
- La API key se almacena en `server/.env` y nunca se expone al cliente
- Se muestran hasta 5 sugerencias con imagen y género al escribir en el campo de búsqueda