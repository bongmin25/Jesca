"use client";
import React, { useEffect, useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { CartItem } from "@/utils/interfaces/interfaces";

const ButtonMP = ({ cart }: { cart: CartItem[] }) => {
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
        "https://jesca-back.vercel.app/create_preference",
        {
          items: cart.map((item) => ({
            id: item.id,
            title: item.title,
            quantity: item.quantity,
            price: item.price,
          })),
        }
      );

      setPreferenceId(response.data.id);
    } catch (error) {
      console.error(error);
      toast.error("Error al crear la preferencia de pago");
    } finally {
      setIsCreatingPreference(false);
    }
  };

  return (
    <div className="flex mt-4">
      {!preferenceId ? (
        <div className="w-full">
          <button
            onClick={handleBuy}
            className="text-white text-center bg-black px-6 py-3 rounded-md  mt-3 hover:bg-gray-600 duration-300 mb-4"
            disabled={isCreatingPreference}
          >
            {isCreatingPreference ? "Cargando..." : "Proceder al pago"}
          </button>
        </div>
      ) : (
        <div className="flex w-full justify-center">
          <Wallet initialization={{ preferenceId }} />
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default ButtonMP;
