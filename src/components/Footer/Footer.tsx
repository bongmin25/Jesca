import React from "react";
import X from "../SVG/X";
import IG from "../SVG/IG";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-black text-white text-center p-2 text-sm items-center justify-center">
      <div className="flex p-2 gap-3">
        <Link href="https://www.instagram.com/jesca.clothes/">
          <IG />
        </Link>
        <Link href="https://www.instagram.com/jesca.clothes/">
          <X />
        </Link>
      </div>
      © 2024 jesca Argentina
    </footer>
  );
};

export default Footer;
