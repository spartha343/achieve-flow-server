import express from 'express'
const app = express()
import cors from 'cors'
import routes from './routes/routes'

// middlewares
app.use(cors())
app.use(express.json())

// routes
app.use('/api/v1', routes)

app.get('/', (req, res) => {
  res.send('Hello from achieve flow server')
})

export default app
