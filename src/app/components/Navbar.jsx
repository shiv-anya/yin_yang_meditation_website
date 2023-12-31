import { Playfair_Display_SC } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const playfair_display = Playfair_Display_SC({
  subsets: ["latin"],
  weight: "400",
});

const Navbar = () => {
  return (
    <header>
      <nav className="h-[25vh] p-10 flex justify-between items-center">
        <div className="h-[100px] relative w-[100px]">
          <Image fill src="/yin_circle.png" alt="logo" />
        </div>
        <div className="w-[60%]">
          <ul className="flex justify-between items-center">
            <li>
              <Link href="/" className="hover:text-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-secondary">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-secondary">
                Yoga
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-secondary">
                Diet
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-secondary">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-secondary">
                Contact
              </Link>
            </li>
            <Button className="p-4 px-16 rounded-md self-start">
              Get Started
            </Button>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
