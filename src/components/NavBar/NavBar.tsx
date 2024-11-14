import Bag from "@/components/SVG/Bag";
import Lupa from "@/components/SVG/Lupa";
import User from "@/components/SVG/User";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <nav className="bg-black text-white text-sm p-2 text-center font-bold ">
        Hasta 3 cuotas sin interes 💵
      </nav>
      <div className="flex items-center justify-between px-4 border-b-2 border-gray-300">
        <Link href={"/"} className="left-section ml-32">
          <Image src="/jesca.jpeg" alt="jesca" width={100} height={150} />
        </Link>
        <div className="middle-section flex-1 flex justify-center gap-10 text-sm text-center">
          <button>Sobre nosotros</button>
          <Link href={"/remeras"}>Remeras</Link>
          <button>Buzos</button>
        </div>
        <div className="right-section flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Lupa />
            <input
              className="p-2 bg-slate-200 rounded-md"
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
