import Bag from "@/components/SVG/Bag";
import User from "@/components/SVG/User";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";

const NavBar = () => {
  return (
    <>
      {/* Barra superior fija */}
      <nav className="bg-black text-white text-sm p-2 text-center font-bold">
        JESCA
      </nav>

      {/* Contenedor principal */}
      <div className="flex items-center justify-between px-8 py-2 bg-white shadow-md md:flex-row md:items-center">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src="/jesca.jpeg"
            alt="jesca"
            width={80}
            height={80}
            className="rounded-full"
          />
        </Link>

        {/* Menú de navegación en pantallas grandes */}
        <nav className="hidden md:flex flex-1 justify-center gap-8 text-sm">
          <Link
            href="/remeras"
            className="px-4 py-2 hover:bg-black hover:text-white rounded transition duration-300"
          >
            Remeras
          </Link>
          <Link
            href="/"
            className=" transition duration-300 px-4 py-2 hover:bg-black hover:text-white rounded"
          >
            Buzos
          </Link>
          <Link
            href="/about"
            className="px-4 py-2 hover:bg-black hover:text-white rounded transition duration-300"
          >
            Sobre nosotros
          </Link>
        </nav>

        {/* Menú hamburguesa para móviles */}
        <Menu />

        {/* Iconos de usuario y carrito */}
        <div className="flex items-center gap-6">
          <User />
          <Bag />
        </div>
      </div>
    </>
  );
};

export default NavBar;
