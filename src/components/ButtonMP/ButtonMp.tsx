"use client";

import React from "react";

const ButtonMp = () => {
  const mp = async (): Promise<void> => {
    try {
      const response = await fetch("/api/mercadopago", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error al crear preferencia de pago");
      }

      const data = await response.json();
      window.location.href = data.init_point; // Redirige al checkout de MercadoPago
    } catch (error) {
      console.error("Error al redirigir al pago:", error);
    }
  };

  return (
    <div>
      <button
        onClick={mp}
        className="mt-4 bg-black text-white py-3 px-6 rounded-lg text-xl font-semibold hover:bg-green-600 transition-all duration-300 w-full hover:scale-105 hover:transition-all"
      >
        COMPRAR
      </button>
    </div>
  );
};

export default ButtonMp;
