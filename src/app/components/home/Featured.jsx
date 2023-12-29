import Image from "next/image";
import React from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

export default function Featured() {
  return (
    <section className="py-32">
      <h2 className={`${playfair.className} text-[3rem] mb-16 text-center`}>
        Featured In
      </h2>
      <div className="flex justify-evenly">
        <Image
          width={200}
          height={80}
          src="/home/featured/logo-1.svg"
          alt="logo"
        />
        <Image
          width={100}
          height={50}
          src="/home/featured/logo-2.svg"
          alt="logo"
        />
        <Image
          width={100}
          height={50}
          src="/home/featured/logo-3.svg"
          alt="logo"
        />
        <Image
          width={100}
          height={50}
          src="/home/featured/logo-4.svg"
          alt="logo"
        />
        <Image
          width={100}
          height={50}
          src="/home/featured/logo-5.svg"
          alt="logo"
        />
      </div>
    </section>
  );
}
