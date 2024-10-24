"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

type Inputs = {
  email: string;
  codigoRecuperacao: string;
  novaSenha: string;
  repetirSenha: string;
};

export default function AlterarSenha() {
  const { register, handleSubmit } = useForm<Inputs>();
  const router = useRouter();

  async function enviarCodigo(data: Inputs) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/clientes/recuperar-senha`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ email: data.email }),
    });

    if (response.status === 200) {
      alert("Código de recuperação enviado para o e-mail.");
    } else {
      alert("Erro ao enviar o código.");
    }
  }

  async function alterarSenha(data: Inputs) {
    if (data.novaSenha !== data.repetirSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/clientes/alterar-senha`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        codigoRecuperacao: data.codigoRecuperacao,
        novaSenha: data.novaSenha,
      }),
    });

    if (response.status === 200) {
      alert("Senha alterada com sucesso!");
      router.push("/login"); // Redireciona para a página de login
    } else {
      alert("Erro ao alterar a senha.");
    }
  }

  return (
    <section className="bg-orange-100 dark:bg-gray-900">
      <div className="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-20 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Alterar Senha
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(enviarCodigo)}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  E-mail do Cliente:
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  {...register("email")}
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-orange-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Enviar Código
              </button>
            </form>

            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(alterarSenha)}>
              <div>
                <label htmlFor="codigoRecuperacao" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Código de Recuperação:
                </label>
                <input
                  type="text"
                  id="codigoRecuperacao"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  {...register("codigoRecuperacao")}
                />
              </div>
              <div>
                <label htmlFor="novaSenha" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Nova Senha:
                </label>
                <input
                  type="password"
                  id="novaSenha"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  {...register("novaSenha")}
                />
              </div>
              <div>
                <label htmlFor="repetirSenha" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Repetir Nova Senha:
                </label>
                <input
                  type="password"
                  id="repetirSenha"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  {...register("repetirSenha")}
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-orange-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Alterar Senha
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
 )
}