import { useState } from "react";

import { deleteData } from "../../Fetch/deleteData";


const BadgeProducto = ({data}) => {

  const [nproducto, setNProducto] = useState(true)
  const [cproducto, setCProducto] = useState(true)

  console.log(data);
  



  const token = localStorage.getItem('access_token')

  const handleClickBadgeProductos = async(e, id)=>{
          if(e.target.id === 'eliminar'){
          //console.log('eliminarrr');
              const ruta1 = 'productos'
              await deleteData({ruta1, token, id})
              alert(`Eliminado el producto con id: ${id}`)
              window.location.reload()
          
          }   
      else if(e.target.id === 'actualizar'){
          if(e.target.id === 'actualizar' && id===10){
              setNProducto(!nproducto)
              setCProducto(!cproducto)
          }
      }
      else {
        console.log('aaaaaaaaaaa');
        
      }
  }


  const noProducto =(id)=>{
    return nproducto
  }

  const caProducto =(id)=>{
    return cproducto
  }
  return (
    <div className="w-full h-full">
       <header className="w-full h-[10%] grid grid-cols-6 place-items-center">
          <div>
            N°
          </div>
          <div>
            Producto
          </div>
          <div>
            Cantidad
          </div>
          <div>
            Dinero(CLP)
          </div>
          <div>
            
          </div>
          <div>
            
          </div>
       </header>

       <main className="w-full h-[90%] grid grid-rows-10">
          {data.map((el, index)=>{
            return <section className="w-full h-full grid grid-cols-6 place-items-center text-gray-800">
                <div>
                  {index+1}
                </div>
                <button name="nombre_producto">
                 {noProducto(el.id_producto) ?  el.nombre_producto: <input name="producto"  type="text" className="pl-3 w-full h-[99%] py-2 border border-gray-200" placeholder="Pc, Celular..." />}
                </button>
                <button name="cantidad_producto">
                 {caProducto(el.id_producto) ?  el.cantidad_producto: <input name="producto"  type="text" className="pl-3 w-full h-[99%] py-2 border border-gray-200" placeholder="Pc, Celular..." />}
                </button>
                <div>
                 264646
                </div>
                <img id='eliminar' onClick={(e)=>handleClickBadgeProductos(e, el.id_producto)} className="w-4 h-4 cursor-pointer"  src="https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/cruz.png" alt="zx" />
                <img id='actualizar' onClick={(e)=>handleClickBadgeProductos(e, el.id_producto)}  className="w-4 h-4 cursor-pointer" src="https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/lapiz.png" alt="zx" />
            </section>
          })}
       </main>
    </div>
  )
}

export default BadgeProducto