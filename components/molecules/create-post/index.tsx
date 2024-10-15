import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { TextArea } from "gestalt";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
const Editor = dynamic(() => import("@/components/molecules/editor"), {
  ssr: false,
});
export function CreatePost() {
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
        <div className="grid gap-4 py-4">
          {/* <Avatar>
            <AvatarImage src={data?.user?.image || ""} />
            <AvatarFallback className="border-2 font-bold bg-white">
              {name}
            </AvatarFallback>
          </Avatar> */}
          <div className="flex">
            <Textarea placeholder="Please type content" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Post</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
