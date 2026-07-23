import Navbar from "../Components/Navbar"


const Public = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
        <div className="w-[70%] h-full bg-black-500  font-semibold">
          
          <header className="w-full h-[5%] flex justify-end bg-black text-cyan-600">
            <Navbar />
          </header>
          <main className="w-full h-[95%] grid place-items-center bg-gray-100">
            <div>
              PUBLICO
            </div>
          </main>

        </div>
    </div>
  )
}

export default Public