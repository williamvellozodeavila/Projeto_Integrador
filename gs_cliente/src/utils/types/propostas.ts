import { ServicosI } from "./servicos"

export interface PropostaI {
  id: number
  clienteId: string
  servicoId: number
  servico: ServicosI
  descricao: string
  resposta: string | null
  createdAt: string
  updatedAt: string | null
}