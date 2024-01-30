"use client";
import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/outline";

import Link from "next/link";
import { HTMLAttributes, useRef } from "react";
import { LightDarkSwitch } from "../dark-mode";
import { MENU } from "@/app/x/config";
interface SidebarProps extends HTMLAttributes<HTMLDivElement> {}

const Sidebar = (props: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const toggleMenu = () => {
    if (sidebarRef?.current?.style.display == "") {
      sidebarRef!.current!.style!.display = "flex";
    } else {
      sidebarRef!.current!.style!.display = "";
    }
  };

  const onMenuItemClick = () => {
    toggleMenu();
  };

  return (
    <div className={props.className}>
      <button className="pe-3" onClick={toggleMenu}>
        <Bars3Icon className="dark:text-white" width={24} />
      </button>

      <div
        ref={sidebarRef}
        className="fixed hidden top-0 right-0 w-screen dark:bg-black bg-white h-screen flex flex-col justify-center"
      >
        {MENU &&
          MENU!.map((menu) => (
            <Link
              href={menu.href}
              key={menu.href}
              onClick={onMenuItemClick}
              className="pt-3 pb-3 dark:text-white dark:hover:bg-pink-400 text-center"
            >
              {menu.title}
            </Link>
          ))}
        <LightDarkSwitch size={50} />
        <div
          onClick={toggleMenu}
          className="absolute bottom-10 w-screen flex justify-center"
        >
          <XCircleIcon className="dark:text-white" width={30} />
        </div>
      </div>
    </div>
  );
};

export { Sidebar };
