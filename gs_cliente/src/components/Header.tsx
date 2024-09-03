import Link from "next/link";

export function Header() {
    return (
        <nav className="bg-blue-400 border-gray-200 dark:bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="./logo.png" className="h-16" alt="Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Gestão Studio
                    </span>
                </Link>
            <div className="mr-5 items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul className="mr-10 flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-blue-400 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-blue-400 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    
                    <li>
                        <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Agenda</a>
                    </li>
                    <li>
                        <a href="/profissionais" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Profissionais</a>
                    </li>
                </ul>
            
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
                <span className="text-sm  text-white dark:text-white hover:underline">
                    (identifique-se)
                </span>
                <Link href="/login" className="text-bold  text-white dark:text-white hover:underline">
                    Entrar
                </Link>
            </div>
            </div>
            </div>
        </nav>

    )
}