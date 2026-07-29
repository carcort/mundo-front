import { useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { AuthContextProps } from "react-oidc-context";
import {  useNavigate } from "react-router";
import BadgeProducto from "../Components/BadgeProducto"
import FormTienda from "../Components/FormTienda"
import { postData } from "../../Fetch/postData";
import { getData } from "../../Fetch/getData";
import type { NuevoProducto, Producto } from "../../types/domain";

interface TiendaProps {
  auth: AuthContextProps;
}

const Tienda = ({ auth }: TiendaProps) => {

  const navegar = useNavigate()

  console.log(auth);

  const handleClickVolverTienda =()=>{
      navegar('/private')
  }
  

  const token = localStorage.getItem('access_token')

 const [nombre_producto, setNombre_Producto] = useState('')
 const [cantidad_producto, setNombre_Cantidad] = useState(0)

 const [productos, setProductos] = useState<Producto[]>([])

 const handleChangeTienda = (e: ChangeEvent<HTMLInputElement>): void => {
   if(e.target.name === 'producto'){
     setNombre_Producto(e.target.value)
   }
   else if(e.target.name === 'cantidad'){
    setNombre_Cantidad(e.target.valueAsNumber)
   }
   else {
    console.log('as');
    
   }
 }

 const handleSubmitTienda = async (e: FormEvent<HTMLFormElement>,): Promise<void> => {
      e.preventDefault()
      console.log(nombre_producto, cantidad_producto);
      const data: NuevoProducto = {nombre_producto, cantidad_producto}
      const ruta1 = 'productos'
      await postData({data, token, ruta1})
      alert('Producto guardado')
      window.location.reload();
      
 }

 // traer los productos
       useEffect(()=>{
         const traerData = async (): Promise<void> => {
           const ruta1 = 'productos'
           const res = await getData<Producto[]>({token, ruta1})
           setProductos(res)
         }

         void traerData()
       }, [token])
     
       
       
       //console.log(productos);

 
  return (
    <div className="w-full h-full grid grid-cols-2 gap-x-5 bg-gray-100">
     <section className="w-full h-full">
      <div className="w-full h-[20%]  grid grid-rows-2 items-center justify-center">
        <section className="w-full h-[30%] flex justify-center text-gray-700">
          {auth?.user?.profile?.email} - id: {auth?.user?.profile?.sub}
        </section>
        <div className="w-full h-[70%] grid place-items-center">
          <button className="bg-blue-500 w-[150px] h-[30px] text-white font-semibold cursor-pointer hover:bg-blue-600" onClick={handleClickVolverTienda} >
          Volver
        </button>
        </div>
      </div>
      <div className="w-full h-[80%] flex justify-center ">
        <FormTienda
        handleChangeTienda={handleChangeTienda}
        handleSubmitTienda={handleSubmitTienda}
      />
      </div>
     </section>
     <section className="w-full h-full grid place-items-center">
       <div className="w-[80%] h-[80%] bg-white">
         <header className="w-full h-[10%] grid place-items-center">
          Lista de Productos
         </header>
         <main className="w-full h-[90%]">
           <BadgeProducto
           data = {productos}
            

           />
         </main>
       </div>
     </section>
    </div>
  )
}

export default Tienda
