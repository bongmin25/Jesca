import Bag from "@/components/SVG/Bag";
import Lupa from "@/components/SVG/Lupa";
import User from "@/components/SVG/User";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <nav className="bg-black text-white text-sm p-2 text-center font-bold">
        Hasta 3 cuotas sin interes 💵
      </nav>
      <div className="flex flex-col md:flex-row items-center justify-between px-4 border-b-2 border-gray-300">
        <Link href={"/"} className="left-section mb-2 md:mb-0 md:ml-28 ">
          <Image
            src="/jesca.jpeg"
            alt="jesca"
            width={100}
            height={100}
            className="mr-0 md:mr-20"
          />
        </Link>

        <div className="middle-section flex flex-1 justify-center gap-4 text-sm text-center">
          <Link className="hover:scale-105 duration-300" href={"/about"}>
            Sobre nosotros
          </Link>
          <Link className="hover:scale-105 duration-300" href={"/remeras"}>
            Remeras
          </Link>
          <button className="hover:scale-105 duration-300">Buzos</button>
        </div>

        <div className="right-section flex items-center gap-4 md:gap-6">
          <div className="flex items-center gap-2">
            <Lupa />
            <input
              className="p-2 bg-slate-200 rounded-md hidden md:block"
              type="text"
              placeholder="Buscar"
            />
          </div>
          <div className="flex gap-2">
            <User />
            <Bag />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
