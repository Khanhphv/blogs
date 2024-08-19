import { MENU } from "@/app/config";
import { MenuItem } from "../menu-item";
import LoginButton from "../login";

export const Navbar = ({ classContent = "" }) => {
  return (
    <div className={`flex gap-4 items-center ${classContent}`}>
      {MENU.map((i, v) => {
        return <MenuItem className="justify-center" key={`menu-${v}`} {...i} />;
      })}
      <LoginButton>
        <MenuItem showLabel title="Login"></MenuItem>
      </LoginButton>
    </div>
  );
};
