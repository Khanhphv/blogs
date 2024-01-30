// "use client";
import CreatePost from "@/components/k-create-post";
import { Button } from "@/components/ui/button";
import { createPost } from "@/firebase/post";
import { FormEvent } from "react";

export function generateStaticParams() {
  return [
    {
      lang: "vi",
    },
    {
      lang: "en",
    },
  ];
}
export default function Blog() {
  // const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);
  //   if (formData.get("title") && formData.get("content")) {
  //     const result = await createPost({
  //       title: formData.get("title") as string,
  //       content: formData.get("content") as string,
  //     });
  //   }
  // };
  return <section className="flex min-h-screen flex-col p-2">xxx</section>;
}
