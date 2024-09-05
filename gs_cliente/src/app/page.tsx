import { InputPesquisa } from "@/components/InputPesquisa"
import { ItemServiços } from "@/components/ItemServiços";

export default function Home() {
  return (
     <main>
        <InputPesquisa />
        
        <section className="mt-5 mb-5 max-w-screen-xl mx-auto">
          
          <h1 className="mt-5 mb-5 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">Serviços <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">em Destaque</span></h1>
         

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">

            <ItemServiços />
            <ItemServiços />
            <ItemServiços />

          </div>
        </section>
      

     </main>
  );
}
