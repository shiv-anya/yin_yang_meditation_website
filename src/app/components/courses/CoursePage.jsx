import React from "react";
import ParallaxHeading from "./Parallax";
import { Playfair_Display } from "next/font/google";
import CourseKeyConcepts from "./CourseKeyConcepts";
import BuyCourseCard from "./BuyCourseCard";
import CourseContent from "./CourseContent";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

export default function CoursePage({ data, content, src }) {
  return (
    <div className="bg-tertiary py-16">
      <div className="w-[90%] mx-auto bg-white rounded-md">
        <ParallaxHeading
          title="Embark on a Journey to Wellness with Our Yoga Courses"
          src={src}
        />
        <div className="px-10">
          <h2 className={`${playfair.className} text-[3rem] my-5`}>
            Course description
          </h2>
          <div className="flex justify-between text-justify gap-10 border-t border-gray-300 py-10">
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam id, deserunt deleniti aut adipisci nam obcaecati dicta,
              quia ipsum repellendus numquam quod magnam ex, explicabo atque
              assumenda officia ipsa eveniet.
            </div>
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distinctio, accusamus amet eum optio saepe asperiores incidunt
              quam, animi eaque est non adipisci. Similique esse rem deserunt
              nesciunt cumque! Distinctio, repudiandae.
            </div>
          </div>
        </div>
        <div className="mx-10 pb-10 py-16">
          <div className="flex justify-between">
            <CourseKeyConcepts data={data} />
            <BuyCourseCard />
          </div>
        </div>
        <div>
          <CourseContent data={content} />
        </div>
      </div>
    </div>
  );
}
