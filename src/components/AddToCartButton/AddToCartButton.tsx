"use client";
import React, { useState } from "react";
import { useCart } from "../Context/CartContext";
import { AddToCartButtonProps } from "@/utils/interfaces/interfaces";
import Bag from "../SVG/Bag";

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  id,
  title,
  image,
  price,
}) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [size, setSize] = useState<string>(""); // Estado para el talle
  const [hasError, setHasError] = useState<boolean>(false); // Estado de error

  const handleAddToCart = () => {
    if (!size) {
      setHasError(true); // Activa el estado de error si no se selecciona un talle
      return;
    }

    setHasError(false); // Limpia el estado de error si se selecciona un talle
    addToCart({ id, title, image, price, size, quantity: 1 }); // Incluye el talle
    setIsAdded(true);
    setShowNotification(true);

    setTimeout(() => {
      setIsAdded(false);
      setShowNotification(false);
    }, 3000);
  };

  return (
    <>
      {/* Notificación con efectos */}
      {showNotification && (
        <div
          className="flex fixed top-28 right-4 bg-black text-white py-2 px-4 rounded-md shadow-lg z-50"
          style={{
            opacity: showNotification ? 1 : 0,
            transform: showNotification
              ? "translateX(0) scale(1)"
              : "translateX(100%) scale(0.9)",
            transition: "opacity 0.5s ease-out, transform 0.5s ease-in-out",
          }}
        >
          Producto agregado al carrito...
          <Bag />
        </div>
      )}
      <div className="flex flex-col items-center space-y-2">
        {/* Selector de talles con botones */}
        <div className="flex space-x-4 mb-3">
          {["S", "M"].map((option) => (
            <button
              key={option}
              onClick={() => {
                setSize(option);
                setHasError(false); // Limpia el error al seleccionar un talle
              }}
              className={`w-10 h-10 border-2 rounded text-center font-bold ${
                size === option
                  ? "bg-black text-white border-black"
                  : `bg-white text-black ${
                      hasError ? "border-red-500" : "border-gray-400"
                    }`
              } hover:border-black transition-colors duration-300`}
            >
              {option}
            </button>
          ))}
        </div>
        <button
          onClick={handleAddToCart}
          className={`relative text-center w-[80%] px-4 py-2 rounded font-bold duration-500
            ${
              isAdded
                ? "bg-slate-300 text-white"
                : "bg-black text-white hover:bg-gray-700"
            }
          `}
        >
          <span
            className={`absolute inset-0 bg-slate-300 transition-all duration-500 ease-in-out transform rounded
              ${isAdded ? "scale-x-100" : "scale-x-0"}
            `}
          ></span>

          <span className={`relative ${isAdded ? "text-black" : ""}`}>
            {isAdded ? "Agregado" : "Agregar al carrito"}
          </span>
        </button>
      </div>
    </>
  );
};

export default AddToCartButton;
