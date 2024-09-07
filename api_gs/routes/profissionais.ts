import { PrismaClient } from "@prisma/client"
import { Router } from "express"

const prisma = new PrismaClient()
const router = Router()

router.get("/", async (req, res) => {
  try {
    const profissionais = await prisma.profissional.findMany()
    res.status(200).json(profissionais)
  } catch (error) {
    res.status(400).json(error)
  }
})

router.post("/", async (req, res) => {
  const { nome,  especialidade, foto } = req.body

  if (!nome || !especialidade || !foto) {
    res.status(400).json({ "erro": "Informe crm, nome, celular e especialidade" })
    return
  }

  try {
    const profissional = await prisma.profissional.create({
      data: { nome, especialidade, foto }
    })
    res.status(201).json(profissional)
  } catch (error) {
    res.status(400).json(error)
  }
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params

  try {
    const profissional = await prisma.profissional.delete({
      where: { id: Number(id) }
    })
    res.status(200).json(profissional)
  } catch (error) {
    res.status(400).json(error)
  }
})

router.put("/:id", async (req, res) => {
  const { id } = req.params
  const {nome, especialidade, foto } = req.body

  if (!nome || !especialidade || !foto ) {
    res.status(400).json({ "erro": "Informe nome, especialidade e foto" })
    return
  }

  try {
    const profissional = await prisma.profissional.update({
      where: { id: Number(id) },
      data: { nome, especialidade, foto }      
    })
    res.status(200).json(profissional)
  } catch (error) {
    res.status(400).json(error)
  }
})



export default router