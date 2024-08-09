import Link from "next/link";
import style from "./menu-item.module.scss";
import Icon from "../icon";

export interface MenuItemProps {
  className?: string;
  title?: string;
  href?: string;
  icon?: any;
  size?: number;
  showLable?: boolean;
}

export const MenuItem = ({
  className,
  title,
  href,
  icon,
  showLable = false,
  size,
}: MenuItemProps) => {
  return (
    <Link
      href={href || ""}
      className={`py-2 px-2 my-2 flex rounded h-fit w-full ${className || ""}`}
    >
      {icon && <Icon size={size || 30} name={icon} />}
      {showLable && <span>{title}</span>}
    </Link>
  );
};
