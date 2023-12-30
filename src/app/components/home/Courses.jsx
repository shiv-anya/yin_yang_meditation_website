import Image from "next/image";
import React from "react";
import Button from "../Button";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

function Card({ title, src }) {
  return (
    <div>
      <div className="relative h-[60%] w-full">
        <Image fill src={src} alt="yoga images" className="object-cover" />
      </div>
      <div className="w-full">
        <h3 className={`${playfair.className} text-[1.7rem] mt-3 mb-2`}>
          {title}
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
          distinctio.
        </p>
      </div>
    </div>
  );
}

export default function Courses() {
  return (
    <section className="mb-24">
      <div className="h-full mb-16 ml-16">
        <h2 className={`${playfair.className} text-[3rem] leading-[60px]`}>
          Transformative Journeys
          <br />
          Explore Our Mindfulness Courses
        </h2>
      </div>
      <div className="h-[90vh] flex flex-col items-center">
        <div className="h-full w-[90%] mt-0 mx-16 flex justify-between gap-10">
          <Card
            title="Mindful Living Mastery: A Holistic Approach to Well-Being"
            src="/home/course/course.jpg"
          />
          <Card
            title="Calm Within Chaos: Navigating Stress with Mindfulness"
            src="/home/course/course-2.jpg"
          />
          <Card
            title="Meditation Essentials: Cultivating Inner Peace Daily"
            src="/home/course/course-3.jpg"
          />
        </div>
        <Button className="p-4 px-16 rounded-md mt-24">All Courses</Button>
      </div>
    </section>
  );
}
