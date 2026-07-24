

const NavbarPrivate = ({signOutRedirect}) => {
 

  return (
    <nav className="w-[10%] h-full">
      <button className="w-full h-full text-white bg-gray-500 hover:bg-gray-600 cursor-pointer" onClick={() => signOutRedirect()}>
         LogOut
      </button>
    </nav>
  )
}

export default NavbarPrivate