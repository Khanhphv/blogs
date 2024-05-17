"use client";
import { withAuth } from "@/components/hoc/withAuth";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";
const Editor = dynamic(() => import("@/components/editor"), { ssr: false });
const DetailedPost = ({ post, id, viewMode = true }: any) => {
  const router = useRouter();
  const [data, setData] = useState({
    title: "",
    content: "",
    files: [],
  });

  const fileInput = useRef<HTMLInputElement>(null);
  const postContent = useRef("");

  useEffect(() => {
    const { data: result } = post;
    postContent.current = result.content;
    setData({
      content: result.content,
      title: result.title,
      files: result.files ? JSON.parse(result.files) : [],
    });
  }, [post]);

  const onUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const files = await uploadFile();

    await fetch("/api/post/add", {
      method: "POST",
      body: JSON.stringify({
        post: {
          title: data?.title,
          content: postContent.current,
          id: id,
          files: JSON.stringify(files),
        },
      }),
    });
    router.refresh();
    router.push("/blogs");
  };

  async function uploadFile() {
    if (fileInput?.current?.files) {
      const files: File[] = Array.from(fileInput?.current?.files);
      const formData = new FormData();
      files.forEach((e) => {
        formData.append("files", e);
      });

      const response = await fetch("/api/uploadImage", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      return files.map((e: File) => ({
        name: e.name,
        type: e.type,
      }));
    }
  }

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
          isModeView={viewMode}
          onChange={(value: string) => {
            console.log("value:", value);
            postContent.current = value;
          }}
          data={data?.content}
        />
        <br />

        {data?.files?.map((e: { name: string; type: string }) => {
          return (
            <video
              className="mb-2"
              style={{ maxHeight: "500px" }}
              controls
              key={e.name}
              src={`/uploads/${e.name}`}
            />
          );
        })}
        {!viewMode && (
          <input
            multiple
            ref={fileInput}
            type="file"
            accept="image/png, image/jpeg,video/mp4,video/x-m4v,video/* "
          />
        )}

        <br />
        {!viewMode && (
          <button type="submit" className="border bg-primary p-2 mt-2">
            Update
          </button>
        )}
      </form>
    </div>
  );
};

const DetailedPostHOC = withAuth(DetailedPost);

export { DetailedPost, DetailedPostHOC };
