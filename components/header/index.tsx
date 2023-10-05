import { MENU } from "@/app/config";
import Link from "next/link";
import { LightDarkSwitch } from "..";
import { HTMLAttributes } from "react";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const Header = (props: HeaderProps) => {
  const { className } = props;
  return (
    <div className={`flex justify-between ${className}`}>
      {MENU.map((item) => (
        <Link
          className="dark:text-white ps-3 pe-3"
          key={item.href}
          href={item.href}
        >
          {item.title}
        </Link>
      ))}
      <LightDarkSwitch className="ms-3 me-3" size={30} />
    </div>
  );
};
