"use client";
import React, { useEffect, useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Card } from "@/utils/interfaces/interfaces";

const ButtonMP = ({ producto }: { producto: Card }) => {
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
          productId: producto.id,
          title: producto.title,
          quantity: 1,
          image: producto.image,
          price: parseFloat(producto.price),
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
        <div className="w-full">
          <Wallet initialization={{ preferenceId }} />
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default ButtonMP;
