# Despliegue — GameCrew

## Frontend — Vercel

El frontend está desplegado en Vercel conectando el repositorio de GitHub.
Vercel detecta automáticamente que es un proyecto Vite y configura el build.

- **URL:** https://gamecrew.vercel.app
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Variable de entorno:** `VITE_API_URL=https://gamecrew-api.onrender.com/api/v1`

## Backend — Render

El backend está desplegado en Render como Web Service gratuito.

- **URL API:** https://gamecrew-api.onrender.com/api/v1/sessions
- **Root Directory:** `server`
- **Build Command:** `npm install && npm run build`
- **Start Command:** `npm start`

## Comprobar que funciona

- Frontend: https://gamecrew.vercel.app
- API sesiones: https://gamecrew-api.onrender.com/api/v1/sessions

## Nota importante

El plan gratuito de Render hace que el servidor se duerma tras 15 minutos
de inactividad. La primera petición puede tardar hasta 50 segundos en
responder mientras arranca. Es normal en el plan gratuito.