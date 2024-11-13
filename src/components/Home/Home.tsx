import Bag from "@/components/SVG/Bag";
import Lupa from "@/components/SVG/Lupa";
import User from "@/components/SVG/User";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-between px-4">
      <Link href={"/"} className="left-section">
        <Image src="/jesca.jpeg" alt="jesca" width={150} height={150} />
      </Link>
      
      <div className="middle-section flex-1 flex justify-center gap-10 text-sm text-center">
        <button>Sobre nosotros</button>
        <button>Remeras</button>
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
  );
}
