import { PrismaClient } from "@prisma/client"
import { Router } from "express"

const prisma = new PrismaClient()
const router = Router()

router.get("/", async (req, res) => {
  try {
    const servicos = await prisma.servico.findMany()
    res.status(200).json(servicos)
  } catch (error) {
    res.status(400).json(error)
  }
})

router.post("/", async (req, res) => {
  const { nome, tempo, preco, foto } = req.body

  if (!nome || !tempo || !preco || !foto) {
    res.status(400).json({ "erro": "Informe nome, tempo, preco, foto" })
    return
  }

  try {
    const servico = await prisma.servico.create({
      data: { nome, tempo, preco, foto }
    })
    res.status(201).json(servico)
  } catch (error) {
    res.status(400).json(error)
  }
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params

  try {
    const servico = await prisma.servico.delete({
      where: { id: Number(id) }
    })
    res.status(200).json(servico)
  } catch (error) {
    res.status(400).json(error)
  }
})

router.put("/:id", async (req, res) => {
  const { id } = req.params
  const { nome, tempo, preco, foto  } = req.body

  if (!nome || !tempo || !preco|| !foto) {
    res.status(400).json({ "erro": "Informe nome, tempo, preco, foto" })
    return
  }

  try {
    const servico = await prisma.servico.update({
      where: { id: Number(id) },
      data: { nome, tempo, preco, foto  }
    })
    res.status(200).json(servico)
  } catch (error) {
    res.status(400).json(error)
  }
})

router.get("/pesquisa/:termo", async (req, res) => {

  const { termo } = req.params

  // tenta converter o termo em número
  const termoNumero = Number(termo)

  // se a conversão gerou um NaN (Not a Number)
  if (isNaN(termoNumero)) {
    try {
      const servicos = await prisma.servico.findMany({
        where: {nome: { contains: termo}}
      })
      res.status(200).json(servicos)
    } catch (error) {
      res.status(400).json(error)
    }
  } else {
    try {
      const servicos = await prisma.servico.findMany({
        where: {preco: { lte: termoNumero}}
      })
      res.status(200).json(servicos)
    } catch (error) {
      res.status(400).json(error)
    }
  }
})

router.get("/:id", async (req, res) => {
  const { id } = req.params

  try {
    const servico = await prisma.servico.findUnique({
      where: { id: Number(id)}
  })
    res.status(200).json(servico)
  } catch (error) {
    res.status(400).json(error)
  }
})

export default router