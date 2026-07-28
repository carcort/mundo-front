import { useState, useEffect, useEffectEvent } from "react";
import { useNavigate } from "react-router";
import FormUsuario from "../Components/FormUsuario";
import { postData } from "../../Fetch/postData";
import { getData } from "../../Fetch/getData";

const Home = ({auth}) => {

 console.log(auth);
 

 const token = localStorage.getItem('access_token')

 const [nombre, setNombre] = useState('')
 const [apellido, setApellido] = useState('')
 const [cargo, setCargo] = useState('')


 const [usuarios, setUsuarios] = useState([])

 const navegar = useNavigate()


 const handleClickRed =()=>{
   navegar('/private/tienda')
 }

 const handleChangeUsuario =(e)=>{
   //console.log(e.target.value);
   if(e.target.name === 'nombre'){
      setNombre(e.target.value)
   }
   else if(e.target.name === 'apellido'){
     setApellido(e.target.value)
   }
   else if(e.target.name === 'cargo'){
     setCargo(e.target.value)
   }
   else {
    console.log('asas');
   }
 }


 const handleSubmitUsuario = async(e)=>{
    e.preventDefault()
    
    const id_usuario = auth.user.profile.sub
    const email = auth.user.profile.email
    const data = {id_usuario, nombre, apellido, cargo, email}
    const ruta1 = 'usuarios'
    await postData({data, ruta1, token})
    window.location.reload()
    
 }


 const traerDatosUser = async()=>{
     const ruta1 = 'usuarios' 
     const resultados = await getData({ruta1, token})
     setUsuarios(resultados)
 }

 useEffect(()=>{
    traerDatosUser()
 }, [])

 console.log(usuarios);
 

  return (
    <div className="w-full h-full grid grid-cols-2 gap-x-5 ">
      <section className="w-full h-[80%] grid place-items-center ">
        <FormUsuario
        handleSubmitUsuario={handleSubmitUsuario}
        handleChangeUsuario={handleChangeUsuario}/>
      </section>
      
      <section className="w-full h-full flex flex-col">
       <section className="w-full h-[70%]">
         <header className="w-full h-[20%] grid place-items-center">
          Lista Usuarios
         </header>
         <main className="w-[99%] h-[80%] bg-yellow-400">
          
          <header className="w-full h-[10%] grid grid-cols-7 items-center">
           <div>
            Id
           </div>
           <div>
            Nombre
           </div>
           <div>
            Apellido
           </div>
           <div>
            Cargo
           </div>
           <div>
            Email
           </div>
           <div>
            
           </div>
           <div>
            
           </div>
          </header>

          <div className="w-full h-[90%] ">
            {usuarios.map((el,index)=>{
             return <section className="w-full grid grid-cols-7 h-[40px] items-center border border-gray-200 gap-y-1">
              <div>
               {index + 1}
              </div>
              <div>
               {el.nombre}
              </div>
              <div>
               {el.apellido}
              </div>
              <div>
               {el.cargo}
              </div>
              <div>
               {el.email}
              </div>
              <div className="w-full h-full grid place-items-center">
               <img className="w-5 h-5 cursor-pointer " src="https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/cruz.png" alt="as" />
              </div>
              <div className="w-full h-full grid place-items-center">
               <img className="w-5 h-5 cursor-pointer" src="https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/lapiz.png" alt="as" />
              </div>
            </section>
            })}
          </div>
          
          
         </main>
       </section>
        
        <section className="w-full h-[30%] grid place-items-center">
          <button onClick={handleClickRed} className="bg-blue-700 text-white w-[120px] h-[30px] cursor-pointer hover:bg-blue-800">
           Redireccionar
          </button>
        </section>
      </section>
    </div>
  )
}

export default Home