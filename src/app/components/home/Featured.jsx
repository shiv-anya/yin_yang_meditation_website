import Image from "next/image";
import React from "react";

export default function Featured() {
  return (
    <section className="py-32 max-lg:pt-16 max-lg:pb-20">
      <h2
        className={`text-[3rem] mb-16 text-center max-sm:text-[2.4rem] max-sm:mb-8`}
      >
        Featured In
      </h2>
      <div className="flex justify-evenly max-lg:flex-wrap max-lg:w-[90%] max-lg:gap-5 max-lg:mx-auto">
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
