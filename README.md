# GameCrew 

Organizador de sesiones de juego para grupos de amigos (2-6 personas). Permite crear sesiones, proponer juegos con autocompletado, votar entre los participantes y valorar la sesión al terminar.

##  Enlaces

- [Tablero Trello](https://trello.com/invite/b/69df69ada047d0e756d98aeb/ATTI4d49a171bafb960ab93f0517baa3209a91FFB376/gamecrew)
- [Frontend en Vercel](https://gamecrew.vercel.app)
- [Backend en Render](https://gamecrew-api.onrender.com)

##  Documentación

- [Idea del proyecto](docs/idea.md)
- [Metodologías ágiles](docs/agile.md)
- [API REST](docs/api.md)

##  Tecnologías

**Frontend**
- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router v6

**Backend**
- Node.js + Express
- Arquitectura por capas: routes, controllers, services

**API Externa**
- [GameBrain API](https://gamebrain.co) — autocompletado de juegos con imágenes y géneros

##  Estructura del proyecto

```
gamecrew/
├── src/               # Frontend React
│   ├── api/           # Llamadas al backend
│   ├── components/    # Componentes reutilizables
│   ├── pages/         # Páginas de la app
│   ├── types/         # Interfaces TypeScript
│   └── context/       # Contexto global
├── server/            # Backend Express
│   └── src/
│       ├── routes/        # Rutas REST
│       ├── controllers/   # Controladores
│       ├── services/      # Lógica de negocio
│       └── config/        # Datos iniciales
└── docs/              # Documentación
```

##  Instalación local

### Frontend
```bash
npm install
npm run dev
```

### Backend
```bash
cd server
npm install
npm run dev
```

### Variables de entorno

Crea un archivo `server/.env` con: GAMEBRAIN_API_KEY=api_key

##  Funcionalidades

- Crear sesiones con fecha y participantes
- Proponer juegos con búsqueda y autocompletado via GameBrain
- Votar por los juegos propuestos
- Valorar la sesión con estrellas (1-5)
- Ver estadísticas de sesiones
