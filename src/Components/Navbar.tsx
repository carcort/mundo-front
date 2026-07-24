import { useAuth } from "react-oidc-context";

const Navbar = () => {

  const auth = useAuth();
 

  return (
    <nav className="w-[10%] h-full">
      <button className="w-full h-full bg-black hover:bg-gray-600 cursor-pointer" onClick={() => auth.signinRedirect()}>
         Login
      </button>
    </nav>
  )
}

export default Navbar