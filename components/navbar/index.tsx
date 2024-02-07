import { MENUS } from "@/app/config";
import Logo from "../logo";
import { MenuItem } from "../menu-item";

export const Navbar = ({ classContent = "" }) => {
  return (
    <div className={`flex justify-between ${classContent}`}>
      <Logo />
      <div className="flex justify-end items-center">
        {MENUS.map((i, v) => {
          return <MenuItem key={`menu-${v}`} href={i.href} title={i.title} />;
        })}
      </div>
    </div>
  );
};
