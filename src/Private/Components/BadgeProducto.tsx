


const BadgeProducto = ({data}) => {
  return (
    <div className="w-full h-full">
       <header className="w-full h-[10%] grid grid-cols-4 place-items-center">
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
       </header>

       <main className="w-full h-[90%] grid grid-rows-10">
          {data.map((el, index)=>{
            return <section className="w-full h-full grid grid-cols-4 place-items-center text-gray-800">
                <div>
                  {index+1}
                </div>
                <div>
                 {el.nombre_producto}
                </div>
                <div>
                 {el.cantidad_producto}
                </div>
                <div>
                 264646
                </div>
            </section>
          })}
       </main>
    </div>
  )
}

export default BadgeProducto