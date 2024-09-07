'use client'
import { InputPesquisa } from "@/components/InputPesquisa"
import { ItemServiços } from "@/components/ItemServiços";
import { ServicosI } from "@/utils/types/servicos";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";

export default function Home() {
  const [servicos, setServicos] = useState<ServicosI[]>([])

  useEffect(() => {
    async function buscaDados() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/servicos`)
      const dados = await response.json()
      setServicos(dados)

    } 
    buscaDados()
  }, [])

  const listaServicos = servicos.map( servico => (
    <ItemServiços data={servico} key={servico.id} />
  ))

  return (
     <main>
        <InputPesquisa setServicos={setServicos} />
        
        <section className="mt-5 mb-5 max-w-screen-xl mx-auto">
          
          <h1 className="mt-5 mb-5 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">Serviços <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">em Destaque</span></h1>
         

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {listaServicos}

          </div>
        </section>
      
        <Toaster position="top-right" richColors  />
     </main>
  );
}
