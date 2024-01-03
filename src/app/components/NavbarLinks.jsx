"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Button from "./Button";

export default function NavbarLinks({ links }) {
  const pathname = usePathname();
  return (
    <ul className="flex justify-between items-center">
      {links.map((l) => (
        <li key={l.path}>
          <Link
            href={l.path}
            className={`hover:text-secondary ${
              l.path === pathname ? "text-secondary" : ""
            }`}
          >
            {l.title}
          </Link>
        </li>
      ))}
      <Button className="p-4 px-16 rounded-md self-start">Get Started</Button>
    </ul>
  );
}
