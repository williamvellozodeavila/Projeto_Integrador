"use client"

import Link from "next/link";
import { useClienteStore } from "@/context/cliente";
import { useRouter } from "next/navigation";

export function Header() {
    const { cliente, deslogaCliente } = useClienteStore()
    const router = useRouter()

    function sairCliente() {
        deslogaCliente()
        // remove de localStorage o id do cliente logado (se ele indicou salvar no login)
        if (localStorage.getItem("client_key")) {
        localStorage.removeItem("client_key")
        }
        router.push("/login")
    }

    return (
        <nav className="bg-blue-400 border-gray-200 dark:bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <span className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="./logo.png" className="h-16" alt="Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Gestão Studio
                    </span>
                </span>
            <div className="mr-5 items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul className="mr-10 flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-blue-400 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-blue-400 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    
                    <li>
                        <Link href="/" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Serviço</Link>
                    </li>
                    <li>
                        <Link href="/propostas" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Propostas</Link>
                    </li>
                </ul>
            
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
                
            {cliente.id ?
                <>
                <span className="text-sm  text-white dark:text-white hover:underline">
                    {cliente.nome}
                </span>
                <span className="cursor-pointer text-bold  text-white dark:text-white hover:underline"
                    onClick={sairCliente}>
                    Sair
                </span>
                </>
                :
                <>
                
                <Link href="/login" className="text-bold  text-white dark:text-white hover:underline">
                    Entrar
                </Link>
                </>
            }
            </div>
            </div>
            </div>
        </nav>

    )
}