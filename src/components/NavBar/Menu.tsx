"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Detectar clic fuera del menú
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="md:hidden relative" ref={menuRef}>
      {/* Botón de menú hamburguesa */}
      <button
        className="text-black text-2xl focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* Menú desplegable */}
      {isMenuOpen && (
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-52 bg-black text-white shadow-lg rounded-md z-50 transition-transform duration-300">
          <nav className="flex flex-col items-center py-6 space-y-4">
            <Link
              href="/remeras"
              className="text-lg font-semibold hover:text-gray-400 transition duration-300"
              onClick={() => setIsMenuOpen(false)} // Cerrar menú al hacer clic
            >
              Remeras
            </Link>
            <Link
              href="/nueva-edicion"
              className="text-lg font-semibold hover:text-gray-400 transition duration-300"
              onClick={() => setIsMenuOpen(false)} // Cerrar menú al hacer clic
            >
              Nueva edición
            </Link>
            <Link
              href="/about"
              className="text-lg font-semibold hover:text-gray-400 transition duration-300"
              onClick={() => setIsMenuOpen(false)} // Cerrar menú al hacer clic
            >
              Sobre nosotros
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Menu;
