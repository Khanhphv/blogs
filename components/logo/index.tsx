import Link from "next/link";
import LogoIcon from "../../public/logo.svg";
import { MENU_ROUTE } from "@/app/config";
import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Link href={MENU_ROUTE.BLOG}>
        <Image alt="khnah' blog" width={100} height={100} src="/logo.png" />
        {/* <LogoIcon
          className="cursor-pointer"
          style={{ fill: "hsl(var(--foreground))" }}
        /> */}
      </Link>
    </div>
  );
}
