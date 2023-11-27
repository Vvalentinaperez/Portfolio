"use client";
import { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import menuHamb from "./iconos/menuHamb";
import clouseIcon from "./iconos/clouseIcon";

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  const navLinks = [
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Projects",
      path: "#projects",
    },
    {
      title: "Contact",
      path: "#contact",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto py-4">
        <Link
          href={"/"}
          className=" text-lg md:text-[17px] text-white font-semibold"
        >
          <h1>Home</h1>
        </Link>
        <div className="mobile-menu md:hidden block">
          {navBarOpen ? (
            <button className=" flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <menuHamb className="h-5 w-5" />
            </button>
          ) : (
            <button>
              <clouseIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto text-white" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
