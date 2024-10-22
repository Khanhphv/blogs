"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PiArrowUp } from "react-icons/pi";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import "./style.scss";
import dynamic from "next/dynamic";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import dayjs from "dayjs";
import { createPost } from "../actionForm";
const Editor = dynamic(() => import("@/components/molecules/editor"), {
  ssr: false,
});
export function CreatePost() {
  const onCreate = async (formData: FormData) => {
    const post = await createPost({
      content: formData.get("content") as string,
      title: formData.get("title") as string,
      createdAt: dayjs().format(),
    });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="sm:fixed max-sm:hidden bottom-4 right-6"
          variant="outline"
        >
          +
        </Button>
      </SheetTrigger>
      <SheetContent side={"bottom"} className="post-container">
        <SheetHeader>
          <SheetTitle>Create Post</SheetTitle>
        </SheetHeader>
        <form action={onCreate} className="mt-2">
          <div className="grid gap-4 py-4">
            {/* <Avatar>
            <AvatarImage src={data?.user?.image || ""} />
            <AvatarFallback className="border-2 font-bold bg-white">
              {name}
            </AvatarFallback>
          </Avatar> */}
            <Input
              name="title"
              className="rounded ring-offset-0 mb-4 da"
              placeholder="Title"
            />
            <Textarea placeholder="Please type content" name="content" />
            <SheetClose asChild>
              <Button type="submit">
                <PiArrowUp />
                Post
              </Button>
            </SheetClose>
          </div>
        </form>

        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
