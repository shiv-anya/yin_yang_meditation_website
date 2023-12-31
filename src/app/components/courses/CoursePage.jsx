import React from "react";
import ParallaxHeading from "./Parallax";
import CourseKeyConcepts from "./CourseKeyConcepts";
import BuyCourseCard from "./BuyCourseCard";
import CourseContent from "./CourseContent";

export default function CoursePage({ data, content, src, title, type }) {
  return (
    <div className="bg-tertiary py-16">
      <div className="w-[90%] mx-auto bg-white rounded-md">
        <ParallaxHeading title={title} src={src} />
        <div className="px-10">
          <h2 className={`text-[3rem] my-5 max-md:text-[2.4rem]`}>
            Course description
          </h2>
          <div className="flex justify-between text-justify gap-10 border-t border-gray-300 py-10 max-lg:text-left max-lg:flex-col">
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
        <div className="mx-10 pb-10 py-16 max-md:py-0">
          <div className="flex justify-between max-lg:flex-col">
            <CourseKeyConcepts data={data} />
            <BuyCourseCard />
          </div>
        </div>
        <div>
          <CourseContent data={content} type={type} />
        </div>
      </div>
    </div>
  );
}
