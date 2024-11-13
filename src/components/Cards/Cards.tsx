import React from "react";
import { cards } from "../../utils/cards";
import Image from "next/image";

const Cards = () => {
  return (
    <div className="grid gap-6 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, i) => (
        <div
          key={i}
          className="flex flex-col items-center shadow-lg rounded-lg p-4 border"
        >
          <Image
            src={card.image}
            alt={card.title}
            width={270}
            height={270}
            className="rounded  b-4 transition-transform transform hover:scale-105 duration-300"
          />
          <p className="text-gray-700 text-center mt-8 font-bold">
            {card.title}
          </p>
          <p className="text-gray-700 text-center mt-8 font-bold text-lg">
            $10,499
          </p>
          <p className="text-gray-700 text-center font-bold mt-3">
            3 cuotas sin interés de $3,500
          </p>
          <button className="text-white text-center bg-black px-4 rounded py-2 font-bold mt-3">
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
