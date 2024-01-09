"use client";

import Image from "next/image";
import React from "react";
import NavbarLinks from "./NavbarLinks";
import SideNavbar from "./SideNavbar";
import { useState } from "react";
import { FaBarsStaggered, FaBurger } from "react-icons/fa6";

const links = [
  { path: "/", title: "Home" },
  { path: "/blogs", title: "Blogs" },
  { path: "/yoga", title: "Yoga" },
  { path: "/diet", title: "Diet" },
  { path: "/about", title: "About" },
  { path: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("here");
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <header>
      <nav className="h-[25vh] p-10 flex justify-between items-center max-sm:h-[15vh] max-sm:p-8">
        <div className="h-[100px] relative w-[100px] max-sm:h-[50px] max-sm:w-[50px]">
          <Image fill src="/yin_circle.png" alt="logo" />
        </div>
        <div className="w-[60%] max-lg:hidden">
          <NavbarLinks links={links} />
        </div>
        <div className="lg:hidden max-lg:visible max-sm:visible">
          <FaBarsStaggered
            onClick={toggleSidebar}
            className="fill-secondary max-lg:text-[2.4rem] max-sm:text-[2rem]"
          />
          <SideNavbar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
