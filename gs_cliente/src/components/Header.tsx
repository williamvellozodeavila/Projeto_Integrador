import Link from "next/link";

export function Header() {
    return (
        <nav className="bg-blue-400 border-gray-200 dark:bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="./logo.jpeg" className="h-16" alt="Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Gestão Studio
                    </span>
                </Link>
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
                <span className="text-sm  text-white dark:text-white hover:underline">
                    (identifique-se)
                </span>
                <Link href="/login" className="text-bold  text-white dark:text-white hover:underline">
                    Entrar
                </Link>
            </div>
            </div>
        </nav>

    )
}