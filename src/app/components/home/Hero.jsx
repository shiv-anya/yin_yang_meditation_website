import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa6";
import Button from "../Button";

export default function Hero() {
  return (
    <section className="flex h-[120vh] max-lg:flex-col max-lg:h-[130vh]">
      <div className="w-[80%] p-16 flex flex-col justify-evenly pb-0 max-lg:h-[50%] max-sm:w-[90%] max-sm:px-0 max-sm:py-8 max-sm:mx-auto max-sm:justify-between">
        <div className="flex">
          <div className="w-[20px] h-[20px] bg-secondary mr-2 rounded-[50%]"></div>
          <small>On-Demand Live sessions</small>
        </div>
        <h2
          className={`text-[4.5rem] leading-[70px] max-sm:text-[3rem] leading-[10px]`}
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
      <div className="w-[50%] relative m-16 max-lg:h-[40%] max-lg:self-center">
        <Image
          src="/home/hero-home.jpg"
          alt="lady doing yoga"
          fill
          className="object-cover rounded-sm z-40"
        />
        <Button className="absolute top-[40%] left-[40%] h-[90px] w-[90px] rounded-[50%] z-50">
          <FaPlay
            className="text-[40px] absolute left-[30%] top-[30%] hover:text-white"
            color="white"
            fill="white"
          />
        </Button>
        <div className="h-full w-full bg-gray-300 absolute top-[40px] right-[40px] z-1 rounded-sm bg-opacity-50"></div>
      </div>
    </section>
  );
}
