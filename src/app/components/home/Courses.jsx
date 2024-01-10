import Image from "next/image";
import React from "react";
import Button from "../Button";

function Card({ title, src }) {
  return (
    <div className="max-sm:flex-1 max-sm:mb-10 max-sm:flex-none max-sm:h-[23%]">
      <div className="relative h-[60%] w-full max-sm:h-[90%]">
        <Image fill src={src} alt="yoga images" className="object-cover" />
      </div>
      <div className="w-full max-sm:h-[10%]">
        <h3 className={`text-[1.7rem] mt-3 mb-2`}>{title}</h3>
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
      <div className="h-full mb-16 ml-16 max-sm:ml-0">
        <h2
          className={`text-[3rem] leading-[60px] max-sm:text-[2.4rem] max-sm:leading-[40px] max-sm:w-[90%] max-sm:mx-auto`}
        >
          Transformative Journeys
          <br />
          Explore Our Mindfulness Courses
        </h2>
      </div>
      <div className="h-[90vh] flex flex-col items-center max-sm:h-[150vh] max-sm:justify-between max-sm:h-[220vh] max-xs:h-[250vh]">
        <div className="h-full w-[90%] mt-0 mx-16 flex justify-between gap-10  max-sm:flex-col">
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
        <Button className="p-4 px-16 rounded-md mt-24 max-lg:mt-56 max-sm:mt-40 max-sm:mb-16 max-xs:mb-0">
          All Courses
        </Button>
      </div>
    </section>
  );
}
