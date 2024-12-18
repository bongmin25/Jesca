import ArrowDown from "@/components/SVG/ArrowDown";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <Image
        width={800}
        height={800}
        alt="Page Not Found"
        src={"/not-found.jpg"}
      />
      <span>Pagina no encontrada, por favor vuelve a la pagina de inicio</span>
      <ArrowDown />
      <Link
        className="hover:bg-black hover:text-white duration-300 p-2 rounded"
        href={"/"}
      >
        VOLVER
      </Link>
    </div>
  );
};

export default notFound;
