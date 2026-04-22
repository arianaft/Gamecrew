import express from 'express'
import cors from 'cors'
import sessionsRouter from './routes/sessions.routes'

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

app.use('/api/v1/sessions', sessionsRouter)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})