"use client";
import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/outline";

import Link from "next/link";
import { useRef } from "react";
import { LightDarkSwitch } from "../dark-mode";

const Sidebar = () => {
  const MENU = [
    {
      title: "Home",
      href: "home",
    },
    {
      title: "Blog",
      href: "blog",
    },
    {
      title: "Contact",
      href: "contact",
    },
  ];
  const sidebarRef = useRef<HTMLDivElement>(null);
  const toggleMenu = () => {
    if (sidebarRef?.current?.style.display == "") {
      sidebarRef!.current!.style!.display = "flex";
    } else {
      sidebarRef!.current!.style!.display = "";
    }
  };
  return (
    <>
      <button className="pe-3" onClick={toggleMenu}>
        <Bars3Icon width={24} />
      </button>

      <div
        ref={sidebarRef}
        className="fixed hidden top-0 right-0 w-screen dark:bg-black bg-white h-screen flex flex-col justify-center"
      >
        {MENU &&
          MENU!.map((menu) => (
            <div
              className="pt-3 pb-3 dark:hover:bg-pink-400 text-center"
              key={menu.href}
            >
              <Link href={menu.href}>{menu.title}</Link>
            </div>
          ))}
        <LightDarkSwitch />
        <div
          onClick={toggleMenu}
          className="absolute bottom-10 w-screen flex justify-center"
        >
          <XCircleIcon width={30} />
        </div>
      </div>
    </>
  );
};

export { Sidebar };
