import Image from "next/image";

export default function Inicio() {
  return (
    <div className="grid h-screen grid-rows-3 sm:grid-rows-1 sm:grid-cols-3">
      <div className="relative">
        <Image
          src="/portada1.jpeg"
          alt="Imagen 1"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative">
        <Image
          src="/portada2.jpeg"
          alt="Imagen 2"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative">
        <Image
          src="/portada3.jpeg"
          alt="Imagen 3"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
