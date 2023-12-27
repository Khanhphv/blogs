"use client";
import { Button } from "@/components/ui/button";

export default function Blog() {
  const addPost = async () => {
    await fetch("/api/post/add", {
      method: "POST",
      body: JSON.stringify({
        post: {
          title: "Hello",
          content: "xxx",
        },
      }),
    });
  };
  return (
    <main className="dark:text-white pt-2 pb-2">
      <h1 className="border-y pt-6 pb-6 text-8xl font-bold">The Blogs</h1>
      <Button onClick={addPost}>Submit</Button>
    </main>
  );
}
