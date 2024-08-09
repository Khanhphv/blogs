import { MENU } from "@/app/config";
import Logo from "../logo";
import { MenuItem } from "../menu-item";
import LoginButton from "../login";

export const Navbar = ({ classContent = "" }) => {
  return (
    <div className={`flex gap-4 p-2 items-center ${classContent}`}>
      {MENU.map((i, v) => {
        return <MenuItem className="justify-center" key={`menu-${v}`} {...i} />;
      })}
      <LoginButton>
        <MenuItem showLable title="Login"></MenuItem>
      </LoginButton>
    </div>
  );
};
