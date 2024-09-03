import { PrismaClient } from "@prisma/client"
import { Router } from "express"

// const prisma = new PrismaClient()
const prisma = new PrismaClient({
  log: [
    {
      emit: 'event',
      level: 'query',
    },
    {
      emit: 'stdout',
      level: 'error',
    },
    {
      emit: 'stdout',
      level: 'info',
    },
    {
      emit: 'stdout',
      level: 'warn',
    },
  ],
})

prisma.$on('query', (e) => {
  console.log('Query: ' + e.query)
  console.log('Params: ' + e.params)
  console.log('Duration: ' + e.duration + 'ms')
})

const router = Router()

router.get("/", async (req, res) => {
  try {
    const maes = await prisma.mae.findMany()
    res.status(200).json(maes)
  } catch (error) {
    res.status(400).json(error)
  }
})

router.post("/", async (req, res) => {
  const { nome, endereco, telefone, datanasc } = req.body

  if (!nome || !endereco || !telefone || !datanasc) {
    res.status(400).json({ "erro": "Informe nome, endereco, telefone e datanasc" })
    return
  }

  try {
    const mae = await prisma.mae.create({
      data: { nome, endereco, telefone, dataNasc: new Date(datanasc) }
    })
    res.status(201).json(mae)
  } catch (error) {
    res.status(400).json(error)
  }
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params

  try {
    const mae = await prisma.mae.delete({
      where: { id: Number(id) }
    })
    res.status(200).json(mae)
  } catch (error) {
    res.status(400).json(error)
  }
})

router.put("/:id", async (req, res) => {
  const { id } = req.params
  const { nome, endereco, telefone, datanasc } = req.body

  if (!nome || !endereco || !telefone || !datanasc) {
    res.status(400).json({ "erro": "Informe nome, endereco, telefone e datanasc" })
    return
  }

  try {
    const mae = await prisma.mae.update({
      where: { id: Number(id) },
      data: { nome, endereco, telefone, dataNasc: new Date(datanasc) }
    })
    res.status(200).json(mae)
  } catch (error) {
    res.status(400).json(error)
  }
})

router.get("/lista/bebes", async (req, res) => {
  try {
    const maes = await prisma.mae.findMany({
      include: {
        bebes: true
      }
    })
    res.status(200).json(maes)
  } catch (error) {
    res.status(400).json(error)
  }
})

export default router