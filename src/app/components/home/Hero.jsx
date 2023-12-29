import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa6";
import Button from "../Button";
import { Playfair_Display } from "next/font/google";

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
});

export default function Hero() {
  return (
    <section className="flex h-[120vh]">
      <div className="w-[80%] p-16 flex flex-col justify-evenly pb-0">
        <div className="flex">
          <div className="w-[20px] h-[20px] bg-secondary mr-2 rounded-[50%]"></div>
          <small>On-Demand Live sessions</small>
        </div>
        <h2
          className={playfair_display.className}
          style={{ fontSize: "4.5rem", fontWeight: "bold", lineHeight: "70px" }}
        >
          Find Calm Amidst Chaos: Your Guided Meditation
        </h2>
        <p className="text-[1.2rem]">
          Embark on a Journey Within Discover Serenity, Mindfulness, and
          Peaceful Living. Feel free to customize it to align with the specific
          focus and tone of your meditation website.
        </p>
        <Button className="p-4 px-16 rounded-md self-start">All Courses</Button>
      </div>
      <div className="w-[50%] relative m-16">
        <Image
          src="/home/hero-home.jpg"
          alt="lady doing yoga"
          fill
          className="object-cover rounded-sm z-40"
        />
        <div className="absolute top-[40%] left-[40%] bg-secondary h-[90px] w-[90px] rounded-[50%] z-50 hover:bg-primary">
          <FaPlay
            className="text-[40px] absolute left-[30%] top-[30%] hover:text-white"
            color="white"
            fill="white"
          />
        </div>
        <div className="h-[90%] w-[90%] bg-gray-300 absolute top-[70px] right-[70px] z-1 rounded-sm"></div>
      </div>
    </section>
  );
}
