import { useEffect, useState } from "react";
import BadgeProducto from "../Components/BadgeProducto"
import FormTienda from "../Components/FormTienda"
import { postData } from "../../Fetch/postData";
import { getData } from "../../Fetch/getData";



const Tienda = ({auth}) => {

  console.log(auth);
  

  const token = localStorage.getItem('access_token')

 const [nombre_producto, setNombre_Producto] = useState('')
 const [cantidad_producto, setNombre_Cantidad] = useState(0)

 const [productos, setProductos] = useState([])

 const handleChangeTienda =(e)=>{
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

 const handleSubmitTienda = async(e)=>{
      e.preventDefault()
      console.log(nombre_producto, cantidad_producto);
      const data = {nombre_producto, cantidad_producto}
      const ruta1 = 'productos'
      await postData({data, token, ruta1})
      alert('Producto guardado')
      window.location.reload();
      
 }

 // traer los productos
 const traerData = async()=>{
        const ruta1 = 'productos'
           const res = await getData({token, ruta1})
           setProductos(res)
       }
       useEffect(()=>{
           traerData()
       }, [])
     
       
       
       console.log(productos);

 
  return (
    <div className="w-full h-full grid grid-cols-2 gap-x-5 bg-gray-100">
     <section className="w-full h-full">
      <div className="w-full h-[10%]  flex items-center">
        <section className="w-full h-[30%] flex justify-center text-gray-700">
          {auth?.user?.profile?.email} - id: {auth?.user?.profile?.sub}
        </section>
      </div>
      <div className="w-full h-[90%] flex justify-center ">
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