import express from 'express'
import maesRoutes from './routes/maes'
import medicosRoutes from './routes/medicos'
import bebesRoutes from './routes/bebes'
const app = express()
const port = 3000

app.use(express.json())
app.use("/maes", maesRoutes)
app.use("/medicos", medicosRoutes)
app.use("/bebes", bebesRoutes)

app.get('/', (req, res) => {
  res.send('API: Sistema de Berçário')
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})