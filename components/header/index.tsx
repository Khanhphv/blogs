"use client";
import { HTMLAttributes } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { useSession, signOut } from "next-auth/react";
import { Popover, PopoverTrigger } from "../ui/popover";
import { PopoverContent } from "@radix-ui/react-popover";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

export default function Header(props: HeaderProps) {
  const { data } = useSession();
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
                onClick={() => signOut()}
              >
                Sign out
              </button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    <>Sign In</>;
  }
}
