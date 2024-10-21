"use client"

import { ServicosI } from "@/utils/types/servicos";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";
import { useClienteStore } from "@/context/cliente";
import { useForm } from "react-hook-form"
import { toast } from 'sonner'

type Inputs = {
    descricao: string
  }

export default function Detalhes() {
    const params = useParams()
    const { cliente } = useClienteStore()

    const [servico, setServico] = useState<ServicosI>()

    const { register, handleSubmit, reset } = useForm<Inputs>()

  useEffect(() => {
    async function buscaDados() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/servicos/${params.servico_id}`)
      const dados = await response.json()
      setServico(dados)

    } 
    buscaDados()
  }, [])

  async function enviaProposta(data: Inputs) {

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/propostas`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        clienteId: cliente.id,
        servicoId: Number(params.servico_id),
        descricao: data.descricao
      })
    })

    if (response.status == 201) {
      toast.success("Obrigado. Sua proposta foi enviada. Aguarde retorno")
      reset()
    } else {
      toast.error("Erro... Não foi possível enviar sua proposta")
    }
  }
    
    return(
        
        <section className="flex flex-col mt-10 mx-auto items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-5xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-2/4 md:w-2/4 md:rounded-none md:rounded-s-lg" 
                src={servico?.foto} alt="Foto do Serviço"/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {servico?.nome}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Tempo: {servico?.tempo} min.
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Valor: R$ {Number(servico?.preco).toLocaleString("pt-br",
                                {maximumFractionDigits: 2}
                )}
                </p>

                {cliente.id ?
            <>
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Gostou deste Serviço? Faça uma Proposta!</h3>
              <form onSubmit={handleSubmit(enviaProposta)}>
                <input type="text" className="mb-2 mt-4 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={`${cliente.nome} (${cliente.email})`} disabled readOnly />
                <textarea id="message" className="mb-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  placeholder="Descreva a sua proposta" 
                  required
                  {...register("descricao")}></textarea>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar Proposta</button>
              </form>
            </>
            :
            <h3 className="text-xl font-bold tracking-tight text-orange-700 dark:text-white">** Faça login para fazer proposta para este serviço!!</h3>
          }

            </div>
        </section>



    )
}