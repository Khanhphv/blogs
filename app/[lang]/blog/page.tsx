"use client";
import CreatePost from "@/components/k-create-post";
import { Button } from "@/components/ui/button";
import { FormEvent } from "react";

export default function Blog() {
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    debugger;
    const result = await fetch("/api/post/add", {
      method: "POST",
      body: JSON.stringify({
        post: {
          title: formData.get("title"),
          content: formData.get("content"),
        },
      }),
    });
    console.log(result);
  };
  return (
    <section className="flex min-h-screen flex-col p-2">
      <form onSubmit={onSubmit}>
        <CreatePost />
        <Button type="submit">Submit</Button>
      </form>
    </section>
  );
}
