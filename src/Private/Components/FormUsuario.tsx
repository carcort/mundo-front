import type { ChangeEventHandler, FormEventHandler } from "react";

interface FormUsuarioProps {
  handleChangeUsuario: ChangeEventHandler<HTMLInputElement>;
  handleSubmitUsuario: FormEventHandler<HTMLFormElement>;
}

const FormUsuario = ({
  handleChangeUsuario,
  handleSubmitUsuario,
}: FormUsuarioProps) => {
  return (
    <form onSubmit={handleSubmitUsuario} className="w-[60%] h-[80%] bg-white px-10" >
       <header className="w-full h-[15%] grid place-items-center">
        Usuario
       </header>
       <main className="w-full h-[85%] ">
        <section className="w-full h-[35%] py-20">
          <label htmlFor="">Nombre</label>
          <input name="nombre" onChange={handleChangeUsuario} type="text" className="pl-3 w-full h-[80%] border border-gray-200" placeholder="Pc, Celular..." />
        </section>
        <section className="w-full h-[35%] py-20">
          <label htmlFor="">Apellido</label>
          <input name="apellido" onChange={handleChangeUsuario} type="text" className="pl-3 w-full h-[80%] border border-gray-200"  />
        </section>
        <section className="w-full h-[35%] py-20">
          <label htmlFor="">Cargo</label>
          <input name="cargo" onChange={handleChangeUsuario} type="text" className="pl-3 w-full h-[80%] border border-gray-200"  />
        </section>
        <section className="w-full h-[30%] flex items-center justify-center">
         <button className="bg-violet-600 text-white font-semibold hover:bg-violet-700 w-[70%] h-[30%] cursor-pointer">
          Guardar
         </button>
        </section>
       </main>

    </form>
  )
}

export default FormUsuario
