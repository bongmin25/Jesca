// RemeraDetail.tsx
import React from "react";
import { cards } from "@/utils/cards";
import Image from "next/image";
import { notFound } from "next/navigation";

import AddToCartButton from "@/components/AddToCartButton/AddToCartButton";

const RemeraDetail: React.FC<{ params: { id: string } }> = ({ params }) => {
  const remera = cards.find((card) => card.id.toString() === params.id);

  if (!remera) {
    notFound();
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-lg mx-auto p-4 gap-10 mt-44 lg:mt-36 lg:mb-20">
      <div className="flex justify-center items-center p-4 group relative w-full h-auto">
        <Image
          src={remera.image || ""}
          alt={remera.title || "Remera"}
          width={500}
          height={500}
          className="object-cover  shadow-2xl shadow-black transition-opacity duration-300 opacity-100 group-hover:opacity-0 absolute w-76 h-76 sm:w-[300px] sm:h-[400px] lg:w-[400px] lg:h-[500px]"
        />
        <Image
          src={remera.hoverImage}
          alt={remera.hoverImage || "hoverImage"}
          width={500}
          height={500}
          className="object-cover shadow-2xl shadow-black transition-opacity duration-300 opacity-0 group-hover:opacity-100 absolute w-76 h-76 sm:w-[300px] sm:h-[400px] lg:w-[400px] lg:h-[500px]"
        />
      </div>

      <div className="flex flex-col justify-center p-4 space-y-6 sm:block">
        {/* Ocultar texto en dispositivos móviles */}
        <h1 className="lg:text-4xl font-semibold text-gray-800 mt-36 lg:mt-0 text-xl">
          {remera.title}
        </h1>
        <p className="hidden sm:block text-lg text-gray-600">
          Una prenda elegante y cómoda, perfecta para cualquier ocasión.
          Fabricada con materiales de alta calidad que garantizan durabilidad y
          confort.
        </p>
        <p className="text-2xl font-bold text-gray-900">${remera.price}</p>
        <p className="hidden sm:block text-gray-600 mt-2">
          Selecciona un talle:
        </p>
        <div className="">
          <AddToCartButton
            id={remera.id}
            title={remera.title}
            image={remera.image}
            price={remera.price}
          />
        </div>
      </div>
    </div>
  );
};

export async function generateStaticParams() {
  return cards.map((card) => ({
    id: card.id.toString(),
  }));
}

export default RemeraDetail;
