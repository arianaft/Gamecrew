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
Propone un juego a una sesión.

**Body:**
```json
{ "name": "Minecraft", "proposedBy": "Ariana" }
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