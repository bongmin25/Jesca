import React from "react";
import { cards } from "@/utils/cards";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

const Cartas = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-800 text-center">
        Remeras Oversize
      </h1>
      <p className="text-center text-gray-600 mt-4">
        Elegí tu remera JESCA, estilo sin esfuerzo, comodidad total
      </p>
      <div className="grid gap-6 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, i) => (
          <div
            key={i}
            className="flex flex-col items-center shadow-lg rounded-lg p-4 border hover:shadow-xl transition-shadow duration-300"
          >
            <Link href={`/remeras/${card.id}`}>
              <div className="relative w-full h-60">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={400}
                  height={400}
                  className="object-cover rounded transition-transform transform hover:scale-105 duration-300"
                />
              </div>
            </Link>
            <p className="text-gray-700 text-center mt-60">{card.title}</p>
            <p className="text-gray-800 text-center mt-2 font-bold text-lg">
              $10,499
            </p>
            <p className="text-gray-500 text-center mt-1">
              3 cuotas <strong>sin interés</strong> $3,500
            </p>
            <div className="mt-4">
              <AddToCartButton
                id={card.id}
                title={card.title}
                image={card.image}
                price={10499}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cartas;
