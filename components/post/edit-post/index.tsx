"use client";
import { withAuth } from "@/components/hoc/withAuth";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import dayjs from "dayjs";
import { updatePost, detelePost } from "../actionForm";
import { Post } from "@/types/post";
const Editor = dynamic(() => import("@/components/editor"), { ssr: false });
interface IDetailedPost {
  viewMode: boolean;
  post: { data: Post };
}
const DetailedPost = ({ post, viewMode = true }: IDetailedPost) => {
  const id = post.data.id as string;
  const router = useRouter();
  const [data, setData] = useState({
    title: "",
    content: "",
  });

  const postContent = useRef("");

  useEffect(() => {
    const { data: result } = post;
    postContent.current = result.content;
    setData({
      content: result.content,
      title: result.title,
    });
  }, [post]);

  const onUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await updatePost({
      ...post.data,
      title: data?.title,
      content: postContent.current,
      id: id,
      updatedAt: dayjs().format(),
    }).then(() => {
      router.refresh();
      router.push("/blogs");
    });
  };

  const onDelete = async () => {
    await detelePost(id);
    router.refresh();
    router.push("/blogs");
  };

  return (
    <div className="min-h-full w-full flex">
      <form className="w-full" onSubmit={onUpdate}>
        {data.title && !viewMode ? (
          <input
            name="title"
            className={`${"border"} rounded py-2 ps-2 w-full font-bold text-xl`}
            value={data?.title}
            onChange={(e) => {
              setData({ ...data, title: e.target.value });
            }}
          />
        ) : (
          <p className="py-2 ps-2 w-full font-bold text-xl">{data.title}</p>
        )}

        <Editor
          isModeView={viewMode}
          onChange={(value: string) => {
            postContent.current = value;
          }}
          data={data?.content}
        />

        {!viewMode && (
          <div className="flex gap-4 ">
            <Button type="submit" className=" p-2 mt-2">
              Update
            </Button>
            <Button
              type="button"
              variant={"destructive"}
              onClick={onDelete}
              className=" p-2 mt-2"
            >
              Delete
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

const DetailedPostHOC = withAuth(DetailedPost);

export { DetailedPost, DetailedPostHOC };
