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
  const [showNotification, setShowNotification] = useState(false); // Estado para la notificación

  const handleAddToCart = () => {
    addToCart({ id, title, image, price, quantity: 1 });
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
      <button
        onClick={handleAddToCart}
        className={`relative text-center px-4 py-2 rounded font-bold mt-3 duration-500
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
    </>
  );
};

export default AddToCartButton;
