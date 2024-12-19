import React from "react";
import { cards } from "@/utils/cards";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

const Cartas = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-800">Remeras Oversize</h1>
      <p className="text-gray-600 mt-4">
        Elegí tu remera JESCA, estilo sin esfuerzo, comodidad total
      </p>
      <div className="grid gap-2 mt-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-3">
        {cards.map((card, i) => (
          <div
            key={i}
            className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden border hover:shadow-xl transition-shadow duration-300"
          >
            {/* Contenedor de la imagen con hover */}
            <Link href={`/remeras/${card.id}`} className="relative block group">
              {/* Imagen principal */}
              <div className="relative">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={700}
                  height={700}
                  className="object-contain w-full h-72 lg:h-96 transition-opacity duration-300 group-hover:opacity-0"
                />
                {/* Imagen de hover */}
                <Image
                  src={card.hoverImage}
                  alt={card.title}
                  width={700}
                  height={700}
                  className="absolute top-0 left-0 object-contain w-full h-72 lg:h-96 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
            </Link>

            <div className="p-4">
              <p className="text-lg font-medium text-gray-800">{card.title}</p>
              <p className="text-lg font-bold text-gray-900 mt-2">${card.price}</p>
              <p className="text-sm text-gray-500 mt-2">Selecciona un talle:</p>
              <div className="mt-3 text-center">
                <AddToCartButton
                  id={card.id}
                  title={card.title}
                  image={card.image}
                  price={10499}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cartas;
