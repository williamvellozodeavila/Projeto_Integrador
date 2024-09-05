import ItemAgenda from "@/components/ItemAgenda";

export default function Profissional() {
    return (
       <main>
          
          <section className="max-w-screen-xl mx-auto">
            <div className="mt-5 mb-5 flex flex-row items-center justify-between pb-10">
                <h1 className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white"> <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Profissionais</span></h1>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">+ Novo Agendamento</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
  
              <ItemAgenda />
              <ItemAgenda />
              <ItemAgenda />
              <ItemAgenda />
              <ItemAgenda />
              <ItemAgenda />
              <ItemAgenda />
              <ItemAgenda />
              
            </div>
          </section>
        
  
       </main>
    );
  }