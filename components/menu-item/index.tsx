import Link from "next/link";
import style from "./menu-item.module.scss";

export interface MenuItemProps {
  className?: string;
  title?: string;
  href?: string;
}

export const MenuItem = ({ className, title, href }: MenuItemProps) => {
  return (
    <Link
      href={href || ""}
      className={`mx-2 py-2 rounded h-fit ${style.menu} ${className || ""}`}
    >
      {title || ""}
    </Link>
  );
};
