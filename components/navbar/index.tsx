import { MENU } from "@/app/config";
import Logo from "../logo";
import { MenuItem } from "../menu-item";
import LoginButton from "../login";

export const Navbar = ({ classContent = "" }) => {
  return (
    <div className={`flex justify-between ${classContent}`}>
      <Logo />
      <div className="flex justify-end items-center">
        {MENU.map((i, v) => {
          return <MenuItem key={`menu-${v}`} href={i.href} title={i.title} />;
        })}
        <MenuItem href="/login" title="Login"></MenuItem>
      </div>
    </div>
  );
};
