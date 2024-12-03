"use client";
import React, { useState } from "react";
import { useCart } from "../Context/CartContext";
import { AddToCartButtonProps } from "@/utils/interfaces/interfaces";

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  id,
  title,
  image,
  price,
}) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({ id, title, image, price, quantity: 1 });
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1000);
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`relative text-center px-4 py-2 rounded font-bold mt-3 duration-500
        ${
          isAdded
            ? "bg-green-500 text-white"
            : "bg-black text-white hover:bg-gray-600"
        }
      `}
    >
      <span
        className={`absolute inset-0 bg-green-700 transition-all duration-500 ease-in-out transform rounded
          ${isAdded ? "scale-x-100" : "scale-x-0"}
        `}
      ></span>

      <span className={`relative ${isAdded ? "text-white" : ""}`}>
        {isAdded ? "Agregado ✅" : "Agregar al carrito"}
      </span>
    </button>
  );
};

export default AddToCartButton;
