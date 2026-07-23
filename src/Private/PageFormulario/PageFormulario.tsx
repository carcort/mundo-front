import Formulario from "../Components/Formulario"
import { useNavigate } from "react-router";

const PageFormulario = () => {

  const navegar = useNavigate()


  const handleClickIrAResultados =()=>{
      navegar('/private/resultados')
  }

  return (
    <div className="w-full h-[95%] flex bg-gray-100">
     <div className="w-[60%] h-full grid place-items-center">
      <Formulario />
     </div>
     <section className="w-[30%] h-full grid place-items-center">
      <button onClick={handleClickIrAResultados} className="w-[50%] h-[5%] cursor-pointer bg-blue-600 hover:bg-blue-700 text-white">
       Resultados
      </button>
     </section>
    </div>
  )
}

export default PageFormulario