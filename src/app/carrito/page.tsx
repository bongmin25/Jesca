import Link from "next/link";
import React from "react";

const Carrito = () => {
  return (
    <div className="flex flex-col justify-center items-start mt-10 lg:mt-20 lg:ml-20 px-4">
      <h1 className="font-bold text-3xl md:text-4xl text-gray-800 mb-4 text-center">
        EL CARRITO ESTÁ VACÍO
      </h1>
      <h2 className="text-gray-600 text-lg md:text-xl mb-6 max-w-lg">
        Una vez que añadas algo a tu carrito, aparecerá acá. ¿Listo para
        empezar?
      </h2>
      <Link
        href={"/remeras"}
        className="bg-black text-white text-sm md:text-base px-6 py-3 rounded-md hover:bg-gray-600 duration-300"
      >
        COMPRAR
      </Link>
    </div>
  );
};

export default Carrito;
