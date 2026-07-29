import NavbarPrivate from "../Components/NavbarPrivate"
import { useAuth } from "react-oidc-context";
import { Routes, Route } from "react-router";
import Tienda from "./Tienda/Tienda";
import Home from "./Home/Home";

const Private = () => {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const logoutUri = import.meta.env.VITE_LOGOUT_URI;
    const cognitoDomain = import.meta.env.VITE_COGNITO_DOMAIN;
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  // guardar el token en localstorage
  if (auth.user?.access_token) {
    localStorage.setItem("access_token", auth.user.access_token);
  }
  if (auth.user?.id_token) {
    localStorage.setItem("id_token", auth.user.id_token);
  }


  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Error en la autenticacion... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
    <div className="w-screen h-screen flex justify-center">
        <div className="w-[70%] h-full bg-black-500  font-semibold">
          
          <header className="w-full h-[5%] flex justify-end bg-gray-500 text-cyan-600">
            <NavbarPrivate
              signOutRedirect={signOutRedirect}
            />
          </header>
          <main className="w-full h-[95%] grid place-items-center bg-gray-100">
            <Routes>
            
             <Route path="/" element={<Home auth={auth} />}/>
             <Route path="/tienda" element={<Tienda auth={auth} />}/>
            </Routes>
          </main>

        </div>
    </div>
  )
    
  }

  return null;
}

export default Private
