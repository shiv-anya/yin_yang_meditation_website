import { Playfair_Display_SC } from "next/font/google";
import Image from "next/image";
import React from "react";
import NavbarLinks from "./NavbarLinks";

const links = [
  { path: "/", title: "Home" },
  { path: "/blogs", title: "Blogs" },
  { path: "/yoga", title: "Yoga" },
  { path: "/diet", title: "Diet" },
  { path: "/about", title: "About" },
  { path: "/contact", title: "Contact" },
];

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
          <NavbarLinks links={links} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
