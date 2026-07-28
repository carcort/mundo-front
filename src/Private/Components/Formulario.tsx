import { useState, useEffect } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { getData } from "../../Fetch/getData";
import { postData } from "../../Fetch/postData";
import type { PaisCiudad } from "../../types/domain";

const Formulario = () => {

  // CAAA CAMBIO SI ES ID O ACCESS
  const token = localStorage.getItem('access_token')






 const [pais, setPais] = useState('')
 const [ciudad, setCiudad] = useState('')

 const [datos, setDatos] = useState<unknown[]>([])

  const handleChangeInputForm = (e: ChangeEvent<HTMLInputElement>): void => {
     if(e.target.name === 'pais'){
        setPais(e.target.value)
     } 
     else if(e.target.name === 'ciudad'){
        setCiudad(e.target.value)
     }
     else {
        console.log('sd');
        
     }
  }

  
  
console.log('token:', token);


  const handleSubmitForm = async (
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
      e.preventDefault()
      console.log(pais, ciudad);
      const nombre = 'carviii'
      const apellido = 'cortes'
      const cargo = 'Administrador_Rrhh' 
      const data: PaisCiudad & {
        nombre: string;
        apellido: string;
        cargo: string;
      } = {pais, ciudad, nombre, apellido, cargo}
      const ruta1 = ''
      await postData({data, token, ruta1})
      alert('guardado')
      
  }


  useEffect(()=>{
    const traerData = async (): Promise<void> => {
      const res = await getData<unknown[]>({token, ruta1: ""})
      setDatos(res)
    }

    void traerData()
  }, [token])

  console.log(datos);


  
  return (
    <form onSubmit={handleSubmitForm} className="w-[50%] h-[70%] bg-white" >
      <header className="w-full h-[15%] grid place-items-center">
        Formulario
      </header>
      <main className="w-full h-[85%] grid grid-rows-3 py-12 px-14">
         <section className="w-full grid grid-rows-2 py-6">
           <label htmlFor="">Pais</label>
           <input name="pais" onChange={handleChangeInputForm} className="pl-3 w-full h-full border border-gray-200" type="text" />
         </section>
         <section className="w-full grid grid-rows-2 py-6">
           <label htmlFor="">Ciudad</label>
           <input name="ciudad" onChange={handleChangeInputForm} className="pl-3 w-full h-full border border-gray-200" type="text" />
         </section>
         <div className="w-full flex items-center">
          <button className="w-full h-[50%] bg-violet-700 text-white font-semibold cursor-pointer hover:bg-violet-800">
            Guardar
          </button>
         </div>
      </main>
    </form>
  )
}

export default Formulario
