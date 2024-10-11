import { useEffect, useState } from "react";
import { PiSmileyMelting } from "react-icons/pi";
import { VscNote } from "react-icons/vsc";
import { MENU as MENU_CONSTANT } from "@/constant/app";
import { MenuItem } from "@/components/molecules/menu-item";
import Logo from "@/components/molecules/logo";

export const Navbar = ({ vertical = false }: { vertical?: boolean }) => {
  const [className, setClassName] = useState("");

  useEffect(() => {
    if (vertical) {
      setClassName("flex-row max-h-[50px] bottom-0 w-full border-t-2");
    } else {
      setClassName("flex-col w-[70px] h-full border-r-2");
    }
  }, [vertical]);

  return (
    <>
      <div
        className={`flex justify-between px-2 gap-4 fixed z-10 bg-background ${className}`}
      >
        <Logo />
        <Sidebar
          className={`justify-center gap-4 flex ${
            vertical ? "flex-row" : "flex-col"
          } max-sm:flex-1`}
        />
        <div className="flex"></div>
      </div>
    </>
  );
};

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
];

export const Sidebar = ({ className = "" }) => {
  return (
    <div className={className}>
      {MENU.map((i, v) => {
        return <MenuItem className="justify-center" key={`menu-${v}`} {...i} />;
      })}
    </div>
  );
};
