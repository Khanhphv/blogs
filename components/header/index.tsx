import { MENU } from "@/app/config";
import Link from "next/link";
import { HTMLAttributes } from "react";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

export default function Header(props: HeaderProps) {
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
    </div>
  );
}
