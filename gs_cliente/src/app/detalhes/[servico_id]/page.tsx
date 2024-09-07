"use client"

import { ServicosI } from "@/utils/types/servicos";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

export default function Detalhes() {
    const params = useParams()

    const [servico, setServico] = useState<ServicosI>()

  useEffect(() => {
    async function buscaDados() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/servicos/${params.servico_id}`)
      const dados = await response.json()
      setServico(dados)

    } 
    buscaDados()
  }, [])
    
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
            </div>
        </section>



    )
}