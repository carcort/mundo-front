import { useNavigate } from "react-router";

const Navbar = () => {
 const navegar = useNavigate()

 const handleClickLogin =()=>{
   navegar('/private')
 }

  return (
    <nav className="w-[10%] h-full">
      <button className="w-full h-full bg-black hover:bg-gray-600 cursor-pointer" onClick={handleClickLogin}>
         Login
      </button>
    </nav>
  )
}

export default Navbar