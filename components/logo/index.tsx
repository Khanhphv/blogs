import Link from "next/link";
import LogoIcon from "../../public/logo.svg";
import { MENU_ROUTE } from "@/app/config";

export default function Logo() {
  return (
    <div className="max-sm:hidden">
      <Link href={MENU_ROUTE.BLOG}>
        <LogoIcon
          className="cursor-pointer"
          style={{ fill: "hsl(var(--foreground))" }}
        />
      </Link>
    </div>
  );
}
