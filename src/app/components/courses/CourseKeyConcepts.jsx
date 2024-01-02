import { Playfair_Display } from "next/font/google";
import React from "react";

const playfair = Playfair_Display({ weight: "700", subsets: ["latin"] });

export default function CourseKeyConcepts({ data }) {
  return (
    <div>
      <h2 className={`${playfair.className} text-[3rem] mb-5`}>Key Concepts</h2>
      <ul>
        {data.map((d) => (
          <li key={d} className="flex items-center">
            <div className="w-[10px] h-[10px] bg-secondary rounded-full mr-2"></div>
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
}
