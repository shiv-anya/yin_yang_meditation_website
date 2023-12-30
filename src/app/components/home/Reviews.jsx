import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import React from "react";
import Button from "../Button";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

export default function Reviews() {
  return (
    <section className="p-16 h-[120vh] flex mb-32">
      <div className="h-[90%] w-[30%] flex flex-col justify-between">
        <h2
          className={`${playfair.className} capitalize text-[3rem] leading-[60px]`}
        >
          Our happy and thriving students
        </h2>
        <p className="text-lg">
          Reviews that speak nothing but honest spiritual experience. Lorem,
          ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <Button className="py-4 self-start px-16 rounded-md mt-5">
          All Reviews
        </Button>
      </div>
      <div className="h-full w-[80%] ml-32 flex justify-evenly">
        <div className="w-[20%] h-[40%] self-center relative rounded-md">
          <Image
            src="/home/reviews/user-1.jpg"
            alt="student"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="w-[50%] flex flex-col gap-[10px]">
          <div className="h-[50%] flex justify-evenly">
            <div className="relative w-[70%] h-full">
              <Image
                src="/home/reviews/user-2.jpg"
                alt="student"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="bg-secondary h-[100px] w-[80px] self-end rounded-md"></div>
          </div>
          <div className="h-[50%] flex justify-evenly">
            <div className="bg-secondary h-[100px] w-[80px] rounded-md"></div>
            <div className="relative w-[70%] h-full rounded-md">
              <Image
                src="/home/reviews/user-3.jpg"
                alt="student"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="w-[25%] relative h-[50%] self-center rounded-md">
          <Image
            src="/home/reviews/user-4.jpg"
            alt="student"
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
}
