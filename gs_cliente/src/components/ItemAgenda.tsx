export default function ItemAgenda () {
    return (

        

        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <div className="flex flex-col items-center pb-10">
                <div className="flex flex-row items-center pb-10">
                    <img className="w-24 h-24 mt-5 mr-10 rounded-full shadow-lg" src="https://tse3.mm.bing.net/th?id=OIP.jGBOrjPH53amKBvoG2QKFwAAAA&pid=Api&P=0&h=180" alt="Bonnie image"/>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Nome</h5>
                </div>
                <div className="flex-col mt-1 md:mt-2">
                <p className="mb-1 mt-3 font-normal text-gray-700 dark:text-gray-400">
                    Proxima Cliente
                </p>
                <div className="flex flex-row mt-4 md:mt-6">
                <p className="mb-1 mt-2 mr-20 font-normal text-gray-700 dark:text-gray-400">
                    Nome:
                </p>
                <p className="mb-1 mt-2 font-normal text-gray-700 dark:text-gray-400">
                    Horario:
                </p>
                
                </div>
                </div>
                <div className="flex-col mt-4 md:mt-6">
                <p className="mb-1 mt-3 font-normal text-gray-700 dark:text-gray-400">
                    Procedimento
                </p>
                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
                    Procedimento
                </p>
                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
                    Procedimento
                </p>
                </div>
            </div>
        </div>


    )
}