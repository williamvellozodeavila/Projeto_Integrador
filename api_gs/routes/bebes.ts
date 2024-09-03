import { PrismaClient } from "@prisma/client"
import { Router } from "express"

const prisma = new PrismaClient()
const router = Router()

router.get("/", async (req, res) => {
  try {
    const bebes = await prisma.bebe.findMany({
      include: {
        mae: true, 
        medico: true
      }
    })
    res.status(200).json(bebes)
  } catch (error) {
    res.status(400).json(error)
  }
})

router.post("/", async (req, res) => {
  const { nome, datanasc, peso, altura, maeId, medicoId } = req.body

  if (!nome || !datanasc || !peso || !altura || !maeId || !medicoId) {
    res.status(400).json({ "erro": "Informe nome, dataNasc, peso, altura, maeId e medicoId" })
    return
  }

  try {
    const bebe = await prisma.bebe.create({
      data: { nome, dataNasc: new Date(datanasc), peso, altura, maeId, medicoId }
    })
    res.status(201).json(bebe)
  } catch (error) {
    res.status(400).json(error)
  }
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params

  try {
    const bebe = await prisma.bebe.delete({
      where: { id: Number(id) }
    })
    res.status(200).json(bebe)
  } catch (error) {
    res.status(400).json(error)
  }
})

router.put("/:id", async (req, res) => {
  const { id } = req.params
  const { nome, datanasc, peso, altura, maeId, medicoId } = req.body

  if (!nome || !datanasc || !peso || !altura || !maeId || !medicoId) {
    res.status(400).json({ "erro": "Informe nome, dataNasc, peso, altura, maeId e medicoId" })
    return
  }

  try {
    const bebe = await prisma.bebe.update({
      where: { id: Number(id) },
      data: { nome, dataNasc: new Date(datanasc), peso, altura, maeId, medicoId }
    })
    res.status(200).json(bebe)
  } catch (error) {
    res.status(400).json(error)
  }
})

export default router