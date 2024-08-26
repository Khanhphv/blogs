"use client";
import { MenuItem } from "../menu-item";
import LoginButton from "../login";

import { PiSmileyMelting } from "react-icons/pi";
import { VscNote } from "react-icons/vsc";
import { PiNotePencil } from "react-icons/pi";
import { useLayoutEffect, useRef } from "react";
import { MENU as MENU_CONSTANT } from "@/constant/app";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const MENU = [
  {
    title: "Home",
    href: "/",
    icon: <PiSmileyMelting size={30} />,
  },
  {
    title: "Blog",
    href: MENU_CONSTANT.HOME,
    icon: <VscNote size={30} />,
  },
  {
    title: "Write",
    href: "/blogs/create",
    icon: <PiNotePencil size={30} />,
  },
];
export const Navbar = ({ classContent = "" }) => {
  const navBarRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (navBarRef.current) {
      const observer = new ResizeObserver((entries) => {});
      observer.observe(navBarRef.current);
      return () => {
        navBarRef.current && observer.unobserve(navBarRef.current);
      };
    }
  }, []);

  return (
    <>
      <Sheet>
        <SheetTrigger className="flex grow sm:hidden items-center justify-end">
          <PiSmileyMelting size={30} />
        </SheetTrigger>
        <SheetContent>
          <div className={`flex gap-4 items-center flex-col `}>
            {MENU.map((i, v) => {
              return (
                <MenuItem
                  className="justify-center"
                  showLabel
                  key={`menu-${v}`}
                  {...i}
                />
              );
            })}
            <LoginButton>
              <MenuItem showLabel title="Login"></MenuItem>
            </LoginButton>
          </div>
        </SheetContent>
      </Sheet>

      <div className={`flex gap-4 items-center max-sm:hidden ${classContent}`}>
        {MENU.map((i, v) => {
          return (
            <MenuItem className="justify-center" key={`menu-${v}`} {...i} />
          );
        })}
        {/* <LoginButton>
          <MenuItem showLabel title="Login"></MenuItem>
        </LoginButton> */}
      </div>
    </>
  );
};

export const Sidebar = ({ classContent = "" }) => {
  return (
    <>
      {MENU.map((i, v) => {
        return <MenuItem className="justify-center" key={`menu-${v}`} {...i} />;
      })}
      <LoginButton>
        <MenuItem showLabel title="Login"></MenuItem>
      </LoginButton>
    </>
  );
};
