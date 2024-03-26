"use client";
import { HTMLAttributes } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
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

export default function LoginButton(props: HeaderProps) {
  const pathName = usePathname();
  const logout = async () => {};

  // if (data) {
  //   return (
  //     <DropdownMenu>
  //       <DropdownMenuTrigger>
  //         <Avatar>
  //           <AvatarImage src={data?.user?.image || ""} />
  //           <AvatarFallback>{data?.user?.name}</AvatarFallback>
  //         </Avatar>
  //       </DropdownMenuTrigger>
  //       <DropdownMenuContent className="w-40 border rounded-md bg-popover shadow-md">
  //         <DropdownMenuItem className="text-center">
  //           <button
  //             className="font-medium leading-none"
  //             onClick={() => logout()}
  //           >
  //             Sign out
  //           </button>
  //         </DropdownMenuItem>
  //       </DropdownMenuContent>
  //     </DropdownMenu>
  //   );
  // } else {
  //   if (status === "loading" || pathName.includes("login")) {
  //     return <></>;
  //   } else if (status === "unauthenticated") {
  return (
    <Link href="/login" className={buttonVariants({ variant: "ghost" })}>
      <div className="mx-2 px-5 py-2 rounded h-fit">Sign In</div>
    </Link>
  );
  // }
  // }
}
