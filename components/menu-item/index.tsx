import Link from "next/link";
import style from "./menu-item.module.scss";
import Icon from "../icon";

export interface MenuItemProps {
  className?: string;
  title?: string;
  href?: string;
  icon?: any;
  showLable?: boolean;
}

export const MenuItem = ({
  className,
  title,
  href,
  icon,
  showLable = false,
}: MenuItemProps) => {
  return (
    <Link
      href={href || ""}
      className={`py-2 px-2 my-2 flex rounded h-fit w-full ${className || ""}`}
    >
      {icon && <Icon size={30} name={icon} />}
      {showLable && <span>{title}</span>}
    </Link>
  );
};
