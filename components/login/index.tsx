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

import { signIn, useSession } from "next-auth/react";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

export default function LoginButton(props: HeaderProps) {
  const pathName = usePathname();
  const login = () => {
    signIn("google");
  };
  const logout = async () => {};
  const { data, status } = useSession();
  console.log("dataxxxx", data);
  console.log("dataxxxx", status);
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
  return <div onClick={login}>{props.children}</div>;
  // }
  // }
}