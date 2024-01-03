import React from "react";
import { Playfair_Display } from "next/font/google";
import { data } from "autoprefixer";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

export default function CourseContent({ data, type }) {
  return (
    <div className="mx-10 pb-16">
      <h2 className={`${playfair.className} text-[3rem] mb-5 capitalize`}>
        Course content
      </h2>
      <div>
        <ul className="border border-gray-300 p-5 rounded-md">
          {data.map((d) => (
            <Link
              key={d}
              href={`/${type}/lessons/${d
                .toLowerCase()
                .split(/[^a-zA-Z0-9]+/)
                .join("-")}`}
              className="last:border-none"
            >
              <li className="text-[1.3rem] p-2 flex gap-3 items-center border-b border-gray-300 hover:text-secondary">
                <div className="w-[15px] h-[15px] border border-secondary rounded-full flex justify-center items-center">
                  <div className="w-[7.5px] h-[7.5px] bg-secondary rounded-full"></div>
                </div>
                {d}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
