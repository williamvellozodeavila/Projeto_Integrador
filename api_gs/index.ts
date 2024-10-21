import express from 'express'
import cors from 'cors'

import profissionaisRoutes from './routes/profissionais'
import servicosRoutes from './routes/servicos'
import clientesRoutes from './routes/clientes'
import propostasRoutes from './routes/propostas'

const app = express()
const port = 3004

app.use(express.json())
app.use(cors())

app.use("/profissionais", profissionaisRoutes)
app.use("/servicos", servicosRoutes)
app.use("/clientes", clientesRoutes)
app.use("/propostas", propostasRoutes)

app.get('/', (req, res) => {
  res.send('Gestão Studio')
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})