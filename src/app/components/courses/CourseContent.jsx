import React from "react";
import { Playfair_Display } from "next/font/google";
import { data } from "autoprefixer";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

export default function CourseContent({ data }) {
  return (
    <div className="mx-10 pb-16">
      <h2 className={`${playfair.className} text-[3rem] mb-5`}>
        Course content
      </h2>
      <div>
        <ul className="border border-gray-300 p-5 rounded-md">
          {data.map((d) => (
            <li
              key={d}
              className="border-b border-gray-300 text-[1.3rem] p-2 last:border-none flex gap-3 items-center cursor-pointer"
            >
              <div className="w-[15px] h-[15px] border border-secondary rounded-full flex justify-center items-center">
                <div className="w-[7.5px] h-[7.5px] bg-secondary rounded-full"></div>
              </div>
              {d}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
