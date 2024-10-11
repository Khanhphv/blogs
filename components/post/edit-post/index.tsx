"use client";
import { withAuth } from "@/components/hoc/withAuth";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import dayjs from "dayjs";
import { updatePost, detelePost } from "../actionForm";
import { Post } from "@/types/post";
import "./ck.scss";

const Editor = dynamic(() => import("@/components/molecules/editor"), {
  ssr: false,
});
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
    // <div className="min-h-full h-max w-full flex">
    <form className="w-full p-4 bg-secondary" onSubmit={onUpdate}>
      {data.title && !viewMode ? (
        <input
          name="title"
          className={`${"border"} rounded py-2 w-full font-bold text-xl`}
          value={data?.title}
          onChange={(e) => {
            setData({ ...data, title: e.target.value });
          }}
        />
      ) : (
        <p className="py-2 w-full font-bold text-xl">{data.title}</p>
      )}

      {viewMode ? (
        <Editor isModeView={true} data={data?.content} />
      ) : (
        <div className="mt-4">
          <Editor
            isModeView={false}
            onChange={(value: string) => {
              postContent.current = value;
            }}
            data={data?.content}
          />
        </div>
      )}

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
    // </div>
  );
};

const DetailedPostHOC = withAuth(DetailedPost);

export { DetailedPost, DetailedPostHOC };
