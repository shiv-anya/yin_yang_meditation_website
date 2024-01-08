"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";

const links = [
  { path: "/", title: "Home" },
  { path: "/blogs", title: "Blogs" },
  { path: "/yoga", title: "Yoga" },
  { path: "/diet", title: "Diet" },
  { path: "/about", title: "About" },
  { path: "/contact", title: "Contact" },
];

function NavbarLinks() {
  const pathname = usePathname();
  return (
    <ul className="flex flex-col justify-between items-center">
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
    </ul>
  );
}

const SideNavbar = ({ isOpen, onClose }) => {
  return (
    <motion.div
      className={`fixed top-0 left-0 w-full h-[100vh] bg-white p-4 flex flex-col items-center ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform ease-in-out duration-300`}
    >
      <NavbarLinks onClick={onClose} />
      <button
        className="mt-4 p-2 bg-secondary text-white rounded"
        onClick={onClose}
      >
        Close
      </button>
    </motion.div>
  );
};

export default SideNavbar;
