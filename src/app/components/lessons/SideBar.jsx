"use client";

import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

export default function SideBar({ links, title, type }) {
  const pathname = usePathname();
  return (
    <aside className="w-[25vw] h-[100vh] border-r border-gray-300 sticky top-0 left-0">
      <nav>
        <h2
          className={`${playfair.className} text-[1.7rem] px-2 py-5 bg-secondary text-white`}
        >
          {title}
        </h2>
        <ul className="h-[70vh] overflow-scroll">
          {links.map((l) => (
            <li
              key={l}
              className={`${
                pathname ===
                `/${type}/lessons/${l
                  .toLowerCase()
                  .split(/[^a-zA-Z0-9]+/)
                  .join("-")}`
                  ? "text-secondary"
                  : "text-[#333]"
              } p-2 border-b border-gray-300 text-lg`}
            >
              <Link
                href={`/${type}/lessons/${l
                  .toLowerCase()
                  .split(/[^a-zA-Z0-9]+/)
                  .join("-")}`}
              >
                {l}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
