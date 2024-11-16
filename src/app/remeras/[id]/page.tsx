import React from "react";
import { cards } from "@/utils/cards";
import Image from "next/image";
import ButtonMp from "@/components/ButtonMP/ButtonMp";

const RemeraDetail: React.FC<{ params: { id: string } }> = ({ params }) => {
  const remera = cards.find((card) => card.id.toString() === params.id);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-lg mx-auto p-4 gap-10">
      <div className="flex justify-center items-center p-4">
        <Image
          src={remera?.image || ""}
          alt={remera?.title || "Remera"}
          width={500}
          height={500}
          className="object-cover rounded-lg shadow-xl"
        />
      </div>

      <div className="flex flex-col justify-center p-4 space-y-4">
        <h1 className="text-4xl font-semibold text-gray-800">
          {remera?.title}
        </h1>
        <p className="text-lg text-gray-600">
          Una prenda elegante y cómoda, perfecta para cualquier ocasión.
          Fabricada con materiales de alta calidad que garantizan durabilidad y
          confort.
        </p>
        <p className="text-2xl font-bold text-gray-900">$10,499</p>
        <p className="text-gray-600 mt-2">
          3 cuotas <strong>sin interés</strong> de $3,500 💵
        </p>

        <ButtonMp />
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
