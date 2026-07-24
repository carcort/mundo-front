import Formulario from "../Components/Formulario"
import { useNavigate } from "react-router";

const PageFormulario = ({auth}) => {

  console.log('auth pageform:', auth);
  

  const navegar = useNavigate()

  // guardar el token en localstorage
  //localStorage.setItem("token", auth?.user?.access_token);
  


  const handleClickIrAResultados =(e)=>{
      if(e.target.name === 'tienda'){
        navegar('/private/tienda')
      }
      else if(e.target.name === 'resultados'){
        navegar('/private/resultados')
      }
      else {
        console.log('as');
        
      }
  }

  return (
    <div className="w-full h-[95%] flex bg-gray-100">
     <div className="w-[60%] h-full grid place-items-center">
      <Formulario />
     </div>
     <section className="w-[30%] h-full flex gap-x-6 items-center">
        <button name="tienda" onClick={handleClickIrAResultados} className="w-[50%] h-[5%] cursor-pointer bg-violet-400 hover:bg-violet-500 text-white">
        Tienda
        </button>
        <button name="resultados" onClick={handleClickIrAResultados} className="w-[50%] h-[5%] cursor-pointer bg-blue-600 hover:bg-blue-700 text-white">
        Resultados
        </button>
     </section>
    </div>
  )
}

export default PageFormulario