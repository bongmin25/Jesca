import Image from "next/image";

export default function Home() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <Image src="/portada1.jpeg" alt="jesca" width={700} height={700} />
      <Image src="/portada2.jpeg" alt="jesca" width={700} height={700} />
      <Image src="/portada3.jpeg" alt="jesca" width={700} height={700} />
    </div>
  );
}
