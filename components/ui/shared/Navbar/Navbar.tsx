import NavbarDesktop from "./NavbarDesktop/NavbarDesktop";
import NavbarMobile from "./NavbarMobile/NavbarMobile";

export  function Navbar() {
  return (
        <nav>
            { /** El hidden mx-auto md:block */}
            <div className="hidden mx-auto md:block">
               <NavbarDesktop/>
            </div>

            <div className="md:hidden">
                <NavbarMobile/>
            </div>
        </nav>
  )
}
