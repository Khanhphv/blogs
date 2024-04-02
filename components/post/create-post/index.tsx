"use client";
import dynamic from "next/dynamic";
import { Input } from "../../ui/input";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function CreatePost() {
  const Editor = dynamic(() => import("@/components/editor"), { ssr: false });
  const contentRef = useRef<string>("");
  const router = useRouter();
  const onCreate = async (formData: FormData) => {
    const post = await fetch("/api/post/add", {
      method: "POST",
      body: JSON.stringify({
        post: {
          content: contentRef.current,
          title: formData.get("title"),
        },
      }),
    });
    if (post.status === 200) {
      router.push("/blogs");
    }
  };

  return (
    <form action={onCreate} className="mt-2">
      <Input
        name="title"
        className="rounded ring-offset-0 mb-4"
        placeholder="Title"
        required
      />
      <Editor
        onChange={(data) => {
          contentRef.current = data;
        }}
      />
      <button type="submit" className="rounded bg-primary p-2 mt-2 text-white">
        Create
      </button>
    </form>
  );
}
