import { PrismaClient } from "@prisma/client"
import { Router } from "express"

const prisma = new PrismaClient()
const router = Router()

router.get("/", async (req, res) => {
  try {
    const medicos = await prisma.medico.findMany()
    res.status(200).json(medicos)
  } catch (error) {
    res.status(400).json(error)
  }
})

router.post("/", async (req, res) => {
  const { crm, nome, celular, especialidade } = req.body

  if (!crm || !nome || !celular || !especialidade) {
    res.status(400).json({ "erro": "Informe crm, nome, celular e especialidade" })
    return
  }

  try {
    const medico = await prisma.medico.create({
      data: { crm, nome, celular, especialidade }
    })
    res.status(201).json(medico)
  } catch (error) {
    res.status(400).json(error)
  }
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params

  try {
    const medico = await prisma.medico.delete({
      where: { id: Number(id) }
    })
    res.status(200).json(medico)
  } catch (error) {
    res.status(400).json(error)
  }
})

router.put("/:id", async (req, res) => {
  const { id } = req.params
  const { crm, nome, celular, especialidade } = req.body

  if (!crm || !nome || !celular || !especialidade) {
    res.status(400).json({ "erro": "Informe crm, nome, celular e especialidade" })
    return
  }

  try {
    const medico = await prisma.medico.update({
      where: { id: Number(id) },
      data: { crm, nome, celular, especialidade }      
    })
    res.status(200).json(medico)
  } catch (error) {
    res.status(400).json(error)
  }
})

router.get("/lista/bebes", async (req, res) => {
  try {
    const medicos = await prisma.medico.findMany({
      include: {
        bebes: true
      }
    })
    res.status(200).json(medicos)
  } catch (error) {
    res.status(400).json(error)
  }
})

export default router