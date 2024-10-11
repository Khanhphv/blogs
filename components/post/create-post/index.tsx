"use client";
import dynamic from "next/dynamic";
import { Input } from "../../ui/input";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import { Button } from "@/components/ui/button";
import { createPost } from "../actionForm";
import { Textarea } from "@/components/ui/textarea";

export default function CreatePost() {
  const Editor = dynamic(() => import("@/components/molecules/editor"), {
    ssr: false,
  });
  const contentRef = useRef<string>("");
  const router = useRouter();
  const onCreate = async (formData: FormData) => {
    const post = await createPost({
      content: contentRef.current,
      title: formData.get("title") as string,
      createdAt: dayjs().format(),
    });
    if (post.status === 200) {
      router.push("/blogs");
    }
  };

  return (
    <form action={onCreate} className="mt-2">
      <p className="my-2 font-bold">Hãy để lại lời nhắn cho tui !!!</p>
      <Input
        name="title"
        className="rounded ring-offset-0 mb-4 da"
        placeholder="Title"
      />
      <Textarea
        placeholder="Please type content"
        onChange={(e) => {
          contentRef.current = e.target.value;
        }}
      />
      <br></br>
      <Button variant="default" className="mt-2" type="submit">
        Create
      </Button>
    </form>
  );
}
