import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import React from "react";
import Button from "../Button";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

export default function Reviews() {
  return (
    <section className="p-16 h-[120vh] flex pb-32 max-sm:flex-col max-sm:p-0 max-sm:flex-col-reverse max-sm:p-0 max-sm:h-[80vh] max-sm:mt-[-250px]">
      <div className="h-[90%] w-[30%] flex flex-col justify-between max-sm:w-[90%] max-sm:mx-auto max-sm:h-[25%]">
        <h2
          className={`${playfair.className} capitalize text-[3rem] leading-[60px] max-sm:text-[2.4rem] max-sm:leading-[40px]`}
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
      <div className="h-full w-[80%] ml-32 flex justify-evenly max-lg:ml-16 max-sm:w-[90%] max-sm:h-[50%] max-sm:mx-auto">
        <div className="w-[20%] h-[40%] self-center relative rounded-md max-sm:h-[30%] max-sm:self-center">
          <Image
            src="/home/reviews/user-1.jpg"
            alt="student"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="w-[50%] flex flex-col gap-[10px]">
          <div className="h-[50%] flex justify-evenly">
            <div className="relative w-[70%] h-full max-sm:h-[70%] max-sm:self-end">
              <Image
                src="/home/reviews/user-2.jpg"
                alt="student"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="bg-secondary h-[100px] w-[80px] self-end rounded-md"></div>
          </div>
          <div className="h-[50%] flex justify-evenly max-sm:h-[30%]">
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
        <div className="w-[25%] relative h-[50%] self-center rounded-md max-sm:h-[30%] max-sm:self-center">
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
