import React from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowDown from "@/components/SVG/ArrowDown";
import IG from "@/components/SVG/IG";
import X from "@/components/SVG/X";

const About = () => {
  return (
    <div className="bg-gray-100 p-20 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        {/* Título principal */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Sobre Jesca
        </h1>

        {/* Contenido principal */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Sección izquierda: imagen y botón */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <Image
              src="/jesca.jpeg"
              alt="Foto de Jesca"
              width={200}
              height={300}
              className="rounded-lg shadow-lg mb-10"
            />
            {/* Texto de "Hacé tu pedido" */}
            <h2 className="text-xl font-bold text-gray-800 mt-4 text-center">
              Hacé tu pedido
            </h2>
            <ArrowDown />
            <Link
              className="hover:bg-black hover:text-white duration-300 p-2 rounded"
              href={"/remeras"}
            >
              EMPEZAR
            </Link>
            <div className="mt-2"></div>
          </div>

          {/* Sección derecha: descripción */}
          <div className="w-full md:w-2/3 text-gray-700 space-y-4">
            <p>
              Jesca es una marca que invita a que las personas tengan mucha
              elegancia y moda dentro de lo simple. Entendemos como te sentis y
              esta bien sentise así, por eso también te invitamos a expresarlo
              en tu vestimenta. Elegimos Oversize por estas mismas razones,para
              que te sientas libre como en casa.
            </p>
            <p>
              Únete a nuestra comunidad y descubre cómo Jesca puede ser parte de
              tu estilo diario.
            </p>
            <p>
              <strong>Seguinos en nuestras redes sociales:</strong>
            </p>
            <div className="flex p-2 gap-3 justify-center">
              <Link
                className="bg-black text-white p-2 rounded-md"
                href="https://www.instagram.com/jesca.clothes/"
              >
                <IG />
              </Link>
              <Link
                className="bg-black text-white p-2 rounded-md"
                href="https://www.instagram.com/jesca.clothes/"
              >
                <X />
              </Link>
            </div>
            <div className="flex justify-center">© 2024 jesca Argentina</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
