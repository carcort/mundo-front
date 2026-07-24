

const FormTienda = ({handleChangeTienda, handleSubmitTienda}) => {
  return (
    <form onSubmit={handleSubmitTienda} className="w-[60%] h-[70%] bg-white px-10" >
       <header className="w-full h-[15%] grid place-items-center">
        Tienda
       </header>
       <main className="w-full h-[85%] ">
        <section className="w-full h-[35%] py-20">
          <label htmlFor="">Producto</label>
          <input name="producto" onChange={handleChangeTienda} type="text" className="pl-3 w-full h-[80%] border border-gray-200" placeholder="Pc, Celular..." />
        </section>
        <section className="w-full h-[35%] py-20">
          <label htmlFor="">Cantidad</label>
          <input name="cantidad" onChange={handleChangeTienda} type="number" className="pl-3 w-full h-[80%] border border-gray-200"  />
        </section>
        <section className="w-full h-[30%] flex items-center justify-center">
         <button className="bg-violet-600 text-white font-semibold hover:bg-violet-700 w-[70%] h-[40%] cursor-pointer">
          Guardar
         </button>
        </section>
       </main>

    </form>
  )
}

export default FormTienda