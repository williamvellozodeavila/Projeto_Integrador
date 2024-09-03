import ItemAgenda from "@/components/ItemAgenda";

export default function Profissional() {
    return (
       <main>
          
          <section className="max-w-screen-xl mx-auto">
            <h1 className="mb-5 mt-3 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white"> <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Profissionais</span></h1>
          
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