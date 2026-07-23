import NavbarPrivate from "../Components/NavbarPrivate"


import { Routes, Route } from "react-router";
import PageFormulario from "./PageFormulario/PageFormulario";
import Resultados from "./Resultados/Resultados";


const Private = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
        <div className="w-[70%] h-full bg-black-500  font-semibold">
          
          <header className="w-full h-[5%] flex justify-end bg-gray-500 text-cyan-600">
            <NavbarPrivate />
          </header>
          <main className="w-full h-[95%] grid place-items-center bg-gray-100">
            <Routes>
             <Route path="/" element={<PageFormulario />}/>
             <Route path="/resultados" element={<Resultados />}/>
            </Routes>
          </main>

        </div>
    </div>
  )
}

export default Private