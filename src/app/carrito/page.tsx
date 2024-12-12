"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useCart } from "@/components/Context/CartContext";
import ButtonMP from "@/components/MP/ButtonMP";
import { CartItem } from "@/utils/interfaces/interfaces";
import Delete from "@/components/SVG/Delete";
import Select from "@/components/SVG/Select";

const Carrito: React.FC = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [productToDelete, setProductToDelete] = useState<number | null>(null);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const openModal = (productId: number) => {
    setProductToDelete(productId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setProductToDelete(null);
    setModalOpen(false);
  };

  const totalPrice = cart.reduce(
    (sum: number, item: CartItem) => sum + item.price * item.quantity,
    0
  );

  if (isLoading) {
    return null;
  }

  if (cart.length === 0) {
    return (
      <div className="flex flex-col justify-center items-start mt-10 lg:mt-36 lg:ml-32 px-4">
        <h1 className="font-bold text-3xl md:text-4xl text-gray-800 mb-4 text-center">
          EL CARRITO ESTÁ VACÍO
        </h1>
        <h2 className="text-gray-600 text-lg md:text-xl mb-6 max-w-lg">
          Una vez que añadas algo a tu carrito, aparecerá acá. ¿Listo para
          empezar?
        </h2>
        <Link
          href={"/remeras"}
          className="flex items-center bg-black text-white text-sm md:text-base px-6 py-3 rounded-md hover:bg-gray-600 justify-center duration-300 w-56 scroll-smooth"
        >
          COMPRAR AHORA
          <span className="ml-2">
            <Select />
          </span>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4">
      <div className="w-full max-w-4xl">
        <h1 className="font-bold text-3xl md:text-4xl text-gray-800 mb-10 mt-5 text-center">
          Tu Carrito
        </h1>
        {cart.map((item: CartItem) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b py-4"
          >
            <div className="flex items-center">
              <Image
                src={item.image || ""}
                alt={item.title}
                width={150}
                height={150}
                className="rounded-md mr-4"
              />
              <div className="md:ml-10">
                <h2 className="text-lg font-semibold mb-4">{item.title}</h2>
                <p className="text-gray-600">Precio: ${item.price}</p>
                <p className="text-gray-600">Talle: {item.size}</p>{" "}
                {/* Talle */}
                <div className="flex items-center mt-2">
                  <span className="mr-2">Cantidad:</span>
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-gray-200 px-2 py-1 rounded-md"
                    aria-label="Disminuir cantidad"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-gray-200 px-2 py-1 rounded-md"
                    aria-label="Aumentar cantidad"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <p className="font-semibold">
                Total: ${item.price * item.quantity}
              </p>
              <Delete onClick={() => openModal(item.id)} />
            </div>
          </div>
        ))}
        {modalOpen && (
          <div className="fixed bg-gray-800 bg-opacity-50 inset-0 flex items-center justify-center h-screen">
            <div className="bg-white p-4 rounded-md shadow-lg text-center">
              <p className="mb-4">¿Eliminar producto?</p>
              <div className="flex justify-around">
                <button
                  onClick={() => {
                    if (productToDelete !== null) {
                      removeFromCart(productToDelete);
                    }
                    closeModal();
                  }}
                  className="bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600"
                >
                  SI
                </button>
                <button
                  onClick={closeModal}
                  className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400"
                >
                  NO
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="mt-6 text-center">
          <h2 className="text-xl font-bold">Total: ${totalPrice} ARS</h2>
          <ButtonMP cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Carrito;
