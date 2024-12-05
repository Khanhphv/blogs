"use client";
import { HTMLAttributes, useContext, useMemo } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../../ui/avatar";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";

import { signIn, signOut, useSession } from "next-auth/react";
import { AuthContext } from "../../authorize";
import { login as loginApi } from "@/api/user";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

export default function LoginButton(props: HeaderProps) {
  const { isAdmin, setIsAdmin } = useContext(AuthContext);
  const pathName = usePathname();
  const login = () => {
    signIn("google");
  };
  const logout = async () => {
    signOut();
  };

  const { data, status } = useSession();
  const accessToken = data?.user?.accessToken;

  const name = useMemo(() => {
    const names = data?.user?.name?.split(" ");
    return names?.[names?.length - 1].slice(0, 1);
  }, [data?.user?.name]);

  if (status === "authenticated") {
    if (data.user?.email === "vietkhanh1310@gmail.com") {
      setIsAdmin(true);
    }
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={data?.user?.image || ""} />
            <AvatarFallback className="border-2 font-bold bg-white">
              {name}
            </AvatarFallback>
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
  } else if (status === "unauthenticated") {
    return <div onClick={login}>{props.children}</div>;
  } else {
    return <></>;
  }
}
