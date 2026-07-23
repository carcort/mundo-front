import { useState, useEffect } from "react";
import { getData } from "../../Fetch/getData";
import { postData } from "../../Fetch/postData";

const Formulario = () => {

 const [pais, setPais] = useState('')
 const [ciudad, setCiudad] = useState('')

 const [datos, setDatos] = useState([])

  const handleChangeInputForm =(e)=>{
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

  
  


  const handleSubmitForm = async(e)=>{
      e.preventDefault()
      console.log(pais, ciudad);
      const data = {pais, ciudad}
      
      await postData({data})
      alert('guardado')
      
  }


  const traerData = async()=>{
      const res = await getData()
      setDatos(res)
  }
  useEffect(()=>{
      traerData()
  }, [])

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