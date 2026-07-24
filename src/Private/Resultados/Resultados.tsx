import {  useNavigate } from "react-router";
import { getData } from "../../Fetch/getData";
import { useEffect, useState } from "react";
// import { getData } from "../../Fetch/getData";
// import { useEffect, useState } from "react";

const Resultados = () => {

  // const token = localStorage.getItem('token')
  const token = localStorage.getItem('access_token')

  // const [datos, setDatos] = useState([])
  const [datos, setDatos] = useState([])

 const navegar = useNavigate()

 const handleClickVolver =()=>{
   navegar('/private')
 }




//  const traerData = async()=>{
//        const res = await getData({token})
//        setDatos(res)
//    }
//    useEffect(()=>{
//        traerData()
//    }, [])
   


    const traerData = async()=>{
      const ruta1 = ''
          const res = await getData({token, ruta1})
          setDatos(res)
      }
      useEffect(()=>{
          traerData()
      }, [])
    
      console.log(datos);
 
   //console.log(datos);
  return (
    <div className="w-full h-full">
      <header className="w-full h-[10%] grid place-items-center">
       Resultados
      </header>
      <main className="w-full h-[90%]">
        
        <section className="w-full h-[90%] grid grid-rows-9">
          {datos.map((el)=>{
              return <div className="w-full border border-gray-200 px-6 flex items-center">
                Nombre: {el?.nombre} {el.apellido} - Cargo: {el.cargo}
              </div>
          })}
         
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