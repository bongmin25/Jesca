import Image from "next/image";
import Link from "next/link";
import Select from "../SVG/Select";

export default function Inicio() {
  return (
    <div>
      {/* Header con una sola imagen y el texto + botón encima */}
      <div className="relative h-[70vh]">
        {" "}
        {/* Altura ajustada aquí */}
        <Image
          src="/portada1.jpeg" // Cambia esta ruta por la tuya
          alt="Imagen de portada"
          fill
          className="object-cover"
        />
        {/* Texto y botón sobre la imagen */}
        <div className="absolute top-[18%] left-1/3 lg:top-1/3 lg:left-1/4 transform -translate-x-1/2 -translate-y-1/2 ">
          <h2 className="text-black text-lg md:text-xl mb-6 max-w-lg">
            <strong>JESCA</strong>
            , estilo sin esfuerzo.
            <br />
            <strong>Nueva colección</strong>
            <br />
            Sometimes being wrong is write
          </h2>
          <Link
            href={"/remeras"}
            className="flex items-center bg-black text-white text-sm md:text-base px-6 py-3 rounded-md hover:bg-gray-600 justify-center duration-300 w-56"
          >
            COMPRAR AHORA
            <span className="ml-2">
              <Select />
            </span>
          </Link>
        </div>
      </div>

      {/* Sección de imágenes debajo */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-8">
        <div className="relative h-60">
          <Image
            src="/portada2.jpeg" // Cambia esta ruta por la tuya
            alt="Imagen 2"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-60">
          <Image
            src="/portada3.jpeg" // Cambia esta ruta por la tuya
            alt="Imagen 3"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-60">
          <Image
            src="/portada4.jpeg" // Cambia esta ruta por la tuya
            alt="Imagen 4"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
