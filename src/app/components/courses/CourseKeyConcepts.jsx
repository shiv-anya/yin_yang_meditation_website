import React from "react";

export default function CourseKeyConcepts({ data }) {
  return (
    <div>
      <h2 className={`text-[3rem] mb-5`}>Key Concepts</h2>
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
