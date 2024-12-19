"use client";
import Image from "next/image";
import Link from "next/link";
import Select from "../SVG/Select";
import { motion } from "framer-motion";

export default function Inicio() {
  return (
    <div>
      {/* Header con una sola imagen y el texto + botón encima */}
      <div className="relative h-[70vh]">
        <Image
          src="/BLANCA PORTADA PRINCIPAL.jpg"
          alt="Imagen de portada"
          fill
          className="object-cover"
        />
        {/* Texto y botón sobre la imagen */}
        <div className="absolute top-[18%] right-[10%] lg:top-1/2 transform -translate-y-1/2">
          <h2 className="text-black text-lg md:text-xl mb-6 max-w-lg">
            <strong>JESCA</strong>, estilo sin esfuerzo.
            <br />
            <strong>Nueva colección</strong>
            <br />
            Sometimes being wrong is right
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
      </div>

      {/* Sección de imágenes con animación */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-8">
        {[
          "/MARRON PORTADA 1.jpg",
          "/BLANCA PORTADA 1.jpg",
          "/NEGRA PORTADA 1.jpg",
        ].map((src, index) => (
          <motion.div
            key={src}
            className="relative h-auto aspect-[3/4]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: index * 1 }}
          >
            <Link href={"/remeras"}>
              <Image
                src={src}
                alt={`Imagen ${index + 2}`}
                fill
                className="object-contain hover:scale-105 duration-300 transition-all"
              />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Sección informativa sobre Jesca */}
      <div className="flex flex-col bg-gray-100 p-8 justify-center items-center">
        <h3 className="text-2xl font-bold mb-4 text-center justify-center">
          Sometimes being wrong is right
        </h3>
        <p className="text-lg mb-4 text-center lg:w-1/2">
          En Jesca, creemos que todas las emociones son válidas y forman parte
          de la experiencia humana. Te invitamos a abrazar tus sentimientos, sin
          vergüenza, y a compartirlos con el mundo. Nuestras prendas están
          diseñadas para acompañarte con comodidad y tranquilidad en cada
          momento, permitiéndote ser auténtico y expresar lo que sientes. Como
          dijo BOOKEY: -Permítete sentir y compartir tus emociones.
        </p>
        <Image
          width={200}
          height={200}
          src="/jesca.jpeg"
          alt="jesca"
          className="object-cover rounded-lg shadow-black shadow-lg"
        />
      </div>
    </div>
  );
}
