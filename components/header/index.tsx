"use client";
import { HTMLAttributes } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { useSession, signOut } from "next-auth/react";
import { Popover, PopoverTrigger } from "../ui/popover";
import { PopoverContent } from "@radix-ui/react-popover";
import { usePathname } from "next/navigation";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

export default function Header(props: HeaderProps) {
  const { data, status } = useSession();
  const pathName = usePathname();
  const logout = async () => {
    const result = await signOut();
  };

  if (data) {
    return (
      <Popover>
        <PopoverTrigger>
          <Avatar>
            <AvatarImage src={data?.user?.image || ""} />
            <AvatarFallback>{data?.user?.name}</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="w-40 border rounded-md p-4 bg-popover shadow-md">
          <div className="grid gap-4">
            <div className="text-center">
              <button
                className="font-medium leading-none"
                onClick={() => logout()}
              >
                Sign out
              </button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    if (status === "loading" || pathName.includes("login")) {
      return <></>;
    } else if (status === "unauthenticated") {
      return (
        <a href="/login" className="p-4">
          <div className="font-medium leading-none">Sign In</div>
        </a>
      );
    }
  }
}
