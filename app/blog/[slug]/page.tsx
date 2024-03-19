"use client";

import KEditor from "@/components/editor";
import { useRouter } from "next/navigation";
import { FormEvent, createRef, useEffect, useRef, useState } from "react";

async function getData(id: string) {
  const data = await fetch(`${process.env.DOMAIN_URL}/api/getDocs?id=${id}`, {
    cache: "no-store",
  });

  const blog = await data.json();

  if (!data.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return blog;
}

export default function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const editorRef = createRef<any>();
  const router = useRouter();
  // const title = createRef<string>();
  const [data, setData] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data: result } = await getData(slug);
      setData({ content: result.content, title: result.title });
    };
    slug && fetchData();
  }, [slug]);

  const onUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(editorRef.current);
    const formData = new FormData(e.currentTarget);
    const result = await fetch("/api/post/add", {
      method: "POST",
      body: JSON.stringify({
        post: {
          title: formData.get("title"),
          content: data.content,
          id: slug,
        },
      }),
    });
    console.log("result", result);
    router.push("/blogs");
  };

  return (
    <div className="container">
      <form onSubmit={onUpdate}>
        <input
          name="title"
          className="border rounded my-5 py-2 ps-2 w-full"
          value={data?.title}
          onChange={(e) => {
            console.log("xxx");
            setData({ ...data, title: e.target.value });
          }}
        />

        <KEditor
          onChange={(value) =>
            setData((pre) => {
              return { ...pre, content: value };
            })
          }
          data={data?.content}
        />
        <button type="submit" className="border bg-primary p-2 mt-2">
          Update
        </button>
      </form>
    </div>
  );
}
