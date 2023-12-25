"use client";
import { HTMLAttributes } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

export default function Header(props: HeaderProps) {
  const { data, status } = useSession();
  const pathName = usePathname();
  const logout = async () => {
    const result = await signOut();
  };

  if (data) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={data?.user?.image || ""} />
            <AvatarFallback>{data?.user?.name}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40 border rounded-md bg-popover shadow-md">
          <DropdownMenuItem className="text-center">
            <button
              className="font-medium leading-none"
              onClick={() => logout()}
            >
              Sign out
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  } else {
    if (status === "loading" || pathName.includes("login")) {
      return <></>;
    } else if (status === "unauthenticated") {
      return (
        <Link href="/login" className={buttonVariants({ variant: "ghost" })}>
          <div className="font-medium leading-none">Sign In</div>
        </Link>
      );
    }
  }
}
