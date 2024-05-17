"use client";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";
const DetailedPost = ({ post, id, viewMode = true }: any) => {
  const Editor = dynamic(() => import("@/components/editor"), { ssr: false });
  const router = useRouter();
  const [data, setData] = useState({
    title: "",
    content: "",
  });

  const postContent = useRef("");

  useEffect(() => {
    const { data: result } = post;
    postContent.current = result.content;
    setData({ content: result.content, title: result.title });
  }, [post]);

  const onUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await fetch("/api/post/add", {
      method: "POST",
      body: JSON.stringify({
        post: {
          title: data?.title,
          content: postContent.current || data.content,
          id: id,
        },
      }),
    });
    router.push("/blogs");
  };

  return (
    <div className="container">
      <form onSubmit={onUpdate}>
        <input
          name="title"
          className={`${
            !viewMode && "border"
          } rounded my-5 py-2 ps-2 w-full font-bold text-3xl`}
          value={data?.title}
          onChange={(e) => {
            setData({ ...data, title: e.target.value });
          }}
        />

        <Editor
          isModeView
          onChange={(value: string) => {
            postContent.current = value;
          }}
          data={data?.content}
        />
        {!viewMode && (
          <button type="submit" className="border bg-primary p-2 mt-2">
            Update
          </button>
        )}
      </form>
    </div>
  );
};

export { DetailedPost };
