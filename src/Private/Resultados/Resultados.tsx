import { useNavigate } from "react-router";

const Resultados = () => {

 const navegar = useNavigate()

 const handleClickVolver =()=>{
   navegar('/private')
 }
  return (
    <div className="w-full h-full">
      <header className="w-full h-[10%] grid place-items-center">
       Resultados
      </header>
      <main className="w-full h-[90%]">
        <section className="w-full h-[90%]">
         lista
        </section>
        <div className="w-full h-[10%] flex justify-end items-center">
          <button onClick={handleClickVolver} className="bg-blue-600 hover:bg-blue-700 w-[15%] h-[50%] text-white font-semibold cursor-pointer">
            Volver
         </button>
        </div>
      </main>
    </div>
  )
}

export default Resultados