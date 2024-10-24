import { ServicosI } from "@/utils/types/servicos";
import Link from "next/link";

export function ItemServiços({data}: {data: ServicosI}) {
    return (

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href={`/detalhes/${data.id}`}>
            <img className="w-96 h-96 rounded-t-lg" 
                src={data.foto} 
                alt={`Imagem da ${data.nome}`} />
            </Link>
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {data.nome}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Tempo: {data.tempo} min
                </p>
                <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
                    Valor: R$ {Number(data.preco).toLocaleString("pt-br",
                        {maximumFractionDigits: 2}
                    )}
                </p>
                <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
                    Dados profissional
                </p>
                <Link href={`/detalhes/${data.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Ver detalhes
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        
                    </svg>
                </Link>
            </div>
        </div>


    )
}