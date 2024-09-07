import express from 'express'
import cors from 'cors'

import profissionaisRoutes from './routes/profissionais'
import servicosRoutes from './routes/servicos'
const app = express()
const port = 3004

app.use(express.json())
app.use(cors())

app.use("/profissionais", profissionaisRoutes)
app.use("/servicos", servicosRoutes)

app.get('/', (req, res) => {
  res.send('Gestão Studio')
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})