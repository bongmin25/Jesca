import React from "react";
import Image from "next/image";
import WhatsApp from "@/components/SVG/WhatsApp";
import Link from "next/link";

const About = () => {
  return (
    <div className="bg-gray-100 p-20">
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
            {/* Icono de WhatsApp */}
            <div className="mt-2">
              <Link href="https://wa.me/+5491154838488">
                <WhatsApp />
              </Link>
            </div>
          </div>

          {/* Sección derecha: descripción */}
          <div className="w-full md:w-2/3 text-gray-700 space-y-4">
            <p>
              Jesca es una marca comprometida con la calidad, el estilo y la
              satisfacción de sus clientes. Desde sus inicios, Jesca ha
              trabajado para ofrecer productos de alta calidad que representan
              la autenticidad y la pasión por la moda.
            </p>
            <p>
              Con un enfoque en la sostenibilidad y el diseño moderno, Jesca
              busca inspirar a cada persona a expresarse a través de su estilo
              único. Cada prenda es creada con materiales cuidadosamente
              seleccionados, asegurando una experiencia de uso que combina
              comodidad y elegancia.
            </p>
            <p>
              Únete a nuestra comunidad y descubre cómo Jesca puede ser parte de
              tu estilo diario.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
