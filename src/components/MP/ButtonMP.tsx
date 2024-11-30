"use client";
import React, { useEffect, useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Card } from "@/utils/interfaces/cards";

const ButtonMP = ({ remera }: { remera: Card }) => {
  const [preferenceId, setPreferenceId] = useState<string | null>(null);
  const [isCreatingPreference, setIsCreatingPreference] = useState(false);

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY_MP as string;
    if (publicKey) {
      initMercadoPago(publicKey, { locale: "es-AR" });
    }
  }, []);

  const handleBuy = async () => {
    try {
      setIsCreatingPreference(true);
      const response = await axios.post(
        "http://localhost:3000/create_preference",
        {
          title: remera.title,
          quantity: 1, // Por defecto
          price: parseFloat(remera.price),
          productId: remera.id,
        }
      );

      setPreferenceId(response.data.id);
    } catch (error) {
      console.error(error);
      toast.error("");
    } finally {
      setIsCreatingPreference(false);
    }
  };

  return (
    <div className=" flex mt-4">
      {!preferenceId ? (
        <button
          onClick={handleBuy}
          className="w-full text-white text-center bg-black px-4 rounded py-2 font-bold mt-3 hover:bg-gray-600 duration-300"
          disabled={isCreatingPreference}
        >
          {isCreatingPreference ? "Cargando..." : "COMPRAR"}
        </button>
      ) : (
        <Wallet initialization={{ preferenceId }} />
      )}
      <ToastContainer className="w-10 h-10" />
    </div>
  );
};

export default ButtonMP;
